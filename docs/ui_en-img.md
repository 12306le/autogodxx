# 图片与图标

- 更新时间:2026-01-30 19:33:13

> 图片-img
> 
> 常用于显示图片或者图标
> 
> 原生类型:{com.google.android.material.imageview.ShapeableImageView}




图片(图标)：用于显示图片或者图标


![](./img/819952284073000.png)

## 一、常用属性


## 二、常用函数


### rotate(rotated)

> 图片自动旋转

- 参数 : rotated {boolean} 是否旋转


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mImg = ui.id("mImg");
//设置图片自动旋转
mImg.rotate(true);
```


### rotate(rotated, speed)

> 图片自动旋转

- 参数 : rotated {boolean} 是否旋转
- 参数 : speed {float} 旋转速度


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mImg = ui.id("mImg");
//设置图片自动旋转
mImg.rotate(true,10);
```


### setRotation(rotation)

> 设置角度

- 参数 : rotation {float} 角度


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mImg = ui.id("mImg");
//设置角度
mImg.setRotation(45);
```


### setSrc(src)

> 设置图标

- 参数 : src {string} 设置图片名称,并且加载名称上的图片


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mImg = ui.id("mImg");
//设置图标
mImg.setSrc("logo_ag");
```


### setUrl(url)

> 设置图片Url

- 参数 : url {string} 设置图片Url,并且加载Url上的图片


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mImg = ui.id("mImg");
//设置图片链接(这里我随便弄了个链接)
mImg.setUrl("https://www.baidu.com/icon.png  ");
```


### setPath(path)

> 设置图片路径

- 参数 : path {string} 设置图片路径,并且加载路径上的图片


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mImg = ui.id("mImg");
//设置图片
mImg.setPath("./res/mImg.png");
```


### setImg(bitmap)

> 设置图片

- 参数 : bitmap {bitmap} 设置的图片


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mImg = ui.id("mImg");
//设置图片
let img = $img.read("./res/mImg.png");
mImg.setImg(img.getBitmap());
```


### getImg()

> 获取图片

- 返回 : {bitmap} 获取到的图片


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mImg = ui.id("mImg");
//获取图片
let bitmap = mImg.getImg();
//构建$img对象
let img = $img.open(bitmap);
```


