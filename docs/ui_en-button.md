# 按钮

- 更新时间:2026-01-30 19:33:13

> 按钮-button
> 
> 按钮控件{XButton}是属于{XView}的子控件，因此{XView}中的所有方法，按钮控件都可以调用。




按钮是界面的最简单的元素，一般用于点击操作。


![](./img/778378960274000.png)

## 一、基础使用

其实按钮本身是没有点击事件的，由于它继承了父类{XView}，因此可以调用其父类中的函数来实现点击操作。

事实上，所有的组件都是继承自{XView}的，因此都可以调用{XView}中的方法。


```html
<ui>
    <statusbar />
    <button id="mBut" text="点击我试试" />
</ui>
```

```javascript
let ui = $ui.layout("ui.xml");
ui.show();//显示界面
//找到界面中的元素并且实现点击事件
ui.id("mBut").click(() => {
    info("我被点击了");
});
```


## 二、常用属性


![](./img/600153960859500.png)

![](./img/600281077680600.png)

![](./img/600364675873000.png)

![](./img/600422263719900.png)

![](./img/601608518790900.gif)

![](./img/601694565747000.png)

![](./img/601744822203500.png)

![](./img/601776838398600.png)

![](./img/601830127286500.png)

![](./img/601894667150800.png)

![](./img/601986765134300.png)

![](./img/602097525451800.png)

![](./img/602259747821900.png)

![](./img/602360756370100.png)

![](./img/602999329953200.png)

## 三、常用函数


### setGravity(gravity)

> 设置重力

- 参数 : gravity {String} 例如:"center|bottom"


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置重力
mBut.setGravity("center|bottom");
```


### setTypeface(typeface)

> 设置字体

- 参数 : typeface {int} 字体类型(使用AgUi中的常量,例如:$ui.BOLD)


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置字体
mBut.setTypeface($ui.BOLD);//常用值：$ui.NORMAL,$ui.ITALIC,$ui.BOLD,$ui.BOLD_ITALIC
```


### setColor(color)

> 设置主题颜色

- 参数 : color {int} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置红色
mBut.setColor($color.RED);
//设置成主题的颜色(具体颜色请参考$color文档)
//mBut.setColor($color.parse("colorPrimary"));
```


### setColor(color)

> 设置主题颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置主题颜色
mBut.setColor("#1E1F22");
```


### setText(text)

> 设置文字

- 参数 : text {String} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置文字
mBut.setText("我是按钮");
```


### getText()

> 获得文字
> 
> 如果获取的文本为null则会返回空字符串

- 返回 : {String} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//获得文字
let text = mBut.getText("我是按钮");
```


### setTextColor(color)

> 设置文字颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置文字颜色
mBut.setTextColor("#1E1F22");
```


### setTextColor(color)

> 设置文字颜色

- 参数 : color {int} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置文字颜色
mBut.setTextColor($color.RED);
```


### setRipper(color)

> 设置涟漪颜色

- 参数 : color {int} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置涟漪颜色
mBut.setRipper($color.RED);
```


### setRipper(color)

> 设置涟漪颜色

- 参数 : color {string} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置涟漪颜色
mBut.setRipper("#1E1F22");
```


### setRadius(radius)

> 设置弧度

- 参数 : radius {int} 弧度


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置弧度
mBut.setRadius(20);
```


### setTextSize(size)

> 设置字体大小

- 参数 : size {float} 字体大小


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置字体大小(单位:sp)
mBut.setTextSize(20);
```


### setIcon(icon)

> 设置图标

- 参数 : icon {string} 图标


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置图标
mBut.setIcon("logo_ag");
```


### setIconTint(color)

> 设置图标颜色

- 参数 : color {int} 图标颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置图标
mBut.setIcon("logo_ag");
//设置图标颜色
mBut.setIconTint($color.RED);
```


### setIconTint(color)

> 设置图标颜色

- 参数 : color {string} 图标颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置图标
mBut.setIcon("logo_ag");
//设置图标颜色
mBut.setIconTint("#1E1F22");
```


### setIconSize(size)

> 设置图标尺寸

- 参数 : size {int} 图标尺寸


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置图标
mBut.setIcon("logo_ag");
//设置图标尺寸(单位:dp)
mBut.setIconSize(15);
```


### setIconPadding(padding)

> 设置图标内边距

- 参数 : padding {int} 设置图标内边距


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mBut = ui.id("mButton");
//设置图标
mBut.setIcon("logo_ag");
//设置图标内边距
mBut.setIconPadding(8);
```


