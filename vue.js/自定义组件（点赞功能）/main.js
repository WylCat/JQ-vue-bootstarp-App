Vue.component('love',{
    // template:'<button :class="{loved:loved}" @click="onclick">厉害{{love_count}}</button>',模板可直接放入html里，用选择器选择即可
    //
    // 注释  :class="loved:loved"-->>v-bind:class="属性:类（class）"
    //      绑定loved属性，判断是否为真，为真绑定类，为假，删除类
    template:'#muban',
    data:function(){
        return {
            love_count:12,
            loved:false,
        }
    },
    methods:{
        onclick:function(){
            if(!this.loved){
                this.love_count++;
            }else{
               this.love_count--;
            }
           this.loved=!this.loved;
        }
    }
})


var app = new Vue({
    el:'#app',
})