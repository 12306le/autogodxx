# 示例：$device

> 来源：上传 zip 中 `1` 个原始示例文件自动合并。

## $device-设备信息-01.获取设备信息

```javascript
//AIGame 官方示例


log("屏幕的宽度",$device.width);
log("屏幕的高度",$device.height);
log("Build ID",$device.buildId);
log("Build Display",$device.buildDisplay);
log("主板名称",$device.broad);
log("品牌名称",$device.brand);
log("设备名称",$device.device);
log("型号名称",$device.model);
log("产品名称",$device.product);
log("引导加载程序名称",$device.bootloader);
log("硬件名称",$device.hardware);
log("指纹信息",$device.fingerprint);
log("序列号",$device.serial);
log("SDK版本号",$device.sdkInt);
log("内部版本号",$device.incremental);
log("Android版本号",$device.release);
log("基础操作系统版本",$device.baseOS);
log("安全补丁版本",$device.securityPatch);
log("开发代号",$device.code);

//获取其他信息

log("IMEI号码",$device.getIMEI());
log("Android ID",$device.getAndroidId());
log("MAC 地址",$device.getMacAddress());
log("屏幕亮度",$device.getBrightness());
log("屏幕亮度模式",$device.getBrightnessMode());
log("音乐音量",$device.getMusicVolume());
log("通知音量",$device.getNotificationVolume());
log("闹钟音量",$device.getAlarmVolume());
log("音乐最大音量",$device.getMusicMaxVolume());
log("通知最大音量",$device.getNotificationMaxVolume());
log("闹钟最大音量",$device.getAlarmMaxVolume());
log("电池电量百分比",$device.getBattery());
log("是否正在充电",$device.isCharging());
log("总内存",$device.getTotalMem());
log("可用内存",$device.getAvailMem());
log("屏幕是否亮起",$device.isScreenOn());
log("屏幕是否熄灭",$device.isScreenOff());



//示例结束
```
