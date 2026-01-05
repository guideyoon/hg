'use client';

import React, { useEffect, useState } from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';

export default function VipPage() {
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    useEffect(() => {
        setIsHeroVisible(true);
    }, []);

    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-foreground">
                <img
                    src="/images/h3.jpg"
                    alt="VIP Hero"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isHeroVisible ? 'scale-100' : 'scale-110'
                        }`}
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className={`relative z-10 text-center max-w-3xl mx-auto px-4 transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <span className="text-accent tracking-[0.2em] text-sm md:text-base uppercase mb-4 block font-medium">Premium Image Consulting</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-lg">VIP Total Care Course</h1>
                    <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        당신의 이미지를 완벽하게 설계하는 12주간의 여정.<br />
                        단순한 스타일링을 넘어 라이프스타일의 품격을 높여드립니다.
                    </p>
                </div>
            </section>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Course Details</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            VIP 코스는 한결의 모든 노하우가 집약된 프리미엄 서비스입니다.
                            초기 상담부터 사후 관리까지 전담 컨설턴트가 함께하며,
                            완벽한 이미지 변신을 보장합니다.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                        <div className="flex gap-4 p-6 border border-gray-50 rounded-sm hover:bg-gray-50 transition-colors">
                            <div className="w-12 h-12 bg-foreground text-background rounded-full flex-shrink-0 flex items-center justify-center font-bold">01</div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">심층 분석 (Deep Analysis)</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">퍼스널 컬러, 골격, 얼굴형, 이미지 정밀 진단</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 border border-gray-50 rounded-sm hover:bg-gray-50 transition-colors">
                            <div className="w-12 h-12 bg-foreground text-background rounded-full flex-shrink-0 flex items-center justify-center font-bold">02</div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">옷장 큐레이팅</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">불필요한 옷 정리 및 기존 아이템 활용법 코칭</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 border border-gray-50 rounded-sm hover:bg-gray-50 transition-colors">
                            <div className="w-12 h-12 bg-foreground text-background rounded-full flex-shrink-0 flex items-center justify-center font-bold">03</div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">쇼핑 동행 (4회)</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">계절별, TPO별 핵심 아이템 쇼핑 동행</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 border border-gray-50 rounded-sm hover:bg-gray-50 transition-colors">
                            <div className="w-12 h-12 bg-foreground text-background rounded-full flex-shrink-0 flex items-center justify-center font-bold">04</div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">이미지 메이킹 교육 & 사후관리</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">스스로 스타일링하는 법 교육, 촬영 스타일링 및 피드백</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section bg="gray">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 md:p-16 rounded-sm border border-gray-100 shadow-sm">
                        <div className="grid md:grid-cols-5 gap-12 items-start">
                            <div className="md:col-span-2">
                                <h3 className="text-2xl font-bold mb-2">VIP 코스</h3>
                                <div className="text-4xl font-bold text-foreground mb-6">180<span className="text-lg font-normal text-gray-500 ml-1">만원</span></div>
                                <p className="text-sm text-gray-600 leading-relaxed break-keep mb-8">
                                    계절이 바뀔 때마다 고민되는 옷장, 당신의 일상에 어울리는 진짜 스타일을 함께 찾습니다.<br />
                                    트렌드는 참고만, 기준은 오직 당신
                                </p>
                                <Button href="/contact" fullWidth size="lg">VIP 상담 신청</Button>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    * 방문 상담 후 결제 가능합니다.
                                </p>
                            </div>

                            <div className="md:col-span-3">
                                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-6">Included Services</h4>
                                <ul className="space-y-4 text-sm text-gray-600">
                                    <li className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div>진단 및 분석</span>
                                        <span className="font-medium text-foreground">포함</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div>옷장 정리</span>
                                        <span className="font-medium text-foreground">포함</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div>쇼핑 동행</span>
                                        <span className="font-medium text-foreground text-accent">4회</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div>코디 레슨</span>
                                        <span className="font-medium text-foreground">포함</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div>스타일북 제공</span>
                                        <span className="font-medium text-foreground">PDF</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
