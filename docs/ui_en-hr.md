# 分割线

- 更新时间:2026-01-30 19:33:13

> 分割线-hr
> 
> 原生类型:{com.google.android.material.divider.MaterialDivider}




## 一、常用属性


![](./img/777137928282500.png)

![](./img/777215933092900.png)

![](./img/777340110166300.png)

![](./img/777340110166300.png)

## 二、常用函数


### size(size)

> 设置粗细

- 参数 : size {int} 粗细(px)


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let hr = ui.id("mHr");
//设置粗细
hr.size(20);
```


### insertStart(start)

> 设置开始边距

- 参数 : start {int} 开始边距


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let hr = ui.id("mHr");
//设置开始边距
hr.insertStart(20);
```


### insertEnd(end)

> 设置结束边距

- 参数 : end {int} 结束边距


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let hr = ui.id("mHr");
//设置结束边距
hr.insertEnd(20);
```


### setColor(color)

> 设置主题颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let hr = ui.id("mHr");
//设置主题颜色
hr.setColor("#1E1F22");
```


