# 开关

- 更新时间:2026-01-30 19:33:13

> 开关-switch
> 
> 原生类型:{com.google.android.material.materialswitch.MaterialSwitch}




开关：顾名思义，就是开关的意思，只有打开或者关闭两种状态。


![](./img/823241319415800.png)

## 一、常用属性


![](./img/823661390164300.png)

![](./img/823704126486300.png)

![](./img/823742446042900.png)

![](./img/823778688193600.png)

![](./img/823844386523100.png)

![](./img/823887649088400.png)

![](./img/824262862930600.png)

![](./img/824016785709400.png)

![](./img/824071990244600.png)

![](./img/824213477601000.png)

## 二、常用函数


### check(checked)

> 设置选中状态

- 参数 : checked {boolean} 是否选中


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let switzh = ui.id("mSwitch");
//设置选中状态
switzh.check(true);
```


### isChecked()

> 判断选中状态

- 返回 : {boolean} 是否选中了
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let switzh = ui.id("mSwitch");
//判断选中状态
if(switzh.isChecked()){
    log("选中了");
}
```


### onCheck(callback)

> 设置状态改变监听

- 参数 : callback ((checked)=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let switzh = ui.id("mSwitch");
//设置状态改变监听
switzh.onCheck((checked)=>{
    //..
});
```


### setGravity(gravity)

> 设置控件的对齐方式

- 参数 : gravity {String} 例如:"center|bottom"


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let switzh = ui.id("mSwitch");
//设置控件的对齐方式
switzh.setGravity("center|bottom");
```


### setText(text)

> 设置文字

- 参数 : text {String} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let switzh = ui.id("mSwitch");
//设置文字
switzh.setText("是否开启");
```


### getText()

> 获取文字

- 返回 : {String} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let switzh = ui.id("mSwitch");
//获得文字
let text = switzh.getText();
```


### setColor(color)

> 设置主题颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let switzh = ui.id("mSwitch");
//设置主题颜色
switzh.setColor("#26282E");
```


### setTextColor(color)

> 设置文字颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let switzh = ui.id("mSwitch");
//设置文字颜色
switzh.setTextColor("#26282E");
```


