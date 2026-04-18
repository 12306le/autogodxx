# 拖动条

- 更新时间:2026-01-30 19:33:13

> 拖动条-seek
> 
> 该组件比slider更加小巧，属于安卓原生组件。
> 
> 原生类型:{android.widget.SeekBar}




## 一、常用属性


## 二、常用函数


### onChange(callback)

> 设置数值变化监听
> 
> 注意:只监听由用户手动触发的数值变化,若为编程时设置的数值,则忽略

- 参数 : callback {(value)=>{}}


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let seek = ui.id("mSeek");
//设置选中的下标
seek.onChange((value)=>{
    //..
});
```


### getValue()

> 获取当前数值

- 返回 : {int} 当前数值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let seek = ui.id("mSeek");
//获取进度数值
let value = seek.getValue();
```


### getMin()

> 获取最小值

- 返回 : {int} 当前数值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let seek = ui.id("mSeek");
//获取最小值
let minVal = seek.getMin();
```


### getMax()

> 获取最大值

- 返回 : {int} 当前数值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let seek = ui.id("mSeek");
//获取最大值
let maxVal = seek.getMax();
```


### setValue(value)

> 设置数值

- 参数 : value {int} 数值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let seek = ui.id("mSeek");
//设置数值
seek.setValue(50);
```


### setMax(value)

> 设置最大值

- 参数 : value {int} 数值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let seek = ui.id("mSeek");
//设置最大值
seek.setMax(50);
```


### setMin(value)

> 设置最小值

- 参数 : value {int} 数值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let seek = ui.id("mSeek");
//设置最小值
seek.setMin(0);
```


