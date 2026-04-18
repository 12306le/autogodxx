# $act - 手势动作

- 更新时间:2026-01-30 19:32:49

> 手势动作
> 
> $act是一个高度封装的框架，其中集成了无障碍、$root、$szk触摸方案，优先级为：$root>$szk>无障碍
> 
> $act中所有click、press、move函数都会优先判断是否有ROOT权限，如果有，则使用$root进行点击；之后判断是否有Shizuku权限，如果有，则使用$szk进行手势操作；之后判断是否有无障碍权限，如果有，则使用无障碍执行。




### hasPermit()

> 无障碍服务是否开启
> 
> 判断无障碍服务是否开启，如果开启了则返回true，否则返回false。

- 返回 : {boolean} 是否开启
- 版本 : 1.0.0


```javascript
//判断是否有权限
let hasPermit = $act.hasPermit();
$tip.show("是否获得无障碍",hasPermit);
```


### getPermit()

> 获得无障碍服务
> 
> 如果有Root权限:则使用Root权限为本应用授权永久无障碍
> 
> 如果有Shizuku权限:则使用Shizuku权限为本应用授权永久无障碍
> 
> 如果没有Root和Shizuku:则进行普通权限申请(非永久有效,受系统限制)
> 
> 该函数是一个阻塞式函数，请勿放在ui线程当中操作，如果你想在ui状态下申请无障碍，建议使用$permit.wza()函数。
> 
> 注意：永久无障碍其实是每次启动软件时，会自动自我授权无障碍，它不会立即获得无障碍权限，一般需要等待1-5秒的时间，不过这些操作都会在应用后台进行操作，因此用户并不会感知到这一操作，只会莫名其妙的觉得自己开启的无障碍权限从未关闭过一样。
> 在授权无障碍期间，你最好还是使用 $act.hasPermit() 判断无障碍权限是否可用。

- 返回 : {boolean} 是否获得
- 版本 : 1.0.0


```javascript
$act.getPermit();//获得权限
```


### click(x, y)

> 点击
> 
> 如果Root可用，优先使用Root执行手势；
> 如果Shizuku可用，优先使用Shizuku执行手势；
> 如果无障碍可用，使用无障碍执行手势；
> 如果以上都不可用，将无任何效果；

- 参数 : x {int} 点击位置x 
- 参数 : y {int} 点击位置y 
- 版本 : 1.0.0


```javascript
//点击手势
$act.click(500,800);
```


### click(x, y, dur)

> 点击
> 
> 如果Root可用，优先使用Root执行手势
> 如果Shizuku可用，优先使用Shizuku执行手势
> 如果无障碍可用，使用无障碍执行手势
> 如果以上都不可用，将无任何效果

- 参数 : x {int} 点击位置x 
- 参数 : y {int} 点击位置y 
- 参数 : dur {int} 点击后延迟 
- 版本 : 1.0.0


```javascript
//设置点击时常(长按效果)
sleep(1000);
$act.click(135,344,1500);
```


### click(x, y, dur, delay)

> 点击
> 
> 如果Root可用，优先使用Root执行手势
> 如果Shizuku可用，优先使用Shizuku执行手势
> 如果无障碍可用，使用无障碍执行手势
> 如果以上都不可用，将无任何效果

- 参数 : x {int} 点击位置x 
- 参数 : y {int} 点击位置y 
- 参数 : dur {int} 点击后延迟 
- 参数 : delay {int} 点击前延迟 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
$act.click(500,800,1500,100);
```


### click(index)

> 点击
> 
> 如果Root可用，优先使用Root执行手势
> 如果Shizuku可用，优先使用Shizuku执行手势
> 如果无障碍可用，使用无障碍执行手势
> 如果以上都不可用，将无任何效果

- 参数 : index {int[]} 点击位置 
- 版本 : 1.0.0


```javascript
//点击
$act.click([500,800]);
```


### click(index, dur)

> 点击
> 
> 如果Root可用，优先使用Root执行手势
> 如果Shizuku可用，优先使用Shizuku执行手势
> 如果无障碍可用，使用无障碍执行手势
> 如果以上都不可用，将无任何效果

- 参数 : index {int[]} 点击位置  
- 参数 : dur {int} 点击后延迟 
- 版本 : 1.0.0


```javascript
//点击手势(长按)
$act.click([135,347],1500);
```


### click(index, dur, delay)

> 点击
> 
> 如果Root可用，优先使用Root执行手势
> 如果Shizuku可用，优先使用Shizuku执行手势
> 如果无障碍可用，使用无障碍执行手势
> 如果以上都不可用，将无任何效果

- 参数 : index {int[]} 点击位置 
- 参数 : dur {int} 点击后延迟 
- 参数 : delay {int} 点击前延迟 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
$act.click([136,347],1500,100);
```


### click(index)

> 点击
> 
> 如果Root可用，优先使用Root执行手势
> 如果Shizuku可用，优先使用Shizuku执行手势
> 如果无障碍可用，使用无障碍执行手势
> 如果以上都不可用，将无任何效果

- 参数 : index {Point} 点击位置
- 版本 : 1.0.0


```javascript
//点击手势(点击opencv返参)
let point = new org.opencv.core.Point(136,347);
$act.click(point);
```


### click(index, dur)

> 点击
> 
> 如果Root可用，优先使用Root执行手势
> 如果Shizuku可用，优先使用Shizuku执行手势
> 如果无障碍可用，使用无障碍执行手势
> 如果以上都不可用，将无任何效果

- 参数 : index {Point} 点击位置
- 参数 : dur {int} 点击后延迟  
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
let point = new org.opencv.core.Point(136,347);
$act.click(point,1500);
```


### click(index, dur, delay)

> 点击
> 
> 如果Root可用，优先使用Root执行手势
> 如果Shizuku可用，优先使用Shizuku执行手势
> 如果无障碍可用，使用无障碍执行手势
> 如果以上都不可用，将无任何效果

- 参数 : index {Point} 点击位置
- 参数 : dur {int} 点击后延迟 
- 参数 : delay {int} 点击前延迟 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
let point = new org.opencv.core.Point(136,347);
$act.click(point,1500,100);
```


### click(node)

> 点击节点
> 
> 如果节点支持点击，就是用节点本身的点击行为进行点击，如果不支持，则通过$act的坐标方式来点击节点的坐标位置。

- 参数 : node {Node} 点击位置  
- 版本 : 1.0.0


```javascript
//如果你通过选择器找到了节点，也可以通过这种方式来点击节点
let node = $act.selector()
.pkg("org.aigame.pro")
.cls("android.widget.FrameLayout")
.waitFirst();
if(node!=null){
     // 绘制节点位置
     node.draw();
     // 可以这样点击
     node.click();
     // 也可以这样点击
     $act.click(node);
}
```


### click(node, useAct)

> 点击节点
> 
> 如果节点支持点击，就是用节点本身的点击行为进行点击，如果不支持，则通过$act的坐标方式来点击节点的坐标位置。

- 参数 : node {Node} 点击位置 
- 参数 : useAct {boolean} 是否使用无障碍点击 
- 版本 : 1.0.0


```javascript
//如果你通过选择器找到了节点，也可以通过这种方式来点击节点
let node = $act.selector()
.pkg("org.aigame.pro")
.cls("android.widget.FrameLayout")
.waitFirst();
if(node!=null){
     // 绘制节点位置
     node.draw();
     // 可以这样点击
     node.click();
     // 也可以这样点击
     $act.click(node,true);//true表示直接使用$act的点击坐标方式进行点击
}
```


### press(node)

> 长按节点
> 
> 如果节点支持点击，就是用节点本身的点击行为进行长按，如果不支持，则通过$act的坐标方式来点击节点的坐标位置。

- 参数 : node {Node} 节点 
- 版本 : 1.0.0


```javascript
//如果你通过选择器找到了节点，也可以通过这种方式来点击节点
let node = $act.selector()
.pkg("org.aigame.pro")
.cls("android.widget.FrameLayout")
.waitFirst();
if(node!=null){
     // 绘制节点位置
     node.draw();
     // 长按节点 或者也可以直接调用 node.press();
     $act.press(node);
}
```


### press(node, useAct)

> 长按节点
> 
> 如果设备获得了root，将优先使用root来执行手势,如果没有root,则使用无障碍来执行手势

- 参数 : node {Node} 节点 
- 参数 : useAct {boolean} 是否使用act点击 
- 版本 : 1.0.0


### press(x, y)

> 长按
> 

- 参数 : x {int} 长按位置x 
- 参数 : y {int} 长按位置y 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
$act.press(136,347);
```


### press(x, y, dur)

> 长按
> 

- 参数 : x {int} 长按位置x 
- 参数 : y {int} 长按位置y 
- 参数 : dur {int} 长按后延迟 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
$act.press(136,347,1500);
```


### press(x, y, dur, delay)

> 长按
> 

- 参数 : x {int} 长按位置x 
- 参数 : y {int} 长按位置y 
- 参数 : dur {int} 长按后延迟 
- 参数 : delay {int} 长按前延迟 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
$act.press(136,347,1500,100);
```


### slide(startX, startY, endX, endY, duration)

> 模拟人手滑动

- 参数 : startX {int} 起点x(必填) 
- 参数 : startY {int} 起点y(必填) 
- 参数 : endX {int} 终点x(必填) 
- 参数 : endY {int} 终点y(必填) 
- 参数 : duration {int} 持续时间(可为空:默认:1秒) 
- 版本 : 1.7.8


```javascript
//随机模拟真人滑动(推荐)
$act.slide(189,244,733,1440,3000);
```


### move(x1, y1, x2, y2)

> 滑动
> 

- 参数 : x1 {int} 起点x 
- 参数 : y1 {int} 起点y 
- 参数 : x2 {int} 终点x 
- 参数 : y2 {int} 终点y 
- 版本 : 1.0.0


```javascript
//滑动手势
$act.move(500,0,500,800);
```


### move(x1, y1, x2, y2, dur)

> 滑动
> 

- 参数 : x1 {int} 起点x 
- 参数 : y1 {int} 起点y 
- 参数 : x2 {int} 终点x 
- 参数 : y2 {int} 终点y 
- 参数 : dur {int} 滑动延迟 
- 版本 : 1.0.0


```javascript
//滑动手势
$act.move(500,0,500,800,500);
```


### move(x1, y1, x2, y2, dur, delay)

> 滑动
> 

- 参数 : x1 {int} 起点x 
- 参数 : y1 {int} 起点y 
- 参数 : x2 {int} 终点x 
- 参数 : y2 {int} 终点y 
- 参数 : dur {int} 滑动时间 
- 参数 : delay {int} 滑动延迟 
- 版本 : 1.0.0


```javascript
//滑动手势
$act.move(500,0,500,800,500.1000);
```


### move(node, dir)

> 滑动节点
> 
> 仅无障碍可用

- 参数 : node {Node} 节点 
- 参数 : dir {String} 方向(up|down|left|right)
- 版本 : 1.0.0


### move(node, x2, y2, dur)

> 滑动
> 

- 参数 : node {Node} 节点 
- 参数 : x2 {int} 终点x 
- 参数 : y2 {int} 终点y 
- 参数 : dur {int} 滑动时间 
- 版本 : 1.0.0


```javascript
//滑动手势
$act.move(node,800,500,1000);
```


### move(node, x2, y2, dur, delay)

> 滑动
> 

- 参数 : node {Node} 节点 
- 参数 : x2 {int} 终点x 
- 参数 : y2 {int} 终点y 
- 参数 : dur {int} 滑动时间 
- 参数 : delay {int} 滑动延迟 
- 版本 : 1.0.0


```javascript
//滑动手势
$act.move(node,800,500,1000,100);
```


### gesture(gesture)

> 多指手势

- 参数 : gesture {int[]} 动作数据数组[起点x,起点y,终点x,终点y,开始时间,时长]
- 版本 : 1.0.0


```javascript
// 手势模拟向下滑动
$act.gesture([500,0,500,800,0,500]);
```


### gesture(gesture1, gesture2)

> 双指手势
> 

- 参数 : gesture1 {int[]} 动作数据数组[起点x,起点y,终点x,终点y,开始时间,时长]
- 参数 : gesture2 {int[]} 动作数据数组[起点x,起点y,终点x,终点y,开始时间,时长]
- 版本 : 1.0.0


```javascript
// 双指放大
let centerX = 500;
let centerY = 800;
$act.gesture(
    [centerX,centerY,centerX-400,centerY-400,0,500],
    [centerX,centerY,centerX+400,centerY+400,0,500]
);
```


### gesture(gesture1, gesture2, gesture3)

> 三指动作
> 

- 参数 : gesture1 {int[]} 动作数据数组
- 参数 : gesture2 {int[]} 动作数据数组
- 参数 : gesture3 {int[]} 动作数据数组
- 版本 : 1.0.0


```javascript
//三指滑动动作
$act.gesture( [500,0,500,800,500,0] ,
[550,0,550,800,500,0] ,
[600,0,600,800,500,0]
);
```


### gesture(gesture1, gesture2, gesture3, gesture4)

> 四指动作
> 

- 参数 : gesture1 {int[]} 动作数据数组
- 参数 : gesture2 {int[]} 动作数据数组
- 参数 : gesture3 {int[]} 动作数据数组
- 版本 : 1.0.0


```javascript
//四指滑动动作
$act.gesture( [500,0,500,800,500,0] ,
[550,0,550,800,500,0] ,
[600,0,600,800,500,0] ,
[650,0,650,800,500,0]
);
```


### createPath(paths)

> 通过路径来构建path对象(默认持续时间为1秒)

- 参数 : paths {[][]} 动作数据数组
- 返回 : {Path}
- 版本 : 1.0.0


### createPath(paths, dur)

> 通过路径来构建path对象

- 参数 : paths {[][]} 动作数据数组
- 参数 : dur {int} 持续
- 返回 : {AgPath} 路径对象
- 版本 : 1.0.0


### createPath(paths, delay, dur)

> 通过路径来构建path对象

- 参数 : paths {[][]} 动作数据数组
- 参数 : delay {int} 开始时间 
- 参数 : dur {int} 延迟 
- 返回 : {Path}
- 版本 : 1.0.0


### path(paths)

> 执行路径

- 参数 : paths {AgPath...} 多路径
- 版本 : 1.0.0


### path(paths)

> 构建一个路径并且执行(默认时间为1秒)

- 参数 : paths {int[][]} 动作数据数组
- 版本 : 1.0.0


### path(paths, dur)

> 构建一个路径并且执行

- 参数 : paths {int[][]} 动作数据数组
- 参数 : dur {int} 延迟 
- 版本 : 1.0.0


### path(paths, startTime, dur)

> 构建一个路径并且执行

- 参数 : paths {int[][]} 动作数据数组
- 参数 : startTime {int} 开始时间 
- 参数 : dur {int} 延迟 
- 版本 : 1.0.0


### home()

> 点击home键
> 
> 如果有root则优先使用root执行
> 如果有Shizuku则优先使用shizuku执行
> 如果有无障碍则优先使用无障碍执行
> 如果以上都没有，则无效果

- 版本 : 1.0.0


```javascript
$act.home();
```


### back()

> 返回
> 
> 如果有root则优先使用root执行
> 如果有Shizuku则优先使用shizuku执行
> 如果有无障碍则优先使用无障碍执行
> 如果以上都没有，则无效果

- 版本 : 1.0.0


```javascript
$act.back();
```


### menu()

> 返回
> 
> 如果有root则优先使用root执行
> 如果有Shizuku则优先使用shizuku执行
> 如果有无障碍则优先使用无障碍执行
> 如果以上都没有，则无效果

- 版本 : 1.0.0


```javascript
$act.menu();
```


### recent()

> 近期任务
> 
> 如果有root则优先使用root执行
> 如果有Shizuku则优先使用shizuku执行
> 如果有无障碍则优先使用无障碍执行
> 如果以上都没有，则无效果

- 版本 : 1.0.0


```javascript
$act.recent();
```


### power()

> 长按电源
> 
> 如果有root则优先使用root执行
> 如果有Shizuku则优先使用shizuku执行
> 如果有无障碍则优先使用无障碍执行
> 如果以上都没有，则无效果

- 版本 : 1.0.0


```javascript
$act.power();
```


### lock()

> 锁屏
> 
> 如果有root则优先使用root执行
> 如果有Shizuku则优先使用shizuku执行
> 如果有无障碍则优先使用无障碍执行
> 如果以上都没有，则无效果

- 版本 : 1.0.0


```javascript
$act.lock();
```


### unlock()

> 唤醒屏幕
> 
> 如果有root则优先使用root执行
> 如果有Shizuku则优先使用shizuku执行
> 如果有无障碍则优先使用无障碍执行
> 如果以上都没有，则无效果

- 版本 : 1.0.0


```javascript
$act.unlock();
```


### splitScreen()

> 分屏

- 版本 : 1.0.0


```javascript
$act.splitScreen();
```


### settings()

> 设置

- 版本 : 1.0.0


```javascript
$act.settings();
```


### notifications()

> 通知

- 版本 : 1.0.0


```javascript
$act.notifications();
```


### screenshot()

> 截屏
> 
> 唤起手机自带的截屏操作

- 版本 : 1.0.0


```javascript
$act.screenshot();
```


### input(text)

> 粘贴到文本框
> 
> 如果有root则优先使用root执行
> 如果有Shizuku则优先使用shizuku执行
> 如果有无障碍则优先使用无障碍执行
> 如果以上都没有，则无效果

- 参数 : text {String} 需要输入的文字 
- 版本 : 1.0.0


```javascript
$act.input("我是要粘贴的内容");
```


### input(node, text)

> 粘贴到文本框
> 
> 无障碍专属的函数

- 参数 : node {AccessibilityNodeInfo} 指定节点
- 参数 : text {String} 需要输入的文字 
- 版本 : 1.0.0


```javascript
$act.input("我是要粘贴的内容");
```


### input(node, text)

> 粘贴到文本框
> 
> 无障碍专属的函数

- 参数 : node {Node} 指定节点 
- 参数 : text {String} 需要输入的文字 
- 版本 : 1.0.0


```javascript
$act.input("我是要粘贴的内容");
```


### activity()

> 获得activity类名

- 返回 : activity类名
- 版本 : 1.0.0


```javascript
let name = $act.activity();
log("当前类名:"+name);
```


### activity(callback)

> 设置窗口变化监听

- 参数 : callback {(name)=>{}} 回调 
- 版本 : 1.0.0


```javascript
//设置监听:
$act.activity((name)=> {
    log("当前界面==>"+name);
});
```


### selector()

> 创建一个ui选择器
> 

- 返回 : {UiSelector} UI选择器
- 版本 : 1.0.0


### setDevDensity(density)

> 设置开发环境的密度
> 
> 注意：此函数用于全分辨率适配，需要配合 $act.setAdapt(true) 来使用。
> 
> 测试API:此方法后续可能会被删除

- 参数 : density {float} 密度因子 
- 版本 : 1.0.0


### setAdapt(usable)

> 是否启动分辨率适配
> 
> 我将根据屏幕密度来等比例计算出坐标的位置。
> 
> 测试API:此方法后续可能会被删除

- 参数 : usable {boolean} 启用分辨率适配 
- 版本 : 1.0.0


### isOnlyAcc()

> 判断$act是否只使用无障碍服务

- 返回 : {boolean} 是否只使用无障碍服务


### setOnlyAcc(onlyAcc)

> 设置$act只使用无障碍服务
> 
> 在本应用中$act是一个高度封装的框架，很多动作都会优先判断是否有$root和$szk，如果有root则优先使用root来执行手势，如果有szk(Shizuku)则优先使用Shizuku执行手势，如果$touch可用，则使用$touch执行手势。
> 
> 正因为$act是一个高度封装的框架，导致运行速度会比较慢，毕竟内部的执行逻辑稍微复杂一些。
> 
> 然而有时候我们不需要用到$root、$szk、$touch来执行操作，故设计了这个函数，用来配置$act是否只使用无障碍来进行操作，以加快运行速度。

- 参数 : onlyAcc {boolean} 是否只使用无障碍进行操作 
- 版本 : 1.4.3


### setJitter(jitter)

> 设置抖动值
> 
> $act允许用户配置抖动值(默认是0)，以实现随机点击，而抖动值其实就是随机值的范围，例如：点击坐标 X=10，抖动值为5时，实际上点击的位置将可能是 X=5到15之间。
> 假设：点击 X=5，抖动值设置为10，则实际上 X抖动之后在0-15之间(而不是-5到15之间)，我要告诉你：抖动之后的坐标不会小于0。
> 
> 不过我需要提醒:我并不会判断你的坐标在抖动之后是否处于屏幕的外部，因此，你需要合理的设置抖动值。

- 参数 : jitter {int} 抖动值  
- 版本 : 1.4.3


### enableRoot(enableRoot)

> 启用$root
> 
> $act是一个高度封装的框架，很多动作都会判断是否有$root，如果有$root则优先使用$root来执行手势。
> 
> 默认情况下，$root是启用的，你可以通过此函数来禁用$root。

- 参数 : enableRoot {boolean} 是否启用$root 
- 版本 : 1.4.7


### isEnableRoot()

> 判断$root是否启用

- 返回 : {boolean} 是否启用$root
- 版本 : 1.4.7


### enableSzk(enableSzk)

> 启用$szk
> 
> $act是一个高度封装的框架，很多动作都会判断是否有$szk，如果有$szk则优先使用$szk来执行手势。
> 
> 默认情况下，$szk是启用的，你可以通过此函数来禁用$szk。

- 参数 : enableSzk {boolean} 是否启用$szk 


### isEnableSzk()

> 判断$szk是否启用

- 返回 : {boolean} 是否启用$szk
- 版本 : 1.4.7


