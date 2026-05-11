"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight } from "lucide-react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const works = [
  {
    id: "A",
    title: "芙莉莲",
    subtitle: "葬送的芙莉莲 · 收藏版史诗海报",
    src: `${base}/portfolio/1.jpg`,
    model: "GPT-image-2",
    color: "#C4B5FD",
    prompt: `根据 【芙莉莲】 自动生成一张收藏版史诗叙事海报：

巨大优雅的人物侧脸剪影作为外轮廓，剪影内部自动生长出最契合该主题的完整世界观、标志性场景、角色关系、象征符号、关键建筑、生物、道具与氛围。

整体不是普通拼贴，而是高级的剪影轮廓填充式叙事合成，带有双重曝光式联想，但更偏电影海报与梦幻水彩插画融合风格；

画面具有柔和空气透视、轻雾化过渡、纸张颗粒质感，边缘带飞白与自然刷痕，大面积留白，版式克制高级，整体氛围安静、宏大、神圣、怀旧、富有诗意与传说感。

风格、色彩、场景、材质需根据 【角色性格】 自动适配。

所有视觉元素必须强绑定主题，一眼即可识别，画面干净统一，不要杂乱拼贴，不要模板化背景，不要廉价奇幻素材。

画面中需自然加入专属签名 【Yu】，作为海报设计的一部分，位置低调但清晰（可放在左下角、右下角或标题附近），风格需与整体版式统一，类似收藏版海报的作者落款或设计印章；

签名字体要求精致、克制、高级，不可过大，不可破坏主体构图，不可显得突兀或廉价。

主角为：【芙莉莲】`,
  },
  {
    id: "B",
    title: "罗芭",
    subtitle: "Apex Legends · 收藏版史诗海报",
    src: `${base}/portfolio/2.jpg`,
    model: "GPT-image-2",
    color: "#FFD93D",
    prompt: `根据 【罗芭/史诗感】 自动生成一张收藏版史诗叙事海报：

巨大优雅的人物侧脸剪影作为外轮廓，剪影内部自动生长出最契合该主题的完整世界观、标志性场景、角色关系、象征符号、关键建筑、生物、道具与氛围。

整体不是普通拼贴，而是高级的剪影轮廓填充式叙事合成，带有双重曝光式联想，但更偏电影海报与梦幻水彩插画融合风格；

画面具有柔和空气透视、轻雾化过渡、纸张颗粒质感，边缘带飞白与自然刷痕，大面积留白，版式克制高级，整体氛围安静、宏大、神圣、怀旧、富有诗意与传说感。

风格、色彩、场景、材质需根据 【角色性格】 自动适配。

所有视觉元素必须强绑定主题，一眼即可识别，画面干净统一，不要杂乱拼贴，不要模板化背景，不要廉价奇幻素材。

画面中需自然加入专属签名 【Yu】，作为海报设计的一部分，位置低调但清晰（可放在左下角、右下角或标题附近），风格需与整体版式统一，类似收藏版海报的作者落款或设计印章；

签名字体要求精致、克制、高级，不可过大，不可破坏主体构图，不可显得突兀或廉价。

主角为：【罗芭】`,
  },
];

function ImageLightbox({ index, onClose }: { index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index);
  const work = works[current];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 border-4 border-white bg-black text-white p-2 z-10 hover:bg-[#FF6B6B] transition-colors"
        style={{ boxShadow: "4px 4px 0px 0px #FF6B6B" }}
        onClick={onClose}
        aria-label="关闭"
      >
        <X className="w-6 h-6 stroke-[3px]" />
      </button>
      {current > 0 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 border-4 border-white bg-black text-white p-2 z-10 hover:bg-[#FFD93D] hover:border-[#FFD93D] transition-colors"
          style={{ boxShadow: "4px 4px 0px 0px #FFD93D" }}
          onClick={(e) => { e.stopPropagation(); setCurrent(current - 1); }}
          aria-label="上一张"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3px]" />
        </button>
      )}
      {current < works.length - 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 border-4 border-white bg-black text-white p-2 z-10 hover:bg-[#FFD93D] hover:border-[#FFD93D] transition-colors"
          style={{ boxShadow: "4px 4px 0px 0px #FFD93D" }}
          onClick={(e) => { e.stopPropagation(); setCurrent(current + 1); }}
          aria-label="下一张"
        >
          <ChevronRight className="w-6 h-6 stroke-[3px]" />
        </button>
      )}
      <div
        className="border-4 border-white"
        style={{ boxShadow: "8px 8px 0px 0px #FF6B6B" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={work.src}
          alt={work.title}
          style={{ maxWidth: "85vw", maxHeight: "85vh", display: "block", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

function WorkCard({ work, index, onImageClick }: {
  work: typeof works[0];
  index: number;
  onImageClick: (i: number) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border-4 border-black bg-white"
      style={{ boxShadow: "12px 12px 0px 0px #000" }}
    >
      {/* Card header */}
      <div
        className="border-b-4 border-black px-5 py-3 flex items-center justify-between"
        style={{ backgroundColor: work.color }}
      >
        <div className="flex items-center gap-3">
          <span className="font-black text-2xl border-4 border-black bg-white px-2 py-0.5" style={{ boxShadow: "3px 3px 0px 0px #000" }}>{work.id}</span>
          <div>
            <p className="font-black text-lg leading-none">{work.title}</p>
            <p className="font-bold text-xs uppercase tracking-widest opacity-70 mt-0.5">{work.subtitle}</p>
          </div>
        </div>
        <span className="border-2 border-black bg-black text-white font-black text-xs px-2 py-1 uppercase tracking-widest">
          {work.model}
        </span>
      </div>

      {/* Image */}
      <div
        className="border-b-4 border-black relative overflow-hidden cursor-pointer group"
        style={{ aspectRatio: "3/4", maxHeight: "600px" }}
        onClick={() => onImageClick(index)}
      >
        <Image
          src={work.src}
          alt={work.title}
          fill
          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="border-4 border-white bg-black/70 text-white font-black text-sm px-4 py-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            点击放大
          </div>
        </div>
      </div>

      {/* Prompt */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="font-black text-xs uppercase tracking-widest flex items-center gap-1">
            <Star className="w-3 h-3 fill-black stroke-none" /> 生成 Prompt
          </p>
          <button
            className="flex items-center gap-1 font-black text-xs uppercase tracking-widest border-2 border-black px-2 py-1 hover:bg-[#FFD93D] transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <><ChevronUp className="w-3 h-3 stroke-[3px]" />收起</> : <><ChevronDown className="w-3 h-3 stroke-[3px]" />展开</>}
          </button>
        </div>
        <div
          className="border-4 border-black bg-[#FFFDF5] p-4 overflow-hidden transition-all duration-300"
          style={{
            maxHeight: expanded ? "600px" : "80px",
            boxShadow: "4px 4px 0px 0px #000",
          }}
        >
          <pre className="font-bold text-xs leading-relaxed whitespace-pre-wrap break-words">{work.prompt}</pre>
        </div>
        {!expanded && (
          <p className="font-bold text-xs text-gray-400 mt-1 text-right">……点击展开查看完整 Prompt</p>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="border-t-4 border-black">
      {/* Section header */}
      <div className="border-b-4 border-black bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-end justify-between flex-wrap gap-6">
          <div>
            <div
              className="inline-block border-4 border-[#FFD93D] bg-[#FFD93D] px-4 py-1 font-black text-sm uppercase tracking-widest mb-4 text-black"
              style={{ transform: "rotate(1deg)" }}
            >
              <Star className="w-3 h-3 inline fill-black stroke-none mr-1" />
              作品集
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-white">
              AI 创作<br />
              <span style={{ WebkitTextStroke: "3px #fff", color: "transparent" }}>
                海报设计。
              </span>
            </h2>
          </div>
          <div className="space-y-2 text-right">
            <div
              className="border-4 border-white text-white px-4 py-2 font-black text-sm uppercase tracking-widest"
              style={{ boxShadow: "6px 6px 0px 0px #FF6B6B" }}
            >
              Prompt 设计 · GPT-image-2 生成
            </div>
            <p className="font-bold text-xs text-white/50 uppercase tracking-widest">{works.length} 件作品</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {works.map((work, i) => (
            <WorkCard
              key={work.id}
              work={work}
              index={i}
              onImageClick={setLightboxIndex}
            />
          ))}
        </div>

        {/* Bottom banner */}
        <div
          className="mt-12 border-4 border-black bg-[#C4B5FD] p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ boxShadow: "12px 12px 0px 0px #000" }}
        >
          <div>
            <p className="font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <Star className="w-4 h-4 fill-black stroke-none animate-spin-slow" />
              创作理念
            </p>
            <h3 className="font-black text-2xl sm:text-3xl leading-tight">用 Prompt 设计<br />驱动 AI 创作</h3>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 flex items-center gap-2 px-8 py-4 font-black text-base uppercase tracking-wide border-4 border-black bg-black text-white transition-all duration-100 hover:bg-white hover:text-black active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            style={{ boxShadow: "6px 6px 0px 0px #000" }}
          >
            联系合作
          </a>
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </section>
  );
}
