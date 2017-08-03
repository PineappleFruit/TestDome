// /**
//  * Created by Administrator on 2017/4/26.
//  */
// function nav() {
//     $(".back_top").mouseover(function () {
//         // $(".back_top span").removeClass('hide_span');
//         $(".back_top span").show();
//         $(".back_top i").hide();
//         // $()
//     });
//     $(".back_top").mouseout(function () {
//         // $(".back_top span").addClass('hide_span')
//         $(".back_top span").hide();
//         $(".back_top i").show();
//     });
//     $(".back_top").click(function () {
//         document.documentElement.scrollTop = document.body.scrollTop =0;
//     });
//     $(".service").mouseover(function () {
//         // $(".back_top span").removeClass('hide_span');
//         $(".service span").show();
//         $(".service i").hide();
//         // $()
//     });
//     $(".service").mouseout(function () {
//         // $(".back_top span").addClass('hide_span')
//         $(".service span").hide();
//         $(".service i").show();
//     })
//
//     var ha = ( $('#fixed').offset().top + $('#fixed').height() );
//     $(window).scroll(function(){
//         console.log(ha);
//         console.log($(window).scrollTop());
//         if ( $(window).scrollTop() > ha + 500 ) {
//             $('#fixed').css('bottom','0');
//         } else if ( $(window).scrollTop() < ha + 200) {
//             $('#fixed').removeClass('fixed_navTop').addClass('fixed_nav');
//         } else {
//             $('#fixed').removeClass('fixed_nav').addClass('fixed_navTop');
//         };
//
//     });
// }
$(function () {

    var ha = ( $('#fixed').offset().top + $('#fixed').height() );
    $(window).scroll(function(){
        console.log(ha);
        console.log($(window).scrollTop());
        if ( $(window).scrollTop() > ha + 500 ) {
            $('#fixed').css('bottom','0');
        } else if ( $(window).scrollTop() < ha + 200) {
            $('#fixed').removeClass('fixed_navTop').addClass('fixed_nav');
        } else {
            $('#fixed').removeClass('fixed_nav').addClass('fixed_navTop');
        };
    });
});