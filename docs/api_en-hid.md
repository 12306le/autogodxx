# $hid - 键鼠触控

- 更新时间:2026-01-30 19:32:53

> 键鼠触控
> 
> 无需任何权限，连接键鼠硬件即可完成自动化触控功能。




### init()

> 初始化HID

- 返回 : {String} 初始化成功返回true，否则就是失败原因
- 版本 : 1.8.9


```javascript
let res = $hid.init();
if(res=="true"){
    log("初始化成功");
}else{
    log("初始化失败:",res);
}
```


### isOn()

> 判断是否开启
> 
> 判断是否链接了硬件

- 返回 : {boolean} 是否开启
- 版本 : 1.8.9


```javascript
if($hid.isOn()){
    log("处于开启状态");
}
```


### dexBeat()

> 获取版本号
> 
> 获取插件版本号

- 返回 : {float} 版本号
- 版本 : 1.8.9


```javascript
log("HID版本:",$hid.dexBeat());
```


### getBatteryLevel()

> 获取电量
> 
> 获取手机当前电量

- 返回 : {int} 电量
- 版本 : 1.8.9


```javascript
log("电池电量:",$hid.getBatteryLevel());
```


### isCharging()

> 是否处于充电状态
> 
> 判断当前手机是否在供电

- 返回 : {boolean} 是否处于充电状态
- 版本 : 1.8.9


```javascript
if($hid.isCharging()){
    log("正在充电...");
}
```


### setPowerOff()

> 关闭供电

- 版本 : 1.8.9


```javascript
$hid.setPowerOff();
```


### setPowerOn()

> 开启供电

- 版本 : 1.8.9


```javascript
$hid.setPowerOn();
```


### click(x, y)

> 点击

- 参数 : x {int} 坐标x
- 参数 : y {int} 坐标y
- 返回 : {boolean} 是否点击成功
- 版本 : 1.8.9


```javascript
$hid.click(100,100);
```


### click(index)

> 点击

- 参数 : index {int[]} 坐标
- 返回 : {boolean} 是否点击成功
- 版本 : 1.8.9


```javascript
$hid.click([100,100]);
```


### longClick(x, y, dur)

> 长按

- 参数 : x {int} 坐标x
- 参数 : y {int} 坐标y
- 参数 : dur {int} 长按时间
- 返回 : {boolean} 是否点击成功
- 版本 : 1.8.9


```javascript
$hid.longClick(100,100,1500);
```


### longClick(index)

> 长按

- 参数 : index {int[]} 坐标
- 返回 : {boolean} 是否点击成功
- 版本 : 1.8.9


```javascript
$hid.longClick([100,100,1500]);
```


### swipEx(x1, y1, x2, y2)

> 增强滑动

- 参数 : x1 {int} 起点坐标x
- 参数 : y1 {int} 起点坐标y
- 参数 : x2 {int} 终点坐标x
- 参数 : y2 {int} 终点坐标y
- 返回 : {boolean} 是否滑动成功
- 版本 : 1.8.9


```javascript
$hid.swipEx(100,100,200,200);
```


### swipEx(x1, y1, x2, y2, press, time, delay)

> 增强滑动

- 参数 : x1 {int} 起点坐标x
- 参数 : y1 {int} 起点坐标y
- 参数 : x2 {int} 终点坐标x
- 参数 : y2 {int} 终点坐标y
- 参数 : press {int} 按下时长(默认:300)
- 参数 : time {int} 滑动时长(默认:1000)
- 参数 : delay {int} 延迟时长(默认:0)
- 返回 : {boolean} 是否滑动成功
- 版本 : 1.8.9


```javascript
$hid.swipEx(100,100,200,200,300,1000,0);
```


### touchDown(id, x, y)

> 按下

- 参数 : id {int} 手指id
- 参数 : x {int} 坐标x
- 参数 : y {int} 坐标y
- 返回 : {boolean} 是否按下成功
- 版本 : 1.8.9


```javascript
$hid.touchDown(0,100,100);
```


### touchMove(id, x, y)

> 移动

- 参数 : id {int} 手指id
- 参数 : x {int} 坐标x
- 参数 : y {int} 坐标y
- 返回 : {boolean} 是否移动成功
- 版本 : 1.8.9


```javascript
$hid.touchMove(0,100,100);
```


### touchUp(id)

> 抬起

- 参数 : id {int} 手指id
- 返回 : {boolean} 是否抬起成功
- 版本 : 1.8.9


```javascript
$hid.touchUp(0);
```


### keyPress(keyCode)

> 按键

- 参数 : keyCode {int} 按键码
- 返回 : {boolean} 是否按下成功
- 版本 : 1.8.9


```javascript
$hid.keyPress(40);
```


### keyPress(modify, keyCode)

> 按键

- 参数 : modify {int} 组合按键码
- 参数 : keyCode {int} 按键码
- 返回 : {boolean} 是否按下成功
- 版本 : 1.8.9


```javascript
$hid.keyPress(0,40);
```


### home()

> 主页
> 
> 按下手机主页键

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.home();
```


### back()

> 返回
> 
> 按下手机返回键

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.back();
```


### recents()

> 最近
> 
> 按下手机后台键

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.recents();
```


### recentsV2()

> 最近任务增强版
> 
> 按下手机后台键 第二种方法,特殊机型使用

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.recentsV2();
```


### selectAll()

> 全选
> 
> 按下手机全选键 选择输入框 全部文本内容

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.selectAll();
```


### cut()

> 剪切
> 
> 按下手机剪切键 剪切输入框 全部文本内容到剪切板

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.cut();
```


### copy()

> 复制
> 
> 按下手机后台键 复制输入框 全部文本内容到剪切板

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.copy();
```


### paste()

> 粘贴
> 
> 按下手机粘贴键 剪切板内容粘贴到输入框内 可以配合写入剪切板命令

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
//先设置剪切板
$sys.setClip("我是来自剪切板的内容");
//再粘贴内容
$hid.paste();
```


### paste(text)

> 粘贴文本
> 
> 按下手机粘贴键 剪切板内容粘贴到输入框内 可以配合写入剪切板命令

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.paste("我是来自剪切板内容");
//等价于下面的写法
//1.先设置剪切板
$sys.setClip("我是来自剪切板的内容");
//2.再粘贴内容
$hid.paste();
```


### inputSimple(text)

> 输入
> 
> 按下手机键盘键 在输入框输入英文字母+数字
> 
> 注意:标点符号和中文不能输入

- 参数 : text {String} 文本
- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.inputSimple("abcd1234");
```


### delete()

> 删除
> 
> 按下手机删除键 删除输入框文本内容 特殊机型用回退键

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.delete();
```


### delete(len)

> 删除
> 
> 按下手机删除键 删除输入框文本内容 特殊机型用回退键

- 参数 : len {int} 删除长度
- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.delete(2);
```


### backspace()

> 回退
> 
> 按下手机回退键 回退输入框文本内容 特殊机型用回退键

- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.backspace();
```


### backspace(len)

> 回退
> 
> 按下手机回退键 回退输入框文本内容 特殊机型用回退键

- 参数 : len {int} 回退长度
- 返回 : {boolean} 是否成功
- 版本 : 1.8.9


```javascript
$hid.backspace(2);
```


