function mySug(obj) {
    let defaults = {
        type: "get",
        url: "#",
        data: {},
        success: (result) => {
            console.log(result);
        }

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

    defaults.url += "&callback=haha";
    script.src += defaults.url;

    window["haha"] = (result) => {
        defaults.success(result);
    }

    const myhead = document.querySelector("head");
    myhead.appendChild(script);
}