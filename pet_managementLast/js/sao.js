/**
 * Created by Administrator on 2017/3/29.
 */
$(document).ready(function(){
    var iImgMoveHeight;
    var iImgTop;
    var $IdSlider = $('#er_slider');
    function scan(){
        iImgMoveHeight = $('.img_bg').height()*0.9 +'px'; //扫码框高度
        iImgTop = $('.img_bg').height()*0.2 +'px';
        $IdSlider.animate({top:iImgMoveHeight},3000,function(){
            $IdSlider.css('top','10px');
            scan();
        });
    }scan();
});