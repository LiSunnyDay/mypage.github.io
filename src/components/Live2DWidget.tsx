"use client";

import { useEffect } from "react";

export default function Live2DWidget() {
  useEffect(() => {
    if (screen.width < 768) return;

    const tags: (HTMLLinkElement | HTMLScriptElement)[] = [];
    // Collect document-level listeners for cleanup
    const docListeners: [string, EventListener, AddEventListenerOptions?][] = [];

    function load(url: string, type: "css" | "js"): Promise<void> {
      return new Promise((resolve, reject) => {
        let tag: HTMLLinkElement | HTMLScriptElement;
        if (type === "css") {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = url;
          tag = link;
          document.head.appendChild(tag);
        } else {
          const script = document.createElement("script");
          script.src = url;
          tag = script;
          document.body.appendChild(tag);
        }
        tag.onload = () => resolve();
        tag.onerror = () => reject(new Error(`Failed: ${url}`));
        tags.push(tag);
      });
    }

    // Always start with 22娘. Set modelId=2 so initWidget knows the current group,
    // then override the canvas with the self-hosted local model for instant load.
    localStorage.setItem("modelId", "2");

    Promise.all([
      load("/live2d/waifu.css", "css"),
      load("/live2d/live2d.min.js", "js"),
      load("/live2d/waifu-tips.js", "js"),
    ]).then(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;

      // Cubism 2.x leaks WebGL resources on every loadlive2d call and never
      // releases them, so after enough switches the context dies and the canvas
      // goes blank. Replacing the canvas element with a fresh one before each
      // load gives the SDK a new WebGL context and fixes the disappearing bug.
      const origLoad = win.loadlive2d;
      win.loadlive2d = function(id: string, url: string) {
        const old = document.getElementById(id) as HTMLCanvasElement | null;
        if (old?.parentNode) {
          const nc = document.createElement("canvas");
          nc.id = id;
          nc.width = old.width;
          nc.height = old.height;
          old.parentNode.replaceChild(nc, old);
        }
        return origLoad.call(this, id, url);
      };

      win.initWidget({
        waifuPath: "/live2d/waifu-tips.json",
        cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/",
        tools: ["hitokoto", "switch-model", "switch-texture", "photo", "info", "quit"],
      });

      setTimeout(() => {
        // Load 22娘 from self-hosted files for instant display
        win.loadlive2d?.("live2d", "/live2d/22niang/index.json");

        // --- Drag support ---
        const waifu = document.getElementById("waifu");
        if (!waifu) return;

        let dragging = false;
        let ox = 0, oy = 0; // cursor offset within element at drag start

        function dragStart(clientX: number, clientY: number, target: EventTarget | null) {
          // Don't steal clicks on the toolbar buttons or tip bubble
          if ((target as HTMLElement | null)?.closest("#waifu-tool, #waifu-tips")) return;
          dragging = true;
          const rect = waifu.getBoundingClientRect();
          ox = clientX - rect.left;
          oy = clientY - rect.top;
          // Switch from bottom-anchored to top/left so we can move freely
          waifu.style.transition = "none";
          waifu.style.transform = "none";
          waifu.style.bottom = "auto";
          waifu.style.top = rect.top + "px";
          waifu.style.left = rect.left + "px";
        }

        function dragMove(clientX: number, clientY: number) {
          if (!dragging) return;
          const x = Math.max(0, Math.min(window.innerWidth  - waifu.offsetWidth,  clientX - ox));
          const y = Math.max(0, Math.min(window.innerHeight - waifu.offsetHeight, clientY - oy));
          waifu.style.left = x + "px";
          waifu.style.top  = y + "px";
        }

        function dragEnd() { dragging = false; }

        waifu.addEventListener("mousedown", (e: MouseEvent) => {
          dragStart(e.clientX, e.clientY, e.target);
          if (dragging) e.preventDefault();
        });

        waifu.addEventListener("touchstart", (e: TouchEvent) => {
          dragStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
          if (dragging) e.preventDefault();
        }, { passive: false });

        const onMouseMove = (e: MouseEvent) => dragMove(e.clientX, e.clientY);
        const onTouchMove = (e: TouchEvent) => {
          if (!dragging) return;
          dragMove(e.touches[0].clientX, e.touches[0].clientY);
          e.preventDefault();
        };

        document.addEventListener("mousemove", onMouseMove as EventListener);
        document.addEventListener("touchmove", onTouchMove as EventListener, { passive: false });
        document.addEventListener("mouseup",   dragEnd as EventListener);
        document.addEventListener("touchend",  dragEnd as EventListener);

        docListeners.push(
          ["mousemove", onMouseMove as EventListener],
          ["touchmove", onTouchMove as EventListener, { passive: false }],
          ["mouseup",   dragEnd as EventListener],
          ["touchend",  dragEnd as EventListener],
        );
      }, 800);
    }).catch(console.error);

    return () => {
      docListeners.forEach(([type, fn, opts]) =>
        document.removeEventListener(type, fn, opts as EventListenerOptions)
      );
      tags.forEach(t => t.parentNode?.removeChild(t));
    };
  }, []);

  return null;
}
