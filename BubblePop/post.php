<?php 

    $score = $_POST["datas"];

    echo $score;
    mkdir("/child", 0700);
    $json = json_encode($score);
    file_put_contents('child/foldercreated.txt', $json);
?>