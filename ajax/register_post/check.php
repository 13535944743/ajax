<?php
    $uname = $_POST["username"];
    if($uname == "zhangsan") {
        echo $uname . " exist";
    }
    else {
        echo $uname . " succeed";
    }
?>