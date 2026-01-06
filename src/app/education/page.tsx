'use client';

import React, { useEffect, useState } from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';

export default function EducationPage() {
    const [isHeroVisible, setIsHeroVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const expertImages = ['/images/j1.webp', '/images/j2.webp'];

    useEffect(() => {
        setIsHeroVisible(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % expertImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-foreground">
                <img
                    src="/images/hd3.webp"
                    alt="Education Hero"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isHeroVisible ? 'scale-100' : 'scale-110'
                        }`}
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className={`relative z-10 text-center max-w-3xl mx-auto px-4 transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <span className="text-accent tracking-[0.2em] text-sm md:text-base uppercase mb-4 block font-medium">Expert Course</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">Academy</h1>
                    <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        패션 이미지 컨설턴트 양성 과정<br />
                        이미지의 기준을 세우는 전문가로 성장하는 길,<br className="md:hidden" />한결이 함께합니다.
                    </p>
                </div>
            </section>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="border border-gray-200 p-8 rounded-sm hover:shadow-lg transition-shadow bg-white">
                            <h3 className="text-2xl font-bold mb-4">패션 이미지 디자이너</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                개인의 이미지를 진단하고 최적의 스타일을 제안하는 전문가를 양성합니다.
                                색채학, 체형 분석 이론부터 실습까지 체계적으로 배웁니다.
                            </p>
                            <div className="text-accent font-semibold">자격증 과정</div>
                        </div>
                        <div className="border border-gray-200 p-8 rounded-sm hover:shadow-lg transition-shadow bg-white">
                            <h3 className="text-2xl font-bold mb-4">퍼스널 쇼퍼</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                고객의 예산, TPO, 취향을 고려한 전략적 쇼핑 코칭 전문가를 양성합니다.
                                브랜드 분석, 소재학, 트렌드 분석 능력을 함양합니다.
                            </p>
                            <div className="text-accent font-semibold">자격증 과정</div>
                        </div>
                    </div>

                    <div className="bg-foreground text-white p-10 rounded-sm">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-700 pb-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-2">통합 전문가 과정 (12주)</h2>
                                <p className="text-gray-400">이론과 실무, 취업 연계까지 한번에</p>
                            </div>
                            <div className="text-right mt-4 md:mt-0">
                                <div className="text-4xl font-bold">350<span className="text-xl font-normal text-gray-400 ml-1">만원</span></div>
                            </div>
                        </div>

                        {/* Large Image Slider */}
                        <div className="relative w-full aspect-video rounded-sm overflow-hidden mb-12 shadow-2xl">
                            {expertImages.map((src, index) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={`Education Course ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h4 className="font-bold mb-6 text-accent text-lg tracking-wider uppercase">교육 특징</h4>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent mt-1">•</span>
                                        <span>저작권 등록된 독자적 교육 자료 제공</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent mt-1">•</span>
                                        <span>현장 실습 및 포트폴리오 제작 지원</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent mt-1">•</span>
                                        <span>수료 후 협회 인증 자격증 발급</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent mt-1">•</span>
                                        <span>우수 수료생 파트너 강사 위촉</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-gray-400 mb-6 text-sm">전문가로 성장하는 가장 확실한 커리큘럼</p>
                                <Button href="/contact" variant="secondary" size="lg">수강 상담 신청</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
