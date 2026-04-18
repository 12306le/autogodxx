# 应用条布局

- 更新时间:2026-01-30 19:33:12

> 应用条布局-appbar-layout
> 
> 是布局父类的(XLayout)的子类
> 
> 原生类型:{com.google.android.material.appbar.AppBarLayout}




## 一、常用属性


### setBg(color)

> 设置背景颜色

- 参数 : color {int} 颜色值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let abl = ui.get("mAppBarLayout");
//设置背景颜色
abl.setBg($color.RED);
```


### setBg(color)

> 设置背景颜色

- 参数 : color {string} 颜色值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let abl = ui.get("mAppBarLayout");
//设置背景颜色
abl.setBg("#000000");
```


