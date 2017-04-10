/**
 * Created by Administrator on 2017/3/31.
 */
window.onload = function () {
    var dateList = {
        classValue :'app',
        innerText:'你好'
    };
    new Vue({
        el:'div',
        data:dateList
    });
    // var data = {
    //     name :'tom',
    //     age : '20'
    // }
    // var vm = new  Vue({
    //     data: data
    // });
    // console.log(data.name);
    // console.log(vm.name);
    // data.name = 'aime';
    // console.log(data.name);
    // console.log(vm.name);
};
