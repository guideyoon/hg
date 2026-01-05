import React from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';

export default function ContactPage() {
    return (
        <>
            <Section className="bg-gray-50 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600">당신의 변화를 위한 첫 걸음, 한결이 함께합니다.</p>
                </div>
            </Section>

            <Section>
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    서울특별시 강남구 테헤란로 123<br />
                                    한결 패션이미지연구소 (삼성동)
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Phone & Email</h3>
                                <p className="text-gray-600">02-123-4567</p>
                                <p className="text-gray-600">contact@hangyeol.com</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Operating Hours</h3>
                                <p className="text-gray-600">평일 10:00 - 19:00 (주말/공휴일 휴무)</p>
                                <p className="text-sm text-gray-500 mt-2">* 모든 상담은 예약제로 운영됩니다.</p>
                            </div>
                        </div>

                        <div className="mt-12 bg-gray-100 h-64 rounded-sm flex items-center justify-center text-gray-400 text-sm">
                            Google Map Area
                        </div>
                    </div>

                    {/* Form UI */}
                    <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Inquiry Form</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                                <input type="text" id="name" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-foreground" placeholder="실명을 입력해주세요" />
                            </div>
                            <div>
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                                <input type="text" id="contact" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-foreground" placeholder="010-0000-0000" />
                            </div>
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">문의 유형</label>
                                <select id="type" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-foreground bg-white">
                                    <option>스타일 상담 (Basic/Signature/Master)</option>
                                    <option>VIP 코스</option>
                                    <option>자격증/교육 과정</option>
                                    <option>기업 강의</option>
                                    <option>기타</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                                <textarea id="message" rows={5} className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-foreground" placeholder="궁금하신 점이나 상담 희망 날짜를 남겨주세요"></textarea>
                            </div>
                            <Button type="submit" fullWidth variant="primary">문의하기</Button>
                            <p className="text-xs text-gray-400 text-center">
                                제출하시면 담당자가 확인 후 24시간 이내에 연락드립니다.
                            </p>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
}
