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

##### pipe的内在原理，加入文件读写的防爆仓机制
```
var fs = require('fs');
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);
rs.on('data',function(chunk){
	if(ws.write(chunk) === false){
		rs.pause();
	}
});
rs.on('end',function(){
	ws.end();
});
ws.on('drain',function(){
	rs.resume();
});

```

##### 二进制数据的新建、复制、和字符串的相互转换
```
 var bin = new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
 var tempBin = new Buffer('hello','utf-8');
 var dup = new Buffer(bin.length);
 bin.copy(dup);
 dup[0] = 0x48;
 console.log(bin);
 console.log(dup);
 console.log(bin.toString('utf-8'));
 console.log(tempBin);
 
```


