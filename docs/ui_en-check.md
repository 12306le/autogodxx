# 多选框

- 更新时间:2026-01-30 19:33:13

> 多选框-check
> 
> 原生类型:{com.google.android.material.checkbox.MaterialCheckBox}
> 
> 多选框控件{XCheck}是属于{XView}的子控件，因此{XView}中的所有方法，多选框控件都可以调用。




多选框一般用于：用户同意、配置多种选择、筛选数据等场景。


![](./img/603425381833700.png)

## 一、基础用法


```html
<ui>
    <statusbar />
    <linear w="max" dir="h" gravity="center">
        <check id="mCheck" text="同意协议"/>
    </linear>
</ui>
```

```javascript
let ui = $ui.layout("ui.xml");
ui.show();//显示界面
//找到界面中的元素并且实现点击事件
ui.id("mCheck").onCheck((checked,comButton) => {
    if(checked){
        info("我被选中了");
    }else{
        info("没有被选中");
    }
});
```


## 二、常用属性


![](./img/603260635087900.png)

![](./img/603260635087900.png)

![](./img/603336275352200.png)

![](./img/604177490718900.png)

![](./img/604260297998000.png)

![](./img/604346296862000.png)

![](./img/604487412932300.png)

![](./img/604588586545200.png)

![](./img/604659582346500.png)

## 三、常用函数


### onCheck(callback)

> 设置选中监听
> 
> 当选中状态改变时,会回调该函数
> 
> 注意在1.5.9版本之后,该函数回调的参数顺序为(isChecked,view)，之前的版本是(view,isChecked)

- 参数 : callback {(isChecked,view)=>{}} 选中监听


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置选中监听
mCheck.onCheck((isChecked,view)=>{
    if(isChecked){
        ui.toast("选中");
    }else{
        ui.toast("没有选中");
    }
});
```


### isChecked()

> 判断是否选中

- 返回 : {boolean} true:选中,false:没有选中


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//判断是否选中
let is = mCheck.isChecked();
if(is){
    toast("选中");
}else{
    toast("没有选中");
}
```


### check(checked)

> 设置选中的状态

- 参数 : checked {boolean} true:选中,false:没有选中


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置选中的状态
mCheck.check(true);
```


### setGravity(gravity)

> 设置控件的对齐方式

- 参数 : gravity {String} 例如:"center|bottom"


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置重力
mCheck.setGravity("center");
```


### setText(text)

> 设置文字

- 参数 : text {String} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置文字
mCheck.setText("记住密码");
```


### getText()

> 获得文字
> 
> 如果获取的文本为null则返回空字符串

- 返回 : {String} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//获得文字
let text = mCheck.getText();
```


### setColor(color)

> 设置主题颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置主题颜色
mCheck.setColor("#1E1F22");
```


### setColor(color)

> 设置主题颜色

- 参数 : color {int} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置主题颜色
mCheck.setColor($color.RED);
```


### setTextColor(color)

> 设置文字颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置主题颜色
mCheck.setTextColor("#1E1F22");
```


### setTextColor(color)

> 设置文字颜色

- 参数 : color {int} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置主题颜色
mCheck.setTextColor($color.RED);
```


### setBg(color)

> 设置背景颜色

- 参数 : color {String} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置背景颜色
mCheck.setBg("#1E1F22");
```


### setBg(color)

> 设置背景颜色

- 参数 : color {int} 颜色


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let mCheck = ui.id("mCheck");
//设置背景颜色
mCheck.setBg($color.RED);
```


