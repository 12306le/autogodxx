# 下拉框

- 更新时间:2026-01-30 19:33:13

> 下拉框-drop
> 
> 布局原生类型:{com.google.android.material.textfield.TextInputLayout}
> 组件原生类型:{com.google.android.material.textfield.MaterialAutoCompleteTextView}




下拉框类似于一个小菜单，点一下才会展开让你选，核心用途就是帮你方便、规范地挑东西。


![](./img/775261983393400.png)

## 一、基础用法


```html
<ui>
    <statusbar />
    <linear w="max" padding="15" gravity="center" h="max">
        <drop id="mDrop" w="max">
            <!-- 添加选项 -->
            <item text="吃饭" />
            <item text="睡觉" />
            <item text="电影" />
        </drop>
    </linear>
</ui>
```

```javascript
//解析布局
let ui = $ui.layout("ui.xml");
ui.show();//显示界面
//为下拉框添加选中事件
ui.id("mDrop").onCheck((value, index) => {
    info("选中下标为:" + index + "的元素:" + value);
});
```


## 二、常用属性


![](./img/775987544222400.png)

![](./img/776048049257900.png)

![](./img/776048049257900.png)

![](./img/775261983393400.png)

![](./img/776155047288900.png)

![](./img/776208807917600.png)

![](./img/776250206768600.png)

![](./img/776511197330000.png)

![](./img/776457374823400.png)

![](./img/776583835610600.png)

![](./img/776800912434000.png)

## 三、常用函数


### onCheck(callback)

> 事件监听

- 参数 : callback {(title,index)=>{}} 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let drop = ui.id("mDrop");
//监听选中事件
drop.onCheck((title,index)=>{
    toast(title);
});
```


### setText(text)

> 设置文字

- 参数 : text {string} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let drop = ui.id("mDrop");
//设置文字
drop.setText("选项1");
```


### getText()

> 获得文字

- 返回 : {string} 文字


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let drop = ui.id("mDrop");
//获取文本
let text = drop.getText();
```


### flush(items)

> 设置数据

- 参数 : items {string[]} 数据


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let drop = ui.id("mDrop");
//设置数据
drop.flush(["张三","李四","王五"]);
```


