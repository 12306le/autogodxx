# 示例：$file

> 来源：上传 zip 中 `12` 个原始示例文件自动合并。

## $file-文件系统-01.罗列文件

```javascript
//AIGame 官方示例

//准备路径
let path = "/sdcard";
//罗列出文件
let files = $file.ls(path);

for(let i = 0 ; i < files.size() ; i++){
    log(files.get(i));
}

log("罗列(使用过滤器)");
let files_A = $file.ls(path,(path)=>{
    let fileName = $file.name(path);
    //如果文件名称以'.'开始,那么就通过
    return $str.startWith(fileName, ".");
});

//找到隐藏文件夹
for(let i = 0 ; i < files_A.size() ; i++){
    log(files_A.get(i));
}


//示例结束
```

## $file-文件系统-02.判断文件

```javascript
//AIGame 官方示例

//false:文件不存在或存在是目录
let isFile = $file.isFile("/sdcard/a.txt");
log("是否是文件",isFile);

//是否是目录
let isDir = $file.isDir("/sdcard");
log("是否是目录",isDir);

//是否是空目录
let isEmptyDir = $file.isEmptyDir("/sdcard");
log("是否是空目录",isEmptyDir);

//是否是空文件或文件夹
let isEmpty = $file.isEmpty("/sdcard");
log("是否是空文件",isEmpty);

//示例结束
```

## $file-文件系统-03.拼接路径

```javascript
//AIGame 官方示例


let path1 = $file.join("sdcard", "Pictures");

log(path1);

let path2 = $file.join("sdcard", "Pictures", "我的项目", "res");

log(path2);

//示例结束
```

## $file-文件系统-04.创建文件

```javascript
//AIGame 官方示例

$file.create("/sdcard/测试.txt");


//示例结束
```

## $file-文件系统-05.创建目录

```javascript
//AIGame 官方示例

let path = "/sdcard/AAA";
$file.mkdir(path);

//判断目录是否存在
if($file.exists(path)){
    log("目录创建完成");
}

//最后删除(没必要留着)
$file.del(path);

//示例结束
```

## $file-文件系统-06.读取文件

```javascript
//AIGame 官方示例

//开始读取文件
let content = $file.read("/sdcard/测试.txt");
log(content);

//示例结束
```

## $file-文件系统-07.写入文件

```javascript
//AIGame 官方示例


$file.write("我是内容","/sdcard/测试.txt");


//示例结束
```

## $file-文件系统-08.追加文件

```javascript
//AIGame 官方示例


$file.append("我是内容","/sdcard/测试.txt");

//示例结束
```

## $file-文件系统-09.拷贝文件

```javascript
//AIGame 官方示例

let from = "/sdcard/测试.txt";
let to = "/sdcard/测试2.txt";
$file.copy(from, to);

//最后判断文件是否存在
if($file.exists(to)){
    log("拷贝成功");
}

//示例结束
```

## $file-文件系统-10.移动文件

```javascript
//AIGame 官方示例

let from = "/sdcard/测试.txt";
let to = "/sdcard/Pictures/测试2.txt";
$file.move(from, to);

//最后判断文件是否存在
if($file.exists(to)){
    log("移动成功");
}


//示例结束
```

## $file-文件系统-11.删除文件

```javascript
//AIGame 官方示例

let path = "/sdcard/Pictures/测试2.txt";
$file.del(path);

//最后判断文件是否存在
if(!$file.exists(path)){
    log("删除成功");
}


//示例结束
```

## $file-文件系统-12.重命名

```javascript
//AIGame 官方示例

let from = "/sdcard/测试.txt";
let to = "/sdcard/测试2.txt";
$file.rename(from, to);

//最后判断文件是否存在
if($file.exists(to)){
    log("命名成功");
}


//示例结束
```
