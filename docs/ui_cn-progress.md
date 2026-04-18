# 进度条

- 更新时间:2026-01-30 19:33:13

> 进度条-progress
> 
> 圆形原生类型:{com.google.android.material.progressindicator.CircularProgressIndicator}
> 线性原生类型:{com.google.android.material.progressindicator.LinearProgressIndicator}




进度条：比如下载进度，游戏进度，进度条就是用来显示进度的控件


![](./img/progress_demo.gif)


```html
<ui>
    <statusbar />
    <linear w="max" padding="10">
        <linear w="max" dir="h">
            <progress w="max" padding="10" run="true" />
            <progress w="max" color="#518855" padding="10" run="true" />
            <progress w="max" color="#B44A4A" padding="10" run="true" />
        </linear>
        <progress w="max" style="line" run="true" padding="10" />
        <progress w="max" style="line" color="#518855" padding="10" run="true" />
        <progress w="max" style="line" color="#B44A4A" padding="10" run="true" />
    </linear>
</ui>
```


## 一、基础用法


```html
<ui>
    <statusbar />
    <linear w="max" padding="10">
        <!-- 指定进度条的id -->
        <progress id="circularProgress" w="max"/>
        <progress id="lineProgress" w="max" style="line"/>
    </linear>
</ui>
```

```javascript
//解析布局
let ui = $ui.layout("ui.xml");
ui.show();//显示界面
//获取圆形/线性进度条
let cp = ui.id("circularProgress");
let lp = ui.id("lineProgress");
//动态模拟进度条的走动
for (let i = 1; i <= 10; i++) {
    sleep(150);
    //[核心]:设置进度
    cp.setProgress(i * 10);
    lp.setProgress(i * 10);
}
```


## 二、常用属性


![](./img/progress_style.png)

![](./img/progress_thickness.png)

![](./img/progress_color.png)

![](./img/progress_padding.png)

![](./img/progress_bg.png)

![](./img/progress_bgImg.png)

## 三、常用函数


### 设置进度(进度值)

> 设置进度
> 
> 此方法需要安卓7.0以上生效

- 参数 : 进度值 {int} 进度值(0-100)


```javascript
//解析布局,获得界面对象
定义 界面 = $界面.解析布局("./主界面.xml");
//获取控件
定义 进度条 = 界面.找控件("我的进度条");
//设置进度
进度条.设置进度(50);
```


### 设置最大值(最大值)

> 设置最大进度

- 参数 : 最大值 {int} 最大进度值


```javascript
//解析布局,获得界面对象
定义 界面 = $界面.解析布局("./主界面.xml");
//获取控件
定义 进度条 = 界面.找控件("我的进度条");
//设置最大进度
进度条.设置最大值(100);
```


### 获取进度()

> 获取进度

- 返回 : {int} 当前进度值


```javascript
//解析布局,获得界面对象
定义 界面 = $界面.解析布局("./主界面.xml");
//获取控件
定义 进度条 = 界面.找控件("我的进度条");
//获得进度
定义 进度 = 进度条.获取进度();
```


### 显示()

> 显示进度条


```javascript
//解析布局,获得界面对象
定义 界面 = $界面.解析布局("./主界面.xml");
//获取控件
定义 进度条 = 界面.找控件("我的进度条");
//显示进度条
进度条.显示();
```


### 隐藏()

> 隐藏进度条


```javascript
//解析布局,获得界面对象
定义 界面 = $界面.解析布局("./主界面.xml");
//获取控件
定义 进度条 = 界面.找控件("我的进度条");
//隐藏进度条
进度条.隐藏();
```


