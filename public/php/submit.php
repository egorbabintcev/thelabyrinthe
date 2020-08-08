<?php

if (!isset($_POST)) {
  exit;
}

$mail_data = [];

foreach ($_POST as $key => $value) {
  array_push($mail_data, $key . ': ' . $value);
}

// Data for mail function
$to = "info@thelabyrinthe.com";
$subject = "Application from www.thelabyrinthe.com website";
$message = implode("\n", $mail_data);
$headers = 'Content-type: text/plain; charset="utf-8"';
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "From: <noreply@thelabyrinthe.com>\r\n";
$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";


$mail = mail($to, $subject, $message, $headers);

if ($mail) {
  exit(header('HTTP/1.0 200 OK'));
} else {
  die(header("HTTP/1.0 500 Internal Server Error"));
}
