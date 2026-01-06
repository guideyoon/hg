'use client';

import React, { useState } from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        type: '스타일 상담 (Basic/Signature/Master)',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // 1. 먼저 Next.js API Route (Vercel/로컬 테스트용) 시도
            let response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            // 2. 만약 API Route를 찾을 수 없는 경우 (정적 호스팅/PHP 환경), PHP 파일 시도
            if (response.status === 404 || !response.ok) {
                const phpResponse = await fetch('./contact.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (phpResponse.ok) {
                    response = phpResponse;
                }
            }

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setStatusMessage('문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다.');
                setFormData({ name: '', contact: '', type: '스타일 상담 (Basic/Signature/Master)', message: '' });
            } else {
                setStatus('error');
                setStatusMessage(result.message || '오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setStatusMessage('서버와 통신 중 오류가 발생했습니다.');
        }
    };

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
                                    울산광역시 남구 번영로 124번길 21, 206호<br />
                                    한결 패션이미지연구소
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Phone & Email</h3>
                                <p className="text-gray-600">010.8356.8839</p>
                                <p className="text-gray-600">bome0116@naver.com</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Operating Hours</h3>
                                <p className="text-gray-600">평일 08:00 - 18:00 (주말/공휴일 휴무)</p>
                                <p className="text-sm text-gray-500 mt-2">* 모든 상담은 예약제로 운영됩니다.</p>
                            </div>
                        </div>

                        <div className="mt-12 h-80 rounded-sm overflow-hidden border border-gray-200">
                            <iframe
                                src="https://maps.google.com/maps?q=울산광역시%20남구%20번영로%20124번길%2021%2C%20206호&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="한결 패션이미지연구소 지도"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form UI */}
                    <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Inquiry Form</h2>

                        {status === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-sm text-sm">
                                {statusMessage}
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-sm text-sm">
                                {statusMessage}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-foreground"
                                    placeholder="실명을 입력해주세요"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                                <input
                                    type="text"
                                    id="contact"
                                    className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-foreground"
                                    placeholder="010-0000-0000"
                                    required
                                    value={formData.contact}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">문의 유형</label>
                                <select
                                    id="type"
                                    className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-foreground bg-white font-sans"
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option>스타일 상담 (Basic/Signature/Master)</option>
                                    <option>VIP 코스</option>
                                    <option>자격증/교육 과정</option>
                                    <option>기업 강의</option>
                                    <option>기타</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-foreground"
                                    placeholder="궁금하신 점이나 상담 희망 날짜를 남겨주세요"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <Button type="submit" fullWidth variant="primary" disabled={status === 'loading'}>
                                {status === 'loading' ? '전송 중...' : '문의하기'}
                            </Button>
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
