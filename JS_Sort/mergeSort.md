####  利用自顶而下递归的 归并排序
```
var merge=function(left,right){ 
   var res=[];
   while(left.length&&right.length){
	 if(left[0]<=right[0]){
		 res.push(left.shift());
	 }  
	 else{
		 res.push(right.shift());
	 }
   }
   while(left.length){
	   res.push(left.shift());
   }
   while(right.length){
	   res.push(right.shift());
   }
   return res;
}

var mergeSort=function(arr){
	if(arr.length <= 1) return arr;
	var mid=parseInt(arr.length/2);
	var left=arr.slice(0,mid);
	var right=arr.slice(mid);
	return merge(mergeSort(left),mergeSort(right));
}

var A=[3,2,1,4,5,-9]; 
console.log(mergeSort(A));
```
