/**
 * Created by Administrator on 2017/7/6.
 */
function moveDiv(obj,dir,target) {
    clearInterval(obj.timer);
//                var num = 30;
    obj.timer = setInterval(function () {
        var speed = parseFloat(style(oList ,'left')) + dir;
        console.log(speed);
        if(dir > 0 && speed >= target){
            speed = target;clearInterval(obj.timer)
        }
        if(dir < 0 && speed <= target){
            speed = target;clearInterval(obj.timer)
        }
        obj.style.left = speed + 'px';
    },100);
}
function  style(obj , attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}