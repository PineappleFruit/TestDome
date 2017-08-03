/**
 * Created by Rocky-Wang on 2017/2/20.
 */
function notice_classify() {
    // 获取通知栏所有操作对象
    var oclassfiy_list = document.getElementById('classfiy_list');
    var oclassfiy_listUl = oclassfiy_list.getElementsByClassName('classfiy_listUl')[0];

    var oBoardDiv = oclassfiy_list.getElementsByTagName('div')[0];

    var aTitlesclassfiy = oclassfiy_listUl.getElementsByTagName('li');
    var aBoardUlsclassfiy = oBoardDiv.getElementsByTagName('ul');

    var nNoticeLenclassfiy = Math.min(aBoardUlsclassfiy.length,aTitlesclassfiy.length);

    console.log('the len is: ' + nNoticeLenclassfiy);
    function resetStyleNotice() {
        for (var i = 0; i < nNoticeLenclassfiy; i++){
            aTitlesclassfiy[i].className = " ";
            aBoardUlsclassfiy[i].style.display = "none";
        }
    }

    for (var i = 0; i < nNoticeLenclassfiy; i++){
        (function (n) {
            aTitlesclassfiy[n].onmouseover = function () {
                // 复位样式
                resetStyleNotice();
                console.log('rest success!');
                // 设置当前样式
                aBoardUlsclassfiy[n].style.display = "block";
                aTitlesclassfiy[n].className = "selected";
            };

        })(i);
    }
}
