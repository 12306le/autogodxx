# 示例：$sys

> 来源：上传 zip 中 `12` 个原始示例文件自动合并。

## $sys-系统工具-01.获取修改设置权限

```javascript
// AIGame官方示例


//获取修改系统设置权限
$sys.getSetPermit();




// 示例结束
```

## $sys-系统工具-02.获取电话权限

```javascript
// AIGame官方示例


//获得电话权限
if (!$sys.enableCall()) {
    $sys.getCallPermit();
}

//拨打电话
//$app.call("13593749477");




// 示例结束
```

## $sys-系统工具-03.是否拥有电话权限

```javascript
// AIGame官方示例


//判断是否获得电话权限
if ($sys.enableCall()) {
    toast("拥有权限");
}else{
    toast("无电话权限");
}




// 示例结束
```

## $sys-系统工具-04.设置飞行模式

```javascript
// AIGame官方示例


//设置飞行模式
$sys.airplane(true);




// 示例结束
```

## $sys-系统工具-05.设置媒体音量

```javascript
// AIGame官方示例


//设置音量大小
//注意：前面的英文字母可以只写前3位，比如：sys,rin,mus,ala,acc
$sys.volume("system",100);//系统
$sys.volume("ring",100);//铃声
$sys.volume("music",100);//媒体
$sys.volume("alarm",100);//闹钟
$sys.volume("notification",100);//通知
$sys.volume("call",100);//电话
$sys.volume("dtmf",100);//双音多频(信号的音量流)
$sys.volume("accessibility",100);//无障碍
toast("音量已全部加满！");




// 示例结束
```

## $sys-系统工具-06.获得唯一标识

```javascript
// AIGame官方示例


let id = $sys.getDeviceId();

alert("设备id",id);




// 示例结束
```

## $sys-系统工具-07.判断剪切板是否有内容

```javascript
// AIGame官方示例


//判断是否有内容
if($sys.hasClip()){
    //获得内容
    let content = $sys.getClip();

    $tip.i(content);
}




// 示例结束
```

## $sys-系统工具-08.清除剪切板内容

```javascript
// AIGame官方示例


$sys.clearClip();




// 示例结束
```

## $sys-系统工具-09.获得剪切板文字

```javascript
// AIGame官方示例


//获得内容
let content = $sys.getClip();
alert("剪切板",content);




// 示例结束
```

## $sys-系统工具-10.设置剪切板

```javascript
// AIGame官方示例


//设置剪切板
$sys.setClip("Hello AIGame !");




// 示例结束
```

## $sys-系统工具-11.是否忽略电池优化

```javascript
// AIGame官方示例


//是否忽略电池优化
let is = $sys.ignorePower("org.aigame.app");
alert("是否忽略电池优化",is);




// 示例结束
```

## $sys-系统工具-12.请求忽略电池优化

```javascript
// AIGame官方示例


//请求忽略电池优化
$sys.requestIgnorePower("org.aigame.app");




// 示例结束
```
