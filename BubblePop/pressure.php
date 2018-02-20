<?php 
$forceplate2 = file_get_contents("php://input");
file_put_contents('child/forceplate2.txt', $forceplate2, FILE_APPEND);

$pressure = $_POST;
    echo 200;
file_put_contents('child/forceplate.txt', $pressure, FILE_APPEND);
?>