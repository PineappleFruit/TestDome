/**
 * Created by Administrator on 2017/3/12.
 */
/**
 * Created by Administrator on 2017/3/1.
 */
$(document).ready(function () {
    var $imgList=$(".imgList li");
    var imgLength=$imgList.length;
    var $btnLeft=$(".btmList_left");
    var $btnRight=$(".btmList_right");
    var $btnList_Li=$(".btmList_Li li");
    var $btnList=$(".btmList");
    var $btmImgBtn=$btnList.children();

    var count=0;
    var listTime=4000;
    var time;

    $imgList.hide();
    $imgList.eq(0).show();
    $btnList_Li.eq(0).css("background","red");
    $btnLeft.hide();
    $btnRight.hide();

    function anmate() {
        $imgList.fadeOut();
        $imgList.eq(count).fadeIn();
    }
    function List() {
        $btnList_Li.css("background","white");
        $btnList_Li.eq(count).css("background","red");
    }
    function carouse_list() {
        count = (++count) % imgLength;
        $imgList.eq(count-1).fadeOut();
        $imgList.eq(count).fadeIn();
        $btnList_Li.css("background","white");
        $btnList_Li.eq(count).css("background","red");
    }
    $btnLeft.click(function () {
        count=(++count) % imgLength;
        anmate();
        List();
        stop();
        star();
    });
    $btnRight.click(function () {
        count= (++count) % imgLength;
        anmate();
        List();
        stop();
        star();
    });
    $btnList_Li.hover(function () {
        stop();
        count=$(this).index();
        anmate();
        console.log(count);
        List();
    },function () {
        star();
    });
    $btnList.mouseover(function () {
        $btnLeft.show();
        $btnRight.show();
    });
    $btnList.mouseout(function () {
        $btnLeft.hide();
        $btnRight.hide();
    });

    function star() {
        time=setInterval(carouse_list,listTime)
    }
    function stop() {
        clearInterval(time);
    }
    star();
});