// nodejs js语法+全局成员(定时器 console.log)+ 核心模板成员api

// 核心模板成员api nodejs 自带的一些方法 只要安装了nodejs 就有 要使用引入来用就行
// 有哪些？ 文档左侧部分的 全部都有

// 读取 files下面的文件 abc.txt
const fs=require('fs');//nodejs自带的方法  require('模块名字') 就可以引入来用了 模块名字是规定好的

// 读取文件
// fs.readFile("文件夹+文件名字路径","utf-8",function(err,data){
//     // err 是否错误  null代表没有错误
//     // data  读取的文件 里面 的内容
// })
fs.readFile("../files/abc.txt","utf-8",function(err,data){
    // if(err){
    //     // console.log(err.message)
    //     // return;
    //     return console.log(err.message)
    // }
    if(err) return console.log(err.message);
    console.log(data)
})