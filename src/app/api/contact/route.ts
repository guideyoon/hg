import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, contact, type, message } = body;

        // 네이버 SMTP 설정
        const transporter = nodemailer.createTransport({
            host: 'smtp.naver.com',
            port: 465,
            secure: true, // SSL 사용
            auth: {
                user: 'bome0116', // 네이버 아이디
                pass: 'aysy4865!!', // 네이버 애플리케이션 비밀번호 (또는 비밀번호)
            },
        });

        const mailOptions = {
            from: 'bome0116@naver.com',
            to: 'bome0116@naver.com',
            subject: `[홈페이지 문의] ${name}님의 문의입니다.`,
            html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
                <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">새로운 홈페이지 문의</h2>
                <p style="margin: 10px 0;"><strong>이름:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>연락처:</strong> ${contact}</p>
                <p style="margin: 10px 0;"><strong>문의유형:</strong> ${type}</p>
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #8e8e8e;">
                    <strong>문의내용:</strong><br>
                    ${message.replace(/\n/g, '<br>')}
                </div>
                <p style="font-size: 12px; color: #999; margin-top: 30px;">본 메일은 홈페이지 문의 폼을 통해 발송되었습니다.</p>
            </div>
        `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: '문의가 성공적으로 전달되었습니다.' });
    } catch (error: any) {
        console.error('Mail send error:', error);
        return NextResponse.json(
            { success: false, message: error.message || '메일 발송 중 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}
