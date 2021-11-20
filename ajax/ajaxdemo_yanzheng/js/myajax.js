function myajax(type, url, params, dataType, callback, async) {
    let xhr = new XMLHttpRequest();
    if (type == "get") {
        if (params && params != "") { //只有parms存在且不为空串时才改变url
            url += "?" + params;
        }
    }
    xhr.open(type, url, async);
    if (type == "post") {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    } else {
        xhr.send(null);
    }

    if (async) {
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let result = null;
                    if (dataType == "json") {
                        result = xhr.responseText;
                        result = JSON.parse(result);
                    } else if (dataType == "xml") {
                        result = xhr.responseXML;
                    } else {
                        result = xhr.responseText;
                    }

                    if (callback) {
                        callback(result);
                    }
                }
            }
        };
    } else {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let result = null;
                if (dataType == "json") {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                } else if (dataType == "xml") {
                    result = xhr.responseXML;
                } else {
                    result = xhr.responseText;
                }

                if (callback) {
                    callback(result);
                }
            }
        }
    }
}