"use client";

import { Star, Code, Layers, Cpu, Globe, Database, Palette } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "前端开发",
    color: "#FF6B6B",
    desc: "构建高性能、响应式的现代 Web 应用",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Database,
    title: "后端开发",
    color: "#FFD93D",
    desc: "设计稳健的服务端架构与 API 接口",
    tags: ["Node.js", "Python", "PostgreSQL", "Redis", "REST/GraphQL"],
  },
  {
    icon: Palette,
    title: "UI/UX 设计",
    color: "#C4B5FD",
    desc: "从用户视角出发，打磨每一个交互细节",
    tags: ["Figma", "设计系统", "原型", "用户研究", "A/B 测试"],
  },
  {
    icon: Globe,
    title: "全栈部署",
    color: "#FF6B6B",
    desc: "端到端交付，从本地开发到生产上线",
    tags: ["Vercel", "Docker", "CI/CD", "AWS", "Nginx"],
  },
  {
    icon: Cpu,
    title: "工程效率",
    color: "#FFD93D",
    desc: "优化开发流程，提升团队协作效率",
    tags: ["Git", "Monorepo", "测试驱动", "Code Review", "文档"],
  },
  {
    icon: Layers,
    title: "系统架构",
    color: "#C4B5FD",
    desc: "从零设计可扩展的系统与数据模型",
    tags: ["微服务", "事件驱动", "DDD", "性能优化", "监控"],
  },
];

const techStack = [
  { name: "TypeScript", level: 95 },
  { name: "React / Next.js", level: 92 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 78 },
  { name: "PostgreSQL", level: 80 },
  { name: "Docker", level: 72 },
];

export default function Expertise() {
  return (
    <section id="expertise" className="border-t-4 border-black">
      {/* Section header */}
      <div className="bg-[#C4B5FD] border-b-4 border-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 flex-wrap">
            <div>
              <div
                className="inline-block border-4 border-black bg-black text-white px-4 py-1 font-black text-sm uppercase tracking-widest mb-4"
                style={{ transform: "rotate(-1deg)" }}
              >
                <Star className="w-3 h-3 inline fill-[#FFD93D] stroke-none mr-1" />
                个人专精
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tighter">
                我能做<br />
                <span
                  style={{
                    WebkitTextStroke: "3px #000",
                    color: "transparent",
                  }}
                >
                  什么。
                </span>
              </h2>
            </div>
            <div
              className="border-4 border-black bg-white p-6 max-w-sm ml-auto self-end"
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
            >
              <p className="font-bold text-lg leading-relaxed">
                热爱技术，享受从想法到产品的整个过程。擅长在工程质量和产品体验之间找到平衡。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="border-4 border-black bg-white group transition-all duration-200 hover:-translate-y-2 cursor-default"
                style={{ boxShadow: "8px 8px 0px 0px #000" }}
              >
                {/* Card header */}
                <div
                  className="border-b-4 border-black px-5 py-4 flex items-center gap-3"
                  style={{ backgroundColor: skill.color }}
                >
                  <div className="border-4 border-black bg-black p-2" style={{ boxShadow: "3px 3px 0px 0px " + skill.color }}>
                    <Icon className="w-5 h-5 stroke-[3px] text-white" />
                  </div>
                  <h3 className="font-black text-lg uppercase tracking-wide">{skill.title}</h3>
                </div>
                {/* Card body */}
                <div className="p-5 space-y-4">
                  <p className="font-bold text-base leading-relaxed">{skill.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-black px-2 py-1 text-xs font-black uppercase tracking-wide bg-[#FFFDF5]"
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

        {/* Tech Stack Bars */}
        <div className="mt-16 border-4 border-black bg-black p-8" style={{ boxShadow: "12px 12px 0px 0px #FF6B6B" }}>
          <h3 className="font-black text-2xl uppercase tracking-widest text-[#FFD93D] mb-8 flex items-center gap-2">
            <Star className="w-6 h-6 fill-[#FFD93D] stroke-none animate-spin-slow" />
            技术熟练度
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-black text-white text-sm uppercase tracking-wider">{tech.name}</span>
                  <span className="font-black text-[#FFD93D] text-sm">{tech.level}%</span>
                </div>
                <div className="h-4 border-2 border-white bg-white/10 relative">
                  <div
                    className="h-full bg-[#FF6B6B] border-r-2 border-white transition-all duration-500"
                    style={{ width: `${tech.level}%` }}
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 9px)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
