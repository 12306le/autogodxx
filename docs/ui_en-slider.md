# 滑动条

- 更新时间:2026-01-30 19:33:13

> 滑动条-slider
> 
> 原生类型:{com.google.android.material.slider.Slider}




滚动条：常用于动态设置数字参数，通过滑动就可以变换数值。


![](./img/slider_demo.png)

## 一、常用属性


![](./img/slider_from.png)

![](./img/slider_to.png)

![](./img/slider_value.png)

![](./img/slider_step.png)

![](./img/slider_demo.png)

![](./img/slider_label.png)

![](./img/slider_labelEnd.png)

![](./img/slider_padding.png)

![](./img/slider_bg.png)

![](./img/slider_bgImg.png)

## 二、常用函数


### setBg(color)

> 设置背景颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置背景颜色
slider.setBg($color.RED);
```


### setBg(color)

> 设置背景颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置背景颜色
slider.setBg("#1E1F22");
```


### setColor(color)

> 设置主题颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置主题颜色
slider.setColor($color.RED);
```


### setColor(color)

> 设置主题颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置主题颜色
slider.setColor("#1E1F22");
```


### onLabel(callback)

> 设置标签格式化

- 参数 : callback {(floatValue)=>{ return "标签"; }} 格式化回调


### onChange(callback)

> 设置数值变化监听
> 
> 注意:只监听由用户手动触发的数值变化,若为编程时设置的数值,则忽略

- 参数 : callback {(value)=>{}}


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置选中的下标
slider.onChange((value)=>{
    //..
});
```


### getValue()

> 获取当前进度值

- 返回 : {float} 当前数值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//获取当前进度值
let val = slider.getValue();
```


### setValue(value)

> 设置数据

- 参数 : value {float} 当前值 


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置当前值
slider.setValue(10);
```


### setFrom(from)

> 设置数据

- 参数 : from {float} 开始值 


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置开始大小
slider.setFrom(0);
```


### setStep(step)

> 设置数据

- 参数 : step {float} 进步值 


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置进步值
slider.setStep(1);
```


### setTo(to)

> 设置数据

- 参数 : to {float} 结束值 


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置结束大小
slider.setTo(100);
```


### setData(from, to)

> 设置数据

- 参数 : from {float} 开始值(当前值一致)
- 参数 : to {float} 结束值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置数据(开始,结束)
slider.setData(0,100);
```


### setData(from, to, value)

> 设置数据

- 参数 : from {float} 开始值
- 参数 : to {float} 结束值
- 参数 : value {float} 当前值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let slider = ui.id("mSlider");
//设置数据(开始,结束,当前值)
slider.setData(0,100,20);
```


