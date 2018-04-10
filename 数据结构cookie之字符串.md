#### 字符串的方法在此
##### 字符方法  charAt和charCodeAt
```
var str="hello world";
var res=str.charAt(1);
console.log(res);         // e   charCodeAt 返回的是字符编码
```

##### 字符串操作方法  concat   slice  substring  substr  均不会改变原字符串
```
var str="hello ";
var res=str.concat("world","!");
console.log(res);         // hello world!
console.log(str);         // hello
```
```
var str="hello world";
var res1=str.slice(3,7);
var res2=str.substring(3,7);
var res3=str.substr(3,7);
console.log(res1);     //lo w
console.log(res2);     //lo w
console.log(res3);     //lo worl
```
#####  slice和substring类似，第2个参数表示到这个位置前，但substr的第2个参数表示个数，从第1个参数的位置开始取这么多个

##### 查找子字符串  indexOf  找第一个匹配的，第2个参数定起始查找位置 
```
var str="hello world";
var res1=str.indexOf('o');
var res2=str.indexOf('o',6);
var res3=str.indexOf('o',8);
console.log(res1);     //   4
console.log(res2);     //   7
console.log(res3);     //   -1  找不到是-1

// lastIndexOf 从后向前找，但是下标的记号和 indexOf一样
```

##### 操作字符串  trim toLocaleLowerCase() toLocaleUpperCase()
```
// trim不改变原字符串
var str=" hello world ";  
var res=str.trim();
console.log(res);    //hello world     
console.log(str);    // hello world   
```
```
toLocaleLowerCase 转为全小写，针对地区来实现，相比toLowerCase更推荐
```

#####  正则表达式的匹配
```
var str="bat,cat,wat";  
var pattern=/.at/;
var res=str.match(pattern);  //返回一个数组，匹配第一个
console.log(res);           // ["bat", index: 0, input: "bat,cat,wat", groups: undefined] ,index:0说明.匹配所有
```
