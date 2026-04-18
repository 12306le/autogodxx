# $permit - 权限工具

- 更新时间:2026-01-30 19:32:54

> 权限工具




### floaty()

> 获取悬浮窗权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取悬浮窗权限
$permit.floaty();
```


### hasFloaty()

> 判断是否有悬浮窗权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("悬浮窗",$permit.hasFloaty());
```


### wza()

> 获取无障碍权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次
> 
> 如果有Root权限:则使用Root权限为本应用授权永久无障碍
> 
> 如果有Shizuku权限:则使用Shizuku权限为本应用授权永久无障碍
> 
> 如果没有Root和Shizuku:则进行普通权限申请(非永久有效,受系统限制)

- 版本 : 1.1.6


```javascript
//获取无障碍权限
$permit.wza();
```


### hasWza()

> 判断是否有无障碍权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("无障碍",$permit.hasWza());
```


### sd()

> 获取存储权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取存储权限
$permit.sd();
```


### hasSd()

> 判断是否有存储权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("存储权限",$permit.hasSd());
```


### call()

> 获取电话权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取电话权限
$permit.call();
```


### hasCall()

> 判断是否有电话权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("打电话",$permit.hasCall());
```


### set()

> 获取修改系统设置权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取修改设置权限
$permit.set();
```


### hasSet()

> 判断是否有修改系统设置权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("修改设置",$permit.hasSet());
```


### net()

> 获取网络权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取网络权限
$permit.net();
```


### hasNet()

> 判断是否有网络权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("网络权限",$permit.hasNet());
```


### camera()

> 获取相机权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取相机权限
$permit.camera();
```


### hasCamera()

> 判断是否有相机权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("相机权限",$permit.hasCamera());
```


### record()

> 获取录音权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取录音权限
$permit.record();
```


### hasRecord()

> 判断是否有录音权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("录音权限",$permit.hasRecord());
```


### readSms()

> 获取读取短信权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取读取信息权限
$permit.readSms();
```


### hasReadSms()

> 判断是否有读取短信权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("读取短信",$permit.hasReadSms());
```


### sendSms()

> 获取发送短信权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取发送信息权限
$permit.sendSms();
```


### hasSendSms()

> 判断是否有发送短信权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("发送短信",$permit.hasSendSms());
```


### readContact()

> 获取读取联系人权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取读取联系人权限
$permit.readContact();
```


### hasReadContact()

> 判断是否有读取联系人权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("读取联系人",$permit.hasReadContact());
```


### writeContact()

> 获取写入联系人权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取写入联系人权限
$permit.writeContact();
```


### hasWriteContact()

> 判断是否有写入联系人权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("写入联系人",$permit.hasWriteContact());
```


### loc()

> 获取定位权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.1.6


```javascript
//获取定位权限
$permit.loc();
```


### hasLoc()

> 判断是否有定位权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.1.6


```javascript
log("位置权限",$permit.hasLoc());
```


### readCalendar()

> 获取读取日历权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.2.2


```javascript
//获取读取日历权限
$permit.readCalendar();  //获取读取日历权限
```


### hasReadCalendar()

> 判断是否有读取日历权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.2.2


```javascript
log("读取日历",$permit.hasReadCalendar());
```


### writeCalendar()

> 获取写入日历权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 版本 : 1.2.2


```javascript
//获取写入日历权限
$permit.writeCalendar();
```


### hasWriteCalendar()

> 判断是否有写入日历权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 返回 : {boolean} 是否有权限
- 版本 : 1.2.2


```javascript
log("写入日历",$permit.hasWriteCalendar());
```


### hasPermit(permitName)

> 判断是否有权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 参数 : permitName {string} 权限名 
- 返回 : {boolean} 是否有权限
- 版本 : 1.2.2


```javascript
//判断是否有权限
$permit.hasPermit("android.Manifest.permission.GET_ACCOUNTS");
//等同于
$permit.hasPermit("android.permission.GET_ACCOUNTS");
```


### hasPermit(permitNames)

> 判断是否有权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 参数 : permitNames {string[]} 权限名 
- 返回 : {boolean} 是否有权限
- 版本 : 1.2.2


```javascript
let permits = ["android.permission.READ_CALENDAR","android.permission.WRITE_CALENDAR"];
//判断是否有权限
$permit.hasPermit(permits);
```


### getPermit(permitNames)

> 获取权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 参数 : permitNames {string[]} 权限名 
- 版本 : 1.2.2


```javascript
let permits = ["android.permission.READ_CALENDAR","android.permission.WRITE_CALENDAR"];
//获取权限
$permit.getPermit(permits);
```


### getPermit(permitName)

> 获取权限
> 
> 注意：在$permit中调用任何权限,都只会调用一次

- 参数 : permitName {string} 权限名 
- 版本 : 1.2.2


```javascript
//获取权限
$permit.getPermit("android.Manifest.permission.GET_ACCOUNTS");
//等同于
$permit.getPermit("android.permission.GET_ACCOUNTS");
```


### hasNotifyAccess()

> 是否已授予通知访问权限

- 返回 : {boolean} 是否有通知访问权限
- 版本 : 1.6.4


### notifyAccess()

> 获取通知访问权限
> 
> 此权限将允许应用读取所有通知

- 版本 : 1.6.4


### hasReadVideo()

> 判断是否有读取视频权限

- 返回 : {boolean} 是否有读取视频权限
- 版本 : 1.6.4


### readVideo()

> 获取读取视频权限

- 版本 : 1.6.4


### hasReadImage()

> 判断是否有读取图片权限

- 返回 : {boolean} 是否有读取视频权限
- 版本 : 1.6.4


### readImage()

> 获取读取图片权限

- 版本 : 1.6.4


### hasReadAudio()

> 判断是否有读取音频权限

- 返回 : {boolean} 是否有读取视频权限
- 版本 : 1.6.4


### readAudio()

> 获取读取音频权限

- 版本 : 1.6.4


### hasReadMedia()

> 判断是否有读取媒体权限
> 
> 这个方法综合了读取音频、图片、视频权限

- 返回 : {boolean} 是否有读取媒体权限
- 版本 : 1.6.4


### readMedia()

> 获取读取媒体权限
> 
> 这个方法综合了读取音频、图片、视频权限

- 版本 : 1.6.4


