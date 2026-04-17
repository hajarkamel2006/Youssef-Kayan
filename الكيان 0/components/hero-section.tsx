import React from 'react'
import Image from 'next/image'
import { ArrowLeft } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[650px] w-full overflow-hidden bg-[#8B0000]">
      <div className="absolute inset-0">
        <Image
          src="https://i.postimg.cc/VvyzVrhK/image-(5).jpg"
          alt="كيان الشباب"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-sm font-bold tracking-widest text-[#C5A059]">
          معاً نبني المستقبل
        </p>
        <h1 className="mb-6 text-4xl font-black md:text-6xl lg:text-7xl">
          كيان الشباب بناةالمستقبل
        </h1>
        <p className="mb-10 max-w-2xl text-lg font-bold opacity-95 md:text-xl">
          نحو تمكين حقيقي للشباب في الجمهورية الجديدة
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#register"
            className="flex items-center gap-2 rounded-lg bg-[#C5A059] px-8 py-4 text-sm font-black text-black transition-transform hover:scale-105"
          >
            انضم إلينا
            <ArrowLeft className="h-5 w-5" />
          </a>
          <a
            href="#about"
            className="rounded-lg border-2 border-white px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            اكتشف مبادراتنا
          </a>
        </div>
      </div>
    </section>
  )
}