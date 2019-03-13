// 使用刚刚的新语法
//封装一个add函数调用他 传入obj  把obj的x y 拿出来  循环求出 x到y 能被3整除并且是偶数的和

let obj = {
    x: 100,
    y: 1000
}

// let add = (obj) => {
//     // console.log(obj);
//     let {
//         x,
//         y
//     } = obj;
//     let sum=0;
//     for (let i = x; i <= y; i++) {
//         if (i % 3 == 0 && i % 2 == 0) {
//             sum+=i;
//         }
//     }
//     return sum;
// }
let add = ({x,y}) => {
    // console.log(obj);
    // let { x,  y} = obj;
    let sum=0;
    for (let i = x; i <= y; i++) {
        if (i % 3 == 0 && i % 2 == 0) {
            sum+=i;
        }
    }
    return sum;
}
// 传入了obj 在参数里面就直接 解构了
console.log(add(obj))





// function add(obj){
//     console.log(obj)
// }