<?php
    $arr = array();
    $arr["zhangsan"] = array("age"=>15, "sex"=>"male","score"=>85);
    $arr["lisi"] = array("age"=>17, "sex"=>"female","score"=>90);
    $arr["wangwu"] = array("age"=>19, "sex"=>"male","score"=>100);

    echo $arr["zhangsan"]["sex"]."<br>";
    
    print_r($arr);
    var_dump($arr);
    echo json_encode($arr);

    //遍历
    echo "<br>";

    $data1 = array("red", "blue", "purple");
    for($i = 0; $i < count($data1); $i++) {
        echo $data1[$i] . "<br>";
    }

    $data2 = array("color1" => "red", "color2" => "blue", "color3" => "purple");

    foreach($data2 as $key => $value) {
        echo $key . " => " . $value . "<br>";
    }
?>