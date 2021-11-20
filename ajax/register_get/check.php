<?php
    $uname = $_GET["username"];
    if($uname == "zhangsan") {
        echo $uname . " exist";
    }
    else {
        echo $uname . " succeed";
    }
?>