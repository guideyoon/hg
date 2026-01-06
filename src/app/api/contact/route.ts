import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_YOUR_API_KEY'); // Resend API 키

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, contact, type, message } = body;

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev', // 도메인이 없을 경우 기본 제공 도메인 사용
            to: 'bome0116@naver.com',
            subject: `[홈페이지 문의] ${name}님의 문의입니다.`,
            html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
                <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">새로운 홈페이지 문의 (Resend)</h2>
                <p style="margin: 10px 0;"><strong>이름:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>연락처:</strong> ${contact}</p>
                <p style="margin: 10px 0;"><strong>문의유형:</strong> ${type}</p>
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #8e8e8e;">
                    <strong>문의내용:</strong><br>
                    ${message.replace(/\n/g, '<br>')}
                </div>
                <p style="font-size: 12px; color: #999; margin-top: 30px;">본 메일은 홈페이지 문의 폼을 통해 Resend API로 발송되었습니다.</p>
            </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ success: false, message: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('Mail send error:', error);
        return NextResponse.json(
            { success: false, message: '메일 발송 중 서버 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}
