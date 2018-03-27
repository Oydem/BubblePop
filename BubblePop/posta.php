<?php 

    $Ori = $_POST["Ori"];

    echo $Ori;
    
    $json = json_encode($Ori);
    file_put_contents('https://oydem.github.io/BubblePop/BubblePop/child/ori_data.txt', $json, FILE_APPEND);
?>
