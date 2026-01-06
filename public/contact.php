<?php
/**
 * 한결 패션이미지연구소 - 문의하기 메일 발송 처리 (Resend API 버전)
 * 
 * 주의: 이 파일은 웹호스팅 서버에 업로드되어 실행되어야 합니다.
 * PHP의 cURL 확장이 활성화되어 있어야 합니다.
 */

// --- 설정 (발급받으신 API Key를 입력해주세요) ---
$resend_api_key = 're_4NMjzEwR_Gw5wXgAEpPGsnsxiK4Mdzkrt'; 
$to_email = 'wjdtn011601@gmail.com';
$from_email = '한결 패션이미지연구소 <onboarding@resend.dev>'; // 보낸이 표시 성함 수정
// ------------------------------------------

header('Content-Type: application/json; charset=utf-8');

// POST 데이터 확인
$json = file_get_contents('php://input');
$input = json_decode($json, true);

if (!$input) {
    echo json_encode(['success' => false, 'message' => '잘못된 접근입니다.']);
    exit;
}

$name = strip_tags($input['name']);
$contact = strip_tags($input['contact']);
$type = strip_tags($input['type']);
$message = nl2br(strip_tags($input['message']));

$subject = "[한결 홈페이지 문의] {$name}님의 문의입니다.";
$html_content = "
    <div style='font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;'>
        <h2 style='color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;'>새로운 홈페이지 문의</h2>
        <p><strong>이름:</strong> {$name}</p>
        <p><strong>연락처:</strong> {$contact}</p>
        <p><strong>문의유형:</strong> {$type}</p>
        <div style='margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #8e8e8e;'>
            <strong>문의내용:</strong><br>
            {$message}
        </div>
        <p style='font-size: 12px; color: #999; margin-top: 30px;'>본 메일은 한결 패션이미지연구소 홈페이지 문의 폼을 통해 발송되었습니다.</p>
    </div>
";

// Resend API 호출 (cURL 사용)
$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $resend_api_key,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'from' => $from_email,
    'to' => $to_email,
    'subject' => $subject,
    'html' => $html_content
]));

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code === 200 || $http_code === 201) {
    echo json_encode(['success' => true, 'message' => '문의가 성공적으로 전달되었습니다.']);
} else {
    $error_data = json_decode($response, true);
    echo json_encode([
        'success' => false, 
        'message' => '메일 발송 실패: ' . ($error_data['message'] ?? '알 수 없는 오류'),
        'debug' => $response
    ]);
}
?>
