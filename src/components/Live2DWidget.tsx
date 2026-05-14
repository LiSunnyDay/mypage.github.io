"use client";

import { useEffect } from "react";

export default function Live2DWidget() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/waifu.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return null;
}
