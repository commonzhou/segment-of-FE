#### 插入排序，其过程和打扑克牌差不多了。。
```
var insertionSort=function(arr){
	var len = arr.length;
	if(len<=1) return arr;
	var preIndex,current;
	for(var i=1;i<len;i++){
	  preIndex=i-1; current=arr[i];                       
	  while(preIndex>=0 && arr[preIndex]>current){       //每一个比current大的数，向后挪位；然后current遇到比自己小的，就坐下了，和打牌类似
		  arr[preIndex+1]=arr[preIndex];
		  preIndex--;
	  }
	  arr[preIndex+1]=current;
	}
	return arr;
}

var A=[3,2,1,4,5,-9]; 
console.log(insertionSort(A));

```
