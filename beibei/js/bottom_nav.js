/**
 * Created by Administrator on 2017/4/26.
 */
$(function () {
    $(".back_top").mouseover(function () {
        // $(".back_top span").removeClass('hide_span');
        $(".back_top span").show();
        $(".back_top i").hide();
        console.log('xx');
        // $()
    });
    $(".back_top").mouseout(function () {
        // $(".back_top span").addClass('hide_span')
        $(".back_top span").hide();
        $(".back_top i").show();
    });
    $(".back_top").click(function () {
        document.documentElement.scrollTop = document.body.scrollTop =0;
    });
    $(".service").mouseover(function () {
        // $(".back_top span").removeClass('hide_span');
        $(".service span").show();
        $(".service i").hide();
        // $()
    });
    $(".service").mouseout(function () {
        // $(".back_top span").addClass('hide_span')
        $(".service span").hide();
        $(".service i").show();
    });
})