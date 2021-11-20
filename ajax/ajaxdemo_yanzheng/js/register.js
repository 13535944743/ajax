window.addEventListener("load", () => {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const usernameResult = document.getElementById("username_result");
    const emailResult = document.getElementById("email_result");
    const phoneResult = document.getElementById("phone_result");

    username.addEventListener("blur", () => {
        let usernameValue = username.value;
        let xhr = new XMLHttpRequest(); //XMLHTTPRequest（可扩展超文本传输请求）
        xhr.open("get", "./server/checkUsername.php?uname=" + usernameValue, true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    const result = xhr.responseText;
                    if (result == "ok") {
                        usernameResult.innerHTML = "用户名可以使用";
                    } else {
                        usernameResult.innerHTML = "用户名已经被注册";
                    }
                }
            }
        };
    });

    email.addEventListener("blur", () => {
        let xhr = new XMLHttpRequest();
        xhr.open("post", "./server/checkEmail.php", true);

        let params = "e=" + email.value;
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    const result = xhr.responseText;
                    if (result == 0) {
                        emailResult.innerHTML = "邮箱可用";
                    } else {
                        emailResult.innerHTML = "邮箱已经被注册";
                    }
                }
            }
        };
    })

    phone.addEventListener("blur", () => {
        let xhr = new XMLHttpRequest();
        xhr.open("post", "./server/checkPhone.php", true);
        let params = "phonenumber=" + phone.value;
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log(typeof xhr.responseText);
                    const result = JSON.parse(xhr.responseText); //JSON格式的字符串转为对象
                    console.log(typeof result);
                    if (result.status === 0) {
                        phoneResult.innerHTML = result.message.tips + " " + result.message.phonefrom;
                    } else {
                        console.log("***********");
                        phoneResult.innerHTML = result.message;
                    }
                }

            }
        };
    })
})