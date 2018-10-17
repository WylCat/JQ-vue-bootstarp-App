var app = new Vue({
    el:"#app",  //作用域
    data:{      //属性
       math:90,
       english:85,
       chinaese:80,
    },
    computed:{  //计算属性
       sum:function(){
         return this.math + this.english + this.chinaese;
       },
       average:function(){
         return Math.round(this.sum/3);
       }
    }
})