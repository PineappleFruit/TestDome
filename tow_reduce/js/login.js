/**
 * Created by Administrator on 2017/7/19.
 */
$(function () {
    login(".login");
    function login(box) {
        var $methods = $(box) ;
        var $box = $methods.find(".login_info");
        var $input = $box.find("input");
        // console.log($methods);
        $input.eq(0).blur(function () {
            console.log($(this).val());
            if(!$(this).val() ){
                $(this).addClass("bgred");
            }else {
                $(this).removeClass("bgred");
            }
        });
        $input.eq(1).blur(function () {
            console.log($(this).val());
            if(!$(this).val() ){
                $(this).addClass("bgred");
            }else {
                $(this).removeClass("bgred");
            }
        });
    }
    sign();
    function sign() {
        var $methods = $(".sign") ;
        var $box = $methods.find(".login_info");
        var $input = $box.find("input");
        $input.each(function () {
            console.log($(this))
            $(this).focus(function () {
                $(this).removeClass("bgred");
                $(this).next().css("display","none")
            })
        });
        $input.eq(0).blur(function () {
            var reg_tel =  /^1(3|4|5|7|8)\d{9}$/;
            var reg_email = /^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/;
            if($(this).val() && reg_tel.test($(this).val())){
                $(this).removeClass("bgred");
                $(this).next().css("display","none")
            }else if($(this).val() && reg_email.test($(this).val())){
                $(this).removeClass("bgred");
                $(this).next().css("display","none")
            } else {
                $(this).addClass("bgred");
                $(this).next().css("display","block");
            }
        });
        $(".pwd").blur(function () {
            console.log($(this).val().length);
            var reg_pws = /^(((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\s0-9a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\s0-9a-zA-Z]))[^\s]+)$/
            if($(this).val().length > 6 && $(this).val().length < 17){
                $(this).removeClass("bgred");
                $(this).next().css("display","none");
            }else if(reg_pws.test($(this).val())){
                $(this).removeClass("bgred");
                $(this).next().css("display","none")
            } else {
                $(this).addClass("bgred");
                $(this).next().css("display","block")
            }
        });
        $input.eq(2).blur(function () {
            // console.log($(this));
            if(!$(this).val() || $(this).val() !== $(".pwd").val() ){
                $(this).addClass("bgred");
                $(this).next().css("display","block")
            }else {
                $(this).removeClass("bgred");
                $(this).next().css("display","none")
            }
            // console.log($(this).val());
            // console.log($(".pwd").val())
        });
    }
});