##  数组
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
##### concat
```
var nums1=[1,2,3];
var nums2=[4,5,6];
var num=nums1.concat(nums2);     //返回[1,2,3,4,5,6]
```
##### splice
```

```
