"use client";

import { ArrowUpRight, Star, Play, Image as ImageIcon, FileText, Layers } from "lucide-react";

const portfolioItems = [
  {
    id: "A",
    title: "品牌视觉系统",
    category: "设计",
    desc: "为一家初创科技公司设计的完整品牌体系，包括 Logo、配色、字体和组件库，覆盖 Web 和 App 两端。",
    type: "design",
    color: "#C4B5FD",
    tags: ["Figma", "品牌设计", "设计系统"],
    width: "lg:col-span-2",
    link: "#",
  },
  {
    id: "B",
    title: "数据可视化大屏",
    category: "前端开发",
    desc: "基于 D3.js 构建的实时数据大屏，支持 10+ 种图表类型和动态数据接入。",
    type: "dev",
    color: "#FF6B6B",
    tags: ["D3.js", "WebSocket", "Canvas"],
    width: "lg:col-span-1",
    link: "#",
  },
  {
    id: "C",
    title: "运动 App UI 套件",
    category: "UI 设计",
    desc: "针对健身跟踪应用的 80+ 个组件 UI 套件，含深色/浅色两套主题。",
    type: "design",
    color: "#FFD93D",
    tags: ["Figma", "组件库", "移动端"],
    width: "lg:col-span-1",
    link: "#",
  },
  {
    id: "D",
    title: "开源组件库",
    category: "开源项目",
    desc: "基于 Tailwind CSS 的 React 组件库，GitHub 1.2K Star，被 300+ 项目引用。",
    type: "dev",
    color: "#C4B5FD",
    tags: ["React", "Tailwind", "开源"],
    width: "lg:col-span-2",
    link: "#",
  },
  {
    id: "E",
    title: "交互动效设计",
    category: "动效",
    desc: "一组精心设计的微交互动效集合，涵盖加载、切换、反馈等场景。",
    type: "motion",
    color: "#FF6B6B",
    tags: ["Lottie", "After Effects", "Framer"],
    width: "lg:col-span-1",
    link: "#",
  },
];

const typeIcon = {
  design: ImageIcon,
  dev: FileText,
  motion: Play,
  other: Layers,
};

export default function Portfolio() {
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
              精心打磨的<br />
              <span style={{ WebkitTextStroke: "3px #fff", color: "transparent" }}>
                设计与代码。
              </span>
            </h2>
          </div>
          <div
            className="border-4 border-white text-white px-6 py-3 font-black text-sm uppercase tracking-widest"
            style={{ boxShadow: "6px 6px 0px 0px #FF6B6B" }}
          >
            {portfolioItems.length} 件作品
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Portfolio grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => {
            const Icon = typeIcon[item.type as keyof typeof typeIcon] || Layers;
            return (
              <div
                key={i}
                className={`border-4 border-black bg-white group transition-all duration-200 hover:-translate-y-2 ${item.width}`}
                style={{ boxShadow: "8px 8px 0px 0px #000" }}
              >
                {/* Visual area */}
                <div
                  className="border-b-4 border-black p-8 min-h-40 flex flex-col justify-between relative overflow-hidden"
                  style={{ backgroundColor: item.color }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  {/* Top row */}
                  <div className="relative z-10 flex justify-between items-start">
                    <div
                      className="border-4 border-black bg-white font-black text-3xl px-3 py-1"
                      style={{ boxShadow: "4px 4px 0px 0px #000" }}
                    >
                      {item.id}
                    </div>
                    <a
                      href={item.link}
                      className="border-4 border-black bg-black text-white p-2 transition-all duration-100 hover:bg-white hover:text-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                      style={{ boxShadow: "4px 4px 0px 0px #fff" }}
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[3px]" />
                    </a>
                  </div>
                  {/* Bottom: category badge */}
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="border-4 border-black bg-black text-white p-1.5">
                      <Icon className="w-4 h-4 stroke-[3px]" />
                    </div>
                    <span
                      className="border-2 border-black bg-white px-3 py-1 font-black text-xs uppercase tracking-widest"
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-black text-2xl tracking-tight">{item.title}</h3>
                  <p className="font-bold text-sm leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-black px-2 py-0.5 text-xs font-black uppercase tracking-wide bg-[#FFFDF5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-12 border-4 border-black bg-[#FF6B6B] p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ boxShadow: "12px 12px 0px 0px #000" }}
        >
          <div>
            <p className="font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <Star className="w-4 h-4 fill-black stroke-none animate-spin-slow" />
              有想法？
            </p>
            <h3 className="font-black text-3xl sm:text-4xl leading-tight">一起做点有趣的东西</h3>
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
            开始合作 <ArrowUpRight className="w-5 h-5 stroke-[3px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
