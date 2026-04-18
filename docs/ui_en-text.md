# 文本

- 更新时间:2026-01-30 19:33:13

> 文本-text
> 
> 原生类型:{com.google.android.material.textview.MaterialTextView}




## 一、常用属性


## 二、常用函数


### setText(text)

> 设置文本

- 参数 : text {string} 文本内容


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let text = ui.id("mText");
//设置文本
text.setText("新的内容");
```


### setColor(color)

> 设置文本颜色

- 参数 : color {int} 文本颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let text = ui.id("mText");
//设置文本颜色
text.setColor($color.RED);
```


### setColor(color)

> 设置文本颜色

- 参数 : color {string} 文本颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let text = ui.id("mText");
//设置文本颜色
text.setColor("#1E1F22");
```


### setBg(color)

> 设置背景颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let text = ui.id("mText");
//设置背景颜色
text.setBg($color.RED);
```


### setBg(color)

> 设置背景颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let text = ui.id("mText");
//设置背景颜色
text.setBg("#1E1F22");
```


### setSize(size)

> 设置文本尺寸

- 参数 : size {float} 尺寸


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let text = ui.id("mText");
//设置文本尺寸
text.setSize(18);
```


### getText()

> 获取文本内容

- 返回 : {string} 文本内容


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let text = ui.id("mText");
//获取文本内容
let t = text.getText();
```


