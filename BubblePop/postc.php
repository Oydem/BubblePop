<?php 

    $Scr = $_POST["Scr"];

    echo $Scr;
    
    $json = json_encode($Scr);
    file_put_contents('child/screen_data.txt', $json, FILE_APPEND);
?>