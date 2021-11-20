window.addEventListener("load", () => {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const usernameResult = document.getElementById("username_result");
    const emailResult = document.getElementById("email_result");
    const phoneResult = document.getElementById("phone_result");

    username.addEventListener("blur", () => {
        let usernameValue = username.value;
        let xhr = new XMLHttpRequest();
        xhr.open("get", "./server/checkUsername.php?uname=" + usernameValue, false);
        console.log(1);
        xhr.send(null); //同步和异步的区别：异步的send函数只是请求浏览器进行网络数据的请求，利用浏览器不是单线程（就像是把任务交给别人，自己去干下一件事）
        //而同步任务则是自己单干，自己去访问数据，直到访问完才干下一件事
        console.log(2);
        xhr.onreadystatechange = function () {
            console.log(3);
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
        }; // open的第三个参数设置为false时，即同步任务，会在执行send函数时卡住，卡住的时候readyState的值已经变化完了，所以之后的回调函数就废了
        console.log(4);
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