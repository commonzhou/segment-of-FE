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
