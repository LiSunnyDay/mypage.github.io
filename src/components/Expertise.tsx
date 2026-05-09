"use client";

import { Star, ShieldCheck, Bot, BarChart3, Workflow, Code2, Database } from "lucide-react";

const skills = [
  {
    icon: ShieldCheck,
    title: "安全合规评测",
    color: "#FF6B6B",
    desc: "构建敏感内容测试集，精准识别大模型违规边界，输出合规风控方案",
    tags: ["合规检测 API", "测试集搭建", "漏判/误判分析", "风控策略"],
  },
  {
    icon: Bot,
    title: "Agent 能力评测",
    color: "#FFD93D",
    desc: "设计单工具/多工具协作场景测试用例，量化 Agent 工具调用能力边界",
    tags: ["工具调用测试", "多工具协作", "错误类型分类", "评测标准制定"],
  },
  {
    icon: BarChart3,
    title: "性能效率横评",
    color: "#C4B5FD",
    desc: "搭建高并发、长文本、低资源三类部署场景测试环境，输出模型选型报告",
    tags: ["压测工具", "并发测试", "性能监控", "指标分析"],
  },
  {
    icon: Workflow,
    title: "自动化工作流",
    color: "#FF6B6B",
    desc: "基于 Airflow 搭建定时触发的自动化评测 Workflow，评测效率提升 300%+",
    tags: ["Airflow", "Python 脚本", "API 对接", "任务调度"],
  },
  {
    icon: Code2,
    title: "后端工程基础",
    color: "#FFD93D",
    desc: "Java 后端开发背景，熟悉接口联调与高并发设计，加速 AI 评测工程化落地",
    tags: ["Java", "REST API", "高并发", "接口调试"],
  },
  {
    icon: Database,
    title: "数据标注与分析",
    color: "#C4B5FD",
    desc: "手动标注工具使用经验，掌握样本质量控制与统计分析方法",
    tags: ["数据标注", "质量控制", "统计分析", "Python"],
  },
];

const techStack = [
  { name: "大模型安全合规评测", level: 95 },
  { name: "Python 自动化脚本", level: 88 },
  { name: "Airflow 工作流", level: 82 },
  { name: "Agent 能力评测", level: 90 },
  { name: "Java 后端开发", level: 78 },
  { name: "性能压测分析", level: 85 },
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
                我的核心<br />
                <span style={{ WebkitTextStroke: "3px #000", color: "transparent" }}>
                  能力。
                </span>
              </h2>
            </div>
            <div
              className="border-4 border-black bg-white p-6 max-w-sm ml-auto self-end"
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
            >
              <p className="font-bold text-lg leading-relaxed">
                原后端工程师转型 AI 训练师，将工程化思维带入大模型评测领域，让评测流程更标准、更高效。
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
                <div
                  className="border-b-4 border-black px-5 py-4 flex items-center gap-3"
                  style={{ backgroundColor: skill.color }}
                >
                  <div className="border-4 border-black bg-black p-2" style={{ boxShadow: "3px 3px 0px 0px " + skill.color }}>
                    <Icon className="w-5 h-5 stroke-[3px] text-white" />
                  </div>
                  <h3 className="font-black text-lg uppercase tracking-wide">{skill.title}</h3>
                </div>
                <div className="p-5 space-y-4">
                  <p className="font-bold text-base leading-relaxed">{skill.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="border-2 border-black px-2 py-1 text-xs font-black uppercase tracking-wide bg-[#FFFDF5]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency bars */}
        <div className="mt-16 border-4 border-black bg-black p-8" style={{ boxShadow: "12px 12px 0px 0px #FF6B6B" }}>
          <h3 className="font-black text-2xl uppercase tracking-widest text-[#FFD93D] mb-8 flex items-center gap-2">
            <Star className="w-6 h-6 fill-[#FFD93D] stroke-none animate-spin-slow" />
            技能熟练度
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
                    className="h-full bg-[#FF6B6B] border-r-2 border-white"
                    style={{ width: `${tech.level}%` }}
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 9px)" }}
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
