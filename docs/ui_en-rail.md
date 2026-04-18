# 轨道

- 更新时间:2026-01-30 19:33:13

> 轨道-rail
> 
> 这个控件和nav导航栏控件很像，只不过是竖向排列的
> 
> 原生类型:{com.google.android.material.navigationrail.NavigationRailView}




## 一、常用属性


## 二、常用函数


### setBg(color)

> 设置背景颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//设置背景颜色
rail.setBg($color.RED);
```


### setBg(color)

> 设置背景颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//设置背景颜色
rail.setBg("#1E1F22");
```


### setIconTint(color)

> 设置图标颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//设置图标颜色
rail.setIconTint($color.RED);
```


### setIconTint(color)

> 设置图标颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//设置图标颜色
rail.setIconTint("#1E1F22");
```


### setTextColor(color)

> 设置文本颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//设置文本颜色
rail.setTextColor($color.RED);
```


### setTextColor(color)

> 设置文本颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//设置文本颜色
rail.setTextColor("#1E1F22");
```


### setCheckColor(color)

> 设置选中颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//设置选中颜色
rail.setCheckColor($color.RED);
```


### setCheckColor(color)

> 设置选中颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//设置选中颜色
rail.setCheckColor("#1E1F22");
```


### check(index)

> 选中指定菜单

- 参数 : index {int} 菜单索引


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//选中指定菜单
rail.check(0);
```


### menu(callback)

> 监听菜单事件

- 参数 : callback {(title)=>{}} 菜单点击事件


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rail = ui.id("mRail");
//监听菜单事件
rail.menu((title)=>{
    toast(title);
});
```


