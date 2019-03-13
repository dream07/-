let user={
    name:"张三",
    age:18,
    gender:"男",
    aihao:{
        a1:"打篮球",
        a2:"打老婆"
    }
}
// console.log(user.name)
// console.log(user.aihao.a2)
// { 属性名1,属性名2,,, }=对象
//  : 新修改的名字   如果这样写了 原来的名字就不能用了 
// let {age,aihao}=user;//从user里面拿出 属性名 来使用 想使用就拿 不想就不拿
// console.log(age)
// console.log(aihao)
let {name:username, age,aihao }=user;//从user里面拿出 属性名 来使用 想使用就拿 不想就不拿
let { a2 }=aihao
// console.log(age)
// console.log(a2)
// let username=name;
console.log(username)