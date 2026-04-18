# 单选按钮组

- 更新时间:2026-01-30 19:33:13

> 单选按钮组-radio-group
> 
> 在此布局中，单选按钮会自动取消和选中，保证一组按钮只被选中一个
> 
> 是布局父类的(XLayout)的子类
> 
> 原生类型:{android.widget.RadioGroup}




## 一、常用属性


### check(index)

> 设置选中的下标

- 参数 : index {int} 下标


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rg = ui.id("mRadioGroup");
//设置选中的下标
rg.check(0);
```


### onCheck(callback)

> 设置选中下标的事件回调

- 参数 : callback {(index)=>{}} 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rg = ui.id("mRadioGroup");
//设置选中下标的事件回调
rg.onCheck((index)=>{
    //..
});
```


### getCheckedIndex()

> 获取选择下标

- 返回 : {int} 下标 (-1表示没有选择)


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rg = ui.id("mRadioGroup");
//获得选择下标
let index = rg.getCheckedIndex();
```


### getCheckedText()

> 获取选择的文本

- 返回 : {string} 名称 (null表示没有选择)


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let rg = ui.id("mRadioGroup");
//获得选择的文本
let text = rg.getCheckedText();
```


