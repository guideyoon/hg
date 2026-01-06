'use client';

import React, { useState, useEffect } from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const images = ['/images/h1.webp', '/images/h2.webp'];

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial volume low
    video.volume = 0.2;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = false; // Try to unmute
            video.play().catch((e) => {
              // Auto-play policy might block unmuted playback. 
              // Fallback to muted autoplay if needed, or just log.
              console.log("Autoplay blocked/failed", e);
              video.muted = true;
              video.play();
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Background Images with Cross-fade */}
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Hangyeol Mood ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 z-1 bg-black/40"></div>

        <div className={`relative z-10 text-center max-w-4xl px-4 transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <p className="text-white/90 font-medium mb-4 tracking-widest text-sm md:text-base uppercase">Hangyeol Fashion Image Institute</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-[1.15] break-keep drop-shadow-md">
            조용한 자신감은<br className="hidden md:block" /> 정확한 선택에서 시작됩니다
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 font-light max-w-2xl mx-auto break-keep drop-shadow-sm">
            유행보다 기준을, 과한 변화보다 당신에게 맞는 선택을 제안합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services" className="bg-white text-foreground hover:bg-gray-100" size="lg">서비스 알아보기</Button>
            <Button href="/contact" className="border-white text-white hover:bg-white hover:text-foreground border" size="lg">상담 문의</Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase">Philosophy</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              옷은 꾸미는 수단이 아닌<br />존중의 태도입니다
            </h3>
            <div className="w-12 h-0.5 bg-foreground/20"></div>
            <p className="text-gray-600 leading-relaxed text-lg break-keep">
              한결 패션이미지연구소는 단순히 예쁜 옷을 고르는 법을 알려드리지 않습니다.
              '왜' 옷이 중요한지, 나에게 어울리는 '기준'은 무엇인지 함께 고민합니다.
              일시적인 트렌드가 아닌, 당신의 삶을 지탱하는 단단한 이미지를 설계해 드립니다.
            </p>
            <div className="pt-4">
              <Button href="/about" variant="text">한결 소개 더보기 →</Button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-sm relative overflow-hidden">
            <video
              ref={videoRef}
              src="/videos/intro.mp4"
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section bg="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Services</h2>
          <p className="text-gray-600">개인 컨설팅부터 전문가 양성까지 전문적인 커리큘럼을 제공합니다</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
            <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">스타일 상담</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[80px]">
              퍼스널 컬러, 체형 진단, 스타일링 제안을 통해 나만의 스타일 기준을 찾아드립니다.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-100 pt-4">
              <li>• 베이직 스타일 (20만원)</li>
              <li>• 시그니처 스타일 (30만원)</li>
              <li>• 마스터 스타일 (50만원)</li>
            </ul>
            <Button href="/services" variant="outline" size="sm" fullWidth>자세히 보기</Button>
          </div>

          {/* Service 2 */}
          <div className="bg-foreground text-background p-8 rounded-sm shadow-sm transform md:-translate-y-4 border border-foreground relative overflow-hidden">
            <div className="absolute top-4 right-4 text-xs bg-accent text-white px-2 py-1 rounded-sm">Hot</div>
            <h3 className="text-xl font-bold mb-4 text-white">VIP 코스</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed min-h-[80px]">
              단순 진단을 넘어 옷장 정리, 쇼핑 동행, 사후 관리까지 포함된 프리미엄 토탈 케어 프로그램입니다.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-8 border-t border-gray-700 pt-4">
              <li>• 퍼스널 컬러 & 체형 진단</li>
              <li>• 쇼핑 동행 4회 & 관리</li>
              <li>• 코디 교육 및 포트폴리오</li>
            </ul>
            <Button href="/vip" variant="secondary" size="sm" fullWidth>VIP 코스 확인</Button>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
            <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">자격증 과정</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[80px]">
              패션 이미지 디자이너 및 퍼스널 쇼퍼 전문 자격증 취득을 위한 실무 중심 교육입니다.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-100 pt-4">
              <li>• 패션 이미지 디자이너</li>
              <li>• 퍼스널 쇼퍼</li>
              <li>• 12주 전문 과정</li>
            </ul>
            <Button href="/education" variant="outline" size="sm" fullWidth>커리큘럼 보기</Button>
          </div>
        </div>
      </Section>

      {/* Scrolling Gallery */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Duplicate for seamless looping */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-4 px-2">
              {['g1.webp', 'g2.webp', 'g3.webp', 'g4.webp', 'g5.webp'].map((src) => (
                <div key={src} className="w-[300px] md:w-[450px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={`/images/${src}`}
                    alt="Gallery item"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <Section className="bg-white text-center py-24 border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">당신의 이미지를 새롭게 정의하세요</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
          망설임은 변화를 늦출 뿐입니다. 한결과 함께 가장 나다운 모습을 찾아보세요.
        </p>
        <Button href="/contact" variant="primary" size="lg">상담 신청하기</Button>
      </Section>
    </div>
  );
}
