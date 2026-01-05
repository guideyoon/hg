import React from 'react';
import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    // Placeholder data - to be updated by user
    const companyInfo = {
        ceo: '한결',
        address: '울산광역시 남구 번영로 124번길 21, 206호',
        businessLicense: '-',
        contact: '010.8356.8839 | jjang122800@naver.com'
    };

    return (
        <footer className="bg-foreground text-background py-12">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <h2 className="text-xl font-bold mb-4">한결 패션이미지연구소</h2>
                    <p className="text-sm text-gray-300 mb-6 max-w-sm">
                        조용하지만 분명한 기준, 신뢰를 만드는 이미지 설계.<br />
                        유행보다 당신에게 맞는 정확한 선택을 제안합니다.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">MENU</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/about" className="hover:text-white transition-colors">한결 소개</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">서비스</Link></li>
                        <li><Link href="/vip" className="hover:text-white transition-colors">VIP 코스</Link></li>
                        <li><Link href="/education" className="hover:text-white transition-colors">자격증 과정</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">CONTACT</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>{companyInfo.contact}</li>
                        <li>{companyInfo.address}</li>
                        <li className="pt-4 text-xs text-gray-500">
                            대표: {companyInfo.ceo} | 사업자등록번호: {companyInfo.businessLicense}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
                © {currentYear} Hangyeol Fashion Image Research Institute. All rights reserved.
            </div>
        </footer>
    );
}
