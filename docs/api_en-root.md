# $root - ROOT与Shell命令

- 更新时间:2026-01-30 19:32:54

> ROOT与Shell工具




### hasPermit()

> 是否获得ROOT权限

- 返回 : {boolean} 是否获得ROOT权限
- 版本 : 1.0.0


```javascript
let has = $root.hasPermit();
alert("是否有root权限",has);
```


### getPermit()

> 获得root权限

- 返回 : {boolean} 是否获得root权限
- 版本 : 1.0.0


```javascript
$root.getPermit();
```


### enablePointer(enable)

> 启用指针
> 
> 打开或者关闭开发者调试的指针位置选项

- 参数 : enable {boolean} 是否启用 
- 版本 : 1.4.1


```javascript
//打开指针位置显示
$root.enablePointer(true);
```


### click(x, y)

> 点击
> 

- 参数 : x {int} 点击位置x 
- 参数 : y {int} 点击位置y 
- 版本 : 1.0.0


```javascript
//点击手势
$root.click(500,800);
```


### click(x, y, dur)

> 点击
> 

- 参数 : x {int} 点击位置x 
- 参数 : y {int} 点击位置y 
- 参数 : dur {int} 点击时长 
- 版本 : 1.0.0


```javascript
//点击手势(长按)
$root.click(500,800,1500);
```


### click(x, y, dur, delay)

> 点击
> 

- 参数 : x {int} 点击位置x 
- 参数 : y {int} 点击位置y 
- 参数 : dur {int} 点击时长 
- 参数 : delay {int} 点击前延迟 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
$root.click(500,800,1500,100);
```


### click(index)

> 点击
> 

- 参数 : index {int[]} 点击位置 
- 版本 : 1.0.0


```javascript
//点击
$root.click([500,800]);
```


### click(index, dur)

> 点击
> 

- 参数 : index {int[]} 点击位置 
- 参数 : dur {int} 点击时间 
- 版本 : 1.0.0


```javascript
//点击
$root.click([500,800],50);
```


### click(index, dur, delay)

> 点击
> 

- 参数 : index {int[]} 点击位置 
- 参数 : dur {int} 点击时间 
- 参数 : delay {int} 延迟 
- 版本 : 1.0.0


```javascript
//点击
$root.click([500,800],50,2000);
```


### click(index)

> 点击
> 

- 参数 : index {Point} 点击位置
- 版本 : 1.0.0


```javascript
//点击手势
let point = new org.opencv.core.Point(500,800);
$root.click(point);
```


### click(index, dur)

> 点击
> 

- 参数 : index {Point} 点击位置
- 参数 : dur {int} 点击时长 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
let point = new org.opencv.core.Point(500,800);
$root.click(point,1500);
```


### click(index, dur, delay)

> 点击
> 

- 参数 : index {Point} 点击位置
- 参数 : dur {int} 点击时长 
- 参数 : delay {int} 点击前延迟 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
let point = new org.opencv.core.Point(500,800);
$root.click(point,1500,100);
```


### press(x, y)

> 长按
> 

- 参数 : x {int} 长按位置x 
- 参数 : y {int} 长按位置y 
- 版本 : 1.0.0


```javascript
//点击手势(长按)(延迟一秒)
$root.press(500,800);
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
$root.press(500,800,1500);
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
$root.press(500,800,1500,100);
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
$root.move(500,0,500,800);
```


### move(x1, y1, x2, y2, dur)

> 滑动
> 

- 参数 : x1 {int} 起点x 
- 参数 : y1 {int} 起点y 
- 参数 : x2 {int} 终点x 
- 参数 : y2 {int} 终点y 
- 参数 : dur {int} 滑动时间 
- 版本 : 1.0.0


```javascript
//滑动手势
$root.move(500,0,500,800,500);
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
$root.move(500,0,500,800,500.1000);
```


### lock()

> 锁屏

- 版本 : 1.0.0


```javascript
$root.lock();
```


### unlock()

> 解锁屏幕

- 版本 : 1.0.0


```javascript
$root.unlock();
```


### power()

> 电源按键

- 版本 : 1.0.9


```javascript
$root.power();
```


### exec(cmd)

> 执行ROOT命令

- 参数 : cmd {string} 命令 
- 版本 : 1.5.9


```javascript
//手机变砖(别用!!!!)
//$root.exec("rm -rf /data");
```


### exeRootShell(cmd)

> 执行ROOT命令

- 参数 : cmd {string} 命令 
- 版本 : 1.0.0


```javascript
//手机变砖(别用!!!!)
//$root.exeRootShell("rm -rf /data");
```


### exeRootShell(cmd, output)

> 执行ROOT命令

- 参数 : cmd {string} 命令 
- 参数 : output {(line)=>{}} 命令输出(回调:输出) 
- 版本 : 1.0.0


```javascript
//查看系统网络配置
$root.exeRootShell("cat /data/misc/dhcp/mac",(line)=>{
    log(line);
});
```


### exeRootShell(cmd, output, terminate)

> 执行ROOT命令

- 参数 : cmd {string} 命令 
- 参数 : output {(line)=>{}} 命令输出(回调:输出) 
- 参数 : terminate {(err)=>{}} 命令中止(回调:原因) 
- 版本 : 1.0.0


```javascript
//查看系统网络配置
$root.exeRootShell("cat /data/misc/dhcp/mac",(line)=>{
    log(line);
},(err)=>{
    $log.e(err);
});
```


### exeRootShell(cmd, output, terminate, complete)

> 执行ROOT命令

- 参数 : cmd {string} 命令 
- 参数 : output {(line)=>{}} 命令输出(回调:输出) 
- 参数 : terminate {(err)=>{}} 命令中止(回调:原因) 
- 参数 : complete {(exitCode)=>{}} 命令完成(回调:退出码) 
- 版本 : 1.0.0


```javascript
//查看系统网络配置
$root.exeRootShell("cat /data/misc/dhcp/mac",(line)=> {
    log(line);
},(err)=> {
    $log.e(err);
},(exitCode)=> {
    $log.i("执行完毕",exitCode);
});
```


### exeShell(cmd)

> 执行免ROOT命令

- 参数 : cmd {string} 命令 
- 版本 : 1.0.0


```javascript
$root.exeShell("ls /sdcard/Pictures");
```


### exeShell(cmd, output)

> 执行免ROOT命令

- 参数 : cmd {string} 命令 
- 参数 : output {(line)=>{}} 命令输出(回调:输出) 
- 版本 : 1.0.0


```javascript
//列出/sdcard目录下的文件
$root.exeShell("ls /sdcard",(line)=>{
    log(line);
});
```


### exeShell(cmd, output, terminate)

> 执行免ROOT命令

- 参数 : cmd {string} 命令 
- 参数 : output {(line)=>{}} 命令输出(回调:输出) 
- 参数 : terminate {(err)=>{}} 命令中止(回调:原因) 
- 版本 : 1.0.0


```javascript
$root.exeShell("ls /sdcard/Pictures",(line)=> {
    log(line);
},(err)=> {
    $log.e(err);
});
```


### exeShell(cmd, output, terminate, complete)

> 执行免ROOT命令

- 参数 : cmd {string} 命令 
- 参数 : output {(line)=>{}} 命令输出(回调:输出) 
- 参数 : terminate {(err)=>{}} 命令中止(回调:原因) 
- 参数 : complete {(exitCode)=>{}} 命令完成(回调:退出码) 
- 版本 : 1.0.0


```javascript
$root.exeShell("ls /sdcard/Pictures",(line)=> {
    log(line);
},(err)=> {
    $log.e(err);
},(exitCode)=> {
    $log.i("执行结束",exitCode);
});
```


### closeRootShell()

> 关闭rootShell

- 版本 : 1.0.0


```javascript
$root.closeRootShell();
```


### closeShell()

> 关闭shell

- 版本 : 1.0.0


```javascript
$root.closeShell();
```


### closeAll()

> 关闭所有

- 版本 : 1.0.0


```javascript
$root.closeAll();
```


### input(text)

> 输入文本

- 参数 : text {string} 内容 
- 版本 : 1.0.0


```javascript
$root.input("我是输入的文本");
```


### killApp(pkgName)

> 杀死应用
> 
> 需要root权限才能执行

- 参数 : pkgName {string} 包名 
- 版本 : 1.0.4


```javascript
$root.killApp("com.example.app");
```


### lsRunningApps(callback)

> 列出所有运行的应用

- 参数 : callback {(pkg)=>{}} 回调(回调:应用包名) 
- 版本 : 1.0.4


```javascript
$root.lsRunningApps((pkg)=>{
    log(pkg);
});
```


### home()

> 回到主页

- 版本 : 1.0.9


```javascript
$root.home();
```


### back()

> 返回按键

- 版本 : 1.0.9


```javascript
$root.back();
```


### menu()

> 菜单按键

- 版本 : 1.0.9


```javascript
$root.menu();
```


### recent()

> 最近任务

- 版本 : 1.0.9


```javascript
$root.recent();
```


### setWmSize(width, height)

> 设置手机分辨率

- 参数 : width {int} 宽度 
- 参数 : height {int} 高度 


```javascript
$root.setWmSize(1080,2200);
```


### setDpi(density)

> 设置手机分辨率

- 参数 : density {int} 分辨率 
- 版本 : 1.5.4


```javascript
$root.setDpi(320);
```


### resetWm()

> 重置手机分辨率与DPI

- 版本 : 1.5.4


```javascript
$root.resetWm();
```


### key(keyName)

> 模拟按键

- 参数 : keyName 按键名称
- 版本 : 1.5.9


```javascript
$root.key("KEYCODE_POWER");
```


