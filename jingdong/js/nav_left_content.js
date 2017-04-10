/**
 * Created by Administrator on 2017/3/13.
 */
$(document).ready(function () {
    var $nav_left_ul_li = $(".nav_left_ul_li");
    var $nav_left_content = $(".nav_left_content");

    var $liLength = $nav_left_ul_li.length;
    var $contentLength = $nav_left_content.length;

    console.log($nav_left_ul_li);
    console.log($nav_left_content);
    for (var i = 0; i<$liLength; i++){
        (function(i){
        //    console.log(i)
            console.log($nav_left_content[i]);
            $nav_left_ul_li[i].onmouseover = function(){
                console.log('o');
                console.log(i);
                $nav_left_content[i].style.display = "block";

            };

            $nav_left_ul_li[i].onmouseout = function(){
                $nav_left_content[i].style.display = "none";
            };
        })(i);
    }
});