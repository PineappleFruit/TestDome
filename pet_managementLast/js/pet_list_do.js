/**
 * Created by Administrator on 2017/3/31.
 */
//$(document).ready(function(){

    //var timeOutEvent=0;
    //$(function(){
    //    $(".pet_list").on({
    //        touchstart: function(e){
    //            timeOutEvent = setTimeout("longPress()",5000);
    //            e.preventDefault();
    //        },
    //        touchmove: function(){
    //            clearTimeout(timeOutEvent);
    //            timeOutEvent = 0;
    //        }
    //
    //    })
    //});
    //
    //
    //function longPress(){
    //    timeOutEvent = 0;
    //    alert("长按事件触发发");
    //}
//function longPress(){
//    timeOutEvent = 0;
//    //alert("长按事件触发发");
//    $('#pet_list_do').modal('show')
//}


//});

var timeout ;

$(".pet_list").mousedown(function() {
    timeout = setTimeout(function() {
        $('#pet_list_do').modal('show');
    }, 500);
});

$("#mydiv").mouseup(function() {
    clearTimeout(timeout);
    //$("#mydiv").text("out");
});

$("#mydiv").mouseout(function() {
    clearTimeout(timeout);
    //$("#mydiv").text("out");
});