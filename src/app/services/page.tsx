import React from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';

export default function ServicesPage() {
    return (
        <>
            <Section className="bg-gray-50 pt-24 pb-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-6">Service & Price</h1>
                    <p className="text-xl text-gray-600">합리적인 비용으로 경험하는 최고의 이미지 컨설팅</p>
                </div>
            </Section>

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
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Personal Shopping</h2>
                        <div className="bg-white p-6 rounded-sm shadow-sm">
                            <h3 className="text-lg font-bold mb-2">쇼핑 동행</h3>
                            <p className="text-gray-600 mb-4">전문가가 동행하여 당신에게 딱 맞는 아이템을 찾아드립니다. 실패 없는 쇼핑을 경험하세요.</p>
                            <div className="flex justify-between items-center border-t pt-4">
                                <span className="text-gray-500">2시간 기준</span>
                                <span className="font-bold text-xl">30만원</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Corporate & Lecture</h2>
                        <div className="bg-white p-6 rounded-sm shadow-sm">
                            <h3 className="text-lg font-bold mb-4">기업 강의 및 교육</h3>
                            <ul className="space-y-2 text-gray-600 text-sm mb-6">
                                <li>• CEO 패션 강연 및 이미지 메이킹</li>
                                <li>• 신입사원 비즈니스 매너 및 스타일</li>
                                <li>• 취업 및 면접 스타일링 특강</li>
                            </ul>
                            <Button href="/contact" variant="text">강의 문의하기 →</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
