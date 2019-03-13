
// 以前的方式
// function add(x,y){
//     return x+y
// }
// 函数表达式
// var add=function(x,y){
//     return x+y;
// }
// console.log(add(1,2));
// 箭头函数写法
// var add=( x , y ) => {
//     return x+y;
// }
// console.log(add(1,2));
// 最常用的样子
// ()=>{}
// let 函数名字=(参数1,参数2...)=>{

//     // 函数内部的代码
//     // return xxx
// }
// var add=( x , y ) => {
//     console.log(111);//现在里面有两行代码了
//     return x+y;
// }
//1 {} 只有一行代码 省略{} 和return
// var add=( x , y ) => x+y;

// console.log(add(1,2));
// 2 () ；里面只有一个参数 去掉()
// var add= x  => x+10;

// console.log(add(1));
// 3 ()只有一个参数 {}只有一行代码 都可以省略

// var add= x  => x;


// console.log(add(1));
// 全写的样式
// var add=(x)=>{
//     return x
// }


