# $file - 文件系统

- 更新时间:2026-01-30 19:32:52

> 文件系统
> 
> 文件系统本身是用来操作外部存储(sdcard)文件的，但是部分函数也可以操作assets目录(app打包后的项目目录)下的文件。
> 
> 如果你希望通过$file操作assets下的文件，你需要知道如下规则：
> 
> 1.assets中的文件夹不能以_开头(安卓机制)否则无法读取文件
> 
> 2.assets只能进行读取操作，因此我们可以进行的操作有：罗列文件、拷贝文件、读取文件




### uri(path)

> 获得Uri对象
> 
> 通过文件提供器{FileProvider}来解析文件路径，获得{Uri}对象。
> 
> 如果你想单纯的解析字符串构建Uri对象，那么可以使用$http.uri("uriStr");函数
> 
> 该函数只能操作外部存储(sdcard)文件，不能操作assets目录下的文件。

- 参数 : path {String} 路径 
- 返回 : {Uri} Uri对象
- 版本 : 1.3.7


```javascript
//一般用来获取图片uri
let uri = $file.uri("/storage/emulated/0/Pictures/小红.png");
```


### open(path)

> 获得File对象
> 
> 该函数本质上是一个拼接函数，无论传入的path是否存在，都会根据构想返回一个完整路径。

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {File} 文件对象
- 版本 : 1.0.0


```javascript
//获得res目录
let file = $file.open("res");
alert("文件对象",file);///storage/emulated/0/Pictures/API教学/res
```


### isFile(path)

> 是否是文件
> 
> 如果传入的路径不存在或者不是目录都会返回false，该函数只能操作外部存储(sdcard)文件，不能操作assets目录下的文件。

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {boolean} 是否是文件
- 版本 : 1.0.0


```javascript
//是否是文件
log($file.isFile("res"));//false
log($file.isFile("main.js"));//true
```


### isDir(path)

> 是否是文件夹
> 
> 如果传入的路径不存在或者不是目录都会返回false，该函数只能操作外部存储(sdcard)文件，不能操作assets目录下的文件。

- 参数 : path {string} 路径 
- 返回 : {boolean} 是否是文件夹
- 版本 : 1.0.0


```javascript
//是否是目录
log($file.isDir("res"));//true
log($file.isDir("main.js"));//false
```


### isEmptyDir(path)

> 是否是空文件夹
> 
> 只有当目标路径是目录并且存在文件的时候才会返回false，如果文件不存在或者不是目录都会返回true。

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {boolean} 是否是空文件夹
- 版本 : 1.0.0


```javascript
//是否是空目录
log($file.isEmptyDir("res"));//false
log($file.isEmptyDir("xml"));//true
```


### isEmpty(path)

> 是否是空文件或文件夹
> 
> 如果不存在则返回false
> 
> 如果是文件则判断文件内容是否为空
> 
> 如果是文件夹则判断文件夹是否为空

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {boolean} 是否是文件夹
- 版本 : 1.0.0


```javascript
//是否是空文件或文件夹
log($file.isEmpty("res"));//false
log($file.isEmpty("xml"));//true
log($file.isEmpty("main.js"));//false
```


### join(parent, child)

> 路径拼接

- 参数 : parent {string} 路径(不支持相对路径) 
- 参数 : child {string} 路径(不支持相对路径) 
- 返回 : {string} 路径
- 版本 : 1.0.0


```javascript
let path = $file.join("sdcard", "Pictures");
alert("路径",path);
```


### join(path)

> 拼接路径

- 参数 : path {string[]} 路径数组(不支持相对路径) 
- 返回 : {string} 拼接好的路径
- 版本 : 1.0.0


```javascript
let path = $file.join(["sdcard", "Pictures", "我的项目", "res"]);
alert("路径",path);
```


### create(path)

> 创建文件
> 
> 如果目录不存在,则会自动创建目录。此函数只能操作外部存储(sdcard)文件，不能操作assets目录下的文件。

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {boolean} 是否创建成功(文件存在会返回false)
- 版本 : 1.0.0


```javascript
$file.create("xml/res/test.js");
```


### mkdir(path)

> 创建目录
> 
> 只能操作外部存储(sdcard)目录，不能操作assets目录下的目录。

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {boolean} 是否创建成功
- 版本 : 1.0.0


```javascript
$file.mkdir("xml/kir");
```


### exists(path)

> 路径是否存在

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {boolean} 是否存在
- 版本 : 1.0.0


```javascript
$file.create("./测试文件夹/a.js");
if($file.exists("./测试文件夹/a.js")){
    alert("文件","路径存在");
}
```


### ensureDir(path)

> 确保文件夹存在
> 
> 如果路径中的目录不存在则会创建目录

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {string} 路径
- 版本 : 1.0.0


```javascript
//创建目录:/测试文件夹/demo
$file.ensureDir("./测试文件夹/demo/a.js");
```


### read(path)

> 读取文件
> 
> 此函数支持读取assets中的文件，适用于打包app后读取文本文件。在未打包时将会读取sdcard上的文件。

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {string} 文本内容
- 版本 : 1.0.0


```javascript
//开始读取文件
let content = $file.read("./main.js");
alert("内容",content);
```


### read(path, encoding)

> 读取文件
> 
> 此函数支持读取assets中的文件，适用于打包app后读取文本文件。在未打包时将会读取sdcard上的文件。

- 参数 : path {string} 路径(支持相对路径) 
- 参数 : encoding {string} 编码 
- 返回 : {string} 文本内容
- 版本 : 1.0.0


```javascript
let content = $file.read("./main.js","gbk");
alert("内容",content);
```


### reads(path)

> 读取文件行
> 
> 此函数支持读取assets中的文件，适用于打包app后读取文本文件。在未打包时将会读取sdcard上的文件。

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {string[]} 文件行列表
- 版本 : 1.0.0


```javascript
let list = $file.reads("./main.js");
alert("内容",list);
```


### readByte(path)

> 读取文件字节
> 
> 此函数支持读取assets中的文件，适用于打包app后读取二进制文件。在未打包时将会读取sdcard上的二进制文件。

- 参数 : path {string} 路径 
- 返回 : {byte[]} 文件字节
- 版本 : 1.0.0


```javascript
let data = $file.readByte("./main.js");
log("内容:",data);
```


### write(content, path)

> 写入文件
> 
> 只适用于写入到外部存储

- 参数 : content {string} 内容 
- 参数 : path {string} 路径(支持相对路径) 
- 版本 : 1.0.0


```javascript
$file.write("我是内容","./xml/a.js");
```


### write(content, path, encoding)

> 写入文件
> 
> 只适用于写入到外部存储

- 参数 : content {string} 内容 
- 参数 : path {string} 路径 
- 参数 : encoding {string} 编码 
- 版本 : 1.0.0


```javascript
$file.write("我是内容","./code/a.js","GBK");
```


### writes(lines, path)

> 写入行数据
> 
> 只适用于写入到外部存储

- 参数 : lines {string[]} 行数据 
- 参数 : path {string} 路径(支持相对路径) 
- 版本 : 1.0.0


```javascript
$file.writes(["我是内容1","我是内容2","我是内容3"],"./code/a.js");
```


### add(content, path)

> 追加文件
> 
> 只适用于写入到外部存储

- 参数 : content {string} 内容 
- 参数 : path {string} 路径(支持相对路径) 
- 版本 : 1.0.0


```javascript
//追加一行字符并且换行
$file.add("我是新的内容\n","./code/a.js");
```


### adds(lines, path)

> 追加行数据
> 
> 只适用于写入到外部存储

- 参数 : lines {string[]} 行数据 
- 参数 : path {string} 路径(支持相对路径) 
- 版本 : 1.0.0


```javascript
//无需换行符号,自动换行
$file.adds(["追加01","追加02","追加03"],"./code/a.js");
```


### writeByte(bytes, path)

> 写入文件
> 
> 只适用于写入到外部存储

- 参数 : bytes {byte[]} 内容 
- 参数 : path {string} 路径(支持相对路径) 
- 版本 : 1.0.0


```javascript
$file.writeByte([09,46,36,7,89,34],"./xml/mFile.txt");
```


### copy(src, dest)

> 拷贝文件
> 
> 支持将assets文件拷贝到外部存储，也支持将外部存储文件拷贝到指定路径中，虽然目标路径支持书写相对路径，但是建议源路径使用相对路径，而目标路径最好用绝对路径。

- 参数 : src {string} 源(支持相对路径) 
- 参数 : dest {string} 目标(支持相对路径) 
- 版本 : 1.6.8


```javascript
//把assets文件拷贝到sdcard上
$file.copy("res/a.txt","/sdcard/Pictures/测试项目/res/a.txt");
```


### move(src, dest)

> 移动文件或文件夹
> 
> 此函数只适用于操作外部存储文件

- 参数 : src {string} 源文件夹(支持相对路径) 
- 参数 : dest {string} 目标文件夹(支持相对路径) 
- 版本 : 1.0.0


```javascript
//把位于modules文件夹下的所有文件都移动到xml下
//注意传入的都是目录(可以是相对路径)
let ok = $file.move("modules","xml");
if(ok){
    alert("移动文件","成功");
}else{
    alert("移动文件","失败");
}
//移动文件的话,src必须是存在的(支持相对路径)
let ok = $file.move("res/code.js","/");
if(ok){
    alert("移动文件","成功");
}else{
    alert("移动文件","失败");
}
```


### rename(src, dest)

> 重命名文件
> 
> 此函数只适用于操作外部存储文件

- 参数 : src {string} 源 
- 参数 : dest {string} 目标 
- 返回 : {boolean} 是否重命名成功
- 版本 : 1.0.0


```javascript
let ok = $file.rename("run.js","res/code.js");
if(ok){
    alert("重命名","成功");
}else{
    alert("重命名","失败");
}
```


### size(path)

> 获取文件大小
> 
> 如果文件不存在,则返回0，此函数只适用于操作外部存储文件

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {number} 文件大小
- 版本 : 1.0.0


```javascript
let size = $file.size("./xml/mFile.txt");
alert("文件大小",size);//6(字节)
```


### sizeStr(size)

> 获取文件可视化大小
> 
> 如果文件不存在，则返回0b，此函数只适用于操作外部存储文件

- 参数 : size {long} 文件长度
- 返回 : {string} 文件大小
- 版本 : 1.0.0


```javascript
let size = $file.size(1099);
alert("文件大小",size);//6(字节)
```


### sizeStr(path)

> 获取文件可视化大小
> 
> 如果文件不存在，则返回0b，此函数只适用于操作外部存储文件

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {string} 文件大小(格式化单位)
- 版本 : 1.0.0


```javascript
let size = $file.sizeStr("./xml/mFile.txt");
alert("文件大小",size);//6 B
```


### name(path)

> 文件名称
> 
> 该函数本质上就是字符串操作，解析得到文件名称。

- 参数 : path {string} 路径 
- 返回 : {string} 文件名称
- 版本 : 1.0.0


```javascript
let fn = $file.name("./xml/mFile.txt");
alert("文件名称",fn);//mFile.txt
```


### mainName(path)

> 主文件名
> 
> 不包含后缀名的文件名称，该函数本质上就是字符串操作，解析得到文件名称(不包含后缀)。

- 参数 : path {string} 路径 
- 返回 : {string} 文件名称
- 版本 : 1.0.0


```javascript
let fn = $file.mainName("./xml/mFile.txt");
alert("文件名称",fn);//mFile
```


### ext(path)

> 后缀名
> 
> 该函数本质上就是字符串操作，解析得到文件后缀名。

- 参数 : path {string} 路径 
- 返回 : {string} 文件名称
- 版本 : 1.0.0


```javascript
let fn = $file.ext("./xml/mFile.txt");
alert("后缀名",fn);//txt
```


### sd()

> 获得存储目录

- 返回 : {string} sdcard路径
- 版本 : 1.0.0


```javascript
let path = $file.sd();
alert("SDCard路径",path);///storage/emulated/0
```


### del(path)

> 删除文件或文件夹
> 
> 递归删除文件或者文件夹,如果没有删除成功,则内部会有三次重试机制,强制进行删除
> 
> 该函数只适用于操作外部存储文件

- 参数 : path {string} 文件路径(支持相对路径) 
- 返回 : {boolean} 是否删除成功
- 版本 : 1.0.0


```javascript
//删除目录
$file.del("tools");
//删除文件
$file.del("main.js");
```


### ls(path)

> 罗列文件
> 
> 该函数支持罗列打包后apk中的资源文件(assets目录)，但是注意书写相对路径

- 参数 : path {string} 路径(支持相对路径) 
- 返回 : {list[string]} 文件路径集合
- 版本 : 1.6.8


```javascript
let arr = $file.ls("res");
for(let path of arr){
    log(path);
}
```


### ls(path, filter)

> 罗列文件
> 
> 支持罗列打包后apk中的资源文件，但是注意书写相对路径

- 参数 : path {string} 路径(支持相对路径) 
- 参数 : filter {(path)=>{return true;}} 过滤函数 
- 返回 : {list[string]} 文件路径集合
- 版本 : 1.6.8


```javascript
let arr = $file.ls("res",(path)=>{
    //过滤器
    return true;
});
for(let path of arr){
    log(path);
}
```


### loopFiles(path, accept)

> 递归遍历文件
> 
> 该函数只适用于操作外部存储文件

- 参数 : path {string}  路径(支持相对路径)
- 参数 : accept {(file)=>{return false;}} 过滤函数 
- 返回 : {File[]} 文件列表
- 版本 : 1.4.9


```javascript
$file.looFiles("/res",(file)=>{
    //参数类型:file:java.io.File
    return true;
});
```


### lsVideo()

> 罗列视频文件
> 
> 通过安卓媒体库获取视频文件,需要获取读取视频权限($permit.readVideo())

- 返回 : {VideoInfo[]} 视频文件列表
- 版本 : 1.5.4


```javascript
//VideoInfo属性:
let info = {
    id: 0,    //视频id
    name: "视频名称",
    path: "视频路径",
    size: 0,  //视频大小
    dur: 0,   //视频时长
    time: 0,  //时间
}
//获取视频列表
let arr = $file.lsVideo();
//遍历视频列表
for(let info of arr){
    log(info);
}
```


### lsAudio()

> 罗列音频文件
> 
> 通过安卓媒体库获取音频文件,需要获取读取音频权限($permit.readAudio())

- 返回 : {AudioInfo[]} 音频文件列表
- 版本 : 1.5.4


```javascript
//AudioInfo属性:
let info = {
    id: 0,    //音频id
    name: "音频名称",
    path: "音频路径",
    size: 0,  //音频大小
    dur: 0,   //音频时长
    artist: "艺术家",
    album: "专辑",
    time: 0,  //时间
}
//获取音频列表
let arr = $file.lsAudio();
//遍历音频列表
for(let info of arr){
    log(info);
}
```


### lsImages()

> 罗列图片文件
> 
> 通过安卓媒体库获取图片文件,需要获取读取图片权限($permit.readImage())

- 返回 : {ImageInfo[]} 图片文件列表
- 版本 : 1.5.4


```javascript
//ImageInfo属性:
let info = {
    id: 0,    //图片id
    name: "图片名称",
    path: "图片路径",
    size: 0,  //图片大小
    width: 0, //图片宽度
    height: 0,//图片高度
    time: 0,  //时间
}
//获取图片列表
let arr = $file.lsImages();
//遍历图片列表
for(let info of arr){
    log(info);
}
```


### getDir(name, isPublic)

> 获取安卓目录路径
> 
> 获取安卓系统指定目录的路径，根据目录类型返回对应的目录路径字符串。
> 
> 目录类型可选项有: "pictures","图片", "downloads","下载", "dcim", "music","音乐", "movies","视频", "documents", "文档", "alarms", "闹钟", "notifications", "通知", "podcasts", "播客", "ringtones", "铃声"
> 
> 如果目录类型为自己自己自定义的目录名称，则会返回应用内部私有目录路径，并且以传入的目录类型作为目录的名称。

- 参数 : name {string} 目录类型,可选项有: "pictures","图片", "downloads","下载", "dcim", "music","音乐", "movies","视频", "documents", "文档", "alarms", "闹钟", "notifications", "通知", "podcasts", "播客", "ringtones", "铃声"
- 参数 : isPublic {boolean} 是否为公共目录(true为公共目录，false为私有目录)，默认为true，公共目录访问时都需要存储权限
- 返回 : {string} 目录路径字符串
- 版本 : 1.6.1


```javascript
let videoPath = $file.getDir("视频",true);
```


### getDir(name)

> 获取安卓公共目录路径
> 
> 获取安卓系统指定目录的路径，根据目录类型返回对应的目录路径字符串。
> 
> 目录类型可选项有: "pictures","图片", "downloads","下载", "dcim", "music","音乐", "movies","视频", "documents", "文档", "alarms", "闹钟", "notifications", "通知", "podcasts", "播客", "ringtones", "铃声"
> 
> 如果目录类型为自己自己自定义的目录名称，则会返回应用内部私有目录路径，并且以传入的目录类型作为目录的名称。

- 参数 : name {string} 目录类型,可选项有: "pictures","图片", "downloads","下载", "dcim", "music","音乐", "movies","视频", "documents", "文档", "alarms", "闹钟", "notifications", "通知", "podcasts", "播客", "ringtones", "铃声"
- 返回 : {string} 目录路径字符串
- 版本 : 1.6.1


```javascript
let videoPath = $file.getDir("视频");
```


### flushSd(successCallback, failCallback)


