/**
 * Created by Administrator on 2017/2/28.
 */
$(document).ready(function () {

        var $assess=['很差','较差','还行','推荐','力荐'];
        var $star_hover="img/star_hollow_hover.png";
        var $star_over="img/star_onmouseover.png";

        var $starTam=$("#star_list");
        var $starList=$starTam.children();
        var index1;


         $starList.mouseover(function () {
            var pos=$(this).index();
             $starList.children().attr("src",$star_hover);
            $.each($starList,function (x,star_img) {
                if (x > pos){
                    return false;
                }else {
                    $(star_img).children().attr("src",$star_over);
                }
                $starTam.next().text($assess[x]);
            })
        });
        $starList.mouseout(function () {
            $starList.children().attr("src",$star_hover);
            if (index1===undefined){
                $starList.children().attr("src",$star_hover);
                $starTam.next().text('');
            }else {

                $.each($starList,function (x,star_img) {
                    if (x > index1){
                        return false;
                    }else {
                        $(star_img).children().attr("src",$star_over);
                    }
                    $starTam.next().text($assess[x]);
                })
            }

        });
        $starList.click(function () {
            index1 = $(this).index();
        });
});