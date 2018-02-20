<?php 

    $ScrL = $_POST["ScrL"];

    echo $ScrL;
    
    $json = json_encode($ScrL);
    file_put_contents('child/Levelupscreen_data.txt', $json, FILE_APPEND);
?>