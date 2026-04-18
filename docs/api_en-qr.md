# $qr - 二维码工具

- 更新时间:2026-01-30 19:32:54

> 二维码工具
> 
> 使用$qr你可以实现制作二维码，或者识别二维码




### make(content)

> 制作二维码

- 参数 : content {string} 二维码内容 
- 返回 : {Image} 图片对象
- 版本 : 1.2.3


```javascript
//生成二维码
let img = $qr.make("欢迎来到AIGame!");
//显示图片
img.show();//或者调用 showImg(img); 全局函数也可也显示图片
//保存到本地
img.save("/sdcard/qr.png");
```


### make(content, options)

> 制作二维码

- 参数 : content {string} 二维码内容 
- 参数 : options {QrOptions} 参数 
- 返回 : {Image} 图片对象
- 版本 : 1.2.3


```javascript
//生成二维码
let img = $qr.make("Hello AIGame !", {
    w: 500,//宽度(默认:500)
    h: 500,//高度(默认:500)
    margin: 2,//边距(默认:2)
    foreColor: "#2AACB8",//前景色(默认:#000000)
    bgColor: "#2B2D30",//背景色(默认:#FFFFFF)
});
if (img != null) {
    //显示图片
    img.show(); //或者调用 showImg(img); 全局函数也可也显示图片
    //保存到本地
    img.save("/sdcard/qr.png");
}
```


### parse(path)

> 解析二维码

- 参数 : path {string} 图片路径 
- 返回 : {string} 二维码内容
- 版本 : 1.2.3


```javascript
let content = $qr.parse("/sdcard/qr.png");
```


### parse(image)

> 解析二维码

- 参数 : image {Image} 图片对象 
- 返回 : {string} 二维码内容
- 版本 : 1.2.3


```javascript
//获得image对象
let img = $img.read("/sdcard/qr.png");
//识别image对象
let content = $qr.parse(img);
```


### parse(x, y, w, h)

> 解析屏幕上的二维码
> 
> 根据传入的范围来解析屏幕上的二维码,需要截屏权限

- 参数 : x {int} x坐标 
- 参数 : y {int} y坐标 
- 参数 : w {int} 宽度 
- 参数 : h {int} 高度 
- 返回 : {string} 二维码内容
- 版本 : 1.2.3


```javascript
//截屏后识别指定范围的二维码
let content = $qr.parse(0,400,1080,600);
```


### parse(region)

> 解析屏幕上的二维码
> 
> 根据传入的范围来解析屏幕上的二维码,需要截屏权限

- 参数 : region {int[]} 范围 
- 返回 : {string} 二维码内容
- 版本 : 1.2.3


```javascript
//截屏后识别指定范围的二维码
let content = $qr.parse([0,400,1080,600]);
```


### parse(rect)

> 解析屏幕上的二维码
> 
> 根据传入的范围来解析屏幕上的二维码,需要截屏权限

- 参数 : rect {rect} opencv的范围对象
- 返回 : {string} 二维码内容
- 版本 : 1.2.3


```javascript
//使用opencv中的范围对象
let rect = new org.opencv.core.Rect(0, 400, 1080, 600);
//解析截屏范围中的二维码
let content = $qr.parse(rect);
```


