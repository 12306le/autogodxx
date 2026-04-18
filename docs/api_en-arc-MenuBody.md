# MenuBody - 按钮容器

- 更新时间:2026-01-30 19:32:58

> 按钮容器
> 
> 用于装载多个悬浮按钮的容器，并控制显示与关闭。




### add(menu)

> 添加悬浮按钮
> 
> 可以向按钮容器中添加多个悬浮小按钮

- 参数 : menu {MenuItem} 悬浮按钮
- 返回 : {MenuBody} 自己
- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器(MenuBody是用来装小按钮MenuItem的)
let menuBody = $arc.body("我的悬浮球1号"); //指定容器名称
//创建小按钮(MenuItem主要控制小按钮的样式)
let menuItem = $arc.item("logo_ag");
//添加按钮(用容器添加小按钮)
menuBody.add(menuItem);
//之后就可以显示出来了(容器主要是控制显示和关闭的)
menuBody.show();
```


### show()

> 显示悬浮按钮
> 
> 会优先判断是否存在悬浮球名称了，如果存在则不显示，如果不存在则记录悬浮球名称并且显示。

- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器(用来装小按钮(MenuItem))
let menuBody = $arc.body("我的悬浮球1号");
//创建小按钮(自定义按钮的各种样式)
let menu1 = $arc.item("logo_ag").bg("#55FFFFFF"); //指定按钮图标
let menu2 = $arc.item("ic_close").style("outline").iconTint("#FF0000"); //可以这样指定样式[方法1]
let menu3 = $arc.item("ic_code_run");
let menu4 = $arc.item("ic_cloud");
let menu5 = $arc.item("ic_color");
//连续添加小按钮并且显示
menuBody.add(menu1) //添加小按钮1
        .add(menu2) //添加小按钮2
        .add(menu3) //添加小按钮3
        .add(menu4) //添加小按钮4
        .add(menu5) //添加小按钮5
        .show(); //这里直接调用显示
```


### name(name)

> 设置悬浮球名称
> 
> 每个悬浮球被显示之前都会判断当前悬浮球的名称是否已经存在了，如果存在了，就不显示。

- 参数 : name {string} 悬浮窗名称
- 返回 : {MenuBody} 自己
- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器(用来装小按钮(MenuItem))
let menuBody = $arc.body("我的悬浮球1号") //创建悬浮球按钮容器
.name("悬浮球1号"); //为容器设置一个名称
```


### margin(left, right)

> 设置贴边边距

- 参数 : left {int} 左边距，默认为 0
- 参数 : right {int} 右边距，默认为 0
- 返回 : {MenuBody} 自己
- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器(用来装小按钮(MenuItem))
let menuBody = $arc.body("我的悬浮球1号") //创建悬浮球按钮容器
.margin(50,50); //设置左右两边的贴边边距
```


### radius(radius)

> 设置圆弧半径
> 
> 圆弧半径决定了容器中每个小按钮展开时的距离

- 参数 : radius {int} 半径
- 返回 : {MenuBody} 自己
- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器(用来装小按钮(MenuItem))
let menuBody = $arc.body("我的悬浮球1号") //创建悬浮球按钮容器
.radius(25); //设置圆弧半径
```


### global(isGlobalShow)

> 设置是否全局显示
> 
> 默认就是全局显示的（需要悬浮窗权限），任何应用都能够看到这个悬浮球，如果不是全局显示的，那么就只能在当前应用中显示。

- 参数 : isGlobalShow {boolean} 是否全局显示(默认:true)
- 返回 : {MenuBody} 自己
- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器(用来装小按钮(MenuItem))
let menuBody = $arc.body("我的悬浮球1号") //创建悬浮球按钮容器
.global(true); //设置为全局显示(需要悬浮窗权限)
```


### dur(expandAnimDur)

> 设置展开动画时间
> 
> 默认是 250 毫秒

- 参数 : expandAnimDur {int} 展开动画时长
- 返回 : {MenuBody} 自己
- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器(用来装小按钮(MenuItem))
let menuBody = $arc.body("我的悬浮球1号") //创建悬浮球按钮容器
.dur(500); //设置展开动画时间
```


### x(x)

> 设置初始位置
> 
> 初始位置决定了悬浮球最开始显示时的位置

- 参数 : x {int} x坐标
- 返回 : {MenuBody} 自己
- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器(用来装小按钮(MenuItem))
let menuBody = $arc.body("我的悬浮球1号") //创建悬浮球按钮容器
.x(300); //设置初始位置
```


### y(y)

> 设置初始位置
> 
> 初始位置决定了悬浮球最开始显示时的位置

- 参数 : y {int} y坐标
- 返回 : {MenuBody} 自己
- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器(用来装小按钮(MenuItem))
let menuBody = $arc.body("我的悬浮球1号") //创建悬浮球按钮容器
.y(500); //设置初始位置
```


