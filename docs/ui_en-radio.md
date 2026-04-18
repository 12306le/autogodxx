# 单选按钮

- 更新时间:2026-01-30 19:33:13

> 单选按钮-radio
> 
> 原生类型:{com.google.android.material.radiobutton.MaterialRadioButton}




单选按钮：一般需要配合单选按钮组(radio-group)的配合才能实现互相排斥的效果，这个控件常用在只需要在多个选择中选择一个的情况。


![](./img/radio_color.png)

## 一、常用属性


![](./img/radio_color.png)

![](./img/radio_check.png)

![](./img/radio_text.png)

![](./img/radio_textColor.png)

![](./img/radio_padding.png)

![](./img/radio_gravity.png)

![](./img/radio_bg.png)

![](./img/radio_bgImg.png)

## 二、常用函数


### isChecked()

> 判断选中状态

- 返回 : {boolean} 是否选中了
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let radio = ui.id("mRadio");
//判断选中状态
if(radio.isChecked()){
    log("选中了");
}
```


### check(checked)

> 设置选中状态

- 参数 : checked {boolean} 是否选中


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let radio = ui.id("mRadio");
//设置选中状态
radio.check(true);
```


### onCheck(callback)

> 设置选中状态回调事件

- 参数 : callback {(isChecked)=>{}} 回调事件


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let radio = ui.id("mRadio");
//设置选中状态回调事件
radio.onCheck((isChecked)=>{
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
let radio = ui.id("mRadio");
//设置控件的对齐方式
radio.setGravity("center|bottom");
```


### setText(text)

> 设置文字

- 参数 : text {String} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let radio = ui.id("mRadio");
//设置文字
radio.setText("吃饭");
```


### getText()

> 获得文字

- 返回 : {String} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let radio = ui.id("mRadio");
//获得文字
let text = radio.getText();
```


### setColor(color)

> 设置主题颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let radio = ui.id("mRadio");
//设置主题颜色
radio.setColor("#26282E");
```


### setTextColor(color)

> 设置文字颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let radio = ui.id("mRadio");
//设置文字颜色
radio.setTextColor("#26282E");
```


