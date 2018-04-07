#### 快排
```
const sortIntegers = function (A) {
    if(A.length<=1){
        return A;
    }
    else{
        var pivot=Math.floor(A.length/2);              //找到枢纽
        var pivotNum = A[pivot];
        var left=[]; var right=[];
        for(var i=0;i<A.length;i++){
            if(A[i]<pivotNum) left.push(A[i]);
            if(A[i]>pivotNum) right.push(A[i]);
        }
        return sortIntegers(left).concat([pivotNum],sortIntegers(right));
    }
};
var A=[3,2,1,4,5];
console.log(sortIntegers(A));

```
#####  上面这个方法虽然简易，但是每次都新建了两个数组，不如下面这个方法节约空间
```
function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition(arr,left,right){
// 分大、小区操作，设置基准值
  var pivot=left,index=pivot+1;
  for(var i=index;i<=right;i++){
     if(arr[i]<arr[pivot]){
       swap(arr,i,index);       //这一步将大数和小数互换
       index++;
     }
  }
  swap(arr,pivot,index-1);      //将基准放在中间
  return index-1;
}
function quickSort(arr,left,right){
   var len=arr.length,partitionIndex;
   var left= typeof left !='number' ?0:left;
   var right= typeof right !='number'?len-1:right;
   if(left<right){
     partitionIndex= partition(arr,left,right);
     quickSort(arr,left,partitionIndex-1);
     quickSort(arr,partitionIndex+1,right);
   }
   return arr;
}

var a=[3,2,5,8,7,2];
console.log(quickSort(a));

```
