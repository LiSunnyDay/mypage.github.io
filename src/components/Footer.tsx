"use client";

import { Star, Code2, Mail, ArrowUp, Send, ZoomIn } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const socialLinks = [
  { icon: Code2, label: "GitHub", href: "https://github.com/LiSunnyDay", bg: "#FF6B6B" },
  { icon: Mail, label: "邮件", href: "mailto:a18846441691@163.com", bg: "#FFD93D" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const qrSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/wechat-qr.jpg`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
      setTimeout(() => setSent(false), 3000);
    }
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="border-t-4 border-black">
      {/* Contact section */}
      <div className="bg-[#FFFDF5] border-b-4 border-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div>
              <div
                className="inline-block border-4 border-black bg-[#C4B5FD] px-4 py-1 font-black text-sm uppercase tracking-widest mb-4"
                style={{ transform: "rotate(-1deg)" }}
              >
                联系我
              </div>
              <h2 className="text-5xl sm:text-6xl font-black leading-none tracking-tighter">
                有想法？<br />
                <span className="text-[#FF6B6B]">聊聊吧。</span>
              </h2>
            </div>
            <p className="font-bold text-xl leading-relaxed max-w-md">
              无论是项目合作、技术交流还是一起喝咖啡，我都很乐意。
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              {[
                { label: "邮件", value: "a18846441691@163.com", href: "mailto:a18846441691@163.com" },
                { label: "角色", value: "AI 训练师 · 原后端工程师", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 border-4 border-black bg-white p-4 w-full transition-all duration-100 hover:bg-[#FFD93D] hover:-translate-y-1 group"
                  style={{ boxShadow: "4px 4px 0px 0px #000" }}
                >
                  <span className="font-black text-xs uppercase tracking-widest text-gray-500 w-12 shrink-0">{item.label}</span>
                  <span className="font-black text-base">{item.value}</span>
                </a>
              ))}
              {/* WeChat QR */}
              <div
                className="border-4 border-black bg-white p-4"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <span className="font-black text-xs uppercase tracking-widest text-gray-500 block mb-3">微信</span>
                <div className="flex items-center gap-4">
                  <div
                    className="border-4 border-black relative w-24 h-24 shrink-0 cursor-pointer group"
                    style={{ boxShadow: "4px 4px 0px 0px #000" }}
                    onClick={() => setShowQR(true)}
                    title="点击放大"
                  >
                    <Image src={qrSrc} alt="微信二维码" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 stroke-[3px] transition-opacity" />
                    </div>
                  </div>
                  <p className="font-bold text-sm leading-relaxed">扫码添加微信，欢迎交流 AI 评测与工程话题 👋</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="border-4 border-black bg-white p-8"
            style={{ boxShadow: "12px 12px 0px 0px #000" }}
          >
            <h3 className="font-black text-2xl uppercase tracking-wide mb-6">
              发送消息 <Star className="w-5 h-5 inline fill-[#FFD93D] stroke-black stroke-[2px] ml-1" />
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                { label: "你的名字", type: "text", placeholder: "张三" },
                { label: "邮件地址", type: "email", placeholder: "hello@example.com" },
              ].map((field, i) => (
                <div key={i} className="space-y-1">
                  <label className="font-black text-xs uppercase tracking-widest">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border-4 border-black bg-[#FFFDF5] px-4 h-14 font-bold text-base placeholder:font-bold placeholder:text-black/30 focus:outline-none focus:bg-[#FFD93D] focus:shadow-[4px_4px_0px_0px_#000] transition-all duration-100"
                  />
                </div>
              ))}
              <div className="space-y-1">
                <label className="font-black text-xs uppercase tracking-widest">消息内容</label>
                <textarea
                  placeholder="嗨，我想..."
                  rows={4}
                  className="w-full border-4 border-black bg-[#FFFDF5] px-4 py-3 font-bold text-base placeholder:font-bold placeholder:text-black/30 focus:outline-none focus:bg-[#FFD93D] focus:shadow-[4px_4px_0px_0px_#000] transition-all duration-100 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 h-14 font-black text-base uppercase tracking-wide border-4 border-black bg-[#FF6B6B] transition-all duration-100 hover:bg-[#e55555] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                style={{ boxShadow: "6px 6px 0px 0px #000" }}
              >
                {sent ? (
                  <><Star className="w-5 h-5 fill-black stroke-none" /> 已发送！</>
                ) : (
                  <><Send className="w-5 h-5 stroke-[3px]" /> 发送消息</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black text-white">
        {/* Social links */}
        <div className="border-b-4 border-white/20 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={i}
                    href={link.href}
                    aria-label={link.label}
                    className="border-4 border-white p-3 transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    style={{ boxShadow: `4px 4px 0px 0px ${link.bg}` }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = link.bg)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <Icon className="w-5 h-5 stroke-[3px]" />
                  </a>
                );
              })}
            </div>
            <button
              onClick={scrollTop}
              className="border-4 border-white px-5 py-3 font-black text-sm uppercase tracking-widest flex items-center gap-2 transition-all duration-100 hover:bg-[#FF6B6B] hover:border-[#FF6B6B] active:translate-x-[2px] active:translate-y-[2px]"
              style={{ boxShadow: "4px 4px 0px 0px #FF6B6B" }}
            >
              <ArrowUp className="w-4 h-4 stroke-[3px]" />
              返回顶部
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="border-4 border-[#FFD93D] bg-[#FF6B6B] px-3 py-1 font-black text-sm uppercase tracking-widest">
                <Star className="w-3 h-3 inline fill-[#FFD93D] stroke-none mr-1" />
                ME
              </div>
              <span className="font-black text-sm uppercase tracking-wide">于昊天</span>
            </div>
            <p className="font-bold text-sm text-white/50 uppercase tracking-widest">
              © {new Date().getFullYear()} · 敢学，能学，会学，说到做到
            </p>
            <div className="flex gap-4">
              {["关于", "隐私"].map((item) => (
                <a key={item} href="#" className="font-black text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-100">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showQR && (
        <Lightbox
          src={qrSrc}
          alt="微信二维码"
          onClose={() => setShowQR(false)}
        />
      )}
    </footer>
  );
}
