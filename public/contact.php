<?php
/**
 * 한결 패션이미지연구소 - 문의하기 메일 발송 처리 (Naver SMTP)
 * 
 * 주의: 이 파일은 웹호스팅 서버에 업로드되어 실행되어야 합니다.
 * 네이버 메일 설정에서 SMTP 사용이 '사용함'으로 되어 있어야 합니다.
 */

// --- 설정 (이 부분을 직접 수정해 주세요) ---
$naver_id = 'bome0116'; // 네이버 아이디 ( @naver.com 제외)
$naver_pw = 'aysy4865!!'; // 네이버 애플리케이션 비밀번호 (16자리)
$to_email = 'bome0116@naver.com'; // 문의 내용을 받을 이메일 주소
// ------------------------------------------

header('Content-Type: application/json; charset=utf-8');

// POST 데이터 확인
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['success' => false, 'message' => '잘못된 접근입니다.']);
    exit;
}

$name = strip_tags($input['name']);
$contact = strip_tags($input['contact']);
$type = strip_tags($input['type']);
$message = nl2br(strip_tags($input['message']));

$subject = "[홈페이지 문의] {$name}님의 문의입니다.";
$body = "
    <h2>홈페이지 새로운 문의</h2>
    <p><strong>이름:</strong> {$name}</p>
    <p><strong>연락처:</strong> {$contact}</p>
    <p><strong>문의유형:</strong> {$type}</p>
    <p><strong>문의내용:</strong><br>{$message}</p>
    <hr>
    <p>본 메일은 홈페이지 문의 폼을 통해 발송되었습니다.</p>
";

// SMTP 발송 로직 (PHP 내장 mail 함수 사용 시 전송이 실패할 수 있어 SMTP 라이브러리 권장)
// 여기서는 가장 호환성이 높은 방식을 사용하거나, 서버 설정을 따릅니다.
// 서버에서 mail() 함수가 SMTP와 연동되어 있다면 아래 코드가 작동합니다.

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <{$naver_id}@naver.com>" . "\r\n";

if (mail($to_email, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => '문의가 성공적으로 전달되었습니다.']);
} else {
    // mail() 전송 실패 시 PHPMailer 사용을 권장하는 메시지 출력
    echo json_encode(['success' => false, 'message' => '메일 발송에 실패했습니다. 서버의 mail() 설정 또는 SMTP 설정을 확인해주세요.']);
}
?>
