var Object1 = {
    name: "125513129641",
    password: 250250,
    jobs:["fe","be","web"],
    games:{
        football:"chelsea",
        year:222
    },
    sayhehe:function(){
        console.log("hehe");
    }
}

// shallow copy example
var Object2=Object1;
console.log("浅复制的例子");
console.log(Object2);
Object2.jobs[0]="player";
Object1.games.year=123;
console.log("浅复制修改属性后，本尊和副本均会改变");
console.log(Object1);
console.log(Object2);

//deep copy examples
//first is JSON method,but function,undefined and Symbol not support
console.log("深拷贝的JSON方法,注意函数没啦");
var Object3=JSON.parse(JSON.stringify(Object1));
console.log(Object3);
Object1.password=234233;
Object3.jobs[2]="doctor";
console.log("深拷贝修改属性后，本尊和副本形同陌路");
console.log(Object1);
console.log(Object3);

//second is recursion method
function recursionDeepcopy(obj){
  if(obj && typeof obj==="object"){
     var newobj=(Object.prototype.toString.apply(obj)==='[object Array]') ? [] : {};   //判断对象是不是数组
     for(let item in obj){
        if(obj.hasOwnProperty(item)){
            if(typeof obj[item]==="object"){
                newobj[item]=recursionDeepcopy(obj[item]);   //对于循环引用没有考虑啊
            }
            else{     //此处不加else的话，对于对象里的对象，还是会走这里，导致将引用传过去，使得对象的对象还是浅拷贝
                newobj[item]=obj[item];
            }
        }
     }
     return newobj;
  }
  else{
      console.log("请输入对象！");
  }
}

console.log("深拷贝的递归方法，一层一层剥开");
var Object4=recursionDeepcopy(Object1);
console.log(Object4);
console.log("深拷贝修改属性后，本尊和副本形同陌路");
Object1.games.football="arsenal";
Object4.name="houyi";
console.log(Object1);
console.log(Object4);

//third is concat slice (es5  for array)
//concat和slice，不改变原数组，会生成新的数组
console.log("concat方法实现首层深拷贝，往下是浅拷贝");
var arr=[1,2,[1,2,3],{a:1}];
var arrCopy=arr.concat();
arr.push(5);
arr[2].push(4);
console.log(arr);
console.log(arrCopy);

console.log("slice方法实现首层深拷贝，往下是浅拷贝");
var arr1=[1,2,[1,2,3],{a:1}];
var arr1Copy=arr1.slice();
arr1.push(5);
arr1[2].push(4);
console.log(arr1);
console.log(arr1Copy);

//fourth is es6 methods
var Object5=Object.create({},{});













