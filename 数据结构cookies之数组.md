##  数组  es5+es6
####  二维数组建立之简易方法
```
var grades=[[1,2],[1,2],[1,2]]
console.log(grades[2][2])
```
####  二维数组建立之复杂方法，道爷的方法，避免了初始化时候值是undefined
```
Array.matrix = function(numrows,numclos,initial){
  var arr=[];
  for(var i=0;i<numrows;i++){
     var columns=[];
     for(var j=0;j<numcols;j++){
        columns[j]=initial;
     }
     arr[i]=columns;
  }
  return arr;
}
var nums=Array.matrix(5,5,0);
```

### 不生成新数组的迭代器方法
####  forEach  不改变原数组，返回值
```
function test(num){
   console.log(num*num)
}

var nums=[1,2,3,4,5,6,7,8,9];
nums.forEach(test);
```
#### every   不改变原数组，所有都满足条件才会返回true，参数是一个返回布尔值的函数
```
function test(num){
   return num%2 == 0;
}

var nums=[2,4,7];
var result=nums.every(test);
console.log(result)     //false
```
#### some  不改变原数组，只要有一项满足条件就会返回true，参数是一个返回布尔值的函数
```
function test(num){
   return num%2 == 0;
}

var nums=[2,4,7];
var result=nums.some(test);
console.log(result)      //true
```
#### reduce  不改变原数组，用于累加值或者字符串的拼接，不断地对累加数组的后续元素调用函数参数，返回累加值
```
function test(num1,num2){
   return num1+num2;
}

var nums=[2,4,7];
var result=nums.reduce(test);     
console.log(result)     //13
```
##### reduceRight()方法，它其实和reduce()方法一样，区别是它是从数组的右边开始累加到左边的。

### 生成新数组的迭代器方法
#### map  不改变原数组，返回新数组，和forEach功能类似
```
function test(num){
   return num+5;
}

var nums=[2,4,7];
var result=nums.map(test);
console.log(result)  // [7,9,12]
console.log(nums)    // [2,4,7]
```
#### filter 不改变原数组，参数是一个返回布尔值的函数，过滤得到返回true的值，组成新数组作为返回值
```
function test(num){
   return num%2==0;
}

var nums=[2,4,7];
var result=nums.filter(test);
console.log(result)    // [2,4]
console.log(nums)      // [2,4,7]
```
### 数组基本功
#### 一维数组的建立
```
var a=[1,2,3];
var b=new Array();
var c=new Array(1,2,3);  //数组是[1,2,3]
var d=new Array(10);     //数组长度是10
var e="I love javascript".split("");  //split字符串生成数组，''是每个字符成为数组的一项
var d="I love javascript".split(" "); //空格为间隔，得到['I','love','javascript']
```
#### 判断是不是数组，方法一
```
var num1=[2,4,7];
var num2="sss" ;
var result1=Array.isArray(num1);    //true
var result2=Array.isArray(num2);    //false
```
#### 判断一个对象是不是数组，道爷的方法
```
var num1=[2,4,7];
var num2={name:1,person:2};
var is_array=function(value){
return Object.prototype.toString.apply(value) === '[object Array]';
//如果是非数组的对象，左值返回[object Object]，注意大小写
}
var result1=is_array(num1);        //true
var result2=is_array(num2);        //false
```
#### 数组的深浅拷贝
```
var a=[1,2,2]; var b=a;    //浅拷贝，赋值引用
var c=[1,2,3];             //深拷贝，得到副本
var d=[];
for(var i=0;i<c.length;i++){
  d[i]=c[i];
}
```

### 数组的常用函数
#### 查找
```
var nums=[1,2,3];
var position=nums.indexOf(1)    //返回0
//indexOf返回数组里找到的第一个数，没有就返回 -1
//lastIndexOf  从后往前找的第一个数
```
#### 数组转为字符串
```
var nums=[1,2,3];
var str=nums.toString();   //得到1，2，3
var str2=nums.join();      //得到1, 2, 3
var str=nums.join("");     //得到123
```
#### 已有数组创建新数组
##### concat  不改变原数组，返回拼接起来的数组
```
var nums1=[1,2,3];
var nums2=[4,5,6];
var num=nums1.concat(nums2);     //返回[1,2,3,4,5,6]
```
##### splice  改变原数组，返回被删除内容组成的数组，此函数第二个参数是去除的数目，第三个参数是增加的项
```
var num1=[1,2,3];
var num2=num1.splice(1,1,4);
console.log(num1)          // [1,4,3]
console.log(num2)          // [2]

```
##### slice 不改变原数组，返回截取内容组成的数组
```
var num1=[1,2,3];
var num2=num1.slice(1,2);      //截取从1开始，但是不到2
console.log(num1)              // [1,2,3]
console.log(num2)              // [2]
``` 

#### 增删改变数组
##### 尾部增删
```
//增加的方法
var num=[1,2,3];
var a=num.push(4);   //a是被添加的元素
num[num.length]=5;

//删除的方法
var a=num.pop();    //a是被删除的值
```
##### 头部增删
```
var num=[1,2,3];
num.unshift(1);      //num变为[1,1,2,3]，unshift返回被添加的元素
var a=num.shift();   //a是被删除的值
```
#### 排序
##### sort  排序，默认是把每一项当做字符串来排序，会改变原数组
```
var num1=[3,22,11];
var num2=num1.sort();
console.log(num1)        // [11,22,3]
console.log(num2)        // [11,22,3]

// 递增
var num1=[3,22,11];
var num2=num1.sort(function(a,b){
   return a-b;
});
console.log(num1)     // [3,11,22]
console.log(num2)     // [3,11,22]

//递减，改为return b-a
```
##### reverse  逆序，会改变原数组，返回逆序后的数组
```
var num1=[1,2,3];
var num2=num1.reverse();
console.log(num1)         // [3,2,1]
console.log(num2)         // [3,2,1]
```
### 综上，改变原数组的七个函数，分别是splice push pop unshift shift sort reverse

#### es6的数组
#####  Array.from  将类数组的对象和可遍历的对象转为数组，包括Set和Map
```
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr1)
console.log(arr2)
```
##### Array.of  将new Array的行为进行统一
```
var arr0 = new Array(2);
console.log(arr0);   // []
arr0.length;         // 2

var arr0 = Array.of(2);
console.log(arr0);             // [2]
var arr1 = Array.of(1,2,3);
console.log(arr1);             // [1,2,3]
```
##### copyWithin 数组数据的替换，第一个参数是开始替换的位置，第二个参数表示从哪里开始读数据，第三个是读到哪一个位置前为止，默认是数组尾部
```
[1, 2, 3, 4, 5].copyWithin(0, 3)     // [4, 5, 3, 4, 5]
```
##### find，传入一个回调函数，返回符合条件的第一个数，没有返回undefined。findIndex和它类似，返回的是下标，没有返回-1
```
var a=[1, 4, -5, 10].find((n) => n < 0);
console.log(a)                   // -5
var b=[1, 4, -5, 10].findIndex((n) => n < 0)
console.log(b)                  // 2
```
##### fill，给定初始值，填充一个数组，改变原数组
```
['a', 'b', 'c'].fill(7)    // [7, 7, 7]
new Array(3).fill(7)       // [7, 7, 7]
['a', 'b', 'c'].fill(7, 1, 2)     // ['a', 7, 'c']
```

##### entries()，keys()和values() —— 用于遍历数组。三者返回一个遍历器对象，使用for of来进行遍历
```
for(let index of ['a','b'].keys()){
console.log(index)                    //返回0 1下标
}

for(let item of ['a','b'].values()){
console.log(item)                     //返回数值 'a','b'
}

for(let [index,item] of ['a','b'].entries()){
console.log(index,item)              //返回 0 'a'，1 'b'
}
```
##### includes，es7的方法，判断是否包含某个值，返回布尔值
```
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, NaN].includes(NaN); // true
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true      -1表示从右边第一个开始
```
####  数组里面的-1，一般都是指从右边开始



