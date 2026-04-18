# 应用条

- 更新时间:2026-01-30 19:33:12

> 应用条-appbar
> 
> 原生类型:{com.google.android.material.appbar.MaterialToolbar}
> 
> 在使用的时候最好配合[appbar-layout]组件一起使用




应用条是一个软件的顶部条，用来显示标题、操作按钮等。


![](./img/558715009602800.png)

## 一、常用属性


![](./img/556438552061700.png)

![](./img/556492040793400.png)

![](./img/556534168069700.png)

![](./img/556598502098800.png)

![](./img/556657614089500.png)

![](./img/556860510275500.png)

#### 示例：主菜单


```html
<ui>
    <!-- 状态栏 -->
    <statusbar />
    <!-- 应用条需要配合此布局才能生效 -->
    <appbar-layout w="max">
        <appbar title="我是标题" w="max">
            <menu icon="ic_menu_line" iconTint="#000000" text="菜单" />
            <menu icon="ic_home_fill" iconTint="#000000" text="主页" />
            <menu icon="ic_3d" iconTint="#000000" text="转换" />
        </appbar>
    </appbar-layout>
</ui>
```


![](./img/557417348724400.png)

#### 示例：多级子菜单


```html
<ui>
    <!-- 状态栏 -->
    <statusbar />
    <!-- 应用条需要配合此布局才能生效 -->
    <appbar-layout w="max">
        <appbar title="我是标题" w="max">
            <menu icon="ic_menu_line" iconTint="#000000" text="菜单" />
            <menu icon="ic_home_fill" iconTint="#000000" text="主页" />
            <menu icon="ic_more" iconTint="#000000" text="更多">
                <item text="菜单1-1" />
                <item text="菜单1-2" />
                <item text="菜单1-3">
                    <!-- item 中还可以继续嵌套子item -->
                    <item text="菜单2-1" />
                    <item text="菜单3-2" />
                </item>
            </menu>
        </appbar>
    </appbar-layout>
</ui>
```


![](./img/557700754691000.gif)

![](./img/556937828243900.png)

![](./img/557150663620200.png)

## 二、常用函数


### setTitle(title)

> 设置标题

- 参数 : title {string} 标题


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//设置标题
appbar.setTitle("标题");
```


### setSubTitle(subTitle)

> 设置副标题

- 参数 : subTitle {string} 副标题


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//设置副标题
appbar.setSubTitle("副标题");
```


### setTitleColor(color)

> 设置标题颜色

- 参数 : color {int} 颜色值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//设置标题颜色
appbar.setTitleColor($color.RED);
```


### setTitleColor(color)

> 设置标题颜色

- 参数 : color {string} 颜色值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//设置标题颜色
appbar.setTitleColor("#1E1F22");
```


### setSubTitleColor(color)

> 设置副标题颜色

- 参数 : color {int} 颜色值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//设置副标题颜色
appbar.setSubTitleColor($color.RED);
```


### setSubTitleColor(color)

> 设置副标题颜色

- 参数 : color {string} 颜色值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//设置副标题颜色
appbar.setSubTitleColor("#1E1F22");
```


### setBg(color)

> 设置背景颜色

- 参数 : color {int} 颜色值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//设置背景颜色
appbar.setBg($color.RED);
```


### setBg(color)

> 设置背景颜色

- 参数 : color {string} 颜色值


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//设置背景颜色
appbar.setBg("#1E1F22");
```


### back(callback)

> 监听返回事件

- 参数 : callback {(view)=>{}} 返回按钮点击事件


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//返回按钮点击事件
appbar.back((view)=>{
    //一般标题的返回按钮就是退出界面:
    ui.finish();
});
```


### menu(callback)

> 监听菜单事件

- 参数 : callback {(title)=>{}} 菜单点击事件


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
//返回菜单点击事件
appbar.menu((title)=>{
    if(title == "菜单1"){
          //菜单1点击事件
    }
});
```


### bind(drawer)

> 绑定drawer

- 参数 : drawer {drawer}


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUI.xml");
//拿到控件
let appbar = ui.id("appbar");
let drawer = ui.id("drawer");
//让appbar与drawer联动
appbar.bind(drawer);
```


