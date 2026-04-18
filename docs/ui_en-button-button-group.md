# 按钮组

- 更新时间:2026-01-30 19:33:13

> 按钮组-button-group
> 
> 是布局父类的(XLayout)的子类
> 
> 原生类型:{com.google.android.material.button.MaterialButtonToggleGroup}




## 一、常用属性


### check(index)

> 选中按钮

- 参数 : index {int} 按钮下标


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let bg = ui.get("mButtonGroup");
//选中按钮
bg.check(0);
```


### onCheck(callback)

> 监听选中按钮的下标

- 参数 : callback ((index)=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获得控件
let bg = ui.id("mButtonGroup");
//监听选中按钮的下标
bg.onCheck((index)=>{
    $ui.toast(index);
});
```


