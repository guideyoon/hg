import React from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';

export default function VipPage() {
    return (
        <>
            <Section className="bg-foreground text-white pt-24 pb-24">
                <div className="text-center max-w-3xl mx-auto px-4">
                    <span className="text-accent tracking-[0.2em] text-sm uppercase mb-4 block">Premium Image Consulting</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">VIP Total Care Course</h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light">
                        당신의 이미지를 완벽하게 설계하는 12주간의 여정.<br />
                        단순한 스타일링을 넘어 라이프스타일의 품격을 높여드립니다.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Course Details</h2>
                            <p className="text-gray-600 mb-8">
                                VIP 코스는 한결의 모든 노하우가 집약된 프리미엄 서비스입니다.
                                초기 상담부터 사후 관리까지 전담 컨설턴트가 함께하며,
                                완벽한 이미지 변신을 보장합니다.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-foreground">01</div>
                                <div>
                                    <h3 className="font-bold text-lg">심층 분석 (Deep Analysis)</h3>
                                    <p className="text-gray-600 text-sm">퍼스널 컬러, 골격, 얼굴형, 이미지 정밀 진단</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-foreground">02</div>
                                <div>
                                    <h3 className="font-bold text-lg">옷장 큐레이팅</h3>
                                    <p className="text-gray-600 text-sm">불필요한 옷 정리 및 기존 아이템 활용법 코칭</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-foreground">03</div>
                                <div>
                                    <h3 className="font-bold text-lg">쇼핑 솔루션 (4회)</h3>
                                    <p className="text-gray-600 text-sm">계절별, TPO별 핵심 아이템 쇼핑 동행</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-foreground">04</div>
                                <div>
                                    <h3 className="font-bold text-lg">이미지 메이킹 교육 & 사후관리</h3>
                                    <p className="text-gray-600 text-sm">스스로 스타일링하는 법 교육, 촬영 스타일링 및 피드백</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-10 rounded-sm border border-gray-200 sticky top-24 h-fit">
                        <h3 className="text-2xl font-bold mb-2">Membership</h3>
                        <div className="text-4xl font-bold text-foreground mb-8">180<span className="text-lg font-normal text-gray-500">만원</span></div>

                        <ul className="space-y-4 mb-8 text-sm text-gray-600">
                            <li className="flex justify-between border-b pb-2"><span>진단 및 분석</span><span>포함</span></li>
                            <li className="flex justify-between border-b pb-2"><span>옷장 정리</span><span>포함</span></li>
                            <li className="flex justify-between border-b pb-2"><span>쇼핑 동행</span><span>4회</span></li>
                            <li className="flex justify-between border-b pb-2"><span>코디 레슨</span><span>포함</span></li>
                            <li className="flex justify-between border-b pb-2"><span>스타일북 제공</span><span>PDF</span></li>
                        </ul>

                        <Button href="/contact" fullWidth size="lg">VIP 상담 신청</Button>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            * 방문 상담 후 결제 가능합니다.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
