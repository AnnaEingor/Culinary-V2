<?php
$name = $_POST['name'];
$email = $_POST['email'];
$comments = $_POST['comments'];


$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$comments = htmlspecialchars($comments);

$name = urldecode($name);
$email = urldecode($email);
$comments = urldecode($comments);

$fio = trim($fio);
$email = trim($email);

//echo $fio;
//echo "<br>";
//echo $email;
if (mail("an.lerm@yandex.ru", "Письмо с сайта", "Имя:".$name". E-mail: ".$email." ТЕКСТ: ".$comments, "From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>

<!-- if (mail("mail@gmail.com", "Письмо с сайта", "ФИО:".$name.". TEL".$tel.". E-mail: ".$email." ТЕМА:".$textTitle.".
 ТЕКСТ: ".$comment, "From: mail@gmail.com \r\n")); -->