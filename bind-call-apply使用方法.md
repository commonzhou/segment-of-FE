```
<script>
   let one={
     name:'one',
	 sayName:function(age){
	   console.log(`Hello,我是 ${this.name}，年龄是 ${age}`);
	 }
   }
   let day={
     name:'zf'
   }
   let newday={
     name:'laojieji'
   }
   let newnewday={
      name:'heheda'
   }
   one.sayName.apply(day,[22]);         // apply传参数是一个数组
   one.sayName.call(newday,45);         // call传参数是一个个传的
   one.sayName.bind(newnewday,77)();    // bind返回函数，需要执行
   one.sayName.bind(newnewday)(99);     // 延迟传参骚操作，bind传参数是一个个传的
</script>
```
