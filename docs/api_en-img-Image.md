# Image - 图片

- 更新时间:2026-01-30 19:32:54

> 表示图片
> 
> 是为了防止图片占用太大的内存,于是封装此对象用于表示图片,一般情况下,在本应用中绝大多数使用图片的场景都会自动回收图片,以免占用过多内存。




### const {int} width;

> 图片宽度


### const {int} height;

> 图片高度


### getBitmap()

> 获取bitmap类型


### width()

> 图片宽度


### height()

> 图片高度


### getWidth()

> 图片宽度


### getHeight()

> 图片高度


### close()

> 释放资源


### recycle()

> 释放资源


### pixel(x, y)

> 获取像素值

- 参数 : x {int} x坐标
- 参数 : y {int} y坐标
- 返回 : {int} 像素值


### pixel(point)

> 获取像素值

- 参数 : point {Point} 坐标
- 返回 : {int} 像素值


### save(path)

> 保存图片

- 参数 : path {String} 保存路径


### show()

> 显示图片


### copy()

> 复制图片
> 
> 从源图片数据中拷贝一份图片后返回

- 返回 : {Image} 拷贝后的图片
- 版本 : 1.7.0


```javascript
let screenImg = $screen.getScreen();
let img = screenImg.copy();
//接下来可以对 screenImg 以及 img 分别进行操作
```


### base64()

> 转为base64

- 返回 : {String} base64
- 版本 : 1.8.7


```javascript
//获取图片
let screenImg = $screen.getScreen();
//转为base64
let base64 = screenImg.base64();
```


### json()

> 转json字符串

- 返回 : {String} json字符串


