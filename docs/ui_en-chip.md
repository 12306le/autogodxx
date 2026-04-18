# 小片

- 更新时间:2026-01-30 19:33:13

> 小片-chip
> 
> 原生类型:{com.google.android.material.chip.Chip}
> 
> 可以当作小按钮来使用，也可以当作多选框来使用




小片：可以用来显示一些小标签什么的，还是蛮好看的。

不过，也可以用来作为按钮使用。


![](./img/612185892757200.png)

## 一、常用属性


![](./img/611371618523400.png)

![](./img/611437937349600.png)

![](./img/611478093404000.png)

![](./img/611544871472300.png)

![](./img/611601063213900.png)

![](./img/611656213275200.png)

![](./img/611719142241000.png)

![](./img/611768470381600.png)

![](./img/611802972426800.png)

![](./img/611886165669900.png)

![](./img/611945468348700.png)

![](./img/612063532482400.png)

![](./img/612120925836200.png)

![](./img/612185892757200.png)

![](./img/612340787909600.png)

## 二、常用函数


### check(checked)

> 设置选中状态

- 参数 : checked {boolean} 选中状态


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChip = ui.id("mChip");
//设置选中状态
mChip.check(true);
```


### isChecked()

> 判断是否选中

- 返回 : {boolean} 是否选中


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChip = ui.id("mChip");
//获取选中状态
let is = mChip.isChecked();
if (is) {
    toast("选中");
}else{
    toast("未选中");
}
```


### onClose(callback)

> 监听关闭事件

- 参数 : callback {(view)=>{}} 关闭回调


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChip = ui.id("mChip");
//监听关闭事件
mChip.onClose((v)=>{
    //我被关闭了
});
```


### onCheck(callback)

> 监听选中事件

- 参数 : callback {(isChecked)=>{}} 选中回调


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChip = ui.id("mChip");
//监听选中事件
mChip.onCheck((is)=>{
    if (is) {
         toast("选中");
    }
});
```


### setText(text)

> 设置文本

- 参数 : text {string} 文字


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChip = ui.id("mChip");
//设置文本
mChip.setText("我是小片");
```


### getText()

> 获得文本

- 返回 : {string} 文字


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChip = ui.id("mChip");
//获取文本
let text = mChip.getText();
```


