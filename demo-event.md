# 示例：$event

> 来源：上传 zip 中 `14` 个原始示例文件自动合并。

## $event-事件监听-01.音量监听

```javascript
//官方示例

//运行此代码之后，尝试自己手动加减音量，然后回来看日志
$event.on("volume",(data)=>{
    log("描述："+data.desc);
    log("音量类型："+data.value.type);
    log("当前音量："+data.value.curVolume);
    log("最大音量："+data.value.maxVolume);
    log("");//打印一行分割
});




//示例结束
```

## $event-事件监听-02.屏幕监听

```javascript
//官方示例

//运行此代码之后，尝试自己手动关闭屏幕，然后回来看日志
$event.on("screen",(data)=>{
    //除了监听，你也可以使用 $screen.isScreenOn() 函数判断屏幕是否点亮
    log("描述："+data.desc);
    log("是否点亮："+data.value.screenOn);
    log("是否关闭："+data.value.screenOff);
    log("");//打印一行分割
});




//示例结束
```

## $event-事件监听-03.用户解锁监听

```javascript
//官方示例


//运行此代码之后，尝试自己手动解锁屏幕，然后回来看日志
$event.on("screenUnlock",(data)=>{
    log("描述："+data.desc);
    log("是否解锁："+data.value.screenUnlock);
    log("");//打印一行分割
});




//示例结束
```

## $event-事件监听-04.网络监听

```javascript
//官方示例


//运行此代码之后，尝试自己手动联网或关闭网络，然后回来看日志
$event.on("net",(data)=>{
    //此方法不是专门针对wifi做的监听，所以wifi关闭时未必会回调这里
    //如果想专门监听wifi请移步到下一个示例[05.WIFI监听.js]
    log("描述："+data.desc);
    log("网络类型："+data.value.type);//常用
    log("链接状态："+data.value.connect);//常用
    log("原因："+data.value.type);
    log("附属类型："+data.value.subtype);
    log("信息："+data.value.info);
    log("");//打印一行分割
});




//示例结束
```

## $event-事件监听-05.WIFI监听

```javascript
//官方示例


//运行此代码之后，尝试自己手动链接wifi或断开wifi，然后回来看日志
$event.on("wifi",(data)=>{
    log("描述："+data.desc);
    log("是否启用："+data.value.enable);
    log("正在启用："+data.value.enabling);
    log("是否禁用："+data.value.disable);
    log("正在禁用："+data.value.disabling);
    log("");//打印一行分割
});




//示例结束
```

## $event-事件监听-06.WIFI状态监听

```javascript
//官方示例


//运行此代码之后，尝试自己手动链接wifi或断开wifi，然后回来看日志
$event.on("wifiState",(data)=>{
    log("描述："+data.desc);
    log("类型："+data.value.type);
    log("原因："+data.value.reason);
    log("信息："+data.value.info);
    log("附属类型："+data.value.subtype);
    log("");//打印一行分割
});




//示例结束
```

## $event-事件监听-07.电池监听

```javascript
//官方示例

//主要监听电池电量相关的事件：充电器链接、电量低、电量恢复等事件
$event.on("power",(data)=>{
    log("描述："+data.desc);
    log("充电器链接："+data.value.connect);
    log("电量过低："+data.value.low);
    log("电量恢复："+data.value.okay);
    log("");//打印一行分割
});




//示例结束
```

## $event-事件监听-08.电量监听

```javascript
//官方示例

//主要监听电池电量:电量百分比等等
$event.on("battery",(data)=>{
    log("描述："+data.desc);
    log("电量百分比："+data.value.percent);
    log("是否充电："+data.value.isCharge);
    log("充电方式："+data.value.chargeType);
    log("");//打印一行分割
});




//示例结束
```

## $event-事件监听-09.蓝牙连接监听

```javascript
//官方示例

//安卓6-11要位置权限 安卓12要蓝牙权限
let ps = ["android.permission.ACCESS_FINE_LOCATION","android.permission.BLUETOOTH_CONNECT"];

if ($permit.hasPermit(ps)) {
    log("权限满足");
} else {
    $permit.getPermit(ps);
}


//可以尝试连接蓝牙耳机，观察日志信息
$event.on("bluetooth",(data)=> {
    log("描述："+data.desc);
    log("是否连接："+data.value.connect);
    log("是否开启："+data.value.on);
    log("是否关闭："+data.value.off);
    log("正在开启："+data.value.starting);
    log("正在关闭："+data.value.closing);

    if (data.value.address != null) {
        log("连接MAC地址: "+data.value.address);
    }

    //需要蓝牙权限:如果没有就是null
    if (data.value.name != null) {
        log("设备名称: "+data.value.name);
    }

    //需要蓝牙权限并且安卓11+:如果没有就是null
    if (data.value.alias != null) {
        log("设备别名: "+data.value.alias);
    }

    log(""); //打印一行分割
});




//示例结束
```

## $event-事件监听-10.锁屏监听

```javascript
//官方示例

//手动锁屏再解锁，最后观察日志
$event.on("lock",(data)=> {
    //lock事件并非是一个专门监听屏幕事件的监听器
    //如果你想监听屏幕事件，请移步[02.屏幕监听.js]
    //除了监听，你也可以使用 $device.isLock() 来判断设备是否锁定
    log("描述："+data.desc);
    log("是否锁屏："+data.value.lock);
    log("屏幕点亮："+data.value.screenOn);
    log("屏幕熄灭："+data.value.screenOff);
    log(""); //打印一行分割
});




//示例结束
```

## $event-事件监听-11.磁盘监听

```javascript
//官方示例

//主要用来监听磁盘挂载、移除等事件，不算常用
$event.on("media",(data)=> {
    log("描述："+data.desc);
    log("挂载："+data.value.mount);
    log("卸载："+data.value.unmount);
    log("移除："+data.value.remove);
    log("移除操作不当："+data.value.badRemove);
    log(""); //打印一行分割
});




//示例结束
```

## $event-事件监听-12.按键监听

```javascript
//官方示例

//运行此代码之后，尝试自己手动HOME按键或者菜单RECENT按键，然后回来看日志
$event.on("key",(data)=>{
    log(data);
    log("");//打印一行分割
});




//示例结束
```

## $event-事件监听-13.通知监听

```javascript
//官方示例

//获取应用访问权限
if (!$permit.hasNotifyAccess()) {
    $permit.notifyAccess();
} else {
    //通知监听 需要授予通知访问权限才能监听到通知
    $event.on("notify",(data)=> {
        log("包名:",data.value.pkg);
        log("标题:",data.value.title);
        log("内容:",data.value.text);
        log("副文本:",data.value.subText);
        log("提示文本:",data.value.tickerText);
        log("大文本:",data.value.bigText);
        log("时间:",data.value.postTime);
        log("是否为持续通知:",data.value.isOngoing);
        log("是否可清除:",data.value.isClearable);
        log(""); //用来分隔
    });
}



//示例结束
```

## $event-事件监听-14.屏幕旋转监听

```javascript
//官方示例

//当屏幕旋转时触发
$event.on("screenDir",(data)=> {
    log("角度:",data.value.rotation);
    log("是否竖屏:",data.value.isVertical);
    log(""); //用来分隔
});


//示例结束
```
