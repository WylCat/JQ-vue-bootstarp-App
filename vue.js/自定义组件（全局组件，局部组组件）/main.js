// Vue.component('love',{  //自定义组件 （'组件名（自定义）',组件属性）
//     template:'<button @click="onClick">点击我吧</button>',//自定义组件模板
//     methods:{ //方法集合
//       onClick:function(){
//         alert('帅帅');
//       }
//     }
// })
//以上创建为全局变量，数据影响较大，所有作用域都会应用




//创建作用域，将组建放入作用域，只在此作用域渲染，

var app = new Vue({
    el:"#app",
    components:{   //自定义组件 复数
        love:{   //组件名（自定义）
    template:'<button @click="onClick">点击我吧</button>',//自定义组件模板
     methods:{ //方法集合
                  onClick:function(){
                    alert('帅帅');
                  }
          }
    }
  }

})