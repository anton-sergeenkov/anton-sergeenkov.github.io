<?php
    $content = file_get_contents("php://input");
    $decoded = json_decode($content, true);
    echo $decoded[name];
?>