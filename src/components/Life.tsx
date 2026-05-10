"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import Lightbox from "./Lightbox";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const lifePhotos = [
  { src: `${base}/life/life1.jpg`, label: "生活瞬间" },
  { src: `${base}/life/life2.jpg`, label: "生活瞬间" },
  { src: `${base}/life/life3.jpg`, label: "生活瞬间" },
  { src: `${base}/life/life4.jpg`, label: "生活瞬间" },
  { src: `${base}/life/life5.jpg`, label: "生活瞬间" },
  { src: `${base}/life/life6.jpg`, label: "生活瞬间" },
  { src: `${base}/life/life7.jpg`, label: "生活瞬间" },
  { src: `${base}/life/life8.jpg`, label: "生活瞬间" },
  { src: `${base}/life/life9.jpg`, label: "生活瞬间" },
];

const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "rotate-2", "-rotate-2", "rotate-1"];
const colors = ["#FF6B6B", "#FFD93D", "#C4B5FD", "#FFD93D", "#FF6B6B", "#C4B5FD", "#FF6B6B", "#FFD93D", "#C4B5FD"];

const funFacts = [
  { emoji: "🎂", text: "1997-07-02" },
  { emoji: "⚙️", text: "原后端工程师" },
  { emoji: "🤖", text: "现 AI 训练师" },
  { emoji: "📧", text: "163 邮箱" },
  { emoji: "☕", text: "咖啡续命" },
  { emoji: "💡", text: "敢学能学会学" },
];

export default function Life() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="life" className="border-t-4 border-black">
      {/* Section header */}
      <div className="border-b-4 border-black bg-[#FF6B6B] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div
                className="inline-block border-4 border-black bg-black text-white px-4 py-1 font-black text-sm uppercase tracking-widest mb-4"
                style={{ transform: "rotate(-1deg)" }}
              >
                <Heart className="w-3 h-3 inline fill-white stroke-none mr-1" />
                生活角落
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-white">
                工作之外<br />
                <span style={{ WebkitTextStroke: "3px #fff", color: "transparent" }}>
                  的于昊天。
                </span>
              </h2>
            </div>
            {/* Motto card */}
            <div
              className="border-4 border-black bg-black text-white p-5 min-w-52"
              style={{ boxShadow: "8px 8px 0px 0px #000", transform: "rotate(1deg)" }}
            >
              <p className="font-black text-xs uppercase tracking-widest text-[#FFD93D] mb-3">
                <Star className="w-3 h-3 inline fill-[#FFD93D] stroke-none mr-1" />
                个人格言
              </p>
              <p className="font-black text-xl leading-snug">
                敢学，能学，会学，<br />说到做到。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {lifePhotos.map((photo, i) => (
            <div
              key={i}
              className={`border-4 border-black bg-white overflow-hidden group transition-all duration-200 hover:-translate-y-2 ${rotations[i]} cursor-pointer`}
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
              onClick={() => setActiveIndex(i)}
            >
              {/* Photo header */}
              <div
                className="border-b-4 border-black px-3 py-2 flex items-center justify-between"
                style={{ backgroundColor: colors[i] }}
              >
                <div className="flex items-center gap-1.5">
                  {[0,1,2].map(j => <div key={j} className="w-2.5 h-2.5 rounded-full border-2 border-black bg-black" />)}
                </div>
                <span className="font-black text-xs uppercase tracking-widest">{String(i + 1).padStart(2, "0")}</span>
              </div>
              {/* Photo */}
              <div className="relative aspect-square">
                <Image
                  src={photo.src}
                  alt={`生活照片 ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Fun facts */}
        <div
          className="mt-12 border-4 border-black bg-[#FFD93D] p-8"
          style={{ boxShadow: "12px 12px 0px 0px #000" }}
        >
          <h3 className="font-black text-xl uppercase tracking-widest mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 fill-black stroke-none animate-spin-slow" />
            关于于昊天
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {funFacts.map((fact, i) => (
              <div
                key={i}
                className="border-4 border-black bg-white p-3 text-center transition-all duration-100 hover:-translate-y-1 hover:bg-[#FF6B6B] cursor-default"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <div className="text-3xl mb-2">{fact.emoji}</div>
                <p className="font-black text-xs uppercase tracking-wide leading-tight">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Currently section */}
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[
            { label: "当前角色", content: "AI 训练师 · AI 评测工程师", bg: "#C4B5FD" },
            { label: "技术背景", content: "Java 后端工程师转型，工程化思维加速 AI 评测落地", bg: "#FF6B6B" },
            { label: "正在做", content: "多模型横评自动化 Workflow 持续迭代优化", bg: "#FFD93D" },
          ].map((item, i) => (
            <div key={i} className="border-4 border-black bg-white" style={{ boxShadow: "6px 6px 0px 0px #000" }}>
              <div className="border-b-4 border-black px-4 py-2" style={{ backgroundColor: item.bg }}>
                <p className="font-black text-sm uppercase tracking-widest">{item.label}</p>
              </div>
              <div className="p-4">
                <p className="font-black text-base">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          src={lifePhotos[activeIndex].src}
          alt={`生活照片 ${activeIndex + 1}`}
          onClose={() => setActiveIndex(null)}
          onPrev={activeIndex > 0 ? () => setActiveIndex(activeIndex - 1) : undefined}
          onNext={activeIndex < lifePhotos.length - 1 ? () => setActiveIndex(activeIndex + 1) : undefined}
        />
      )}
    </section>
  );
}
