# $draw - 全屏绘制

- 更新时间:2026-01-30 19:32:53

> 全屏绘制




### 系统限制

在全局绘制框架中，绝大多数情况都会使用到全屏悬浮窗，但是这种方式在部分手机上用户手势会被拦截，这一类现象被称为"卡悬浮"。

```javascript
//这种悬浮窗是小型的，因此不会阻碍到用户手势(无论在任何系统中都适用)
$draw.i("信息");
$draw.d("调试");
$draw.w("警告");
```

经过测试，在MIUI系列的手机中，手机厂家会拦截悬浮窗手势，无论用何种悬浮窗类型，都无效，这是厂家在系统中刻下的基因。

```javascript
//这种悬浮窗是全屏的，对于MIUI的手机(小米红米之类的)会导致拦截用户手势而无法操作界面
$draw.i("信息",100,100);
$draw.d("调试",100,100);
$draw.w("警告",100,100);
$draw.rect(100,100,200,200); //绘制方框
$draw.line(100,100,200,200); //绘制线条
```

全屏绘制类的函数：例如：绘制线、文本、方框等，在ColorOS下(或者大多数国产安卓模拟器)，系统会提示是否允许显示在上层(安卓模拟器大多数默认允许)，经过用户允许之后就可以正常绘制并且不阻碍用户使用手机，
但是在MIUI系统中，没有任何提示，经调试发现该类系统会直接拦截所有用户手势，据了解是为了安全才如此设计。

作为开发者，你必须谨慎使用全局绘制，并不是所有手机都开放了全屏悬浮窗时的触摸事件。

:::tip
在1.8.0版本后，支持在root或者shizuku授权下，会自动尝试解锁卡悬浮，允许悬浮窗的触摸事件到达底层。
:::


### getPermit()

> 获取悬浮窗权限

- 返回 : {boolean} 是否有权限
- 版本 : 1.0.0


```javascript
$draw.getPermit();
```


### rect(rect)

> 绘制一个方框

- 参数 : rect {Rect} opencv的Rect对象
- 版本 : 1.0.0


```javascript
//绘制矩形
let rect = new org.opencv.core.Rect(0,0,100,100);
$draw.rect(rect);
```


### rect(node)

> 绘制一个方框

- 参数 : node {Node} 节点信息
- 版本 : 1.0.0


```javascript
//找到一个节点
let node = $act.selector().textHas("停止").findFirst();
//绘制矩形
$draw.rect(node);
```


### rect(x, y, w, h)

> 绘制一个方框

- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 版本 : 1.0.0


```javascript
//绘制矩形
$draw.rect(200,200,200,100);
```


### rect(x, y, w, h, color)

> 绘制一个方框

- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 参数 : color {string} 颜色
- 版本 : 1.1.1


```javascript
//绘制矩形
$draw.rect(200,200,200,100,"#FF0000");
```


### rect(x, y, w, h, ext)

> 绘制方框

- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 参数 : ext {int} 向四周拓展
- 版本 : 1.0.0


```javascript
//绘制一个向外拓展50像素的矩阵
$draw.rect(200,200,200,100,50);
```


### rect(x, y, w, h, ext, color)

> 绘制方框

- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 参数 : ext {int} 向四周拓展
- 参数 : color {string} 颜色
- 版本 : 1.1.0


```javascript
//绘制一个向外拓展50像素的矩阵
$draw.rect(200,200,200,100,50,"#FF0000");
```


### rect(x, y, w, h, ext, color)

> 绘制方框

- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 参数 : ext {int} 向四周拓展
- 参数 : color {int} 颜色
- 版本 : 1.1.1


```javascript
//绘制一个向外拓展50像素的矩阵
$draw.rect(200,200,200,100,50,$color.RED);
```


### rect(arr, ext, color)

> 绘制方框

- 参数 : arr {int[]} 范围数组
- 参数 : ext {int} 向四周拓展
- 参数 : color {int} 颜色
- 版本 : 1.8.2


```javascript
//绘制一个向外拓展50像素的矩阵
$draw.rect([200,200,200,100],50,$color.RED);
```


### rect(arr, ext, color)

> 绘制方框

- 参数 : arr {int[]} 范围数组
- 参数 : ext {int} 向四周拓展
- 参数 : color {string} 颜色
- 版本 : 1.8.2


```javascript
//绘制一个向外拓展50像素的矩阵
$draw.rect([200,200,200,100],50,"#FF0000");
```


### cross(point)

> 绘制一个十字准心

- 参数 : point {point} 位置
- 版本 : 1.0.0


```javascript
let point = new org.opencv.core.Point(100,100);
//绘制准心
$draw.cross(point);
```


### cross(index)

> 绘制一个十字准心

- 参数 : index {int[]} 位置
- 版本 : 1.0.0


```javascript
//绘制准心
$draw.cross([400,500]);
```


### cross(node)

> 绘制一个十字准心

- 参数 : node {AccessibilityNodeInfo} 节点信息
- 版本 : 1.0.0


```javascript
//绘制准心
$draw.cross(node);
```


### cross(node)

> 绘制一个十字准心

- 参数 : node {Node} 节点信息
- 版本 : 1.0.0


```javascript
//绘制准心
$draw.cross(node);
```


### cross(x, y)

> 绘制一个十字准心

- 参数 : x {int} 中心x
- 参数 : y {int} 中心y
- 版本 : 1.0.0


```javascript
//绘制准心
$draw.cross(400,500);
```


### cross(x, y, color)

> 绘制一个十字准心

- 参数 : x {int} 中心x
- 参数 : y {int} 中心y
- 参数 : color {string} 颜色
- 版本 : 1.1.0


```javascript
//绘制准心
$draw.cross(400,500,"#FF0000");
```


### cross(x, y, color)

> 绘制一个十字准心

- 参数 : x {int} 中心x
- 参数 : y {int} 中心y
- 参数 : color {int} 颜色值
- 版本 : 1.1.1


```javascript
//绘制准心
$draw.cross(400,500,$color.RED);
```


### dot(index)

> 绘制一个点

- 参数 : index {int[]} 点
- 版本 : 1.0.0


```javascript
$draw.dot([400,500]);
```


### dot(point)

> 绘制一个点

- 参数 : point {point} 点
- 版本 : 1.0.0


```javascript
$draw.dot(point);
```


### dot(x, y)

> 绘制一个点

- 参数 : x {int} 点x
- 参数 : y {int} 点y
- 版本 : 1.0.0


```javascript
//绘制一个点
$draw.dot(400,500);
```


### dot(x, y, color)

> 绘制一个点

- 参数 : x {int} 点x
- 参数 : y {int} 点y
- 参数 : color {string} 颜色
- 版本 : 1.0.0


```javascript
//绘制一个点
$draw.dot(400,500);
```


### dot(x, y, color)

> 绘制一个点

- 参数 : x {int} 点x
- 参数 : y {int} 点y
- 参数 : color {int} 颜色值
- 版本 : 1.1.1


```javascript
//绘制一个点
$draw.dot(400,500,$color.RED);
```


### text(text, x, y)

> 绘制文字

- 参数 : text {String} 文字
- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 版本 : 1.0.0


```javascript
//绘制文字(默认字体大小:15dp)
$draw.text("Hello aigame !",400,300);
```


### text(text, x, y, size)

> 绘制文字

- 参数 : text {String} 文字
- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : size {float} 字体大小
- 版本 : 1.0.0


```javascript
//绘制文字(大小为16dp)
$draw.text("Hello aigame !",400,400,16);
```


### text(text, x, y, size, color)

> 绘制文字

- 参数 : text {String} 文字
- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : size {int} 字体大小
- 参数 : color {string} 颜色
- 版本 : 1.1.1


```javascript
//绘制文字(大小为16dp)
$draw.text("Hello aigame !",400,400,16,"#FF0000");
```


### text(text, x, y, size, color)

> 绘制文字

- 参数 : text {String} 文字
- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : size {int} 字体大小
- 参数 : color {int} 颜色值
- 版本 : 1.1.1


```javascript
//绘制文字(大小为16dp)
$draw.text("Hello aigame !",400,400,16,$color.RED);
```


### circle(x, y)

> 绘制一个圆形
> 
> 半径默认为50像素

- 参数 : x {int} 圆心x
- 参数 : y {int} 圆心y
- 版本 : 1.1.1


```javascript
//绘制半径为50像素的圆形
$draw.circle(350,400);
```


### circle(x, y, r)

> 绘制一个圆形

- 参数 : x {int} 圆心x
- 参数 : y {int} 圆心y
- 参数 : r {int} 圆形半径
- 版本 : 1.0.0


```javascript
//绘制半径为100像素的圆形
$draw.circle(350,400,100);
```


### circle(x, y, r, ext)

> 绘制一个圆形

- 参数 : x {int} 圆心x
- 参数 : y {int} 圆心y
- 参数 : r {int} 圆形半径
- 参数 : ext {int} 圆形向四周拓展
- 版本 : 1.0.0


```javascript
//向外拓展50像素
$draw.circle(350,400,100,50);
```


### circle(x, y, r, ext, color)

> 绘制一个圆形

- 参数 : x {int} 圆心x
- 参数 : y {int} 圆心y
- 参数 : r {int} 圆形半径
- 参数 : ext {int} 圆形向四周拓展
- 参数 : color {string} 颜色
- 版本 : 1.0.0


```javascript
//向外拓展50像素
$draw.circle(350,400,100,50,"#FF0000");
```


### circle(x, y, r, ext, color)

> 绘制一个圆形

- 参数 : x {int} 圆心x
- 参数 : y {int} 圆心y
- 参数 : r {int} 圆形半径
- 参数 : ext {int} 圆形向四周拓展
- 参数 : color {int} 颜色值
- 版本 : 1.1.1


```javascript
//向外拓展50像素
$draw.circle(350,400,100,50,$color.RED);
```


### img(img, x, y, w, h)

> 绘制图片

- 参数 : img {Image} 图片对象
- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : w {int} 宽度(绘制后的图片宽度)
- 参数 : h {int} 高度(绘制后的图片宽度)
- 版本 : 1.1.0


```javascript
let img = $img.read("/cat.png");
//绘制图片
$draw.img(img,200,200,100,150);
```


### line(x, y, toX, toY)

> 绘制一条线

- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : toX {int} 目标x
- 参数 : toY {int} 目标y
- 版本 : 1.0.0


```javascript
//绘制一条线
$draw.line(300,0,100,1000);
```


### line(x, y, toX, toY, color)

> 绘制一条线

- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : toX {int} 目标x
- 参数 : toY {int} 目标y
- 参数 : color {string} 颜色
- 版本 : 1.1.1


```javascript
//绘制一条线
$draw.line(300,0,100,1000,"#FF0000");
```


### line(x, y, toX, toY, color)

> 绘制一条线

- 参数 : x {int} 起点x
- 参数 : y {int} 起点y
- 参数 : toX {int} 目标x
- 参数 : toY {int} 目标y
- 参数 : color {int} 颜色值
- 版本 : 1.1.1


```javascript
//绘制一条线
$draw.line(300,0,100,1000,$color.RED);
```


### path(data)

> 绘制路径，传入的就是x和y的数组

- 参数 : data {int[][]} 二维数组，第二维数组是坐标
- 版本 : 1.0.0


```javascript
//国际通用手势
$draw.path([
    [100, 800],
    [120, 750],
    [150, 720],
    [180, 750],
    [200, 800],
    [200, 800],
    [220, 700],
    [250, 680],
    [280, 700],
    [300, 800],
    [300, 800],
    [320, 250],
    [350, 200],
    [380, 250],
    [400, 800],
    [400, 800],
    [420, 740],
    [450, 730],
    [480, 740],
    [500, 800],
    [500, 800],
    [520, 770],
    [550, 760],
    [580, 770],
    [600, 800]
]);
```


### path(data, color)

> 绘制路径，传入的就是x和y的数组

- 参数 : data {int[][]} 二维数组，第二维数组是坐标
- 参数 : color {string} 颜色
- 版本 : 1.1.1


```javascript
//国际通用手势
$draw.path([
    [100, 800],
    [120, 750],
    [150, 720],
    [180, 750],
    [200, 800],
    [200, 800],
    [220, 700],
    [250, 680],
    [280, 700],
    [300, 800],
    [300, 800],
    [320, 250],
    [350, 200],
    [380, 250],
    [400, 800],
    [400, 800],
    [420, 740],
    [450, 730],
    [480, 740],
    [500, 800],
    [500, 800],
    [520, 770],
    [550, 760],
    [580, 770],
    [600, 800]
],"#FF0000");
```


### path(data, color)

> 绘制路径，传入的就是x和y的数组

- 参数 : data {int[][]} 二维数组，第二维数组是坐标
- 参数 : color {int} 颜色值
- 版本 : 1.1.1


```javascript
//国际通用手势
$draw.path([
    [100, 800],
    [120, 750],
    [150, 720],
    [180, 750],
    [200, 800],
    [200, 800],
    [220, 700],
    [250, 680],
    [280, 700],
    [300, 800],
    [300, 800],
    [320, 250],
    [350, 200],
    [380, 250],
    [400, 800],
    [400, 800],
    [420, 740],
    [450, 730],
    [480, 740],
    [500, 800],
    [500, 800],
    [520, 770],
    [550, 760],
    [580, 770],
    [600, 800]
],$color.RED);
```


### i(text, x, y, size)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
//字体大小单位:dp
$draw.i("信息",400,300,20);
```


### i(text, x, y)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.i("信息",400,300);
```


### i(text)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.i("信息");
```


### d(text, x, y, size)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
//字体大小单位:dp
$draw.i("调试",400,300,20);
```


### d(text, x, y)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.d("调试",400,300);
```


### d(text)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.d("调试");
```


### w(text, x, y, size)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
//字体大小单位:dp
$draw.w("警告",400,300,20);
```


### w(text, x, y)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.w("警告",400,300);
```


### w(text)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.w("警告");
```


### e(text, x, y, size)

> 绘制日志文字

- 参数 : text {String} 文字
- 参数 : x {float} 字体大小
- 版本 : 1.0.0


```javascript
//字体大小单位:dp
$draw.e("错误",400,300,20);
```


### e(text, x, y)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.e("错误",400,300);
```


### e(text)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.e("错误");
```


### v(text, x, y, size)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
//字体大小单位:dp
$draw.v("信息",400,300,20);
```


### v(text, x, y)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.v("信息",400,300);
```


### v(text)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.v("信息");
```


### log(text, color, x, y, size)

> 绘制日志文字

- 参数 : text {String} 文字
- 参数 : color {String} 颜色
- 参数 : x {int} 位置x
- 参数 : y {int} 位置y
- 参数 : size {float} 字体大小
- 版本 : 1.0.0


```javascript
//字体大小单位:dp
$draw.log("信息","#57965C",400,300,20);
```


### log(text, color, x, y)

> 绘制日志文字

- 参数 : text {String} 文字
- 参数 : color {String} 颜色
- 参数 : x {int} 位置x
- 参数 : y {int} 位置y
- 版本 : 1.0.0


```javascript
//字体大小单位:dp 默认日志文字大小:12dp
$draw.log("信息","#57965C",400,300);
```


### log(text, color)

> 绘制日志文字

- 参数 : text {String} 文字
- 参数 : color {String} 颜色
- 版本 : 1.0.0


```javascript
$draw.log("信息","#57965C");
```


### log(text)

> 绘制日志文字

- 参数 : text {String} 文字
- 版本 : 1.0.0


```javascript
$draw.log("信息");
```


### log(text, x, y)

> 绘制日志文字

- 参数 : text {String} 文字
- 参数 : x {int} 位置x
- 参数 : y {int} 位置y
- 版本 : 1.0.0


```javascript
//字体大小单位:dp 默认日志文字大小:12dp
$draw.log("信息",400,300);
```


### closeAll()

> 关闭绘制日志的悬浮窗

- 版本 : 1.0.0


```javascript
//关闭所有绘制图案
$draw.closeAll();
```


### closeAll(delay)

> 关闭绘制日志的悬浮窗

- 参数 : delay {long} 延迟关闭时间
- 版本 : 1.0.0


```javascript
$draw.closeAll(1000);
```


### closeLog(delay)

> 关闭绘制日志的悬浮窗

- 参数 : delay {long} 延迟关闭时间
- 版本 : 1.0.0


```javascript
$draw.closeLog(1000);
```


### closeLog()

> 关闭绘制日志的悬浮窗

- 版本 : 1.0.0


```javascript
$draw.closeLog();
```


### clear()

> 清空所有绘制
> 
> 清空绘制本质上也是绘制的一种，因此它和其他绘制函数一样，会优先判断当前悬浮窗是否开启，
> 如果悬浮窗没有开启，则创建一个全局悬浮窗至于屏幕最上层，之后绘制透明颜色以达到清空的效果。
> 
> 如果你已经绘制过图案了，那么此时是存在顶层悬浮窗的，调用次函数的时候会直接绘制透明颜色以达到清空的效果。
> 
> 如果你不理解什么是绘制透明颜色，可以理解为：画布中的橡皮擦（本质上是把橡皮经过的位置绘制成透明颜色）

- 版本 : 1.6.8


```javascript
//清空全局绘制
$draw.clear();
```


