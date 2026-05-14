"use client";

import { useEffect } from "react";

const CDN = "https://cdn.jsdelivr.net/npm";

const models = [
  { path: `${CDN}/live2d-widget-model-miku/assets/miku.model.json`,        name: "初音未来" },
  { path: `${CDN}/live2d-widget-model-shizuku/assets/shizuku.model.json`,  name: "静玖"     },
  { path: `${CDN}/live2d-widget-model-koharu/assets/koharu.model.json`,    name: "小春"     },
  { path: `${CDN}/live2d-widget-model-hibiki/assets/hibiki.model.json`,    name: "响"       },
  { path: `${CDN}/live2d-widget-model-izumi/assets/izumi.model.json`,      name: "泉"       },
  { path: `${CDN}/live2d-widget-model-haruto/assets/haruto.model.json`,    name: "悠斗"     },
  { path: `${CDN}/live2d-widget-model-tororo/assets/tororo.model.json`,    name: "托罗"     },
  { path: `${CDN}/live2d-widget-model-wanko/assets/wanko.model.json`,      name: "汪子"     },
  { path: `${CDN}/live2d-widget-model-unitychan/assets/unitychan.model.json`, name: "Unity酱" },
  { path: `${CDN}/live2d-widget-model-chitose/assets/chitose.model.json`,  name: "千岁"     },
];

export default function Live2DWidget() {
  useEffect(() => {
    import("oh-my-live2d").then(({ loadOml2d }) => {
      loadOml2d({
        models,
        primaryColor: "#39C5BB",
        tips: {
          style: { width: 180, fontSize: 13 },
          idleTips: {
            wordTheDay: false,
            tips: [
              { message: ["今天也要加油哦～"], duration: 4000 },
              { message: ["点击右侧按钮可以换角色 ↓"], duration: 4000 },
            ],
          },
        },
      });
    });
  }, []);

  return null;
}
