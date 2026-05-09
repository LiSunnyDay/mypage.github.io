"use client";

import { ArrowUpRight, Star, Code2, Globe } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "DevFlow",
    subtitle: "开发者协作平台",
    desc: "为分布式团队设计的实时协作工具，支持代码审查、任务看板和团队沟通。日活跃用户突破 1 万。",
    tags: ["Next.js", "WebSocket", "PostgreSQL", "Redis"],
    color: "#FF6B6B",
    accent: "#FFD93D",
    github: "#",
    demo: "#",
    featured: true,
    stats: { users: "10K+", stars: "2.1K", forks: "340" },
  },
  {
    id: "02",
    title: "PixelCraft",
    subtitle: "在线像素画编辑器",
    desc: "纯前端实现的像素艺术创作工具，支持图层管理、动画帧和一键导出 GIF。",
    tags: ["React", "Canvas API", "TypeScript"],
    color: "#C4B5FD",
    accent: "#FF6B6B",
    github: "#",
    demo: "#",
    featured: false,
    stats: { users: "3K+", stars: "890", forks: "120" },
  },
  {
    id: "03",
    title: "QuickAPI",
    subtitle: "零配置 Mock API 服务",
    desc: "开发者工具，通过 JSON Schema 秒速生成 Mock API，内置 OpenAPI 文档和请求日志。",
    tags: ["Node.js", "Express", "Docker"],
    color: "#FFD93D",
    accent: "#C4B5FD",
    github: "#",
    demo: "#",
    featured: false,
    stats: { users: "5K+", stars: "1.5K", forks: "210" },
  },
  {
    id: "04",
    title: "FoodMap",
    subtitle: "本地美食探索 App",
    desc: "基于地理位置的美食发现应用，整合用户评价、菜品识别和私人收藏功能。",
    tags: ["React Native", "Go", "MongoDB"],
    color: "#FF6B6B",
    accent: "#C4B5FD",
    github: "#",
    demo: "#",
    featured: false,
    stats: { users: "8K+", stars: "560", forks: "80" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t-4 border-black bg-[#FFFDF5]">
      {/* Section header */}
      <div className="border-b-4 border-black bg-[#FFD93D] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-end justify-between flex-wrap gap-6">
          <div>
            <div
              className="inline-block border-4 border-black bg-black text-white px-4 py-1 font-black text-sm uppercase tracking-widest mb-4"
              style={{ transform: "rotate(1deg)" }}
            >
              项目经历
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tighter">
              我做过的<br />
              <span style={{ WebkitTextStroke: "3px #000", color: "transparent" }}>
                作品。
              </span>
            </h2>
          </div>
          <div
            className="border-4 border-black bg-white px-6 py-3 font-black text-lg uppercase tracking-widest"
            style={{ boxShadow: "6px 6px 0px 0px #000", transform: "rotate(-1deg)" }}
          >
            {projects.length} 个精选项目
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {/* Featured project */}
        {projects.filter(p => p.featured).map((project) => (
          <div
            key={project.id}
            className="border-4 border-black bg-white group transition-all duration-200 hover:-translate-y-1"
            style={{ boxShadow: "12px 12px 0px 0px #000" }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Left: Visual */}
              <div
                className="border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 flex flex-col justify-between min-h-64 relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 halftone-bg opacity-10" />
                <div className="relative z-10">
                  <div
                    className="inline-block border-4 border-black bg-white px-3 py-1 font-black text-3xl"
                    style={{ transform: "rotate(-3deg)", boxShadow: "4px 4px 0px 0px #000" }}
                  >
                    {project.id}
                  </div>
                </div>
                <div className="relative z-10 space-y-4">
                  <div
                    className="inline-block border-4 border-black bg-black text-white px-3 py-1 font-black text-sm uppercase tracking-widest"
                    style={{ transform: "rotate(1deg)" }}
                  >
                    ⭐ 精选项目
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {project.stats && Object.entries(project.stats).map(([key, val]) => (
                      <div key={key} className="border-4 border-black bg-white px-3 py-2 text-center" style={{ boxShadow: "3px 3px 0px 0px #000" }}>
                        <div className="font-black text-lg">{val}</div>
                        <div className="font-black text-xs uppercase tracking-widest">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right: Content */}
              <div className="p-8 space-y-5">
                <div>
                  <p className="font-black text-sm uppercase tracking-widest text-gray-500 mb-1">{project.subtitle}</p>
                  <h3 className="font-black text-4xl tracking-tight">{project.title}</h3>
                </div>
                <p className="font-bold text-base leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wide bg-[#FFFDF5]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-5 py-3 font-black text-sm uppercase tracking-wide border-4 border-black bg-black text-white transition-all duration-100 hover:bg-[#FF6B6B] hover:text-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    style={{ boxShadow: "4px 4px 0px 0px #FF6B6B" }}
                  >
                    <Code2 className="w-4 h-4 stroke-[3px]" /> 源码
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-5 py-3 font-black text-sm uppercase tracking-wide border-4 border-black bg-white transition-all duration-100 hover:bg-[#FFD93D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    style={{ boxShadow: "4px 4px 0px 0px #000" }}
                  >
                    <Globe className="w-4 h-4 stroke-[3px]" /> 演示
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.id}
              className="border-4 border-black bg-white group transition-all duration-200 hover:-translate-y-2"
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
            >
              {/* Header */}
              <div
                className="border-b-4 border-black px-5 py-4 flex justify-between items-center"
                style={{ backgroundColor: project.color }}
              >
                <span className="font-black text-2xl">{project.id}</span>
                <div className="flex gap-2">
                  <a href={project.github} className="border-2 border-black bg-black text-white p-1.5 hover:bg-white hover:text-black transition-colors duration-100">
                    <Code2 className="w-4 h-4 stroke-[3px]" />
                  </a>
                  <a href={project.demo} className="border-2 border-black bg-white p-1.5 hover:bg-[#FFD93D] transition-colors duration-100">
                    <ArrowUpRight className="w-4 h-4 stroke-[3px]" />
                  </a>
                </div>
              </div>
              {/* Body */}
              <div className="p-5 space-y-3">
                <div>
                  <p className="font-black text-xs uppercase tracking-widest text-gray-500">{project.subtitle}</p>
                  <h3 className="font-black text-2xl mt-0.5">{project.title}</h3>
                </div>
                <p className="font-bold text-sm leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border-2 border-black px-2 py-0.5 text-xs font-black uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* "More" card */}
          <div
            className="border-4 border-black bg-black text-white p-6 flex flex-col justify-between min-h-48 group hover:bg-[#FF6B6B] hover:text-black transition-all duration-200 hover:-translate-y-2 cursor-pointer"
            style={{ boxShadow: "8px 8px 0px 0px #FF6B6B" }}
          >
            <Star className="w-10 h-10 fill-[#FFD93D] stroke-none animate-spin-slow" />
            <div>
              <p className="font-black text-sm uppercase tracking-widest opacity-60 mb-2">更多项目</p>
              <h3 className="font-black text-3xl leading-tight">查看全部<br />GitHub</h3>
              <ArrowUpRight className="w-8 h-8 stroke-[3px] mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
