# 输入框

- 更新时间:2026-01-30 19:33:13

> 输入框-input
> 
> 组件原生类型:{com.google.android.material.textfield.TextInputEditText}
> 
> 布局原生类型:{com.google.android.material.textfield.TextInputLayout}




输入框：一个可以输入文字的地方。


![](./img/820325920861600.png)

## 一、基础用法


简单写一个登录的小案例，当点击登录按钮的时候就获取用户输入的信息，当点击取消按钮的时候就清空用户输入的内容：


```html
<ui>
    <statusbar />
    <linear w="max" dir="v" gravity="center" h="max" padding="20">
        <input id="count" prefix="账号:" w="max" />
        <input id="pass" prefix="密码:" type="pass" w="max"  />
        <button-group dir="h" w="max">
            <button id="login" text="登录" style="outline" weight="1"/>
            <button id="cancel" text="取消" style="outline" weight="1" textColor="#B44A4A" />
        </button-group>
    </linear>
</ui>
```

```javascript
let ui = $ui.layout("ui.xml");
ui.show();
//[登录]获取用户输入的信息
ui.id("login").click(() => {
    let count = ui.id("count").getText();
    let pass = ui.id("pass").getText();
    alert("账号信息", "账号：" + count + "\n" + "密码：" + pass);
});
//[取消]清空用户输入的内容
ui.id("cancel").click(() => {
    ui.id("count").setText("");
    ui.id("pass").setText("");
    toast("已清空");
});
```


![](./img/820824673352400.png)

## 二、常用属性


![](./img/820949440675300.png)

![](./img/820994282465600.png)

![](./img/821030258658900.png)

![](./img/821030258658900.png)

![](./img/821083337465700.png)

![](./img/821119836418400.png)

![](./img/821175683477700.png)

![](./img/821206691453200.png)

![](./img/821271802433400.png)

![](./img/821352843824200.png)

![](./img/821385266215300.png)

![](./img/821580281488000.png)

![](./img/821546252782500.png)

![](./img/821636371377900.png)

![](./img/821676700688800.png)

![](./img/821724818089500.png)

![](./img/821782108879300.png)

![](./img/821891654121600.png)

![](./img/822117009830400.png)

![](./img/822196996553700.png)

## 三、常用函数


### setHint(hint)

> 设置预提示

- 参数 : hint {string} 预提示


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//设置预提示
mInput.setHint("请输入名字");
```


### setBgColor(color)

> 设置背景颜色

- 参数 : color {string} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//设置背景颜色
mInput.setBgColor("#ff0000");//也可以是M3主题动态色，例如:colorPrimary
```


### setStrokeColor(color)

> 设置边框颜色

- 参数 : color {string} 颜色
- 版本 : 1.5.3


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//设置边框颜色
mInput.setStrokeColor("#ff0000");//也可以是M3主题动态色，例如:colorPrimary
```


### setStrokeWidth(strokeWidth)

> 设置边框宽度

- 参数 : strokeWidth {int} 宽度
- 版本 : 1.5.3


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//设置边框宽度
mInput.setStrokeWidth(5);//单位:dp
```


### setRadius(topLeft, topRight, bottomLeft, bottomRight)

> 设置弧度

- 参数 : topLeft {float} 左上
- 参数 : topRight {float} 上右
- 参数 : bottomLeft {float} 左下
- 参数 : bottomRight {float} 右下
- 版本 : 1.5.3


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//设置边框弧度
mInput.setRadius(20,20,5,5);//单位:dp
```


### setText(text)

> 设置文字

- 参数 : text {string} 文字内容


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//设置文本
mInput.setText("我是文字");
```


### getText()

> 获取输入框内容

- 返回 : {string} 内容


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//获得文本
let text = mInput.getText();
```


### setError(msg)

> 设置异常信息提示

- 参数 : msg {string} 异常提示


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//设置异常提示
mInput.setError("错啦");
```


### getEditText()

> 获得TextInputEditText对象

- 返回 : {TextInputEditText} 编辑框对象


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//获得TextInputEditText对象
let editText = mInput.getEditText();
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


### onFocusChange(callback)

> 监听焦点改变

- 参数 : callback {(hasFocus)=>{}} 监听回调
- 版本 : 1.8.2


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mInput = ui.id("mInput");
//监听焦点改变
mInput.onFocusChange((hasFocus)=>{
    log("焦点改变了:"+hasFocus);
});
```


