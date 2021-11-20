function mySug(obj) {
    let defaults = {
        type: "get",
        url: "#",
        data: {},
        success: (result) => {
            console.log(result);
        },
        jsonp: "callback", //这里是通过jsonp中的key值找到对应的回调函数
        jsonpCallback: "haha"

    };

    for (let attr in obj) {
        defaults[attr] = obj[attr];
    }

    const script = document.createElement("script");
    let params = "";
    for (let attr in defaults.data) {
        params += (attr + "=" + defaults.data[attr] + "&");
    }
    if (params) {
        params = params.substr(0, params.length - 1);
        defaults.url += "?" + params;
    }

    defaults.url += "&" + defaults.jsonp + "=" + defaults.jsonpCallback;
    script.src += defaults.url;

    console.log(defaults.url);

    window[defaults.jsonpCallback] = (result) => {
        defaults.success(result);
    }

    const myhead = document.querySelector("head");
    myhead.appendChild(script);
}