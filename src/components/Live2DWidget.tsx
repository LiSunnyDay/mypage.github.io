"use client";

import { useEffect } from "react";

export default function Live2DWidget() {
  useEffect(() => {
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
        tools: ["hitokoto", "switch-model", "switch-texture", "photo", "info", "quit"],
      });
    }).catch(console.error);

    return () => {
      tags.forEach(t => t.parentNode?.removeChild(t));
    };
  }, []);

  return null;
}
