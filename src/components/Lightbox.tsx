"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Lightbox({ src, alt, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 border-4 border-white bg-black text-white p-2 z-10 transition-colors hover:bg-[#FF6B6B]"
        style={{ boxShadow: "4px 4px 0px 0px #FF6B6B" }}
        onClick={onClose}
        aria-label="关闭"
      >
        <X className="w-6 h-6 stroke-[3px]" />
      </button>

      {onPrev && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 border-4 border-white bg-black text-white p-2 z-10 transition-colors hover:bg-[#FFD93D] hover:border-[#FFD93D]"
          style={{ boxShadow: "4px 4px 0px 0px #FFD93D" }}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="上一张"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3px]" />
        </button>
      )}

      {onNext && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 border-4 border-white bg-black text-white p-2 z-10 transition-colors hover:bg-[#FFD93D] hover:border-[#FFD93D]"
          style={{ boxShadow: "4px 4px 0px 0px #FFD93D" }}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
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
          src={src}
          alt={alt}
          style={{ maxWidth: "85vw", maxHeight: "85vh", display: "block", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
