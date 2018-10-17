var app=new Vue({
    el:"#app",//组件实现区域
    data:{   //属性值区域
        name:'A',
        age:'20',
        url:'http://www.taobao.com',
        img:'https://dummyimage.com/100x100/#ffcc00/#ffffff',
        // food:['葱','姜','蒜'],
        foodList:[
          {
            name:'葱',
            place:10,
          },
           {
            name:'姜',
            place:5,
          },
           {
            name:'蒜',
            place:10,
          }
        ]
    },
    methods:{
        onClick:function(){
            alert("vue指令执行方法！！！强无敌！");
        }
    }
});