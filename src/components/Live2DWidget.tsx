"use client";

import { useEffect } from "react";

export default function Live2DWidget() {
  useEffect(() => {
    import("oh-my-live2d").then(({ loadOml2d }) => {
      loadOml2d({
        models: [
          {
            path: "https://cdn.jsdelivr.net/npm/live2d-widget-model-miku/assets/miku.model.json",
            position: [-10, 20],
            stageStyle: { width: 260 },
          },
        ],
        primaryColor: "#39C5BB",
        tips: {
          style: {
            width: 180,
            fontSize: 13,
          },
        },
      });
    });
  }, []);

  return null;
}
