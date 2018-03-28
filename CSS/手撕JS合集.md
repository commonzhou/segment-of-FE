#### 首先是Ajax
```
let xhr=new XMLHttpRequest()
xhr.open('POST','/xxxxx')
xhr.onreadystatechange=function(){
 if(xhr.readyState === 4 && xhr.status === 200){    //status也可以是200-300和304，这时候也对
   console.log(xhr.responseText)
 }
}
xhr.send('a=1&b=2')
```

#### 第二是Promise
```
function xxx(){
   return new Promise(function(resolve,reject){
      setTimeout(()=>{
        resolve() 或者 reject()
      },3000)
   })
}
xxx().then(...)
```

#### async await  同步方式写异步
```
function wait(time){
   return new Promise(
     function(resolve,reject){
       setTimeout(resolve,time)
     }
   );
}
(async function(){
  await wait(5000);
  console.log('step 4');
  await wait(1000);
  console.log('step 5');
})();
```

#### 第四是阿森纳，哈哈哈哈
#### 第五是数组去重，方法有哈希，Set，WeakMap
```
1.哈希
var a = [4,2,5,6,3,4,5]
 var hashTab = {}
 for(let i=0; i<a.length;i++){
     if(a[i] in hashTab){
         // 什么也不做
     }else{
         hashTab[ a[i] ] = true
     }
 }
 //hashTab: {4: true, 2: true, 5: true, 6:true, 3: true}
 console.log(Object.keys(hashTab))
 
 2.Set
 Array.from(new Set(a))
 
 3.WeakMap
 
```

#### 继承的实现
```
1.类和extends
class Animal{
   constructor(){
     this.body='哈哈'
   },
  move(){} 
}
class Human extends Animal{
  constructor(name){
    super()
    this.name=name
  },
  useTools(){}
}
var tamarous=new Human()

2.原型链
function Animal(){
  this.body='肉体'
}
Animal.prototype.move=function(){}
function Human(name){
   Animal.apply(this,arguments)
   this.name=name
}
var f=function(){}
f.prototype=Animal.prototype
Human.prototype=new f()
Human.prototype.useTools = function(){}
var frank = new Human()
```










