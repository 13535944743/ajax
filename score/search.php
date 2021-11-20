<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
    <style>
        table {
            border-collapse: collapse;
        }

        th,
        td {
            width: 50px;
            height: 20px;
            border: 1px solid #333;
            text-align: center;
            font-size: 16px;
        }
    </style>
</head>
<body>
<?php
    $code =  $_GET["code"];
    $data = array();
    
    $data["123"] = array("name" => "张三", "code" => "123", "chinese" => 99, "math" => 88, "english" => 77);
    $data["123"]["fin"] = sum("123", $data);

    $data["234"] = array("name" => "李四", "code" => "234", "chinese" => 66, "math" => 100, "english" => 55);
    $data["234"]["fin"] = sum("234", $data);

    $data["345"] = array("name" => "王五", "code" => "345", "chinese" => 55, "math" => 100, "english" => 99);
    $data["345"]["fin"] = sum("345", $data);

    

    function sum($code, $data) {
        return  $data[$code]["chinese"] + $data[$code]["math"] + $data[$code]["english"];
    }
?>

    <?php
        if(array_key_exists($code, $data)) {
        $result = $data[$code];
    ?>
            <h2>您查询的结果如下</h2>
            <table>
                <tr>
                    <th>姓名</th>
                    <th>考号</th>
                    <th>语文</th>
                    <th>数学</th>
                    <th>英语</th>
                    <th>总分</th>
                </tr>
                <tr>
                    <td>
                        <?php
                            echo $result["name"];
                        ?>
                    </td>
                    <td>
                        <?php
                            echo $result["code"];
                        ?>
                    </td>
                    <td>
                        <?php
                            echo $result["chinese"];
                        ?>
                    </td>
                    <td>
                        <?php
                            echo $result["math"];
                        ?>
                    </td>
                    <td>
                        <?php
                            echo $result["english"];
                        ?>
                    </td>
                    <td>
                        <?php
                            echo $result["fin"];
                        ?>
                    </td>
                </tr>
            </table>
    <?php
        }
        else {
    ?>
            <h2 style="color: red">考号不存在</h2>
    <?php
        }
    ?>

</body>
</html>