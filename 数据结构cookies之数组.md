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
