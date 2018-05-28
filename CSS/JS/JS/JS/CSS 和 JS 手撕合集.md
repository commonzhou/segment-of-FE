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

#### 深拷贝的实现
```
function recursionDeepcopy(obj){
  if(obj && typeof obj==="object"){
     var newobj=(Object.prototype.toString.apply(obj)==='[object Array]') ? [] : {};   //判断对象是不是数组
     for(let item in obj){
        if(obj.hasOwnProperty(item)){
	    let str = Object.prototype.toString.apply(obj[item]);
            if(str === '[object Array]' || str === '[object Object]'){      //  避免函数这样的对象发生循环引用的现象
                newobj[item]=recursionDeepcopy(obj[item]);   
            }
	    //  函数,date,正则之辈走这里  [object Function]
            else{     
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
```

####  圆周运动的CSS和JS版本
```
// 这是css版本的
<body>
    <div id="ball"> 
    </div>
    <style>
      #ball{
        position:absolute;
        top:30px; left:100px;
        width:20px; height:20px;background-color:green;
        border-radius:50%;
        transform-origin:50px 50px;
        animation:cycle 4s linear infinite;
      }
      @keyframes cycle{
        0%{transform:rotate(0deg);}
        100%{transform:rotate(360deg);}
      }
    </style>
  </body>
```
```
// 这是JS主打的
<body>
    <div id="ball"> 
    </div>
    <style>
      #ball{
        position:absolute;
        top:30px; left:100px;
        width:20px; height:20px;background-color:green;
        border-radius:50%;
        transform-origin:50px 50px;
      }
    </style>
    <script>
      var ball=document.getElementById("ball");
      function circle(){
           var startTime=Date.now(); var gap=4000;
           requestAnimationFrame(function update(){
                 var currentTime=Date.now();
                 var freq=(currentTime-startTime)/gap;
                 ball.style.transform="rotate(" + 360*freq + "deg)";
                 requestAnimationFrame(update);
           });
      }
      circle();  
    </script>
  </body>
```

#### div移动300px
```
<div id="ball"> 
    </div>
    <style>
      #ball{
        position:absolute;
        top:30px; left:100px;
        width:20px; height:20px;background-color:green;
      
        /*transform-origin:50px 50px;   旋转的时候用的旋转中心*/
        animation:cycle 3s linear 1000ms infinite alternate;
        /*绑定的关键帧  动画一次的时间  动画运动函数  延迟  infinite无限/n次数 alternate是正反轮流/normal是正常 */
      }
      @keyframes cycle{
        0%{transform:translateY(0px);}
        100%{transform:translateY(300px);}   /*X向右  Y向下*/
      }
    </style>
```

#### transition和hover
```
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:blue;
transition:width 2s ease-in-out;      /* transition绑定了width */
-moz-transition:width 2s; /* Firefox 4 */
-webkit-transition:width 2s; /* Safari and Chrome */
-o-transition:width 2s; /* Opera */
}

div:hover
{
width:300px;
}
</style>
</head>
<body>

<div></div>

<p>请把鼠标指针移动到蓝色的 div 元素上，就可以看到过渡效果。</p>

<p><b>注释：</b>本例在 Internet Explorer 中无效。</p>

</body>
</html>
```

#### 函数的节流和防抖
```
/* 节流，标志位，用于scroll和resize */
var canRun=true;
document.getElementById('throttle').onscroll=function(){
  if(!canRun){            //  判断是否空闲
     return;
  }
  canRun=false;
  setTimeout(function(){
    func();              //  要执行的函数
    canRun=true;
  },300);
};
```
```
/* 防抖，时间戳/定时器，用于用户注册登录时，用户输入完成后，才进行判断 */
var timer=false;
document.getElementById('debounce').onscroll=function(){
  clearTimeout(timer);        //  清除上一次未执行的代码
  timer=setTimeout(function(){
    func();                   //  要执行的函数
  },300);
};
```
##### 上面的写法虽然正确，但是不够geek，改进如下
```
/* 节流 */
function throttle(fn,interval=300){
  let canRun=true;
  return function(){
    if(!canRun) return;
    canRun=false;
    setTimeout(()=>{
      fn.apply(this,arguments);     //  箭头函数，故直接用this
      canRun=true;
    },interval);
  };
}
```
```
/* 防抖 */
function debounce(fn,interval=300){
  let timer=null;
  return function(){
    clearTimeout(timer);
    timer=setTimeout(()=>{
      fn.apply(this,arguments);
    },interval);
   };
}
```
##### 什么，还不够geek
```
/*防抖的另一种写法*/
export function _debounce(func,wait){
    let _timestamp,_timer
    return function(){
        let now=Date.now()
        if(_timestamp && ((now-_timestamp)<wait)){
           clearTimeout(_timer)
        }
        _timestamp=now;
        _timer=setTimeout(func.bind(this,...arguments),wait)
    }
}
```
##### 函数节流的时候，如果使用setTimeout，异步执行如果遇上了运行时间很长的函数，不好，因此直接判断时间戳最佳
```
 function throttle(fn,delay = 300){
        let last=0;
	let that=this;
	return function(){
	  let curr=new Date().getTime();    // 很大的一个毫秒数
	  if(curr - last > delay){
	    // 第一次执行 curr-last，就是curr，大于delay必然，首次就直接来执行，然后更新last
	    fn.apply(that,arguments);
	    last=curr;
	  }
	}
 }
 
```

####  嵌套数组的拆分
##### 从[1,[2,3]]到[1,2,3]
```
var a=[1,[2,[3,4]],4,5];
var temp=[];
function test(arr){
   var len=arr.length;
   for(let i=0;i<len;i++){
      if(typeof arr[i] !== 'number'){
        test(arr[i]);
      }
      else{
         temp.push(arr[i]);
      }
   }
}    
test(a); 
for(let v of temp){
  console.log(v);
}
```
##### 装逼必备的方法是generator生成器
```
var arr=[1,[2,[3,4]],4,5];
var flat=function* (a){
  var length=a.length;
  for(let i=0;i<length;i++){
    let item=a[i];
    if(typeof item !== 'number'){
      yield* flat(item);
    }
    else{
      yield item;
    }
  }
};

for(let v of flat(arr)){
  console.log(v);
}
```
#### 拓展一下
```
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for(let i=0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let x of iterTree(tree)) {
  console.log(x);
}
```

#### 三角形的绘制
```
/* 汇聚了border svg canvas三种方法*/
<html>
<head>
<meta http-equiv="Content-Type" content="text/html">
</head>
<body>
 <div class="triangle1"></div>
 <svg width="100" height="100">
    <polygon points="50,0 100,100 0,100" style="fill:red;">
 </svg>
 <canvas id="mycanvas" width="100" height="100"></canvas>
<style>
div{
 margin:50px;
}
.triangle1{
 width:0; height:0;
 border-width:50px;
 border-style:solid;
 border-color:transparent transparent red transparent;
}
</style>
<script>
var canvas=document.getElementById('mycanvas');
var ctx=canvas.getContext('2d');
ctx.beginPath();
ctx.fillStyle='red';
ctx.moveTo(50,0);
ctx.lineTo(0,100);
ctx.lineTo(100,100);
ctx.fill();
</script>
</body>
</html>
```
#### 原生拖动一个圆形、勉强算是球吧
```
<!dcotype>
<html>
<head></head>
<body>
  <canvas id="can" width="400" height="400">
     您的浏览器不支持canvas
  </canvas>
  
  <script type="text/javascript">
      var can=document.getElementById("can");
      var ctx=can.getContext("2d");  
      var isDown =false;
      var dx=0,dy=0;
      var centerX=50,centerY=50;
      function createCircle(x,y){
        ctx.clearRect(0,0,can.width,can.height);
        ctx.beginPath();
        ctx.fillStyle="blue";
        ctx.arc(x,y,30,0,Math.PI*2);
        ctx.fill();
      } 
      createCircle(centerX,centerY);          // 画圆形
      can.onmousedown=function(ev){
          var e=ev||event;
          dx=e.clientX;
          dy=e.clientY;
          isDown = true;
          can.onmousemove=function(ev){
              var e=ev||event;
              var mx=e.clientX;
              var my=e.clientY;
              var _x=mx-dx;
              var _y=my-dy;
              createCircle(centerX+_x,centerY+_y);
          }
      }
      can.onmouseup=function(ev){
          var e=ev||event;
          isDown=false;
          centerX += (e.clientX - dx);
          centerY += (e.clientY - dy);
          can.onmousemove=null;
      }
  </script>
</body>
</html>
```
##### 闭包实现单例模式
```
var singleton=function(){
    var privateVariable=10;
	function privateFunction(){
	   return false;
	}
	return {
	  publicProperty:true;
	  publicMethod:function(){
	     privateVariable++；
		   return privateFunction();
	  }
	}
}();

```

##### CSS绘制动态的波浪线，原理是利用border-radius:45%的椭圆的旋转和上下微移来进行波浪的模拟
```
<div class="container">
<div class="wave">
</div>
</div>
<style>
.container{
  position:absolute;
  width:200px;
  height:200px;
  padding:5px;
  border:5px solid rgb(118,218,255);
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  border-radius:50%;
  overflow:hidden;
}
.wave{
  position:relative;
  width:200px;
  height:200px;
  background-color:rgb(118,218,255);
  border-radius:50%;
}
.wave::before,
.wave::after{
  content:"";
  position:absolute;
  width:400px;
  height:400px;
  top:0;
  left:50%;
  background-color:rgba(255,255,255,0.4);
  border-radius:45%;
  transform:translate(-50%,-70%) rotate(0);
  animation:rotate 6s linear infinite;
  z-index:10;
}
.wave::after{
  border-radius:47%;
  background-color:rbga(255,255,255,0.9);
  transform:translate(-50%,-70%) rotate(0);
  animation:rotate 10s linear -5s infinite;
  z-index:20;
}
@keyframes rotate{
  50%{
    transform:translate(-50%,-73%) rotate(180deg);
  }
  100%{
    transform:translate(-50%,-70%) rotate(360deg);
  }
}
</style>
```
#####  CSS静态波浪线，利用径向渐变radial-gradient
```
<div class="wrapper">
<div class="wave">
</div>
</div>
<style>
.wrapper{
  padding:10px;
  background-color:#eee;
}
.wave{
  width:100%;
  height:10px;
  background-image: -webkit-radial-gradient(circle, transparent, transparent 9px, orange 9px, orange 10px, transparent 10px, transparent);
  background-image: -moz-radial-gradient(circle, transparent, transparent 9px, orange 9px, orange 10px, transparent 10px, transparent);
  background-image: radial-gradient(circle, transparent 8px, orange 9px, orange 10px, transparent 11px);
  background-size:  20px 20px;      // 一个背景图片的大小，宽20px，高20px，一个整圆，此时默认是repeat的，所以横向延伸，但是高10px，所以是半圆
  //  radial-gradient 里的像素值是断点，颜色变化的间隔点，8和9相隔1px是为了消除锯齿效应，9和10是橙色的起点和终点
}
</style>

```

##### CSS实现等比例缩放的盒子
```
<style>
.item {
    float: left;
    width: 20%;
    margin: 10px 2%;
    height: 0;
    padding-bottom: 10%;
    background-color: #dbe0e4;
    
    //background-color的范围：这种颜色会填充元素的内容、内边距和边框区域，扩展到元素边框的外边界（但不包括外边距）。
    //如果边框有透明部分（如虚线边框），会透过这些透明部分显示出背景色。
    // 利用了当padding-bottom为百分数的时候，其值是和父元素的宽来取百分比的，这个黑科技啊。你不知道的css这书。。。。
    
}
</style>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
```

#####  原生JS实现 bind call apply，使用了ES6
```
let one={
     name:'one',
	 sayName:function(age){
	   console.log(`Hello,我是 ${this.name}，年龄是 ${age}`);
	 }
   }
   let day={
     name:'zf'
   }
   
   Function.prototype.myBind = function(context){
      context = Object(context) || window;
	  context.__fn__ = this;
	  let args = [...arguments].slice(1);
	  context.__result__ = function(){
	    let res_args = [...args,...arguments];
		context.__fn__(...res_args);
	  }
	  return context.__result__;
   } 
   
   Function.prototype.myCall = function(context){
      context = Object(context) || window;
	  context.__fn__ = this;
	  let res_args = [...arguments].slice(1);
	  let result =  context.__fn__(...res_args);
	  delete context.__fn__;
	  return result;
   }
   
   Function.prototype.myApply = function(context){
      context = Object(context) || window;
	  context.__fn__ = this;
	  let res_args = arguments[1];
	  let result = context.__fn__(...res_args);
	  delete context.__fn__;
	  return result;
   }
   
   one.sayName.myBind(day,22)();
   one.sayName.myCall(day,55);
   one.sayName.myApply(day,[123]);
   
   // myBind里面，context就是传入的上下文 day对象
   // this便是调用了myBind的函数对象sayName
   // res_args考虑了参数的合并，因为bind是可以进行延迟传参的
   // myBind为了返回函数，在fn的外层套了一层函数，返回该函数就行
   // call和apply的实现可以参考这个，需要变化的是参数的处理、函数立即执行
   
```

##### JS实现倒计时
```
function countTime(times){
     let timer = null;
     timer = setInterval(function(){
	    let day=0,hour=0,minute=0,second=0;
		if(times>0){
		  day = Math.floor(times/(60*60*24));
		  hour = Math.floor(times/(60*60))-(day*24);    // 时间全部化为小时之后，减去已有天数的小时
		  minute = Math.floor(times/60)-(day*24*60)-(hour*60);
		  second = Math.floor(times)-(day*24*60*60)-(hour*60*60)-(minute*60);
		}
		if(day<=9) day='0'+day;
		if(hour<=9) hour = '0'+hour;
		if(minute<=9) minute = '0'+minute;
		if(second<=9) second = '0'+second;
		
		console.log(day+"天:"+hour+"小时:"+minute+"分钟:"+second+"秒");
		times--;
 	 },1000);	
     if(times <= 0){
	   clearInterval(timer);
	 }	 
   }
   countTime(11111111111);
```



