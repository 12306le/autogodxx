# 示例：$app

> 来源：上传 zip 中 `24` 个原始示例文件自动合并。

## $app-应用操作-01.获取应用图标

```javascript
// AIGame官方示例


//获取悬浮窗权限
$floaty.getPermit();

//获取图标
let icon = $app.getIcon("QQ");

//显示图片
$img.show(icon);//(需要用悬浮窗权限)




// 示例结束
```

## $app-应用操作-02.运行应用

```javascript
// AIGame官方示例


$app.runApp("QQ");//应用名




// 示例结束
```

## $app-应用操作-03.运行包名

```javascript
// AIGame官方示例


$app.runPkg("com.tencent.mobileqq");//传入包名




// 示例结束
```

## $app-应用操作-04.打开应用

```javascript
// AIGame官方示例


$app.run("QQ");//可传入包名或者应用名




// 示例结束
```

## $app-应用操作-05.获得所有的应用信息

```javascript
// AIGame官方示例


//获得所有应用信息
let apps = $app.ls();

//打印所应用信息
for(let i = 0 ; i < apps.size() ; i++){
    log(apps.get(i));
}




// 示例结束
```

## $app-应用操作-06.获得最近运行的应用

```javascript
// AIGame官方示例


//获得最进运行的应用
if ($app.hasUsagePermit()) {
    let pkgList = $app.lsRecent();
    if (pkgList !== null) {
        for (let i = 0; i < pkgList.size(); i++) {
            console.log(pkgList[i]);
        }
    }
} else {
    $app.getUsagePermit();
}




// 示例结束
```

## $app-应用操作-07.启动活动

```javascript
// AIGame官方示例


//打开QQ
$app.startActivity("QQ","com.tencent.mobileqq.activity.SplashActivity");




// 示例结束
```

## $app-应用操作-08.检查包是否存在

```javascript
// AIGame官方示例


let pkg = "org.aigame.pro";

if ($app.pkgExists(pkg)) {
    alert(pkg,"存在");
} else {
    alert(pkg,"不存在");
}




// 示例结束
```

## $app-应用操作-09.获得包名名称

```javascript
// AIGame官方示例


//获得包名
let pkg = $app.pkgName("QQ");


alert("应用包名",pkg);




// 示例结束
```

## $app-应用操作-10.根据包名拿应用名

```javascript
// AIGame官方示例


//获得应用名
let appName = $app.appName("com.android.settings");

alert("应用名称",appName);//设置




// 示例结束
```

## $app-应用操作-11.卸载应用

```javascript
// AIGame官方示例


//此函数部分手机不支持
//卸载QQ
$app.uninstallApp("QQ");




// 示例结束
```

## $app-应用操作-12.卸载包名

```javascript
// AIGame官方示例


//此函数部分手机不支持
//卸载QQ
$app.uninstallPkg("com.tencent.mobileqq");




// 示例结束
```

## $app-应用操作-13.卸载

```javascript
// AIGame官方示例


//卸载QQ
$app.uninstall("QQ");//应用名或包名




// 示例结束
```

## $app-应用操作-14.打开网页

```javascript
// AIGame官方示例


//打开网址
let myUrl = "www.baidu.com";

$app.openUrl(myUrl);




// 示例结束
```

## $app-应用操作-15.分享图片

```javascript
// AIGame官方示例


//分享本地图片
let path = "/sdcard/Pictures/t01.png";
$app.shareImg(path);




// 示例结束
```

## $app-应用操作-16.分享文本

```javascript
// AIGame官方示例


//分享文本
let text = "你好";
$app.shareText(text);




// 示例结束
```

## $app-应用操作-17.发送短信

```javascript
// AIGame官方示例


$app.sendSms("13593749477","你好我是xxx");




// 示例结束
```

## $app-应用操作-18.拨打电话

```javascript
// AIGame官方示例


$app.call("13593749477");




// 示例结束
```

## $app-应用操作-19.发送邮件

```javascript
// AIGame官方示例


$app.sendMail("3502037911@qq.com","标题","内容");




// 示例结束
```

## $app-应用操作-20.打开应用设置

```javascript
// AIGame官方示例


//前往权限设置界面
$app.appSetting("AIGame Pro");




// 示例结束
```

## $app-应用操作-21.查看文件

```javascript
// AIGame官方示例


//打开文件
$app.viewFile("/sdcard/Pictures/test.text");




// 示例结束
```

## $app-应用操作-22.编辑文件

```javascript
// AIGame官方示例


//编辑文件
$app.editFile("/sdcard/Pictures/test.text");




// 示例结束
```

## $app-应用操作-23.是否有使用情况权限

```javascript
// AIGame官方示例


$app.hasUsagePermit();




// 示例结束
```

## $app-应用操作-24.使用情况

```javascript
// AIGame官方示例


$app.getUsagePermit();




// 示例结束
```
