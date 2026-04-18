# $device - 设备信息

- 更新时间:2026-01-30 19:32:51

> 设备信息




### const {int} width;

> 屏幕的宽度


### const {int} height;

> 屏幕的高度


### const {String} buildId;

> Build ID


### const {String} buildDisplay;

> Build Display


### const {String} product;

> 产品名称


### const {String} board;

> 主板名称


### const {String} brand;

> 品牌名称


### const {String} device;

> 设备名称


### const {String} model;

> 型号名称


### const {String} bootloader;

> 引导加载程序名称


### const {String} hardware;

> 硬件名称


### const {String} fingerprint;

> 指纹信息


### const {int} sdkInt;

> SDK版本号


### const {String} incremental;

> 内部版本号


### const {String} release;

> Android版本号


### const {String} code;

> 开发代号


### const {String} serial;

> 序列号


### const {String} baseOS;

> 基础操作系统版本
> 
> 仅在Android 6.0及更高版本中有效


### const {String} securityPatch;

> 安全补丁版本
> 
> 仅在Android 6.0及更高版本中有效


### getIMEI()

> 获取IMEI号码

- 返回 : {string} IMEI号码
- 版本 : 1.0.0


```javascript
log("IMEI:", $device.getIMEI());
```


### getAndroidId()

> 获取Android ID

- 返回 : {string} Android ID
- 版本 : 1.0.0


```javascript
log("Android ID:", $device.getAndroidId());
```


### getBrightness()

> 获取屏幕亮度

- 返回 : {int} 屏幕亮度
- 版本 : 1.0.0


```javascript
log("屏幕亮度:", $device.getBrightness());
```


### getBrightnessMode()

> 获取屏幕亮度模式

- 返回 : {int} 亮度模式
- 版本 : 1.0.0


```javascript
log("屏幕亮度模式:", $device.getBrightnessMode());
```


### getMusicVolume()

> 获取音乐音量

- 返回 : {int} 音乐音量值
- 版本 : 1.0.0


```javascript
log("音乐音量:", $device.getMusicVolume());
```


### getNotificationVolume()

> 获取通知音量

- 返回 : {int} 通知音量值
- 版本 : 1.0.0


```javascript
log("通知音量:", $device.getNotificationVolume());
```


### getAlarmVolume()

> 获取闹钟音量

- 返回 : {int} 闹钟音量值
- 版本 : 1.0.0


```javascript
log("闹钟音量:", $device.getAlarmVolume());
```


### getMusicMaxVolume()

> 获取音乐最大音量

- 返回 : {int} 音乐最大音量值
- 版本 : 1.0.0


```javascript
log("音乐最大音量:", $device.getMusicMaxVolume());
```


### getNotificationMaxVolume()

> 获取通知最大音量

- 返回 : {int} 通知最大音量值
- 版本 : 1.0.0


```javascript
log("通知最大音量:", $device.getNotificationMaxVolume());
```


### getAlarmMaxVolume()

> 获取闹钟最大音量

- 返回 : {int} 闹钟最大音量值
- 版本 : 1.0.0


```javascript
log("闹钟最大音量:", $device.getAlarmMaxVolume());
```


### getBattery()

> 电池电量百分比

- 返回 : {int} 电池电量百分比
- 版本 : 1.0.0


```javascript
log("电池电量百分比:", $device.getBattery());
```


### getTotalMem()

> 获取总内存

- 返回 : {long} 总内存大小，单位为字节
- 版本 : 1.0.0


```javascript
log("总内存:", $device.getTotalMem());
```


### getAvailMem()

> 获取可用内存

- 返回 : {long} 可用内存大小，单位为字节
- 版本 : 1.0.0


```javascript
log("可用内存:", $device.getAvailMem());
```


### isCharging()

> 是否正在充电

- 返回 : {boolean} 如果设备正在充电则返回true，否则返回false
- 版本 : 1.0.0


```javascript
log("是否正在充电:", $device.isCharging());
```


### isScreenOn()

> 判断设备屏幕是否亮起

- 返回 : {boolean} true:亮起
- 版本 : 1.0.0


```javascript
log("是否亮起:", $device.isScreenOn());
```


### isScreenOff()

> 判断设备屏幕是否熄灭

- 返回 : {boolean} true:熄灭
- 版本 : 1.0.0


```javascript
log("是否熄灭:", $device.isScreenOff());
```


### wakeUp()

> 唤醒设备屏幕

- 版本 : 1.0.0


```javascript
// 唤醒设备屏幕
$device.wakeUp();
```


### keepScreenOn()

> 保持设备屏幕常亮

- 版本 : 1.0.0


```javascript
// 保持屏幕常亮
$device.keepScreenOn();
```


### keepScreenOn(timeout)

> 保持设备屏幕常亮一段时间

- 参数 : timeout {long} 保持屏幕常亮的超时时间，单位为毫秒
- 版本 : 1.0.0


```javascript
// 保持屏幕常亮
$device.keepScreenOn(1000);
```


### keepScreenDim()

> 保持设备屏幕处于低亮度状态

- 版本 : 1.0.0


```javascript
// 保持屏幕低亮
$device.keepScreenDim();
```


### keepScreenDim(timeout)

> 保持设备屏幕处于低亮度状态

- 版本 : 1.0.0


```javascript
// 保持屏幕低亮
$device.keepScreenDim(1000);
```


### cancelKeepingAwake()

> 取消保持唤醒

- 版本 : 1.0.0


```javascript
// 取消唤醒
$device.cancelKeepingAwake();
```


### vibrate(millis)

> 震动指定时长

- 参数 : millis {long} 震动的时长，单位:ms
- 版本 : 1.0.0


```javascript
// 震动
$device.vibrate(1000);
```


### cancelVibration()

> 取消震动

- 版本 : 1.0.0


```javascript
// 取消震动
$device.cancelVibration();
```


### getMacAddress()

> 获取 MAC 地址
> 首先尝试从 WifiManager 获取，如果获取到的是伪造的 MAC 地址则视为无效
> 若无效则尝试通过网络接口获取，若还是无效且系统版本大于等于 Android 7.0（N），
> 则尝试从文件中读取

- 返回 : MAC 地址，如果无法获取则返回 null
- 版本 : 1.0.0


```javascript
// 获取mac地址
log("mac地址:",$device.getMacAddress());
```


### hasNavBar()

> 是否存在NavigationBar

- 返回 : {boolean} 是否存在NavigationBar
- 版本 : 1.0.0


```javascript
// 是否存在导航栏
log("是否存在导航栏:",$device.hasNavBar());
```


### getVirtualBarHeight()

> 获取虚拟功能键高度

- 返回 : {int} 虚拟功能键高度
- 版本 : 1.0.0


```javascript
// 导航栏高度
log("导航栏高度:",$device.getVirtualBarHeight());
```


### isLock()

> 判断设备是否锁定

- 返回 : {boolean} 是否锁定
- 版本 : 1.0.0


```javascript
// 设备是否锁定
log("设备是否锁定:",$device.isLock());
```


