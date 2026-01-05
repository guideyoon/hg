import React from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';

export default function EducationPage() {
    return (
        <>
            <Section className="bg-gray-50 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Expert Course</h1>
                    <p className="text-xl text-gray-600">패션 이미지 컨설턴트 양성 과정</p>
                </div>
            </Section>

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
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-700 pb-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">통합 전문가 과정 (12주)</h2>
                                <p className="text-gray-400">이론과 실무, 취업 연계까지 한번에</p>
                            </div>
                            <div className="text-right mt-4 md:mt-0">
                                <div className="text-3xl font-bold">350<span className="text-lg font-normal text-gray-400">만원</span></div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h4 className="font-bold mb-4 text-accent">교육 특징</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• 저작권 등록된 독자적 교육 자료 제공</li>
                                    <li>• 현장 실습 및 포트폴리오 제작 지원</li>
                                    <li>• 수료 후 협회 인증 자격증 발급</li>
                                    <li>• 우수 수료생 파트너 강사 위촉</li>
                                </ul>
                            </div>
                            <div>
                                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full rounded-sm overflow-hidden">
                                    {/* Using standard img tag as we are in static export mode with unoptimized images, 
                                      and for simplicity with unknown dimensions. */}
                                    <img
                                        src="/images/j1.jpg"
                                        alt="Education Course Atmosphere"
                                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button href="/contact" variant="secondary" size="lg">수강 상담 신청</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
