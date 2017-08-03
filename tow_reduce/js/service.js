/**
 * Created by hlj on 2017/7/15.
 */

course('ser-nav-div');
// loop_course();
function course() {
    var ser_img = document.getElementsByClassName('div-img')[0];
    var div_img = ser_img.getElementsByTagName('ul')[0];
    var oImg = div_img.getElementsByTagName('li');

    var ser_cus = document.getElementsByClassName('ser-cus-div2')[0];
    var ser_cus_div = ser_cus.getElementsByClassName('ser-cus-div')[0];
    var ser_div = ser_cus_div.getElementsByTagName('div');


    var oImglength = oImg.length;
    var oDivlength = ser_div.length;
    // 初始化


    getWidth();

    // 监听窗口变化改变li的宽度
    window.onresize = function(){
        getWidth();
        getData();
    };
    function getWidth() {
        var Liwidth = parseInt(getComputedStyle(ser_img).width);
        for (var i = 0 ; i<oImglength;i++){
            oImg[i].style.width = Liwidth + 'px';
        }
        var Divwidth = parseInt(getComputedStyle(ser_cus_div).width);
        for (var j = 0; j <oDivlength ; j++){
            ser_div[j].style.width = Divwidth - 60 + 'px';
        }
        console.log('x');
    }

    // 轮播
    test();
    function getData() {
        var $oUl = $(".ser-nav-img").eq(1);
        $oUl.find("li").last().remove();
        var last_li = $oUl.find("li").eq(0).clone();
        $oUl.append(last_li);
        var li_width = $oUl.find("li").outerWidth(true);
        var li_length = $(".ser-nav-img").eq(1).find("li").length;
        $('.ser-nav-img').eq(1).width(li_length*li_width);
        var $oli =  $(".div-btn>li");
        console.log(li_length);
    }
    function test() {
        // getData();
        var $oUl = $(".ser-nav-img").eq(1);
        var last_li = $oUl.find("li").eq(0).clone();
        $oUl.append(last_li);
        var li_width = $oUl.find("li").outerWidth(true);
        var li_length = $(".ser-nav-img").eq(1).find("li").length;
        $('.ser-nav-img').eq(1).width(li_length*li_width);
        var $oli =  $(".div-btn>li");
        var timer;
        var num = 0;
        // timer = setInterval(next_course,2000);
        $(".nav-right-btn").click(next_course);
        $(".nav-left-btn").click(prev_course);
        // $(".div-img").hover(function () {
        //     clearInterval(timer);
        // },function () {
        //     clearInterval(timer);
        //     timer = setInterval(next_course,2000)
        // });
        function next_course() {
//                console.log(num);
            if(!$oUl.is(":animated")){
                num++;
                if(num < li_length){
                    $oUl.animate({left:-num*li_width},600)
                }else {
//                        num=0;
                    $oUl.css("left",0);
                    num = 1;
                    $oUl.animate({left:-li_width},600)
                }
            }
        }
        function prev_course() {
            console.log(num);
            if(!$oUl.is(":animated")){

                if(num > 0){
                    num--;
                    $oUl.animate({left:-num*li_width},600)
                }else {
                    $oUl.css("left",-(li_length-1)*li_width);
                    num = li_length - 2;
                    $oUl.animate({left:-(li_length-2)*li_width},600)
                }
            }
            console.log(num);
        }
        // console.log($oli);
        $oli.each(function (index) {
            $(this).click(function () {
                console.log($(this).index());
                var index = $(this).index();
                $oUl.animate({left:-index*li_width},600)
            })
        })
    }

}

