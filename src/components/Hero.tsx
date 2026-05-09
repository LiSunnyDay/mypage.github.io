"use client";

import Image from "next/image";
import { ArrowRight, Star, Brain, Coffee } from "lucide-react";

const marqueeItems = [
  "AI模型评测", "安全合规", "自动化工作流", "数据标注", "性能压测",
  "AI模型评测", "安全合规", "自动化工作流", "数据标注", "性能压测",
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 flex flex-col">
      {/* Marquee Banner */}
      <div className="border-b-4 border-black bg-[#FFD93D] overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap gap-12" style={{ width: "max-content" }}>
          {marqueeItems.concat(marqueeItems).map((item, i) => (
            <span key={i} className="font-black text-sm uppercase tracking-widest flex items-center gap-3">
              <Star className="w-4 h-4 fill-black stroke-none inline" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Text */}
          <div className="lg:col-span-3 space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2">
              <div
                className="border-4 border-black bg-[#C4B5FD] px-4 py-2 font-black text-sm uppercase tracking-widest animate-bounce"
                style={{ boxShadow: "4px 4px 0px 0px #000", transform: "rotate(-2deg)" }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  AI 评测工程师 · 在职
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <div
                className="inline-block border-4 border-black bg-[#FF6B6B] px-4 py-1 font-black text-lg uppercase tracking-widest"
                style={{ boxShadow: "4px 4px 0px 0px #000", transform: "rotate(1deg)" }}
              >
                你好，我是
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter mt-4">
                <span className="block">于昊天</span>
                <span
                  className="block"
                  style={{ WebkitTextStroke: "4px #000", color: "transparent" }}
                >
                  AI
                </span>
                <span className="block text-[#FF6B6B]">训练师。</span>
              </h1>
            </div>

            {/* Description */}
            <div
              className="border-4 border-black bg-white p-6 max-w-xl"
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
            >
              <p className="text-xl font-bold leading-relaxed">
                AI 训练师 &amp; 评测工程师，专注于
                <span className="bg-[#FFD93D] px-1 mx-1">大模型横评</span>
                与
                <span className="bg-[#C4B5FD] px-1 mx-1">自动化工作流</span>
                搭建。2 年内完成 4 个大型横评项目，评测效率提升 300%+。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex items-center gap-2 px-8 py-4 font-black text-base uppercase tracking-wide border-4 border-black bg-[#FF6B6B] transition-all duration-100 hover:bg-[#e55555] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                style={{ boxShadow: "6px 6px 0px 0px #000" }}
              >
                查看项目经历 <ArrowRight className="w-5 h-5 stroke-[3px]" />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex items-center gap-2 px-8 py-4 font-black text-base uppercase tracking-wide border-4 border-black bg-white transition-all duration-100 hover:bg-[#FFD93D] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                style={{ boxShadow: "6px 6px 0px 0px #000" }}
              >
                联系我
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { num: "2+", label: "年经验" },
                { num: "4", label: "大型项目" },
                { num: "10+", label: "模型评测" },
                { num: "300%", label: "效率提升" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="border-4 border-black bg-[#FFFDF5] px-5 py-3 text-center"
                  style={{ boxShadow: "4px 4px 0px 0px #000" }}
                >
                  <div className="text-3xl font-black leading-none">{stat.num}</div>
                  <div className="text-xs font-black uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Stack */}
          <div className="lg:col-span-2 relative h-96 lg:h-auto lg:min-h-[580px]">
            <div className="absolute inset-0 border-4 border-black opacity-20 grid-bg" style={{ zIndex: 0 }} />

            {/* Avatar card */}
            <div
              className="absolute top-8 left-4 right-4 lg:left-8 border-4 border-black bg-white z-10"
              style={{ boxShadow: "12px 12px 0px 0px #000", transform: "rotate(-2deg)" }}
            >
              <div className="border-b-4 border-black bg-[#FF6B6B] px-4 py-2 flex items-center gap-2">
                {["bg-black", "bg-black", "bg-black"].map((c, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full border-2 border-black ${c}`} />
                ))}
                <span className="ml-2 font-black text-xs uppercase tracking-widest">profile.exe</span>
              </div>
              <div className="p-6 flex flex-col items-center gap-4">
                <div
                  className="w-28 h-28 border-4 border-black overflow-hidden relative"
                  style={{ boxShadow: "6px 6px 0px 0px #000" }}
                >
                  <Image
                    src="/avatar.jpg"
                    alt="头像"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="text-center">
                  <p className="font-black text-xl">于昊天</p>
                  <p className="font-bold text-sm uppercase tracking-widest text-gray-600">AI 训练师 · 评测工程师</p>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {["Python", "Airflow", "LLM 评测"].map((tag) => (
                    <span key={tag} className="border-2 border-black px-2 py-1 text-xs font-black uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-4 right-0 border-4 border-black bg-[#FFD93D] px-3 py-2 font-black text-sm uppercase tracking-wider z-20 animate-bounce"
              style={{ boxShadow: "4px 4px 0px 0px #000", transform: "rotate(6deg)" }}
            >
              <Brain className="w-5 h-5 inline stroke-[3px]" /> 大模型
            </div>

            <div
              className="absolute bottom-16 -right-2 border-4 border-black bg-[#C4B5FD] px-3 py-2 font-black text-sm uppercase tracking-wider z-20"
              style={{ boxShadow: "4px 4px 0px 0px #000", transform: "rotate(-4deg)" }}
            >
              <Coffee className="w-5 h-5 inline stroke-[3px]" /> 咖啡驱动
            </div>

            <div className="absolute bottom-8 left-8 z-20 animate-spin-slow">
              <Star className="w-12 h-12 fill-[#FF6B6B] stroke-black stroke-[2px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="border-t-4 border-black bg-black text-white py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-16" style={{ width: "max-content" }}>
          {Array(12).fill(0).map((_, i) => (
            <span key={i} className="font-black text-sm uppercase tracking-[0.3em] flex items-center gap-4">
              <Star className="w-3 h-3 fill-[#FFD93D] stroke-none" />
              评测 · 优化 · 落地
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
