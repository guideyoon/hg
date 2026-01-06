import React from 'react';
import { Section } from '@/components/common/Section';

export default function AboutPage() {
    return (
        <>
            <Section className="bg-gray-50 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">한결 소개</h1>
                    <p className="text-xl text-gray-600">유행보다 기준, 과한 변화보다 정확한 선택</p>
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
                    <div className="relative h-64 md:h-auto min-h-[400px] rounded-sm overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/b1.jpg"
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

                    <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-full flex-shrink-0"></div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">홍길동 대표</h3>
                            <p className="text-sm text-accent mb-4">한결 패션이미지연구소 소장</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                반갑습니다. 한결의 홍길동입니다. <br />
                                지난 10년간 수천 명의 고객을 만나며 깨달은 것은, 최고의 스타일은 자신감에서 나온다는 것입니다.
                                권위적인 코칭보다는 당신이 가진 고유의 매력을 찾아내는 따뜻한 안내자가 되겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="specialty" className="scroll-mt-32">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Professional Fields</h2>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        {['퍼스널 컬러', '체형 분석', '이미지 진단', 'TPO 스타일', '비즈니스 스타일', '시니어 패션', '취업 및 면접', '직원 교육'].map((item) => (
                            <div key={item} className="p-6 border border-gray-100 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
                                <span className="font-medium text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="rounded-sm overflow-hidden aspect-[3/4] relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/pf1.jpg" alt="Professional Field Visual 1" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="rounded-sm overflow-hidden aspect-[3/4] relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/pf2.jpg" alt="Professional Field Visual 2" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section bg="gray" id="instructors" className="scroll-mt-32">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">한결 강사</h2>
                        <span className="text-accent text-sm tracking-widest uppercase">Instructors</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Instructor 1 */}
                        <div className="bg-white p-0 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/pc.jpg" alt="Personal Color Instructor" className="absolute inset-0 w-full h-full object-cover object-top scale-110 hover:scale-115 transition-transform duration-500" />
                            </div>
                            <div className="p-8">
                                <p className="text-accent text-sm mb-4">퍼스널 컬러 전문</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    "색채가 주는 힘을 믿습니다. 당신의 피부톤과 이미지를 가장 돋보이게 하는 컬러를 찾아드립니다."
                                </p>
                            </div>
                        </div>
                        {/* Instructor 2 */}
                        <div className="bg-white p-0 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/fs.jpg" alt="Fashion Stylist Instructor" className="absolute inset-0 w-full h-full object-cover object-top scale-110 hover:scale-115 transition-transform duration-500" />
                            </div>
                            <div className="p-8">
                                <p className="text-accent text-sm mb-4">패션 스타일리스트</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    "유행보다는 나다움을, 화려함보다는 조화를 추구합니다. 당신의 라이프스타일에 맞는 최적의 핏을 제안합니다."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
