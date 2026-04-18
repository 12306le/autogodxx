# 多页布局

- 更新时间:2026-01-30 19:33:13

> 多页布局-pager
> 
> 多页布局允许用户在里面写多个界面并实现界面左右滑动，并且支持绑定标签页布局(tab)以及导航栏(nav)
> 
> 原生类型:{androidx.viewpager2.widget.ViewPager2}




## 一、常用属性


## 二、常用函数


### setCurIndex(index)

> 设置当前页面索引

- 参数 : index {int} 当前页面索引


```javascript
//解析界面,获得ui布局
let ui = $ui.layout("./mUi.xml");
//获得控件
let pager = ui.id("mPager");
//设置当前页面索引
pager.setCurIndex(0);
```


### curIndex()

> 获得当前页面索引

- 返回 : {int} 当前页面索引


```javascript
//解析界面,获得ui布局
let ui = $ui.layout("./mUi.xml");
//获得控件
let pager = ui.id("mPager");
//获得当前页面索引
let index = pager.curIndex();
```


### bind(xTab)

> 绑定与tab联动

- 参数 : xTab {tab} 标签布局


```javascript
//解析界面,获得ui布局
let ui = $ui.layout("./mUi.xml");
//获得控件
let pager = ui.id("mPager");
let tab = ui.id("mTab");
//与标签布局联动
pager.bind(tab);
```


### bind(xNav)

> 绑定与nav联动

- 参数 : xNav {nav} 底部导航布局


```javascript
//解析界面,获得ui布局
let ui = $ui.layout("./mUi.xml");
//获得控件
let pager = ui.id("mPager");
let nav = ui.id("mNav");
//与导航栏联动
pager.bind(nav);
```


### onCheck(callback)

> 监听页面切换事件

- 参数 : callback {(index)=>{}} 页面切换事件


```javascript
//解析界面,获得ui布局
let ui = $ui.layout("./mUi.xml");
//获得控件
let pager = ui.id("mPager");
//监听页面切换事件
pager.onCheck((index)=>{
    //..
});
```


### onState(callback)

> 监听页面状态事件

- 参数 : callback {(state)=>{}} 页面状态事件


```javascript
//解析界面,获得ui布局
let ui = $ui.layout("./mUi.xml");
//获得控件
let pager = ui.id("mPager");
//监听页面状态事件
pager.onState((state)=>{
    //...
});
```


