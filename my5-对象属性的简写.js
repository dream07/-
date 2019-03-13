
let name='zs';
let age=18;
let abc='男';
let show=()=>{
    console.log('我是show')
}
// 以前的写法
var obj={
    "name":'zs',
    "age":18,
    show:function(){
        console.log('我是show')
    },
    sayHi:function(){
        console.log('你好我是sayHi')
    }
}

var obj={
    "name":name,
    "age":age,
    "show":show,
    sayHi:function(){
        console.log('你好我是sayHi')
    }
}
//对象的简写方式 把name 当成属性名 zs当成属性值  写在obj里面 名字是你要的一样才简写
var obj={
    name,
    age,
    gender:abc,
    show,
    sayHi(){
        console.log('你好我是sayHi')
    }
}
// obj.sayHi()