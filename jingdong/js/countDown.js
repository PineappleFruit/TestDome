/**
 * Created by Administrator on 2017/3/13.
 */
/**
 * Created by Administrator on 2017/3/13.
 */
$(document).ready(function(){
    function GetRTime(){

        var EndTime= new Date('2017/03/16 18:00:00');
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
        //var d=0;
        //console.log(t);
        var hour=0;
        var minute=0;
        var second=0;
        if(t>=0){
            //d=Math.floor(t/1000/60/60/24);
            hour=Math.floor(t/1000/60/60%24);
            minute=Math.floor(t/1000/60%60);
            second=Math.floor(t/1000%60);
        }

        function checkTime(x){
            if (x < 10){
                {x='0'+x}

            }
            return x;
        }
        hour = checkTime(hour);
        minute =  checkTime(minute);
        second =  checkTime(second);

        $(".time_content_hour").text(hour);
        $(".time_content_minute").text(minute);
        $(".time_content_second").text(second);
    }
    setInterval(GetRTime,0);
});