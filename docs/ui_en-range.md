# 范围

- 更新时间:2026-01-30 19:33:13

> 范围-range
> 
> 原生类型:{com.google.android.material.slider.RangeSlider}




## 一、常用属性


## 二、常用函数


### onLabel(callback)

> 设置标签格式化

- 参数 : callback {(floatValue)=>{ return "标签"; }} 格式化回调


### onChange(callback)

> 设置变化监听

- 参数 : callback {(from,to)=>{}} 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let range = ui.id("mRange");
//设置数据变化监听
range.onChange((from,to)=>{
    //..
});
```


### getRange()

> 获取范围

- 返回 : {number[]}


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let range = ui.id("mRange");
//获取数据(开始,结束)
range.getRange();
```


### setData(from, to)

> 设置数据

- 参数 : from {float} 开始值(当前值一致)
- 参数 : to {float} 结束值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let range = ui.id("mRange");
//设置数据(开始,结束)
range.setData(0,100);
```


