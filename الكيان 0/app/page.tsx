"use client"
import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const heroImages = [
  { src: "https://i.postimg.cc/VvyzVrhK/image-(5).jpg", alt: "كيان الشباب بناةالمستقبل 1" },
  { src: "https://i.postimg.cc/vBrKG4B5/image-(6).jpg", alt: "كيان الشباب بناةالمستقبل 2" },
  { src: "https://i.postimg.cc/NffnwfwJ/image-(7).jpg", alt: "كيان الشباب بناةالمستقبل 3" },
  { src: "https://i.postimg.cc/RFLgj2ss/image-(8).jpg", alt: "كيان الشباب بناةالمستقبل 4" },
]

export default function Page() {
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: 'rtl' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])

  return (
    <main className="flex flex-col w-full bg-white">
      
      <section id="hero" className="relative h-[600px] w-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {heroImages.map((img, index) => (
            <div key={index} className="relative h-full min-w-full flex-[0_0_100%]">
              <Image src={img.src} alt={img.alt} fill className="object-cover" priority={index === 0} unoptimized />
              <div className="absolute inset-0 bg-[#8B0000]/60 z-10" /> 
            </div>
          ))}
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
          <span className="mb-4 rounded-full bg-[#C5A059] px-4 py-1 text-sm font-bold text-black">{"معاً نبني المستقبل"}</span>
          <h1 className="mb-6 text-4xl font-black md:text-6xl">{"كيان الشباب بناةالمستقبل"}</h1>
          <p className="mb-8 max-w-2xl text-lg opacity-90">{"نمكّن الشباب من تطوير مهارات القيادة والإبداع لبناء جيل مستعد للمستقبل"}</p>
          <div className="flex gap-4">
            <a href="#register" className="rounded-lg bg-[#C5A059] px-8 py-3 font-bold text-black transition-transform hover:scale-105">{"انضم إلينا ←"}</a>
            <a href="#about" className="rounded-lg border-2 border-white px-8 py-3 font-bold hover:bg-white/10">{"مبادراتنا"}</a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-2 underline decoration-[#C5A059] underline-offset-8">من نحن</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#C5A059] p-8 rounded-xl text-white shadow-lg text-right">
              <h3 className="text-2xl font-bold mb-4">رسالتنا؟! ◎</h3>
              <p>العمل باجتهاد وإخلاص في كل ما يفيد وطننا ويساعد في بناء شباب قوي وإتاحة فرص التمكين لهم في الجمهورية الجديدة.</p>
            </div>
            <div className="bg-[#8B0000] p-8 rounded-xl text-white shadow-lg text-right">
              <h3 className="text-2xl font-bold mb-4">رؤيتنا؟! 👁</h3>
              <p>تأهيل الأجيال التي تستكمل مسيرة التطوير والبناء عن طريق تنمية الشباب الحاليين لتحقيق أهداف التنمية المستدامة.</p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-[#8B0000] mb-12">قيمنا الأساسية</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { t: "الإبداع", i: "💡" }, { t: "القيادة", i: "👥" }, 
                { t: "التميز", i: "🏅" }, { t: "التطوير", i: "📈" }
              ].map((v, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl border-b-4 border-[#C5A059]">
                  <div className="text-3xl mb-2">{v.i}</div>
                  <h4 className="font-bold text-[#8B0000]">{v.t}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="py-20 bg-[#8B0000] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">هل تريد المشاركة في مبادرتنا؟</h2>
        <a href="#" className="inline-block bg-[#C5A059] text-black font-bold px-12 py-4 rounded-full text-lg">سجل الآن</a>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-12">المعرض</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {heroImages.slice(0, 3).map((img, i) => (
              <div key={i} className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <Image src={img.src} alt="gallery" fill className="object-cover hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partnerships" className="py-16 bg-gray-50">
        <div id="support" className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-8">شركاء النجاح والدعم</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
             <div className="text-xl font-bold">LOGO 1</div>
             <div className="text-xl font-bold">LOGO 2</div>
             <div className="text-xl font-bold">LOGO 3</div>
          </div>
        </div>
      </section>

    </main>
  )
}