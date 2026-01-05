'use client';

import React, { useEffect, useState } from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';

export default function ServicesPage() {
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    useEffect(() => {
        setIsHeroVisible(true);
    }, []);

    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-foreground">
                <img
                    src="/images/hd2.jpg"
                    alt="Services Hero"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isHeroVisible ? 'scale-100' : 'scale-110'
                        }`}
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className={`relative z-10 text-center max-w-3xl mx-auto px-4 transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <span className="text-accent tracking-[0.2em] text-sm md:text-base uppercase mb-4 block font-medium">Service & Price</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">Style Consulting</h1>
                    <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        합리적인 비용으로 경험하는 최고의 이미지 컨설팅<br />
                        당신의 매력을 가장 잘 드러내는 기준을 제안합니다.
                    </p>
                </div>
            </section>

            <Section>
                <h2 className="text-2xl font-bold mb-12 text-center">스타일 상담 (Style Consulting)</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Basic */}
                    <div className="border border-gray-200 p-8 rounded-sm hover:border-foreground transition-colors">
                        <h3 className="text-xl font-bold mb-2">Basic Style</h3>
                        <p className="text-3xl font-bold mb-6 text-foreground">20<span className="text-base font-normal text-gray-500">만원</span></p>
                        <ul className="space-y-4 text-gray-600 mb-8 text-sm">
                            <li className="flex items-start">✓ 퍼스널 컬러 진단</li>
                            <li className="flex items-start">✓ 체형 분석 및 진단</li>
                            <li className="flex items-start">✓ 퍼스널 스타일링 제안</li>
                        </ul>
                        <Button href="/contact" variant="outline" fullWidth>신청하기</Button>
                    </div>

                    {/* Signature */}
                    <div className="border border-foreground p-8 rounded-sm relative shadow-md">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-white px-3 py-1 text-xs rounded-full">Best Choice</div>
                        <h3 className="text-xl font-bold mb-2">Signature Style</h3>
                        <p className="text-3xl font-bold mb-6 text-foreground">30<span className="text-base font-normal text-gray-500">만원</span></p>
                        <ul className="space-y-4 text-gray-600 mb-8 text-sm">
                            <li className="flex items-start">✓ Basic Style 모든 항목 포함</li>
                            <li className="flex items-start font-semibold text-foreground">✓ 옷장 정리 컨설팅</li>
                            <li className="flex items-start font-semibold text-foreground">✓ 쇼핑 동행 1회</li>
                        </ul>
                        <Button href="/contact" variant="primary" fullWidth>신청하기</Button>
                    </div>

                    {/* Master */}
                    <div className="border border-gray-200 p-8 rounded-sm hover:border-foreground transition-colors">
                        <h3 className="text-xl font-bold mb-2">Master Style</h3>
                        <p className="text-3xl font-bold mb-6 text-foreground">50<span className="text-base font-normal text-gray-500">만원</span></p>
                        <ul className="space-y-4 text-gray-600 mb-8 text-sm">
                            <li className="flex items-start">✓ 쇼핑 동행 2회</li>
                            <li className="flex items-start">✓ 1:1 코디 레슨</li>
                            <li className="flex items-start">✓ 스타일링 포트폴리오</li>
                        </ul>
                        <Button href="/contact" variant="outline" fullWidth>신청하기</Button>
                    </div>
                </div>
            </Section>

            <Section bg="gray">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Personal Shopping */}
                    <div className="relative group overflow-hidden rounded-sm min-h-[400px] flex items-end">
                        <img
                            src="/images/so.jpg"
                            alt="Personal Shopping"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient overlay for better visibility of image while keeping text readable */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="relative p-6 md:p-8 w-full text-white">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 drop-shadow-lg">Personal Shopping</h2>
                            <div className="bg-white/5 backdrop-blur-[1px] p-6 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-lg font-bold mb-2">쇼핑 동행</h3>
                                <p className="text-gray-200 mb-4 text-sm leading-relaxed drop-shadow-md">전문가가 동행하여 당신에게 딱 맞는 아이템을 찾아드립니다. 실패 없는 쇼핑을 경험하세요.</p>
                                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-4">
                                    <span className="text-gray-300 text-sm">2시간 기준</span>
                                    <span className="font-bold text-xl">30만원</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Corporate & Lecture */}
                    <div className="relative group overflow-hidden rounded-sm min-h-[400px] flex items-end">
                        <img
                            src="/images/le.jpg"
                            alt="Corporate & Lecture"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="relative p-6 md:p-8 w-full text-white">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 drop-shadow-lg">Corporate & Lecture</h2>
                            <div className="bg-white/5 backdrop-blur-[1px] p-6 rounded-sm border border-white/10 min-h-[220px] flex flex-col justify-between hover:bg-white/10 transition-colors">
                                <div>
                                    <h3 className="text-lg font-bold mb-4">기업 강의 및 교육</h3>
                                    <ul className="space-y-3 text-gray-200 text-sm mb-6 drop-shadow-md">
                                        <li className="flex items-center gap-2">• CEO 패션 강연 및 이미지 메이킹</li>
                                        <li className="flex items-center gap-2">• 신입사원 비즈니스 매너 및 스타일</li>
                                        <li className="flex items-center gap-2">• 취업 및 면접 스타일링 특강</li>
                                    </ul>
                                </div>
                                <Button href="/contact" variant="outline" className="text-white border-white hover:bg-white hover:text-black self-start text-sm py-2">강의 문의하기 →</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
