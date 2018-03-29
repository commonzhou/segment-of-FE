#### [张鑫旭的博文](http://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/)

```
<html>
<head>
   <meta charset="utf-8"> 
</head>
<body>
<div class="container">
   <div class="sidebar">
   <div class="dustin">垃圾箱</div>
   <div class="dragremind"></div>
   </div>
   <div class="dragbox">
   <div class="draglist" title="拖我" draggable="true">列表一</div>
   <div class="draglist" title="拖我" draggable="true">列表二</div>
   <div class="draglist" title="拖我" draggable="true">列表三</div>
   <div class="draglist" title="拖我" draggable="true">列表四</div>
   <div class="draglist" title="拖我" draggable="true">列表五</div>
   <div class="draglist" title="拖我" draggable="true">列表六</div>
   </div>
   
</div>
   <style>
      .container{
	     display:flex;
		 justify-content: center;
		 width:60vw;
		 height:70vh;
	  }
	  .sidebar{
	    flex:0 0 30%;
	  }
	  .dragbox{
	    flex:0 0 70%;
	  }
	  .dustin{
	    width:10vw;
		height:20vh;
		border:1px solid black;
		margin-top:20px;
	  }
	  .draglist{
	    height:8vh;
		width:20vw;
		border:1px solid black;
		margin-top:20px
	  }
   </style>
   <script>
      var dusbin = document.getElementsByClassName('dustin')[0];
	  var remind = document.getElementsByClassName('dragremind')[0];
	  var drags = document.getElementsByClassName('draglist');
	  var eledrag=null;
	  for(var i=0;i<drags.length;i++){
	    drags[i].onselectstart=function(){
		   return false;
		};
		drags[i].ondragstart=function(e){
		  e.dataTransfer.effectAllowed="move";
		  e.dataTransfer.setData("text",e.target.innerHTML);
		  e.dataTransfer.setDragImage(e.target, 0, 0);
          eledrag = e.target;
          return true;
		};
		drags[i].ondragend = function(e) {
        /*拖拽结束*/
        e.dataTransfer.clearData("text");
        eledrag = null;
        return false;
       };
	  }
	  dusbin.ondragover=function(e){
	     e.preventDefault();
		 return true;
	  };
	  dusbin.ondragenter=function(e){
	    e.preventDefault();
	    this.style.color="red";
		return true;
	  };
	  dusbin.ondrop=function(e){
	     if(eledrag){
		    remind.innerHTML='<strong>'+eledrag.innerHTML+'</strong>被扔进了垃圾箱';
			eledrag.parentNode.removeChild(eledrag);
		 }
		 this.style.color="blue";
		 return false;
	  };
   </script>
</body>
</html>
```
