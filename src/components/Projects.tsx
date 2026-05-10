"use client";

import { useEffect, useState } from "react";
import { Star, X } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "横评自动化 Workflow",
    subtitle: "多模型横评自动化平台搭建",
    period: "2025.07 — 2026.03",
    background: "传统横评依赖人工操作，10个模型各1000样本的评测需超过10个工作日，无法支撑大样本量评测需求，需搭建自动化评测流程提升效率。",
    tags: ["Python", "Airflow", "REST API", "数据存储平台", "前端页面"],
    color: "#FF6B6B",
    featured: true,
    stats: { "效率提升": "300%+", "覆盖模型": "10款", "复用项目": "3个" },
    coreWork: [
      "设计覆盖样本处理、任务拆解、结果判定3大环节的自动化评测流程，定义10项自动化评测指标，实现流程标准化",
      "使用 Python 开发自动化评测脚本，对接模型 API 接口与数据存储平台，实现模型调用、结果收集与初步统计全流程自动化，覆盖70%以上横评流程",
      "基于 Airflow 搭建定时触发的自动化评测 Workflow，完成10款模型的自动化横评，评测周期从10个工作日压缩至2个工作日",
      "搭建评测平台前端页面，支持任务配置、结果查看与报告生成，降低团队学习成本",
      "沉淀含样本处理脚本、结果统计模板的可复用工具模块，已复用至后续3个同类横评项目",
    ],
    achievements: [
      "评测效率提升300%+；复用模块支撑3个后续项目落地",
      "Java 工程化思维直接加速了脚本架构设计与 API 对接效率",
    ],
  },
  {
    id: "02",
    title: "性能效率横评",
    subtitle: "多模型性能效率专项横评",
    period: "2025.01 — 2025.06",
    background: "现有性能评测指标与实际部署场景脱节，忽略高并发与长上下文处理能力，需场景化性能评测支撑模型部署选型。",
    tags: ["Python", "压测工具", "Airflow", "性能监控"],
    color: "#C4B5FD",
    featured: false,
    stats: null,
    coreWork: [
      "搭建模拟高并发、长文本处理、低资源设备3类实际部署场景的性能测试环境，配置统一硬件与并发参数确保公平性",
      "完成1000+次请求的性能测试，记录响应时间、错误率、长上下文处理成功率等核心指标",
      "依托 Java 高并发开发经验，深度分析各模型在高并发场景下的响应时间差异与性能瓶颈，输出优化建议",
      "联合运维团队基于评测结果调整并发阈值与资源分配策略，提升模型生产环境稳定性",
    ],
    achievements: [
      "长文本处理 LLM 长上下文成功率最高达92%",
      "性能报告指标误差≤5%，直接支撑业务团队完成模型部署选型决策",
    ],
  },
  {
    id: "03",
    title: "Agent 工具调用横评",
    subtitle: "Agent 工具调用专项横评",
    period: "2024.09 — 2024.12",
    background: "Agent 模型工具调用能力难以量化，现有评测仅覆盖单工具场景，缺乏多工具协作评估标准，需专项横评精准评估 Agent 能力边界。",
    tags: ["Python", "API 接口调试", "工具链测试框架"],
    color: "#FFD93D",
    featured: false,
    stats: null,
    coreWork: [
      "设计覆盖单工具调用、多工具协作、参数错误排查3类场景的测试用例400+条，涵盖数据库查询、文档检索、任务调度等工具类型",
      "评测模型工具调用准确率、参数正确性与协作流程完整性，利用 Java 接口联调经验快速定位参数格式错误与协作流程断裂问题",
      "分类整理工具调用错误类型：选错工具、参数格式错误、协作流程断裂3大类，形成错误类型分析报告",
      "输出3款主流 Agent 模型横评报告，沉淀含3大维度、6项细分指标的评测标准",
    ],
    achievements: [
      "发现通用 Agent 模型多工具协作错误率高达32%",
      "评测结果同步至产品与研发团队，支撑 Agent 工具链选型与功能落地",
    ],
  },
  {
    id: "04",
    title: "安全合规横评",
    subtitle: "安全合规专项横评",
    period: "2024.03 — 2024.08",
    background: "AI 模型输出存在敏感内容漏判与合规内容误判风险，缺乏统一评测体系，需通过专项横评精准识别模型违规边界。",
    tags: ["Python", "合规检测 API", "手动标注工具"],
    color: "#FF6B6B",
    featured: false,
    stats: null,
    coreWork: [
      "搭建覆盖暴力、色情、政治敏感、不良引导、隐私泄露5大类敏感内容的违规测试集，包含1000+条违规/合规样本",
      "调用合规检测 API 并结合人工复核，完成1000+条样本的自动化检测，统计各模型漏判率与误判率",
      "定位通用 LLM 在政治敏感场景漏判率高达12%、暴力内容拦截率仅78%等关键风险点",
      "输出安全合规横评报告，协助合规团队制定风控优化方案，调整 Prompt 工程规则与内容过滤策略",
    ],
    achievements: [
      "某垂直领域 LLM 违规内容检出率≥98%，误判率<1%",
      "依托 Java 后端接口安全经验，快速理解合规拦截逻辑，缩短项目启动周期",
    ],
  },
];

type Project = typeof projects[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="border-4 border-black bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: "12px 12px 0px 0px #000" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div
          className="border-b-4 border-black px-6 py-4 flex items-center justify-between sticky top-0 z-10"
          style={{ backgroundColor: project.color }}
        >
          <div className="flex items-center gap-3">
            <span className="font-black text-3xl">{project.id}</span>
            <div>
              <p className="font-black text-xs uppercase tracking-widest opacity-70">{project.subtitle}</p>
              <p className="font-black text-sm uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5 inline-block mt-1">{project.period}</p>
            </div>
          </div>
          <button
            className="border-4 border-black bg-black text-white p-1.5 transition-colors hover:bg-[#FF6B6B]"
            style={{ boxShadow: "3px 3px 0px 0px #fff" }}
            onClick={onClose}
            aria-label="关闭"
          >
            <X className="w-5 h-5 stroke-[3px]" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Title */}
          <h2 className="font-black text-3xl tracking-tight">{project.title}</h2>

          {/* 项目背景 */}
          <div>
            <p className="font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-1">
              <Star className="w-3 h-3 fill-black stroke-none" /> 项目背景
            </p>
            <div className="border-4 border-black bg-[#FFFDF5] p-4" style={{ boxShadow: "4px 4px 0px 0px #000" }}>
              <p className="font-bold text-sm leading-relaxed">{project.background}</p>
            </div>
          </div>

          {/* 技术栈 */}
          <div>
            <p className="font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-1">
              <Star className="w-3 h-3 fill-black stroke-none" /> 技术栈
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wide"
                  style={{ backgroundColor: project.color }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 核心数据 */}
          {project.stats && (
            <div>
              <p className="font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-1">
                <Star className="w-3 h-3 fill-black stroke-none" /> 核心数据
              </p>
              <div className="flex gap-4 flex-wrap">
                {Object.entries(project.stats).map(([key, val]) => (
                  <div
                    key={key}
                    className="border-4 border-black px-4 py-3 text-center"
                    style={{ boxShadow: "4px 4px 0px 0px #000", backgroundColor: project.color }}
                  >
                    <div className="font-black text-2xl">{val}</div>
                    <div className="font-black text-xs uppercase tracking-widest mt-1">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 核心工作 */}
          <div>
            <p className="font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-1">
              <Star className="w-3 h-3 fill-black stroke-none" /> 核心工作
            </p>
            <ul className="space-y-2">
              {project.coreWork.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-4 border-black bg-white p-3"
                  style={{ boxShadow: "4px 4px 0px 0px #000" }}
                >
                  <span
                    className="font-black text-xs border-2 border-black px-1.5 py-0.5 shrink-0 mt-0.5"
                    style={{ backgroundColor: project.color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 核心成果 */}
          <div>
            <p className="font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-1">
              <Star className="w-3 h-3 fill-black stroke-none" /> 核心成果
            </p>
            <ul className="space-y-2">
              {project.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-3 font-bold text-sm border-l-4 border-black pl-3">
                  <Star className="w-4 h-4 fill-[#FF6B6B] stroke-none shrink-0 mt-0.5" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
              AI 评测<br />
              <span style={{ WebkitTextStroke: "3px #000", color: "transparent" }}>
                实战项目。
              </span>
            </h2>
          </div>
          <div
            className="border-4 border-black bg-white px-6 py-3 font-black text-lg uppercase tracking-widest"
            style={{ boxShadow: "6px 6px 0px 0px #000", transform: "rotate(-1deg)" }}
          >
            AI 训练师 · 评测工程师
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {/* Featured project */}
        {projects.filter(p => p.featured).map((project) => (
          <div
            key={project.id}
            className="border-4 border-black bg-white transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            style={{ boxShadow: "12px 12px 0px 0px #000" }}
            onClick={() => setActiveProject(project)}
          >
            <div className="grid lg:grid-cols-2">
              {/* Left: Visual */}
              <div
                className="border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 flex flex-col justify-between min-h-64 relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
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
                    ⭐ 代表项目
                  </div>
                  <p className="font-black text-sm text-white/80 uppercase tracking-widest">{project.period}</p>
                  {project.stats && (
                    <div className="flex gap-3 flex-wrap">
                      {Object.entries(project.stats).map(([key, val]) => (
                        <div key={key} className="border-4 border-black bg-white px-3 py-2 text-center" style={{ boxShadow: "3px 3px 0px 0px #000" }}>
                          <div className="font-black text-lg">{val}</div>
                          <div className="font-black text-xs uppercase tracking-widest">{key}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Right: Content */}
              <div className="p-8 space-y-5">
                <div>
                  <p className="font-black text-sm uppercase tracking-widest text-gray-500 mb-1">{project.subtitle}</p>
                  <h3 className="font-black text-4xl tracking-tight">{project.title}</h3>
                </div>
                <p className="font-bold text-base leading-relaxed">{project.background}</p>
                <ul className="space-y-2">
                  {project.coreWork.slice(0, 3).map((a, i) => (
                    <li key={i} className="flex items-start gap-2 font-bold text-sm">
                      <Star className="w-4 h-4 fill-[#FF6B6B] stroke-none shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wide bg-[#FFFDF5]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-black text-xs uppercase tracking-widest text-gray-400 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-gray-400 stroke-none" /> 点击查看完整详情
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.id}
              className="border-4 border-black bg-white group transition-all duration-200 hover:-translate-y-2 cursor-pointer"
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
              onClick={() => setActiveProject(project)}
            >
              <div
                className="border-b-4 border-black px-5 py-4 flex justify-between items-center"
                style={{ backgroundColor: project.color }}
              >
                <span className="font-black text-2xl">{project.id}</span>
                <span className="font-black text-xs uppercase tracking-widest border-2 border-black bg-white px-2 py-1">{project.period}</span>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="font-black text-xs uppercase tracking-widest text-gray-500">{project.subtitle}</p>
                  <h3 className="font-black text-2xl mt-0.5">{project.title}</h3>
                </div>
                <p className="font-bold text-sm leading-relaxed">{project.background}</p>
                <ul className="space-y-1">
                  {project.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 font-bold text-xs leading-snug">
                      <Star className="w-3 h-3 fill-[#FFD93D] stroke-black stroke-[1px] shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border-2 border-black px-2 py-0.5 text-xs font-black uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-black text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                  点击查看详情 →
                </p>
              </div>
            </div>
          ))}

          {/* Quote card */}
          <div
            className="border-4 border-black bg-black text-white p-6 flex flex-col justify-between min-h-48"
            style={{ boxShadow: "8px 8px 0px 0px #FF6B6B" }}
          >
            <Star className="w-10 h-10 fill-[#FFD93D] stroke-none animate-spin-slow" />
            <div>
              <p className="font-black text-sm uppercase tracking-widest text-[#FFD93D] mb-3">格言</p>
              <h3 className="font-black text-2xl leading-snug">敢学，能学，会学，<br />说到做到。</h3>
            </div>
          </div>
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
