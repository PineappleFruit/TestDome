/**
 * Created by Administrator on 2017/3/12.
 */
$(document).ready(function () {
    var $noticeHD_li=$(".notice_hd li");
    console.log($noticeHD_li);
    var $noticeBody_ul=$(".notice_body ul");
    var nNoticeLen = Math.min($noticeHD_li.length,$noticeBody_ul.length);
    console.log(nNoticeLen);

    function reset() {
        for (var i = 0; i < nNoticeLen; i++){
            $noticeHD_li[i].className = " ";
            $noticeBody_ul[i].style.display = "none";
        }
    }

    for (var i = 0; i < nNoticeLen; i++){
        (function (n) {

            $noticeHD_li[n].onmouseover = function () {
                //console.log(i);
                // 复位样式
                reset();
                $noticeBody_ul[n].style.display = "block";
                $noticeHD_li[n].className = "selected";
            };
        })(i);
    }

});