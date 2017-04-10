/**
 * Created by Administrator on 2017/4/6.
 */
window.onload = function () {
    new  Vue({
        el:'#app',
        data: {
            old:{
                name:'',
                age: '',
                sex:'女',
                card:'教师',
            },
            User:[
//                        {name:'Tom',age:'12',sex:'男'},
//                        {name:'Tom2',age:'13',sex:'女'}
            ]
        },

        methods: {
            createPerson:function () {
                var regName = /^[\u4e00-\u9fa5A-Za-z0-9-_]*$/;
                var regAge = /^\+?[1-9][0-9]*$/;
                console.log(this.old.name.length);
                console.log(regName.test(this.old.name));
                if(regName.test(this.old.name) && regAge.test(this.old.age) && (this.old.name.length !=0)){
                        this.User.push(this.old);
                        this.old={name:'',age:'',sex:'',card:''};
                }else {
                        alert("信息有误");
                }
                console.log(this.old.name);
            },
            DeletePerson:function(index){
                this.User.splice(index,1);
            }

        },
    })


};