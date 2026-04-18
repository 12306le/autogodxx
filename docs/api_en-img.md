# $img - 图片操作

- 更新时间:2026-01-30 19:32:54

> 图片操作




### read(imgPath)

> 读取图片
> 
> 支持相对路径写法
> 
> 读取资源失败时会返回空null

- 参数 : imgPath {string} 图片路径
- 返回 : {Image} 读取的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p01.png";
//读取图片
let img = $img.read(path);
```


### open(imgPath)

> 构建img对象
> 
> 和read效果一样的

- 参数 : imgPath {string} 图片路径
- 返回 : {Image} 图片对象
- 版本 : 1.2.4


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p01.png";
//读取图片
let img = $img.open(path);
```


### open(bitmap)

> 构建img对象

- 参数 : bitmap {Bitmap} 安卓图片对象
- 返回 : {Image} 图片对象
- 版本 : 1.2.4


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mImg = ui.id("mImg");
//获取图片(安卓图片对象)
let bitmap = mImg.getImg();
//构建$img对象
let img = $img.open(bitmap);
```


### read(imgFile)

> 读取图片
> 
> 读取资源失败时会返回空null

- 参数 : imgFile {File} 图片路径
- 返回 : {Image} 读取的图片


### save(image, path, format, quality)

> 保存图片
> 
> 支持相对路径写法

- 参数 : image {Image} 需要保存的图片
- 参数 : path {string} 保存路径
- 参数 : format {string} 格式
- 参数 : quality {int} 质量


```javascript
//截屏并且保存到本地
//但是在实际中我们可以直接调用$screen.save("路径");更加方便
$screen.getPermit();
let screenImg = $screen.getScreen();
$img.save(screenImg,"/$img/img/s05.png","png",100);
```


### save(image, path)

> 保存图片
> 
> 默认保存png格式，质量为100，支持相对路径写法

- 参数 : image {Image} 需要保存的图片
- 参数 : path {string} 保存路径


```javascript
//截屏并且保存到本地
//但是在实际中我们可以直接调用$screen.save("路径");更加方便
$screen.getPermit();
let screenImg = $screen.getScreen();
$img.save(screenImg,"/$img/img/s05.png");
```


### toBase64(image, format, quality)

> 转换base64

- 参数 : image {Image} 需要转换为base64的图片
- 参数 : format {string} 格式
- 参数 : quality {int} 质量
- 返回 : 图片的base64字符串


```javascript
let img = $img.read("/$img/res/t01.png");
let baseStr = $img.toBase64( img ,"png" , 50);
alert("图片Base64",baseStr);
```


### toBase64(image)

> 转换base64

- 参数 : image {Image} 需要转换的图片
- 返回 : {string} base64字符串


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p01.png";
//读取图片
let img = $img.read(path);
//转化为base64
let imgBase64 = $img.toBase64(img);
log(imgBase64)
```


### toBase64(path)

> 转换base64

- 参数 : path {string} 需要转换的图片
- 返回 : {string} base64字符串


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p01.png";
//转化为base64
let imgBase64 = $img.toBase64(path);
log(imgBase64)
```


### readBase64(base64)

> 加载base64

- 参数 : base64 {string} base64字符串
- 返回 : {Image} 图片对象


```javascript
let img = $img.read("/$img/res/t01.png");
let baseStr = $img.toBase64( img ,"png" , 50);
alert("图片Base64",baseStr);
//从base64中读取图片
let img2 = $img.readBase64(baseStr);
showImg(img2);
```


### clip(image, x, y, w, h)

> 裁剪图片

- 参数 : image {img} 原本的图片
- 参数 : x {int}  开始坐标
- 参数 : y {int} 开始坐标
- 参数 : w {int}  宽度
- 参数 : h {int} 高度
- 返回 : {Image} 新的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p03.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.clip(img, 0, 0, 300, 200);
//显示图片
$img.show(image);
```


### resize(image, w, h, interpolation)

> 设置尺寸
> 
> 插值方式(忽略大小写)：
> NEAREST,
> LINEAR,
> CUBIC,
> AREA,
> LANCZOS4,
> EXACT

- 参数 : image {Image}      需要处理的图片
- 参数 : w {int} 宽度
- 参数 : h {int}  高度
- 参数 : interpolation {string} 插值方式
- 返回 : 图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.resize(img, 200, 200, "INTER_CUBIC");
//显示图片
$img.show(image);
```


### resize(image, w, h)

> 设置尺寸
> 
> 使用默认插值方式:LINEAR

- 参数 : image {Image} 需要处理的图片
- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.resize(img, 200, 200);
//显示图片
$img.show(image);
```


### scale(image, scaleX, scaleY, interpolation)

> 缩放图片

- 参数 : image {Image}  需要处理的图片
- 参数 : scaleX {double} 宽度缩放倍数
- 参数 : scaleY {double}   高度缩放倍数
- 参数 : interpolation {string}  插值方式
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.scale(img, 0.3, 0.2, "CUBIC");
//显示图片
$img.show(image);
```


### scale(image, scaleX, scaleY)

> 缩放图片

- 参数 : image {Image}  需要处理的图片
- 参数 : scaleX {double} 宽度缩放倍数
- 参数 : scaleY {double} 高度缩放倍数
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.scale(img, 0.3, 0.2);
//显示图片
$img.show(image);
```


### rotate(image, degree, x, y)

> 旋转图片

- 参数 : image {Image} 需要处理的图片
- 参数 : degree {float} 旋转的角度
- 参数 : x {int} 旋转中心点x坐标
- 参数 : y {int} 旋转中心点y =坐标
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.rotate(img, 45, 100, 200);
//显示图片
$img.show(image);
```


### rotate(image, degree)

> 旋转图片

- 参数 : image {Image}  需要处理的图片
- 参数 : degree {float} 旋转的角度
- 返回 : {Image}  处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.rotate(img, 45);
//显示图片
$img.show(image);
```


### rotate(image)

> 旋转图片
> 
> 默认旋转90度

- 参数 : image {Image}   需要处理的图片
- 返回 : {Image}   处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.rotate(img);//默认旋转90度
//显示图片
$img.show(image);
```


### concat(img1, img2, dir)

> 拼接图片

- 参数 : img1 {Image}     需要拼接的图片1
- 参数 : img2 {Image}  需要拼接的图片2
- 参数 : dir {string} 拼接方向(left,right,top,bottom)
- 返回 : {Image}  拼接好的图片


```javascript
//相对于项目的路径
let t1 = $img.read("/$img/res/t02.png");
let t2 = $img.read("/$img/res/t03.png");
//调整一下尺寸(保持一致)
t1 = $img.resize(t1,300,200);
t2 = $img.resize(t2,300,200);
//调整一下大小
let img = $img.concat(t1,t2,"bottom");
showImg(img);
```


### gray(image)

> 灰度化

- 参数 : image {Image} 需要灰度化的图片
- 返回 : {Image}  灰度化的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.gray(img);
//显示图片
$img.show(image);
```


### threshold(image, thre)

> 二值化图片

- 参数 : image {Image} 需要处理的图片
- 参数 : thre {double} 阈值
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.threshold(img, 150);
//显示图片
$img.show(image);
```


### adaptiveThreshold(image, maxValue, adaptiveMethod, thresholdType, blockSize, C)

> 自适应二值化

- 参数 : image {Image} 图片
- 参数 : maxValue {number} 最大值
- 参数 : adaptiveMethod {string} 在一个邻域内计算阈值所采用的算法 默认值是：GAUSSIAN_C
- 参数 : thresholdType {string} 阈值化类型 默认值是：BINARY
- 参数 : blockSize {number} 邻域块大小
- 参数 : C {number} 偏移值调整量
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.adaptiveThreshold(img,255,"MEAN_C","BINARY", 11, 2);
//显示图片
$img.show(image);
```


### cvtColor(img, code, dstCn)

> 颜色空间转换

- 参数 : img {Image} 图片
- 参数 : code {string} 颜色空间转换的类型，可选的值有一共有205个 默认值:COLOR_BGR2GRAY
- 参数 : dstCn {int} 目标图像的颜色通道数量，如果不填写则根据其他参数自动决定。
- 返回 : {Image} 颜色转换后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.cvtColor(img,"RGBA2BGR",null);
//显示图片
$img.show(image);
```


### cvtColor(img, code)

> 颜色空间转换

- 参数 : img {Image} 图片
- 参数 : code {string} 颜色空间转换的类型，可选的值有一共有205个 默认值:COLOR_BGR2GRAY
- 返回 : {Image} 颜色转换后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.cvtColor(img,"RGBA2BGR");
//显示图片
$img.show(image);
```


### inRange(img, lowerBound, upperBound)

> 图片二值化

- 参数 : img {Image} 图片
- 参数 : lowerBound {string|number}  颜色下界
- 参数 : upperBound {string|number}  颜色上界
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.inRange(img,"#666666","#FFFFFF");
//显示图片
$img.show(image);
```


### blur(img, size, point, type)

> 模糊处理
> 
> 模糊类型(不区分大小写)：
> CONSTANT,
> REPLICATE,
> REFLECT,
> WRAP,
> REFLECT_101,
> TRANSPARENT,
> REFLECT101,
> DEFAULT,
> ISOLATED

- 参数 : img {Image} 图片
- 参数 : size {double[]} 定义滤波器的大小，如[3, 3]
- 参数 : point {double[]} 指定锚点位置(被平滑点)，默认为图像中心
- 参数 : type {string} 推断边缘像素类型，默认为"DEFAULT"
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.blur(img,[10,10],[-1,-1],"REPLICATE");
//显示图片
$img.show(image);
```


### medianBlur(img, size)

> 中值滤波

- 参数 : img {Image} 图片
- 参数 : size {int} 定义滤波器的大小
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.medianBlur(img,3);
//显示图片
$img.show(image);
```


### gaussianBlur(img, size, sigmaX, sigmaY, type)

> 高斯模糊
> 
> 模糊类型(不区分大小写)：
> CONSTANT,
> REPLICATE,
> REFLECT,
> WRAP,
> REFLECT_101,
> TRANSPARENT,
> REFLECT101,
> DEFAULT,
> ISOLATED

- 参数 : img {Image} 图片
- 参数 : size {double[]} 定义滤波器的大小，如[3, 3]
- 参数 : sigmaX {double} x方向的标准方差，不填写则自动计算
- 参数 : sigmaY {double} y方向的标准方差，不填写则自动计算
- 参数 : type {string} 推断边缘像素类型，默认为"DEFAULT"
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.gaussianBlur(img,[15,15],0,0,"WRAP");
//显示图片
$img.show(image);
```


### flip(image)

> 左右翻转

- 参数 : image {Image} 需要处理的图片
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.flip(img);
//显示图片
$img.show(image);
```


### upside(image)

> 上下翻转

- 参数 : image {Image} 需要处理的图片
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片
let image = $img.upside(img);
//显示图片
$img.show(image);
```


### flip(image, sx, sy)

> 水平翻转

- 参数 : image {Image} 需要处理的图片
- 参数 : sx {float}   横向翻转的方向
- 参数 : sy {float}  纵向翻转的方向
- 返回 : {Image} 处理后的图片


```javascript
//图片路径
let path = "sdcard/Pictures/示例/$img/res/p02.png";
//读取图片
let img = $img.read(path);
//操作图片(上下反转)
let image = $img.flip(img,-1,-1);
//显示图片
$img.show(image);
```


### putTop(bigImg, smallImg, x, y)

> 在大图片上面放置一个小图片

- 参数 : bigImg {Image} 大图片
- 参数 : smallImg {Image} 小图片
- 参数 : x {int} 小图片左上角x
- 参数 : y {int} 小图片左上角y
- 返回 : {Image}  处理完成的图片


```javascript
//图片路径
let path1 = "sdcard/Pictures/示例/$img/res/p02.png"; //大图片
let path2 = "sdcard/Pictures/示例/$img/res/p04.png"; //小图片
let bigImg = $img.read(path1);
let smallImg = $img.read(path2);
//设置放置的位置
let image = $img.putTop(bigImg, smallImg, 20, 20);
//显示图片
$img.show(image);
```


### findColor(image, color, threshold, x, y, w, h)

> 查找颜色

- 参数 : image {Image} 需要处理的图片
- 参数 : color {string} 需要查找的颜色
- 参数 : threshold {int} 阈值
- 参数 : x {int} 范围x起点坐标
- 参数 : y {int} 范围y起点坐标
- 参数 : w {int} 范围宽度
- 参数 : h {int} 范围高度
- 返回 : {Image} 处理后的图片


```javascript
let img = $img.read("/$img/res/t01.png");
let point = $img.findColor(img,"#d80005",5,0,0,100,100);
alert("结果",point);
```


### findColor(image, color, threshold, region)

> 查找颜色

- 参数 : image {Image} 需要处理的图片
- 参数 : color {string} 需要查找的颜色
- 参数 : threshold {int} 阈值
- 参数 : region {int[]}  找色范围
- 返回 : {Point} 找到的结果


```javascript
let img = $img.read("/$img/res/t01.png");
let point = $img.findColor(img,"#d80005",5,[0,0,100,100]);
alert("结果",point);
```


### findColor(image, color, threshold)

> 查找颜色

- 参数 : image {Image}  需要处理的图片
- 参数 : color {string} 需要查找的颜色
- 参数 : threshold {int} 阈值
- 返回 : {Image} 处理后的图片


```javascript
let img = $img.read("/$img/res/t01.png");
let point = $img.findColor(img,"#d80005",5);
alert("结果",point);
```


### findColor(image, color)

> 查找颜色

- 参数 : image {Image} 需要处理的图片
- 参数 : color {string} 需要查找的颜色
- 返回 : {Image} 处理后的图片


```javascript
let img = $img.read("/$img/res/t01.png");
let point = $img.findColor(img,"#d80005");
alert("结果",point);
```


### findMultiColors(image, region, color, threshold, colors)

> 多点找色

- 参数 : image {Image} 图片
- 参数 : region {int[]} 范围
- 参数 : color {string} 起点颜色
- 参数 : threshold {int} 起点色阈值
- 参数 : colors {int[]} 点色数据
- 返回 : {point} 位置


```javascript
let img = $img.read("/$img/res/t01.png");
let point = $img.findMultiColors(img,[0],"#e70216",5,[
	-54, -13, "#db0306", 5,
	-121, -13, "#dc0407", 5,
	-155, -18, "#d80306", 5,
	-132, -85, "#da0306", 5,
	-78, -63, "#dd0206", 5,
	-49, -100, "#db0306", 5,
	6, -77, "#db0306", 5,
	3, -42, "#db0306", 5,
	-103, -52, "#dc0406", 5,
]);
alert("结果",point);
```


### findImg(bigImg, minImg, options)

> 找图

- 参数 : bigImg {Image} 大图片
- 参数 : minImg {Image} 小图片
- 参数 : options {object} 参数
- 返回 : {Point} 找到的位置(中心点)


```javascript
//相对于项目的路径
let img1 = $img.read("/$img/res/t04.png");
let img2 = $img.read("/$img/res/t05.png");
let point = $img.findImg(img1,img2,{
    similar:0.8,//(可选)相似度
    region:[0,0,500,600],//(可选)范围
    trans:false,//(可选)是否开启透明找图模式
    drawResult:true,//(可选)是否保存结果图片
    savePath:"/$img/img/result.png",//(可选)保存结果图片
});
alert("结果",point);
if($file.exists("/$img/img/result.png")){
    showImg("/$img/img/result.png");
}
```


### findImg(bigImg, minImg)

> 找图

- 参数 : bigImg 大图片
- 参数 : minImg 小图片
- 返回 : 找到的位置(中心点)


```javascript
//相对于项目的路径
let img1 = $img.read("/$img/res/t05.png");
let img2 = $img.read("/$img/res/t04.png");
let point = $img.findImg(img1,img2);
alert("结果",point);
```


### findImgAll(bigImg, minImg, options)

> 找到所有图片位置

- 参数 : bigImg {Image} 大图片
- 参数 : minImg {Image} 需要查找的小图片
- 参数 : options {object} 查找参数
- 返回 : {point[]} 所有的位置集合


```javascript
let img1 = $img.read("/$img/res/t06.png");
let img2 = $img.read("/$img/res/t07.png");
let point = $img.findImgAll(img1,img2,{
    similar:0.8,//(可选)相似度
    region:[0,0,350,280],//(可选)范围
    trans:false,//(可选)是否开启透明找图模式
    drawResult:true,//(可选)是否保存结果图片
    savePath:"/$img/img/result.png",//(可选)保存结果图片
});
alert("结果",point);
if($file.exists("/$img/img/result.png")){
    showImg("/$img/img/result.png");
}
```


### findImgAll(bigImg, minImg)

> 找到所有图片位置

- 参数 : bigImg {Image} 大图片
- 参数 : minImg {Image} 需要查找的小图片
- 返回 : {point[]} 所有的位置集合


```javascript
let img1 = $img.read("/$img/res/t06.png");
let img2 = $img.read("/$img/res/t07.png");
let point = $img.findImgAll(img1,img2);
alert("结果",point);
if($file.exists("/$img/img/result.png")){
    showImg("/$img/img/result.png");
}
```


### show(image)

> 显示图片

- 参数 : image 需要显示的图片


### show(path)

> 显示图片

- 参数 : path {string} 图片路径


```javascript
//把图片显示在屏幕上
let imgPath = "sdcard/Pictures/t01.png";
$img.show(imgPath);
```


