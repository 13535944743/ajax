function myajax(obj) { //此版本主要优化：参数不需要顺序要求，常用参数可不传参（默认值）

    let defaults = {
        dataType: "json",
        async: true,
        type: "get",
        success: (result) => {
            console.log(result);
        },
        data: {

        }
    };

    for (let attr in obj) {
        defaults[attr] = obj[attr]; //遍历obj,实现覆盖默认值，以及增加非默认值

    }
    let xhr = new XMLHttpRequest();

    let params = "";
    for (let attr in defaults.data) {
        params += attr + "=" + defaults.data[attr] + "&";
    }
    if (params != "") {
        params = params.substr(0, params.length - 1);
    }

    if (defaults.type == "get") {
        if (params && params != "") { //只有parms存在且不为空串时才改变url
            defaults.url += "?" + params;
        }
    }
    xhr.open(defaults.type, defaults.url, defaults.async);
    if (defaults.type == "post") {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    } else {
        xhr.send(null);
    }

    if (defaults.async) {
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let result = null;
                    if (defaults.dataType == "json") {
                        result = xhr.responseText;
                        result = JSON.parse(result);
                    } else if (defaults.dataType == "xml") {
                        result = xhr.responseXML;
                    } else {
                        result = xhr.responseText;
                    }

                    if (defaults.success) {
                        defaults.success(result);
                    }
                }
            }
        };
    } else {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let result = null;
                if (defaults.dataType == "json") {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                } else if (defaults.dataType == "xml") {
                    result = xhr.responseXML;
                } else {
                    result = xhr.responseText;
                }

                if (defaults.success) {
                    defaults.success(result);
                }
            }
        }
    }
}