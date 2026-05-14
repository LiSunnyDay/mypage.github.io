"use client";

import { useEffect } from "react";

export default function Live2DWidget() {
  useEffect(() => {
    if (screen.width < 768) return;

    const tags: (HTMLLinkElement | HTMLScriptElement)[] = [];

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

    // Clear any invalid modelId left by a previous version (e.g. the "-1" sentinel)
    const storedId = localStorage.getItem("modelId");
    if (storedId !== null && (isNaN(parseInt(storedId)) || parseInt(storedId) < 0)) {
      localStorage.removeItem("modelId");
    }

    // Default to 22娘 (fghrsh model index 2) for first-time visitors.
    // initWidget reads localStorage.modelId on startup; setting it here before
    // the call overrides its built-in default of index 1 (Tia).
    if (localStorage.getItem("modelId") === null) {
      localStorage.setItem("modelId", "2");
    }

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
    }).catch(console.error);

    return () => {
      tags.forEach(t => t.parentNode?.removeChild(t));
    };
  }, []);

  return null;
}
