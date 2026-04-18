# 状态栏

- 更新时间:2026-01-30 19:33:13

> 状态栏-statusbar
> 
> 本质上就是一个{MaterialTextView},只不过高度为状态条的高度,此控主要用来占位置,避免手机状态条挡住主要的布局
> 
> 原生类型:{com.google.android.material.textview.MaterialTextView}




状态栏：一般手机界面的最上方的部分就是状态栏。


![](./img/statusbar_example.png)

## 一、常用属性


![](./img/822704913786800.png)

![](./img/823019796005800.png)

![](./img/822979123418600.png)

## 二、常用函数


### setColor(color)

> 设置颜色

- 参数 : color {string} 文本颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let bar = ui.id("mBar");
//设置颜色
bar.setColor("#1E1F22");
```


