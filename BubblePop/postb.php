<?php 

    $Acc = $_POST["Acc"];

    echo $Acc;
    
    $json = json_encode($Acc);
    file_put_contents('child/acc_data.txt', $json, FILE_APPEND);
?>