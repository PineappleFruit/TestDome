/**
 * Created by Administrator on 2017/4/16.
 */
// <script type="text/javascript">
    window.onload = function () {
        var ha = ( $('#videoBox').offset().top + $('#videoBox').height() );
        $(window).scroll(function(){
            console.log(ha);
            console.log($(window).scrollTop());
            if ( $(window).scrollTop() > ha + 500 ) {
                $('#videoBox').css('bottom','0');
            } else if ( $(window).scrollTop() < ha + 200) {
                $('#videoBox').removeClass('out').addClass('in');
            } else {
                $('#videoBox').removeClass('in').addClass('out');
                $('#videoBox').css('bottom','-500px');
                console.log('-50000');
            };

        });
    }

// </script>