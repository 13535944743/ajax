window.addEventListener("load", () => {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const usernameResult = document.getElementById("username_result");
    const emailResult = document.getElementById("email_result");
    const phoneResult = document.getElementById("phone_result");

    username.addEventListener("blur", () => {
        let usernameValue = username.value;

        const type = "get";
        const url = "./server/checkUsername.php";
        const params = "uname=" + usernameValue;
        const dataType = "text";

        myajax({
            url: url,
            data: {
                uname: usernameValue
            },
            dataType: dataType,
            success: (result) => {
                if (result == "ok") {
                    usernameResult.innerHTML = "用户名可以使用";
                } else {
                    usernameResult.innerHTML = "用户名已经被注册";
                }
            },
            async: false
        })
    });

    email.addEventListener("blur", () => {
        const type = "post";
        const url = "./server/checkEmail.php";
        const params = "e=" + email.value;
        const dataType = "text";

        myajax({
            url: url,
            type: type,
            data: {
                e: email.value
            },
            success: (result) => {
                if (result == 0) {
                    emailResult.innerHTML = "邮箱可用";
                } else {
                    emailResult.innerHTML = "邮箱已经被注册";
                }
            }
        })
    })

    phone.addEventListener("blur", () => {
        const type = "post";
        const url = "./server/checkPhone.php";
        const params = "phonenumber=" + phone.value;
        const dataType = "json"

        myajax({
            url: url,
            data: {
                phonenumber: phone.value
            },
            type: "post",
            success: (result) => {
                if (result.status === 0) {
                    phoneResult.innerHTML = result.message.tips + " " + result.message.phonefrom;
                } else {
                    phoneResult.innerHTML = result.message;
                }
            }
        })
    })
})