# $szk - Shizuku工具

- 更新时间:2026-01-30 19:32:55

> Shizuku工具
> 
> 这是一种不需要root就能享受到root同等级权限的工具




### getPermit()

> 获取Shizuku权限
> 
> 如果Shizuku权限已经获取，那么就判断是否链接上服务，如果服务没有链接则尝试连接服务
> 

- 版本 : 1.0.8


```javascript
$szk.getPermit();
```


### hasPermit()

> 是否可用
> 
> 1.判断Shizuku是否授权
> 
> 2.判断Shizuku服务是否可用
> 
> 3.如果Shizuku可用,则判断是否获取到了服务实例
> 
> 4.如果没有获取服务实例,则会尝试重连服务(重连服务成功就会创建服务实例)
> 

- 返回 : {boolean} 判断Shizuku是否获取权限并且可用
- 版本 : 1.0.8


```javascript
if($szk.hasPermit()){
    log("Shizuku权限已获取");
}
```


### enablePointer(enable)

> 启用指针
> 
> 打开或者关闭开发者调试的指针位置选项

- 参数 : enable {boolean} 是否启用
- 版本 : 1.4.1


```javascript
//打开指针位置显示
$szk.enablePointer(true);
```


### waitPermit()

> 等待Shizuku权限
> 
> 此函数是个阻塞同步方法,只有当本函数执行完毕后,下面的方法才会执行
> 
> 如果shizuku没有安装或者不可用会直接返回false,否则就会循环等待shizuku权限,直到shizuku权限获取成功
> 
> 但是这个函数不能作为获取权限来使用，它不会获取shizuku权限，所以你需要调用getPermit()成功获取权限后再调用此方法，
> 设计这个方法是因为:shizuku权限获取后,并不是立马就能执行命令了，而是需要等待一段时间，而这个函数就是用来衔接这段等待时间的。

- 返回 : {boolean} 等待shizuku权限成功返回true,否则返回false
- 版本 : 1.2.0


### waitPermit(callback)

> 等待Shizuku权限
> 
> 此函数是个异步方法,放在后台等待shizuku权限,如果获取成功就执行回调

- 参数 : callback ((success)=>{}) 执行回调,参数是授权是否成功
- 版本 : 1.2.0


### click(x, y)

> 点击
> 

- 参数 : x {int} 点击位置x
- 参数 : y {int} 点击位置y
- 版本 : 1.0.8


```javascript
//点击手势(长按)(时长一秒)
$szk.click(500,800);
```


### click(x, y, dur)

> 点击
> 

- 参数 : x {int} 点击位置x
- 参数 : y {int} 点击位置y
- 参数 : dur {int} 点击持续时长
- 版本 : 1.0.8


```javascript
//点击手势(长按)(时长一秒)
$szk.click(500,800,1000);
```


### click(x, y, dur, delay)

> 点击
> 

- 参数 : x {int} 点击位置x
- 参数 : y {int} 点击位置y
- 参数 : dur {int} 点击持续时长
- 参数 : delay {int} 点击前延迟
- 版本 : 1.0.8


```javascript
//点击手势(长按)(时长一秒)
$szk.click(500,800,1000,100);
```


### click(index)

> 点击
> 

- 参数 : index {int[]} 点击位置
- 版本 : 1.0.8


```javascript
//点击
$szk.click([500,800]);
```


### click(index, dur)

> 点击
> 

- 参数 : index {int[]} 点击位置
- 参数 : dur {int} 点击持续时长
- 版本 : 1.0.8


```javascript
//点击
$szk.click([500,800],50);
```


### click(index, dur, delay)

> 点击
> 

- 参数 : index {int[]} 点击位置
- 参数 : dur {int} 点击持续时长
- 参数 : delay {int} 延迟
- 版本 : 1.0.8


```javascript
//点击
$szk.click([500,800],50,2000);
```


### click(index)

> 点击
> 

- 参数 : index {Point} 点击位置
- 版本 : 1.0.8


```javascript
//点击手势(长按)
let point = new org.opencv.core.Point(500,800);
$szk.click(point);
```


### click(index, dur)

> 点击
> 

- 参数 : index {Point} 点击位置
- 参数 : dur {int} 点击持续时长
- 版本 : 1.0.8


```javascript
//点击手势(长按)(时长一秒)
let point = new org.opencv.core.Point(500,800);
$szk.click(point,1000);
```


### click(index, dur, delay)

> 点击
> 

- 参数 : index {Point} 点击位置
- 参数 : dur {int} 点击持续时长
- 参数 : delay {int} 点击前延迟
- 版本 : 1.0.8


```javascript
//点击手势(长按)(时长一秒)
let point = new org.opencv.core.Point(500,800);
$szk.click(point,1000,100);
```


### press(x, y)

> 长按
> 

- 参数 : x {int} 长按位置x
- 参数 : y {int} 长按位置y
- 版本 : 1.0.8


```javascript
//点击手势(长按)(时长一秒)
$szk.press(500,800);
```


### press(x, y, dur)

> 长按
> 

- 参数 : x {int} 长按位置x
- 参数 : y {int} 长按位置y
- 参数 : dur {int} 长按持续时间
- 版本 : 1.0.8


```javascript
//点击手势(长按)(时长一秒)
$szk.press(500,800,1000);
```


### press(x, y, dur, delay)

> 长按
> 

- 参数 : x {int} 长按位置x
- 参数 : y {int} 长按位置y
- 参数 : dur {int} 长按持续时间
- 参数 : delay {int} 长按前延迟
- 版本 : 1.0.8


```javascript
//点击手势(长按)(延迟一秒)
$szk.press(500,800,1500,100);
```


### move(x1, y1, x2, y2)

> 滑动
> 

- 参数 : x1 {int} 起点x
- 参数 : y1 {int} 起点y
- 参数 : x2 {int} 终点x
- 参数 : y2 {int} 终点y
- 版本 : 1.0.8


```javascript
//滑动手势
$szk.move(500,0,500,800);
```


### move(x1, y1, x2, y2, dur)

> 滑动
> 

- 参数 : x1 {int} 起点x
- 参数 : y1 {int} 起点y
- 参数 : x2 {int} 终点x
- 参数 : y2 {int} 终点y
- 参数 : dur {int} 时长
- 版本 : 1.0.8


```javascript
//滑动手势
$szk.move(500,0,500,800,1000);
```


### move(x1, y1, x2, y2, dur, delay)

> 滑动
> 

- 参数 : x1 {int} 起点x
- 参数 : y1 {int} 起点y
- 参数 : x2 {int} 终点x
- 参数 : y2 {int} 终点y
- 参数 : dur {int} 时长
- 参数 : delay {int} 延迟
- 版本 : 1.0.8


```javascript
//滑动手势
$szk.move(500,0,500,800,1000,2000);
```


### home()

> 返回手机主页

- 版本 : 1.0.8


```javascript
$szk.home();
```


### back()

> 执行返回按钮

- 版本 : 1.0.8


```javascript
$szk.back();
```


### menu()

> 执行菜单按钮

- 版本 : 1.0.8


```javascript
$szk.menu();
```


### recent()

> 打开最近任务列表
> 
> 效果和'menu()'一样

- 版本 : 1.0.8


```javascript
$szk.recent();
```


### power()

> 执行关机键

- 版本 : 1.0.8


```javascript
$szk.power();
```


### lock()

> 锁屏

- 版本 : 1.0.8


```javascript
$szk.lock();
```


### unlock()

> 唤醒屏幕

- 版本 : 1.0.8


```javascript
$szk.unlock();
```


### input(text)

> 输入文本

- 参数 : text {string} 文本内容
- 版本 : 1.0.8


```javascript
$szk.input("我是文本");
```


### killApp(pkgName)

> 杀死应用

- 参数 : pkgName {string} 包名
- 版本 : 1.0.8


```javascript
$szk.killApp("包名");
```


### setWmSize(width, height)

> 设置手机分辨率

- 参数 : width {int} 宽度 
- 参数 : height {int} 高度 


```javascript
$szk.setWmSize(1080,2200);
```


### setDpi(density)

> 设置手机DPI

- 参数 : density {int} 密度因子 
- 版本 : 1.5.4


```javascript
$szk.setDpi(320);
```


### resetWm()

> 重置手机分辨率与DPI

- 版本 : 1.5.4


```javascript
$szk.resetWm();
```


### exe(cmd)

> 执行一条命令

- 参数 : cmd {string} 需要执行的命令
- 返回 : {string} 执行结果
- 版本 : 1.0.8


```javascript
//等待获取shizuku权限，如果没有权限那么就会一直等待下去
$szk.getPermit();
$szk.exe("input keyevent KEYCODE_POWER");//点击电源按钮
```


### exe(cmd, infoCallback, errorCallback)

> 执行命令

- 参数 : cmd {string} 命令
- 参数 : infoCallback {(info)=>{}} 输出信息回调
- 参数 : errorCallback {(err)=>{}} 错误信息回调
- 版本 : 1.0.8


```javascript
//等待获取shizuku权限，如果没有权限那么就会一直等待下去
$szk.getPermit();
$szk.exe("ls",
    (info)=> {
        //信息输出回调
        log(info);
    },
    (error)=> {
        //异常输出回调
        $log.e(error);
    }
);
```


### exe(cmd, infoCallback, errorCallback, endCallback)

> 执行命令

- 参数 : cmd {string} 命令
- 参数 : infoCallback {(info)=>{}} 输出信息回调
- 参数 : errorCallback {(err)=>{}} 错误信息回调
- 参数 : endCallback {(result)=>{}} 结束执行回调
- 版本 : 1.0.8


```javascript
//等待获取shizuku权限，如果没有权限那么就会一直等待下去
$szk.getPermit();
$szk.exe("ls",
    (info)=> {
        //信息输出回调
        log(info);
    },
    (error)=> {
        //异常输出回调
        $log.e(error);
    },
    (result)=> {
        //结束回调
        log(result)
    }
);
```


### exe(cmd, startCallback, infoCallback, errorCallback, endCallback)

> 执行命令

- 参数 : cmd {string} 命令
- 参数 : startCallback {()=>{}} 开始执行时的回调
- 参数 : infoCallback {(info)=>{}} 输出信息回调
- 参数 : errorCallback {(err)=>{}} 错误信息回调
- 参数 : endCallback {(result)=>{}} 结束执行回调
- 版本 : 1.0.8


```javascript
//等待获取shizuku权限，如果没有权限那么就会一直等待下去
$szk.getPermit();
$szk.exe("ls",
    ()=> {
        //开始执行回调
        log("开始执行");
    },
    (info)=> {
        //信息输出回调
        log(info);
    },
    (error)=> {
        //异常输出回调
        $log.e(error);
    },
    (result)=> {
        //结束回调
        log(result)
    }
);
```


