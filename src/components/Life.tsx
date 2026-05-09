"use client";

import { Heart, Music, BookOpen, Camera, Coffee, MapPin, Star } from "lucide-react";

const lifeCards = [
  {
    icon: Coffee,
    title: "咖啡日记",
    date: "每天早上",
    content: "手冲咖啡是我每天的仪式感。从埃塞俄比亚的水洗耶加雪菲到哥伦比亚的蜜处理，每一杯都是一次短途旅行。",
    color: "#FFD93D",
    tag: "日常",
    rotate: "-rotate-1",
  },
  {
    icon: BookOpen,
    title: "最近在读",
    date: "2024 年推荐",
    content: "《人月神话》让我重新审视软件工程的本质。复杂性不是问题，管理复杂性才是工程师的核心技能。",
    color: "#C4B5FD",
    tag: "阅读",
    rotate: "rotate-1",
  },
  {
    icon: Music,
    title: "当前歌单",
    date: "深夜编程",
    content: "Lo-fi hip hop 是深夜敲代码的最佳伴侣。偶尔穿插一首坂本龍一，瞬间感觉代码都变优雅了。",
    color: "#FF6B6B",
    tag: "音乐",
    rotate: "-rotate-2",
  },
  {
    icon: Camera,
    title: "街头摄影",
    date: "周末爱好",
    content: "城市里的每个角落都有故事。用 35mm 镜头捕捉那些转瞬即逝的光影瞬间，是我对抗数字疲劳的方式。",
    color: "#FFD93D",
    tag: "摄影",
    rotate: "rotate-2",
  },
  {
    icon: MapPin,
    title: "最近去了",
    date: "2024 年旅行",
    content: "京都的苔藓庭院和成都的茶馆文化，让我意识到慢下来本身就是一种生产力。",
    color: "#C4B5FD",
    tag: "旅行",
    rotate: "-rotate-1",
  },
  {
    icon: Heart,
    title: "小小的事",
    date: "让生活更好",
    content: "今年学会了养多肉，第一次成功让石莲花侧芽发根。原来等待本身也很治愈。",
    color: "#FF6B6B",
    tag: "生活",
    rotate: "rotate-1",
  },
];

const funFacts = [
  { emoji: "🎮", text: "打通了 Elden Ring" },
  { emoji: "🏃", text: "10公里 &lt; 50分钟" },
  { emoji: "🍜", text: "能做 8 道家常菜" },
  { emoji: "🐱", text: "养了一只橘猫" },
  { emoji: "🎸", text: "会弹几个和弦" },
  { emoji: "✈️", text: "去过 12 个城市" },
];

export default function Life() {
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
                  的我。
                </span>
              </h2>
            </div>
            {/* Fun facts strip */}
            <div
              className="border-4 border-black bg-black text-white p-5 space-y-2 min-w-48"
              style={{ boxShadow: "8px 8px 0px 0px #000", transform: "rotate(1deg)" }}
            >
              <p className="font-black text-xs uppercase tracking-widest text-[#FFD93D] mb-3">
                <Star className="w-3 h-3 inline fill-[#FFD93D] stroke-none mr-1" />
                冷知识
              </p>
              {funFacts.slice(0, 3).map((fact, i) => (
                <p key={i} className="font-bold text-sm">
                  {fact.emoji} {fact.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Life cards masonry-ish grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifeCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`border-4 border-black bg-white transition-all duration-200 hover:-translate-y-2 ${card.rotate}`}
                style={{ boxShadow: "8px 8px 0px 0px #000" }}
              >
                {/* Card top */}
                <div
                  className="border-b-4 border-black p-4 flex items-center justify-between"
                  style={{ backgroundColor: card.color }}
                >
                  <div className="flex items-center gap-3">
                    <div className="border-4 border-black bg-black p-2">
                      <Icon className="w-4 h-4 stroke-[3px] text-white" />
                    </div>
                    <h3 className="font-black text-base uppercase tracking-wide">{card.title}</h3>
                  </div>
                  <span
                    className="border-2 border-black px-2 py-0.5 text-xs font-black uppercase tracking-widest bg-white"
                  >
                    {card.tag}
                  </span>
                </div>
                {/* Card body */}
                <div className="p-5 space-y-3">
                  <p className="font-black text-xs uppercase tracking-widest text-gray-400">{card.date}</p>
                  <p className="font-bold text-base leading-relaxed">{card.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun facts full row */}
        <div
          className="mt-12 border-4 border-black bg-[#FFD93D] p-8"
          style={{ boxShadow: "12px 12px 0px 0px #000" }}
        >
          <h3 className="font-black text-xl uppercase tracking-widest mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 fill-black stroke-none animate-spin-slow" />
            关于我的 6 件小事
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {funFacts.map((fact, i) => (
              <div
                key={i}
                className="border-4 border-black bg-white p-3 text-center transition-all duration-100 hover:-translate-y-1 hover:bg-[#FF6B6B] cursor-default"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <div className="text-3xl mb-2">{fact.emoji}</div>
                <p
                  className="font-black text-xs uppercase tracking-wide leading-tight"
                  dangerouslySetInnerHTML={{ __html: fact.text }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Currently section */}
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[
            { label: "正在学习", content: "Rust & WebAssembly", bg: "#C4B5FD" },
            { label: "正在玩", content: "Hollow Knight: Silksong（等待中）", bg: "#FF6B6B" },
            { label: "正在做", content: "一个 CLI 工具帮助管理多个 SSH Key", bg: "#FFD93D" },
          ].map((item, i) => (
            <div
              key={i}
              className="border-4 border-black bg-white"
              style={{ boxShadow: "6px 6px 0px 0px #000" }}
            >
              <div
                className="border-b-4 border-black px-4 py-2"
                style={{ backgroundColor: item.bg }}
              >
                <p className="font-black text-sm uppercase tracking-widest">{item.label}</p>
              </div>
              <div className="p-4">
                <p className="font-black text-base">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
