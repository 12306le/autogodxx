# 导航栏

- 更新时间:2026-01-30 19:33:13

> 导航栏-nav
> 
> 原生类型:{com.google.android.material.bottomnavigation.BottomNavigationView}




导航栏：一般用于与多页布局(pager)联动，实现界面的跳转


![](./img/nav_demo.png)


```html
<ui>
    <statusbar />
    <!-- 我习惯性把导航栏放在底部因此设置重力 gravity="bottom" -->
    <linear w="max" h="max" dir="v" gravity="bottom">
        <nav w="max">
            <menu text="主页" icon="ic_home" />
            <menu text="设置" icon="ic_set" />
            <menu text="菜单" icon="ic_menu" />
        </nav>
    </linear>
</ui>
```


## 一、基础用法


```html
<ui>
    <statusbar />
    <!-- 我习惯性把导航栏放在底部因此设置重力 gravity="bottom" -->
    <linear w="max" h="max" dir="v" gravity="bottom">
        <!-- 给导航栏设置id id="mNav" -->
        <nav id="mNav" w="max">
            <menu text="菜单1" icon="ic_home" />
            <menu text="菜单2" icon="ic_search" />
            <menu text="菜单3" icon="ic_set" />
        </nav>
    </linear>
</ui>
```

```javascript
//解析布局
let ui = $ui.layout("ui.xml");
ui.show();//显示界面
//获取控件
let nav = ui.id("mNav");
//监听菜单事件
nav.menu((title)=>{
    toast(title);
});
```


## 二、常用属性


![](./img/nav_menu.png)

![](./img/nav_iconTint.png)

![](./img/nav_textColor.png)

![](./img/nav_checkColor.png)

![](./img/nav_bg.png)

![](./img/nav_bgImg.png)

## 三、常用函数


### setBg(color)

> 设置背景颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//设置背景颜色
nav.setBg($color.RED);
```


### setBg(color)

> 设置背景颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//设置背景颜色
nav.setBg("#1E1F22");
```


### setIconTint(color)

> 设置图标颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//设置图标颜色
nav.setIconTint($color.RED);
```


### setIconTint(color)

> 设置图标颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//设置图标颜色
nav.setIconTint("#1E1F22");
```


### setTextColor(color)

> 设置文本颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//设置文本颜色
nav.setTextColor($color.RED);
```


### setTextColor(color)

> 设置文本颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//设置文本颜色
nav.setTextColor("#1E1F22");
```


### setCheckColor(color)

> 设置选中颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//设置选中颜色
nav.setCheckColor($color.RED);
```


### setCheckColor(color)

> 设置选中颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//设置选中颜色
nav.setCheckColor("#1E1F22");
```


### check(index)

> 选中指定菜单

- 参数 : index {int} 菜单索引


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//选中指定菜单
nav.check(0);
```


### menu(callback)

> 监听菜单事件

- 参数 : callback {(title)=>{}} 菜单点击事件


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let nav = ui.id("mNav");
//监听菜单事件
nav.menu((title)=>{
    toast(title);
});
```


