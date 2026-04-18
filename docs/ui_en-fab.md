# 悬浮按钮

- 更新时间:2026-01-30 19:33:13

> 悬浮按钮-fab
> 
> 原生类型:{com.google.android.material.floatingactionbutton.FloatingActionButton}




一般配合帧布局：将按钮放在帧布局的上层来实现悬浮效果。


![](./img/818776736622200.png)

## 一、常用属性


![](./img/817959591075700.png)

![](./img/818014187410700.png)

![](./img/818346252598700.png)

![](./img/818432990911800.png)

![](./img/818574196509000.png)

![](./img/818698319302600.png)

![](./img/818776736622200.png)

## 二、常用函数


### show()

> 显示悬浮按钮


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let fab = ui.id("mFab");
//显示控件
fab.show();
```


### hide()

> 隐藏悬浮按钮


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let fab = ui.id("mFab");
//隐藏控件
fab.hide();
```


### setColor(color)

> 设置主题颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let fab = ui.id("mFab");
//设置主题颜色
fab.setColor("#1E1F22");
```


### setIcon(icon)

> 设置图标

- 参数 : icon {String} 图片名称


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let fab = ui.id("mFab");
//设置图标
fab.setIcon("logo_ag");
```


### setTip(tip)

> 设置提示信息

- 参数 : tip {String} 提示信息


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let fab = ui.id("mFab");
//设置提示信息
fab.setTip("开始执行");
```


