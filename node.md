### 文件
#####  小文件拷贝
```
var fs = require('fs');
function copy(src,dst){
   fs.writeFileSync(dst,fs.readFileSync(src));
}
function main(argv){
  copy(argv[0],argv[1]);
}
main(process.argv.slice(2));

//  node back.js a.html b.html
//  使用node的命令行参数来执行代码

```

##### 大文件拷贝
```
var fs = require('fs');
function copy(src,dst){
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv){
   copy(argv[0],argv[1]);
}
main(process.argv.slice(2));

// pipe将只读数据流和只写数据流连接起来
// 大文件的拷贝，小心内存爆喽

```

##### 
