var lineChartData = {
    //X坐标数据
    labels : ["周一","周二","周三","周四","周五","周六","周末"],
    datasets : [
        {
            //统计表的背景颜色
            fillColor : "rgba(255,255,255,0)",
            //统计表画笔颜色
            strokeColor : "#f60",
            //点的颜色
            pointColor : "#000;",
            //点边框的颜色
            pointStrokeColor : "red",
            //鼠标触发时点的颜色
            pointHighlightFill : "red",
            //鼠标触发时点边框的颜色
            pointHighlightStroke : "#000",
            //Y坐标数据
            data : [3000,5550,6550,7140,8990,9050,12000]
        }
    ]

}

window.onload = function(){
    // alert(0);
    console.log("xx");
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
}