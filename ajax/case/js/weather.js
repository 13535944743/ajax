$(function () {
    $("#query").click(function () {
        // console.log($("#ipt").val());
        $.ajax({
            type: "get",
            url: "https://api.apishop.net/common/weather/get15DaysWeatherByArea",
            data: {
                apiKey: "i2vLXA8142fb6051542ba897fd590a6746af6ecd3eb3fac",
                area: $("#ipt").val()
            },
            dataType: "json",
            success: (data) => {
                const html = template("tem", data.result);
                $("#info").html(html);
            }
        })
    });
})