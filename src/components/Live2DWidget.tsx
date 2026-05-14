"use client";

import { useEffect } from "react";

// Miku model self-hosted in public/live2d/miku/ — no CDN dependency
const MIKU = "/live2d/miku/miku.model.json";

export default function Live2DWidget() {
  useEffect(() => {
    // Only show on desktop, matching the reference autoload.js from fghrsh
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

    Promise.all([
      load("/live2d/waifu.css", "css"),
      load("/live2d/live2d.min.js", "js"),
      load("/live2d/waifu-tips.js", "js"),
    ]).then(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      win.initWidget({
        waifuPath: "/live2d/waifu-tips.json",
        cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/",
        // switch-texture omitted: Miku has only one texture, clicking it would load the
        // default fghrsh model (Tia) via localStorage.modelId instead of reloading Miku
        tools: ["hitokoto", "switch-model", "photo", "info", "quit"],
      });
      // After initWidget sets up DOM and canvas, load Miku and reset modelId so that
      // switch-model cycles through fghrsh characters starting from index 0 (Pio)
      setTimeout(() => {
        win.loadlive2d?.("live2d", MIKU);
        localStorage.setItem("modelId", "-1");
      }, 1000);
    }).catch(console.error);

    return () => {
      tags.forEach(t => t.parentNode?.removeChild(t));
    };
  }, []);

  return null;
}
