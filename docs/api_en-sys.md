# $sys - 系统工具

- 更新时间:2026-01-30 19:32:56

> 系统工具




### airplane(enable)

> 设置飞行模式
> 
> 如果无法修改系统达到设置飞行模式的目的，那么就要求用户手动设置飞行模式

- 参数 : enable {boolean} 是否开启飞行模式(ture:开启,false:关闭)
- 版本 : 1.0.0


```javascript
//设置飞行模式
$sys.airplane(true);
```


### volume(mode, volume)

> 设置媒体音量
> 
> 注意：音量模式可以只写前三个字母,比如：sys,rin,mus,ala,acc

- 参数 : mode {string} 音量模式(system|ring|music|alarm|notification|call|dtmf|accessibility)
- 参数 : volume {int} 音量大小
- 版本 : 1.0.0


```javascript
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
```


### getDeviceId()

> 获得唯一标识

- 返回 : 设备唯一标识
- 版本 : 1.0.0


```javascript
let id = $sys.getDeviceId();
alert("设备id",id);
```


### hasClip()

> 判断剪切板是否有内容

- 返回 : {boolean} 是否存在剪切板
- 版本 : 1.0.0


```javascript
//判断是否有内容
if($sys.hasClip()){
    //获得内容
    let content = $sys.getClip();
    $tip.i(content);
}
```


### clearClip()

> 清除剪切板内容

- 返回 : {boolean} 是否清除成功
- 版本 : 1.0.0


```javascript
$sys.clearClip();
```


### getClip()

> 获得剪切板文字
> 
> 谷歌官方发布表明从安卓13开始将支持应用设置剪切板的内容为敏感信息，这就导致，获取剪切板的内容很可能无法获取，或者获取到的内容为空。
> 
> 因此在实际开发中，如果你发现自己无法获取剪切板的内容，完全属于正常现象，此外，较高版本的安卓系统中，剪切板无法后台获取。

- 返回 : {String} 剪切板的文字
- 版本 : 1.0.0


```javascript
//获得内容
let content = $sys.getClip();
alert("剪切板",content);
```


### setClip(text)

> 设置剪切板

- 参数 : text {String} 需要添加的文字
- 返回 : {String} 获得文字
- 版本 : 1.0.0


```javascript
//设置剪切板
$sys.setClip("Hello AIGame !");
```


### ignorePower(pkgName)

> 是否忽略电池优化
> 
> 该功能只能在部分低版本安卓系统上才可使用

- 参数 : pkgName {string} 包名
- 返回 : {boolean} 是否成功
- 版本 : 1.0.0


```javascript
//是否忽略电池优化
let is = $sys.ignorePower("org.aigame.app");
alert("是否忽略电池优化",is);
```


### requestIgnorePower(pkgName)

> 请求忽略电池优化
> 
> 该功能只能在部分低版本安卓系统上才可使用

- 参数 : pkgName {string} 包名
- 版本 : 1.0.0


```javascript
//请求忽略电池优化
$sys.requestIgnorePower("org.aigame.app");
```


### stayAlive(enable)

> 开启前台保活服务

- 参数 : enable {boolean} 是否开启
- 版本 : 1.1.2


```javascript
//开启前台保活服务
$sys.stayAlive(true);
//关闭前台保活服务
$sys.stayAlive(false);
```


### hasStayAlive()

> 是否开启前台保活服务

- 返回 : {boolean} 是否开启
- 版本 : 1.1.2


```javascript
//是否开启前台保活服务
let is = $sys.hasStayAlive();
alert("是否开启前台保活服务",is);
```


### hasPointer()

> 判断是否开启指针
> 
> 判断是否开启开发者调试的指针位置显示

- 返回 : {boolean} 是否开启
- 版本 : 1.4.1


```javascript
if($sys.hasPointer()){
    //已经开启了开发者指针
    alert("指针状态","指针已开启");
}
```


### pointer(enable)

> 开发者指针授权
> 
> 需要root或者shizuku权限才能开启指针

- 版本 : 1.7.0


```javascript
//授权开启开发者指针
$sys.pointer(true);
//等待一秒后再判断指针是否可用(指针授权并非是立马生效的)
sleep(1000);
//判断指针是否可用
if($sys.hasPointer()){
    //指针已开启
    alert("指针授权","指针已开启");
}
```


