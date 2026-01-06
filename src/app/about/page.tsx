'use client';

import React, { useEffect, useState } from 'react';
import { Section } from '@/components/common/Section';

export default function AboutPage() {
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    useEffect(() => {
        setIsHeroVisible(true);
    }, []);

    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-foreground">
                <img
                    src="/images/hg(h).webp"
                    alt="About Hero"
                    className={`absolute inset-0 w-full h-full object-cover object-[center_20%] transition-transform duration-[2000ms] ease-out ${isHeroVisible ? 'scale-100' : 'scale-110'
                        }`}
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className={`relative z-10 text-center max-w-3xl mx-auto px-4 transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <span className="text-accent tracking-[0.2em] text-sm md:text-base uppercase mb-4 block font-medium">About Hangyeol</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">한결 소개</h1>
                    <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        유행보다 기준, 과한 변화보다 정확한 선택<br />
                        당신만의 조용한 자신감을 완성합니다.
                    </p>
                </div>
            </section>

            <Section className="pb-0" id="philosophy">
                <div className="max-w-screen-xl mx-auto">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8 break-keep">
                            옷은 꾸미는 수단이 아닌<br />존중의 태도입니다
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg break-keep mb-4 font-medium">
                            한결패션이미지연구소는 유행보다 기준을, 과한 변화보다 정확한 선택을 중요하게 생각합니다.
                            옷은 겉모습을 꾸미는 수단이 아니라 자신을 이해하고 존중하는 태도라고 믿습니다.
                            컬러, 체형, 이미지, 환경에 맞는 합리적인 스타일을 통해 조용하지만 신뢰감 있는 이미지를 만들어갑니다.
                        </p>
                        <div className="w-12 h-1 bg-accent/30 mt-8"></div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Brand Story</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base text-justify break-keep">
                            <p>
                                한결 패션이미지연구소는 “왜 옷이 중요한가” 라는 질문에서 출발했습니다.
                            </p>
                            <p>
                                옷은 단순히 입는 것이 아니라 사람의 태도와 신뢰, 삶의 방향을 드러내는 가장 현실적인 언어라고
                                보았습니다. 하지만 많은 선택이 유행과 이미지 소비에만 머무는 현실 또한 분명했습니다.
                            </p>
                            <p>
                                한결은 이 지점에서 다른 길을 선택했습니다.
                                더 돋보이게 만드는 스타일이 아니라, 본인에게 맞는 기준을 세워주는 스타일을 만드는 것.
                            </p>
                            <p>
                                체형과 컬러, 라이프스타일, 직업적 환경까지 고려한 실제 삶에 적용 가능한 이미지 설계.
                                과한 연출 대신 오래 유지되는 안정감과 신뢰를 중심에 두었습니다.
                            </p>
                            <p>
                                한결이 추구하는 스타일은 조용합니다. 그러나 분명합니다.
                                말하지 않아도 전달되는 인상, 시간이 지나도 흔들리지 않는 이미지.
                            </p>
                            <p>
                                한결 패션이미지연구소는 옷을 통해 삶의 방향을 정리하고
                                자기 자신을 더 단단하게 만드는 선택을 돕습니다.
                            </p>
                            <p className="font-semibold text-foreground pt-2">
                                조용한 자신감, 그 시작을 함께합니다.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-auto min-h-[400px] rounded-sm overflow-hidden shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/b1.webp"
                            alt="Brand Philosophy Visual"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                    </div>
                </div>
            </Section>

            <Section bg="gray" id="ceo" className="scroll-mt-32">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-4">CEO Message</h2>
                        <p className="text-gray-600">"옷은 말을 하지 않아도 당신이 누구인지 보여줍니다."</p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm flex flex-col md:flex-row gap-8 items-center border border-gray-50">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex-shrink-0 overflow-hidden border border-gray-100 flex items-center justify-center p-4 bg-gray-50">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/logo.webp" alt="장한결 대표 로고" className="w-full h-auto object-contain scale-110" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">장한결 대표</h3>
                            <p className="text-sm text-accent mb-4">패션 스타일리스트 & 퍼스널 쇼퍼</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                반갑습니다. 한결의 장한결입니다. <br />
                                옷은 단순히 겉모습을 꾸미는 수단이 아니라, 태도와 신뢰를 드러내는 가장 현실적인 언어입니다.
                                유행에 머물지 않는 본인만의 확고한 기준을 설계하여, 시간이 흘러도 흔들리지 않는 조용한 자신감을 완성하실 수 있도록 돕겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="press" className="scroll-mt-32 pt-0">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold mb-4">PRESS</h2>
                        <p className="text-gray-500 text-sm italic">한결 패션이미지연구소 언론 보도</p>
                    </div>
                    <div className="max-w-sm mx-auto rounded-sm overflow-hidden shadow-md border border-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/press.webp"
                            alt="한결 기사 보도"
                            className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>
            </Section>

            <Section id="specialty" className="scroll-mt-32">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Professional Fields</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {['퍼스널 컬러', '체형 분석', '이미지 진단', 'TPO 스타일', '비즈니스 스타일', '시니어 패션', '취업 및 면접', '직원 교육'].map((item) => (
                            <div key={item} className="p-6 border border-gray-100 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
                                <span className="font-medium text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="rounded-sm overflow-hidden aspect-[3/4] relative shadow-sm">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/pf1.webp" alt="Professional Field Visual 1" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="rounded-sm overflow-hidden aspect-[3/4] relative shadow-sm">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/pf2.webp" alt="Professional Field Visual 2" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section bg="gray" id="expert" className="scroll-mt-32">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">한결 강사</h2>
                        <p className="text-gray-600">당신의 가치를 높여줄 분야별 전문가들이 함께합니다</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Instructor 1 */}
                        <div className="bg-white p-0 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/pc.webp" alt="Personal Color Instructor" className="absolute inset-0 w-full h-full object-cover object-top scale-110 hover:scale-115 transition-transform duration-500" />
                            </div>
                            <div className="p-8">
                                <p className="text-accent text-sm mb-4">퍼스널 컬러 전문</p>
                                <h3 className="text-2xl font-bold mb-4">Personal Color</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    개인의 피부톤과 분위기에 부합하는 최적의 컬러 팔레트를 찾아드립니다.
                                </p>
                            </div>
                        </div>

                        {/* Instructor 2 */}
                        <div className="bg-white p-0 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/fs.webp" alt="Fashion Stylist Instructor" className="absolute inset-0 w-full h-full object-cover object-top scale-110 hover:scale-115 transition-transform duration-500" />
                            </div>
                            <div className="p-8">
                                <p className="text-accent text-sm mb-4">패션 스타일리스트</p>
                                <h3 className="text-2xl font-bold mb-4">Fashion Styling</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    체형의 장점을 극대화하고 단점을 보완하는 체계적인 가이드를 제공합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
