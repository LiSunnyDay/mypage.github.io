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

        // --- Section introductions on hover ---
        // Uses closest() so any child element inside a section triggers the message.
        // Mirrors the widget's own o() function: respects sessionStorage priority (8)
        // so we don't override higher-priority widget messages.
        const sectionMsgs: Record<string, string[]> = {
          home:      ["欢迎来到主页！这里是主人的个人空间～", "来了解一下主人吧！"],
          expertise: ["这里展示了主人的专业技能和领域专长！", "主人都精通哪些技术呢？来看看吧～"],
          projects:  ["这里是主人的项目展示区，每个都倾注了很多心血哦！", "快来看看主人做了哪些有趣的项目！"],
          portfolio: ["这里是 AI 艺术作品集，每张都是精心创作的～", "这些图片全都是用 AI 生成的哦，厉害吧！"],
          life:      ["这里记录了主人的日常生活和兴趣爱好～", "来看看主人最近在做什么吧！"],
          contact:   ["想联系主人吗？这里有所有的联系方式哦！", "有什么想说的，快来找主人聊聊吧～"],
        };
        let activeSection = "";
        let sectionTimer: ReturnType<typeof setTimeout> | null = null;
        const showSectionMsg = (text: string) => {
          if (parseInt(sessionStorage.getItem("waifu-text") ?? "0") > 8) return;
          if (sectionTimer) clearTimeout(sectionTimer);
          sessionStorage.setItem("waifu-text", "8");
          const tips = document.getElementById("waifu-tips");
          if (!tips) return;
          tips.innerHTML = text;
          tips.classList.add("waifu-tips-active");
          sectionTimer = setTimeout(() => {
            sessionStorage.removeItem("waifu-text");
            tips.classList.remove("waifu-tips-active");
            sectionTimer = null;
          }, 4000);
        };
        const onSectionHover = (e: Event) => {
          const t = e.target as HTMLElement;
          if (t.closest("#waifu")) return;
          for (const [id, msgs] of Object.entries(sectionMsgs)) {
            if (t.closest(`#${id}`)) {
              if (activeSection === id) return;
              activeSection = id;
              showSectionMsg(msgs[Math.floor(Math.random() * msgs.length)]);
              return;
            }
          }
          activeSection = "";
        };
        document.addEventListener("mouseover", onSectionHover as EventListener);
        docListeners.push(["mouseover", onSectionHover as EventListener]);

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
