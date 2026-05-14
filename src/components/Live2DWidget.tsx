"use client";

import { useEffect } from "react";

// Miku from npm CDN — same CDN domain as fghrsh model data
const MIKU = "https://fastly.jsdelivr.net/npm/live2d-widget-model-miku/assets/miku.model.json";

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
        // Use fastly CDN per fghrsh blog post — better global accessibility than cdn subdomain
        cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
        tools: ["hitokoto", "switch-model", "switch-texture", "photo", "info", "quit"],
      });
      // After initWidget sets up the DOM and canvas, load Miku as the initial character
      setTimeout(() => {
        win.loadlive2d?.("live2d", MIKU);
      }, 1000);
    }).catch(console.error);

    return () => {
      tags.forEach(t => t.parentNode?.removeChild(t));
    };
  }, []);

  return null;
}
