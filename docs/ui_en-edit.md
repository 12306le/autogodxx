# 编辑框

- 更新时间:2026-01-30 19:33:13

> 编辑框-edit
> 
> 原生类型:{androidx.appcompat.widget.AppCompatEditText}




这是一种小巧的输入框

edit比input输入框更加小巧一些，是安卓原生拓展库的组件，而input输入框是M3风格的组件。


![](./img/791094562061700.png)

## 一、常用属性


![](./img/789754995220700.png)

![](./img/789794472910300.png)

![](./img/789852347187200.png)

![](./img/789904227177000.png)

![](./img/789950243159000.png)

![](./img/790008794448600.png)

![](./img/790077178825600.png)

![](./img/790128473724600.png)

![](./img/790180053900700.png)

![](./img/790211858032800.png)

![](./img/790487260539500.png)

## 二、常用函数


### getText()

> 获取输入框内容

- 返回 : {string} 内容


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let edit = ui.id("mEdit");
//获取输入框内容
let text = edit.getText();
```


### setError(msg)

> 设置异常信息提示

- 参数 : msg {string} 异常提示


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let edit = ui.id("mEdit");
//设置异常信息提示
edit.setError("输入内容不能为空");
```


### setText(text)

> 设置文字

- 参数 : text {string} 文字内容


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let edit = ui.id("mEdit");
//设置文字
edit.setText("新的内容");
```


### onChanged(callback)

> 监听文本改变

- 参数 : callback {(text,start,before,count)=>{}} 监听回调
- 版本 : 1.8.0


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//监听文本改变
mInput.onChanged((text,start,before,count)=>{
    log("文本改变了:"+text);
});
```


### onChangedAfter(callback)

> 监听文本改变后

- 参数 : callback {(text)=>{}} 监听回调
- 版本 : 1.8.0


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//监听文本改变
mInput.onChangedAfter((text)=>{
    log("文本改变了:"+text);
});
```


### onChangedBefore(callback)

> 监听文本改变前

- 参数 : callback {(text,start,count,after)=>{}} 监听回调
- 版本 : 1.8.0


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//监听文本改变
mInput.onChangedBefore((text,start,count,after)=>{
    log("文本改变了:"+text);
});
```


