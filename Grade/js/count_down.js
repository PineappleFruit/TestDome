/**
 * Created by Administrator on 2017/3/2.
 */
  $(document).ready(function () {
      window.setInterval(settime,500);
      function settime() {
          var $day=$(".day");
          var $hour = $(".hour");
          var $minute = $(".minute");
          var $sec = $(".sec");

          var date1 = '2017/03/03 00:00:00';  //开始时间
          var date2 = new Date();    //结束时间
          var date3 = new Date(date1).getTime() - date2.getTime()   //时间差的毫秒数


          console.log(date3);
          console.log(date1);


          var days=Math.floor(date3/(24*3600*1000));

          //计算出小时数

          var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
          var hours=Math.floor(leave1/(3600*1000));
          //计算相差分钟数
          var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
          var minutes=Math.floor(leave2/(60*1000));
          //计算相差秒数
          var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
          var seconds=Math.round(leave3/1000);
          // alert(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒");

          function checkTime(i)
          {
              if (i<10)
              {i="0" + i}
              return i
          };
          hours=checkTime(hours);
          minutes=checkTime(minutes);
          seconds=checkTime(seconds);


        //  $day.text(days);
          $hour.text(hours);
          $minute.text(minutes);
          $sec.text(seconds);
      }


  });



