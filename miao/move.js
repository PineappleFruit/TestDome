/**
 * Created by Administrator on 2017/7/6.
 */
function moveDiv(obj,direction,dir,target,endFun) {
    clearInterval(obj.timer);
//                var num = 30;
        var select = true;
        obj.timer = setInterval(function () {
            // select = ;;
            var speed = parseFloat(style(obj ,direction)) + dir;
            select = false;
            // console.log(speed +'sdsa' + target);
            // console.log(speed);
            if(dir > 0 && speed >= target){
                speed = target;
                clearInterval(obj.timer);
                endFun && endFun();
            }
            if(dir < 0 && speed <= target){
                speed = target;
                clearInterval(obj.timer);
                endFun && endFun();
            }
            obj.style[direction] = speed + 'px';
            // console.log(direction )
        },100);
}
function  style(obj , attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}