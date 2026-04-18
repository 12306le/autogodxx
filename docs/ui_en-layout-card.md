# 卡片布局

- 更新时间:2026-01-30 19:33:12

> 卡片布局-card
> 
> 是布局父类的(XLayout)的子类,因此可以使用XLayout的所有方法,但需要注意卡片布局本身是帧布局的子类，因此建议在卡片布局中加入线性布局来使用。
> 
> 原生类型:{com.google.android.material.card.MaterialCardView}




## 一、常用属性


## 二、子控件属性表

被卡片布局包裹的子控件可以使用如下属性：

| 中文名   | 英文名        | 描述                                                         |
|----------|---------------|--------------------------------------------------------------|
| 布局方向 | dir           | 设置子视图的排列方向，可选值为“rtl”（右到左）或“ltr”（左到右） |
| 解决方向 | resolveDir    | 确定视图应遵循的实际布局方向，可选值为“rtl”（右到左）或“ltr”（左到右） |
| 宽       | w             | 设置视图的宽度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |
| 高       | h             | 设置视图的高度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |
| 布局重力 | layout_gravity | 设置视图的布局重力，通过GravityAdd获取对应的重力值             |
| 外边距   | margin        | 设置视图的外边距，可传入单个整数（四边外边距相同）或四个整数（分别对应左、上、右、下外边距），单位为dp |
| 左外边距 | margin_left   | 单独设置视图的左外边距，单位为dp                             |
| 上外边距 | margin_top    | 单独设置视图的上外边距，单位为dp                             |
| 右外边距 | margin_right  | 单独设置视图的右外边距，单位为dp                             |
| 下外边距 | margin_bottom | 单独设置视图的下外边距，单位为dp                             |


## 三、常用函数


### setClickable(clickable)

> 设置可点击

- 参数 : clickable {boolean} 是否可点击
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let card = ui.id("mCard");
//设置可点击
card.setClickable(true);
```


### setRipper(colorStr)

> 设置涟漪色

- 参数 : colorStr {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let card = ui.id("mCard");
//设置涟漪色
card.setRipper("#FF0000");
```


### setRipper(colorVal)

> 设置涟漪色

- 参数 : colorVal {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let card = ui.id("mCard");
//设置涟漪色
card.setRipper($color.RED);
```


### setBg(color)

> 设置背景颜色

- 参数 : color {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let card = ui.id("mCard");
//设置背景颜色
card.setBg($color.RED);
```


### setBg(color)

> 设置背景颜色

- 参数 : color {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let card = ui.id("mCard");
//设置背景颜色
card.setBg("#1E1F22");
```


### setTint(colorVal)

> 设置填充色

- 参数 : colorVal {int} 颜色值
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let card = ui.id("mCard");
//设置填充色
card.setTint($color.RED);
```


### setTint(colorStr)

> 设置填充色

- 参数 : colorStr {string} 颜色字符串
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let card = ui.id("mCard");
//设置填充色
card.setTint("#FF0000");
```


### setRadius(number)

> 设置弧度

- 参数 : number {float} 弧度(单位:dp)
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let card = ui.id("mCard");
//设置弧度
card.setRadius(15);
```


