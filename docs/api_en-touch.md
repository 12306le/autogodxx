# $touch - 触摸驱动

- 更新时间:2026-01-30 19:32:57

> 触摸驱动
> 
> 需要ROOT权限，部分手机不会与手指触摸冲突。




### hasPermit()

> 是否可用
> 
> 一般如果有root权限，就是可用的状态，本质上这个函数是用来判断设备是否有root权限的。这个函数性能很高，一旦初始化成功了，就会直接返回true，并不会每次都检查root权限。

- 返回 : {boolean} 是否可用
- 版本 : 1.5.2


```javascript
//初始化
if($touch.hasPermit()){
    $touch.init();
}
//之后再操作，否则无效果
```


### init()

> 初始化
> 
> $touch需要初始化才可以使用，初始化大概需要5秒时间，但如果已经初始化过了，就会直接返回true。

- 返回 : {boolean} 是否已经初始化成功


```javascript
//开始初始化
$touch.init();
```


### touchDown(fingerId, x, y)

> 按下手指

- 参数 : fingerId {int} 手指ID 
- 参数 : x {int}  坐标X 
- 参数 : y {int}  坐标Y 
- 版本 : 1.5.2


```javascript
$touch.touchDown(1, 100, 100);
```


### touchMove(fingerId, x, y)

> 移动手指

- 参数 : fingerId {int} 手指ID 
- 参数 : x {int}  坐标X 
- 参数 : y {int}  坐标Y 
- 版本 : 1.5.2


```javascript
$touch.touchMove(1, 300, 500);
```


### touchUp(fingerId)

> 抬起手指

- 参数 : fingerId {int} 手指ID 
- 版本 : 1.5.2


```javascript
$touch.touchUp(1);
```


### click(x, y)

> 点击
> 
> 原理是在C/C++层执行系统命令进行事件注入，因此效率较高

- 参数 : x {int} 坐标X 
- 参数 : y {int} 坐标Y 
- 版本 : 1.5.4


```javascript
$touch.click(300, 500);
```


### click(pointerId, x, y)

> 点击
> 
> 默认按压时长为1毫秒，该函数的本质是touchDown和touchUp的组合，因此效率较慢

- 参数 : pointerId {int} 指针ID 
- 参数 : x {int}  坐标X 
- 参数 : y {int}  坐标Y 
- 版本 : 1.5.2


```javascript
$touch.click(1, 300, 500);
```


### click(pointerId, x, y, dur)

> 点击
> 
> 原理是touchDown和touchUp的组合

- 参数 : pointerId {int} 指针ID 
- 参数 : x {int}  坐标X 
- 参数 : y {int}  坐标Y 
- 参数 : dur {int}  按压时长 
- 版本 : 1.5.2


```javascript
$touch.click(1, 300, 500, 50);
```


### press(x, y)

> 长按
> 
> 原理是touchDown和touchUp的组合，默认按压时间是750毫秒

- 参数 : x {int}  坐标X 
- 参数 : y {int}  坐标Y 
- 版本 : 1.5.2


```javascript
$touch.press(300, 500);
```


### press(pointerId, x, y)

> 长按
> 
> 原理是touchDown和touchUp的组合，默认按压时间是750毫秒

- 参数 : pointerId {int} 指针ID 
- 参数 : x {int}  坐标X 
- 参数 : y {int}  坐标Y 
- 版本 : 1.5.2


```javascript
$touch.press(1, 300, 500);
```


### press(pointerId, x, y, dur)

> 长按
> 
> 原理是touchDown和touchUp的组合

- 参数 : pointerId {int} 指针ID 
- 参数 : x {int}  坐标X 
- 参数 : y {int}  坐标Y 
- 参数 : dur {int}  长按时间 
- 版本 : 1.5.2


```javascript
$touch.press(1, 300, 500, 2000);
```


### move(x, y, x2, y2)

> 滑动
> 
> 默认的滑动时间是1秒

- 参数 : x {int}  起点X 
- 参数 : y {int}  起点Y 
- 参数 : x2 {int}  终点X 
- 参数 : y2 {int}  终点Y 
- 版本 : 1.5.2


```javascript
$touch.move(100, 100, 300, 500);
```


### move(x, y, x2, y2, dur)

> 滑动

- 参数 : x {int}  起点X 
- 参数 : y {int}  起点Y 
- 参数 : x2 {int}  终点X 
- 参数 : y2 {int}  终点Y 
- 参数 : dur {int}  移动时间 
- 版本 : 1.5.2


```javascript
$touch.move(100, 100, 300, 500, 1000);
```


### move(pointerId, x, y, x2, y2, dur)

> 滑动
> 
> 滑动的时间是根据CPU数量来进行计算的，因此并不一定就完全准确，不同手机执行的滑动时间可能有一点误差，但这并没有太大影响。

- 参数 : pointerId {int} 指针ID 
- 参数 : x {int}  起点X 
- 参数 : y {int}  起点Y 
- 参数 : x2 {int}  终点X 
- 参数 : y2 {int}  终点Y 
- 参数 : dur {int}  移动时间 
- 版本 : 1.5.2


```javascript
$touch.move(1, 100, 100, 300, 500, 1000);
```


### swipe(x, y, x2, y2, dur)

> 模拟滑动
> 
> 原理是C/C++层系统调用命令来实现注入滑动

- 参数 : x {int} 起点X 
- 参数 : y {int}  起点Y 
- 参数 : x2 {int} 终点X 
- 参数 : y2 {int} 终点Y 
- 参数 : dur {int} 滑动时间 
- 版本 : 1.5.4


```javascript
$touch.swipe(100,200,600,1200,2000);
```


### key(keyCode)

> 模拟按键
> 
> 原理是C/C++层系统调用命令来实现注入按键事件

- 参数 : keyCode {int} 键值 
- 版本 : 1.5.4


```javascript
$touch.key(4);//返回按钮
```


