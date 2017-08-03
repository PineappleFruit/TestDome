/**
 * Created by Administrator on 2017/4/26.
 */
// $(function () {
//     var ohotsort_content = document.getElementById('hotsort_content');
//     var oHot_hd = ohotsort_content.getElementsByClassName('hot_hd')[0];
//
//     var oHot_bd = ohotsort_content.getElementsByTagName('div')[0];
//
//     var Titles = oHot_hd.getElementsByTagName('li');
//     var Content = oHot_bd.getElementsByClassName('hotsort_list1');
//
//
//     var nNoticeLentow = Math.min(Titles.length,Content.length);
//     console.log(nNoticeLentow);
//
//     function resetStyleNoticetow() {
//         for (var i = 0; i < nNoticeLentow; i++){
//             Titles[i].className = " ";
//             Content[i].style.display = "none";
//         }
//     }
//
//     for (var i = 0; i < nNoticeLentow; i++){
//         (function (n) {
//             Titles[n].onmouseover = function () {
//                 // 复位样式
//                 resetStyleNoticetow();
//                 // console.log('rest success!');
//                 // 设置当前样式
//                 Content[n].style.display = "block";
//                 Titles[n].className = "current";
//                 // console.log(Content[n]);
//             };
//
//         })(i);
//     }
// });
function notice2() {
    var ohotsort_content = document.getElementById('hotsort_content');
    var oHot_hd = ohotsort_content.getElementsByClassName('hot_hd')[0];

    var oHot_bd = ohotsort_content.getElementsByTagName('div')[0];

    var Titles = oHot_hd.getElementsByTagName('li');
    var Content = oHot_bd.getElementsByClassName('hotsort_list1');


    var nNoticeLentow = Math.min(Titles.length,Content.length);
    console.log(nNoticeLentow);

    function resetStyleNoticetow() {
        for (var i = 0; i < nNoticeLentow; i++){
            Titles[i].className = " ";
            Content[i].style.display = "none";
        }
    }

    for (var i = 0; i < nNoticeLentow; i++){
        (function (n) {
            Titles[n].onmouseover = function () {
                // 复位样式
                resetStyleNoticetow();
                // console.log('rest success!');
                // 设置当前样式
                Content[n].style.display = "block";
                Titles[n].className = "current";
                // console.log(Content[n]);
            };

        })(i);
    }
};
