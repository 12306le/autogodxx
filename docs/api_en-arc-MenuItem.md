# MenuItem - 悬浮按钮

- 更新时间:2026-01-30 19:32:58

> 悬浮按钮
> 
> 一个悬浮球中只能有一个容器，而一个容器可以添加多个悬浮小按钮，容器用来控制按钮的展开与关闭动画，而按钮主要是用于功能交互。




### style(style)

> 设置样式
> 
> 注意：此方法必须要优先调用!因为会重置其他设置的所有属性

- 参数 : style {String} 按钮样式(default,outline,tonal)
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.style("outline"); //(优先调用)设置样式
```


### click(click)

> 设置点击事件
> 
> 当小按钮被点击的时候会执行其中的回调函数

- 参数 : click {()=>{}} 回调函数
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag");//图标资源名称或者图标的相对路径
//设置点击事件
item.click(()=>{
    //点击事件
    info("我被点击了");
});
```


### ripper(color)

> 设置涟漪颜色
> 
> 小按钮被点击时背景阴影会有水波涟漪的效果

- 参数 : color {string} 颜色
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮(图标资源名称或者图标的相对路径)
.ripper("#FF0000");//设置涟漪颜色
```


### ripper(color)

> 设置涟漪颜色

- 参数 : color {int} 颜色值
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.ripper($颜色.红色);//设置涟漪颜色
```


### tip(tip)

> 设置提示
> 
> 按钮被长按的时候就会显示提示文字

- 参数 : tip {string} 提示文字
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.tip("提示文字");//设置长按提示文字
```


### bg(color)

> 设置背景颜色

- 参数 : color {string} 背景颜色
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.bg("#FF0000");//设置按钮背景颜色
```


### bg(color)

> 设置背景颜色

- 参数 : color {int} 背景颜色值
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.bg($颜色.红色); //设置背景颜色值
```


### radius(radius)

> 设置圆角大小

- 参数 : radius {float} 圆角大小
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.radius(15); //设置圆角弧度大小
```


### icon(resName)

> 设置图标
> 
> 支持内置的icon设置
> 
> 支持路径中的图片(最好是相对于项目路径的)

- 参数 : resName {string} 资源名称或者本地路径
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//创建一个按钮
let item = $arc.item("ic_code_run"); //创建一个按钮
//设置点击事件
item.click(()=>{
    //点击时我们切换图标(设置图标)
    item.icon("ic_stop");//图标资源名称或者图标的相对路径
});
```


### iconPadding(padding)

> 设置图标内边距

- 参数 : padding {int} 边距
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.iconPadding(10); //设置图标内边距
```


### iconSize(size)

> 设置图标尺寸

- 参数 : size {int} 尺寸
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.iconSize(30); //设置按钮大小
```


### cancelIconTint()

> 取消填充颜色
> 
> 此函数等价于：iconTint(null);

- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.cancelIconTint(); //清空图标的颜色
```


### iconTint(color)

> 设置图标填充颜色
> 
> 当颜色值为null时，会取消填充颜色，即：cancelIconTint();

- 参数 : color {string} 颜色
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.iconTint("#000000"); //设置图标颜色
```


### iconTint(color)

> 设置图标填充颜色

- 参数 : color {int} 颜色值
- 返回 : {MenuItem} 自己
- 版本 : 1.0.0


```javascript
//先创建小按钮
let item = $arc.item("logo_ag") //创建一个按钮
.iconTint($颜色.红色); //设置图标颜色值
```


### getW()

> 获取按钮宽度

- 返回 : {int} 宽度


```javascript
//先创建小按钮
let item = $arc.item("logo_ag");  //创建一个按钮
//获取宽度
item.getW();
//一般获取宽度可以用来设置弧度，例如：
item.setRadius(item.getW()/2);
```


### getH()

> 获取按钮高度

- 返回 : {int} 高度


```javascript
//先创建小按钮
let item = $arc.item("logo_ag");  //创建一个按钮
//获取高度
item.getH();
```


