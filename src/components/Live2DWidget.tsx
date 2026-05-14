"use client";

import { useEffect } from "react";

const CDN = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest";
const MODEL_CDN = "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/";

export default function Live2DWidget() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${CDN}/waifu.css`;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = `${CDN}/waifu-tips.js`;
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).initWidget({
        waifuPath: `${CDN}/waifu-tips.json`,
        cdnPath: MODEL_CDN,
        tools: ["hitokoto", "switch_model", "switch_texture", "photo", "info", "quit"],
      });
    };
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return null;
}
