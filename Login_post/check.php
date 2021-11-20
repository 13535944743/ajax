<?php
    $username = $_POST["username"];
    $password = $_POST["password"];

    if($username === "admin" && $password === "123") {
        echo "Login Succeed";
    }
    else {
        echo "Login Failed";
    }
?>