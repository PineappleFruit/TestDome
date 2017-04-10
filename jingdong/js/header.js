/**
 * Created by Administrator on 2017/3/14.
 */
$(document).ready(function(){

    var $header_myjd_hover = $(".header_myjd_hover");
    var $myjd_span = $(".myjd_span");
    var $myjingdong = $(".myjingdong");

    var $header_coustomer_hover = $(".header_coustomer_hover");
    var $coustomer_span = $(".coustomer_span");
    var $jd_coustomer = $(".jd_coustomer");

    var $header_webNav_hover = $(".header_webNav_hover");
    var $webNav_span = $(".webNav_span");
    var $webNav = $(".webNav");

    $header_myjd_hover.mouseover(function(){
        //$myjd_span.className = "myjd_span_mouse"
        //$myjingdong.attr("display","block");
        $myjingdong.show();
        $myjd_span.attr("class","header_nav_mouse");
    });
    $header_myjd_hover.mouseout(function(){
        $myjingdong.hide();
        $myjd_span.attr("class","myjd_span");
    });

    $header_coustomer_hover.mouseover(function(){
        $jd_coustomer.show();
        $coustomer_span.attr("class","header_nav_mouse");
    });
    $header_coustomer_hover.mouseout(function(){
        $jd_coustomer.hide();
        $coustomer_span.attr("class","coustomer_span");
    });

    $header_webNav_hover.mouseover(function(){
        $webNav.show();
        $webNav_span.attr("class","header_nav_mouse")
    });
    $header_webNav_hover.mouseout(function(){
        $webNav.hide();
        $webNav_span.attr("class","webNav_span");
    });
});