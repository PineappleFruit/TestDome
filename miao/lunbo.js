/**
 * Created by hlj on 2017/7/23.
 */
$(function () {
   var $prev_btn = $(".prev_btn");
   var $next_btn = $(".next_btn");
   var $box = $(".box-content");
   $(".box-content").html($(".box-content").html()+$(".box-content").html());
   var $box_length = $(".box-content").find('li').length;
   var $box_width = $box.find("li").outerWidth(true);
   var num = 0;
   var timer;
   $(".box-content").width($box_length*$box_width);
   $next_btn.click(course);
   timer = setInterval(course,1000);
   function course() {
       // console.log(num);
       if (!$box.is(":animated")) {
           num++;
           if (num < $box_length / 2) {
               $box.animate({left: -num * $box_width + 'px'}, 600)
           } else {
               num = 0;
               $box.animate({left: -($box_length / 2) * $box_width + 'px'}, 600, function () {
                   $box.css("left", 0);
               })
           }
       }
   }
   $(".prev_btn").click(function () {
       if(num > 0){
           num--;
           $box.animate({left:-num*$box_width+'px'},600)
       }else {
           // num--;
           $box.css("left",-($box_length/2)*$box_width);
           num = ($box_length)/2 - 1;
           console.log(num);
           $box.animate({left:-num*$box_width},600)
       }
   });
    $box.hover(function () {
        clearInterval(timer);
    },function () {
        clearInterval(timer);
        timer = setInterval(course,1000);
    })
});