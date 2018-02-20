<?php 
    $wearable = $_POST;
echo 200;

    var_dump($_POST);
file_put_contents('child/wearable_data.txt', $_POST, FILE_APPEND);//$wearable, FILE_APPEND);
$wearable2 = file_get_contents("php://input");
file_put_contents('child/wearable_data2.txt', $wearable2, FILE_APPEND);
http_response_code(200);
?>