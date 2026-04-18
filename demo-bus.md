# 示例：$bus

> 来源：上传 zip 中 `10` 个原始示例文件自动合并。

## $bus-消息总线-01.列出所有监听器

```javascript
// AIGame官方示例


//获得所有监听器列表
let monis = $bus.ls();

log(monis);//[我的监听器1号]




// 示例结束
```

## $bus-消息总线-01.广播交互-01.开启广播事件监听

```javascript
//


//想要接收全局广播,必须要先注册一个广播事件监听器
//监听器的名称为`broadcast`,回调参数是`Intent`类型

$bus.event("broadcast",(intent)=>{
    log("接受到了广播:");
    let extras = intent.getExtras();
    let value = extras.get("mKey");
    log(`广播数据:${value}`);
});



//
```

## $bus-消息总线-01.广播交互-02.发送广播

```javascript
//


let intent = $app.newIntent({
    action: "org.aigame.pro.bus.action",
    // 随便写点数据,一会而$bus会接收到广播,在里面获取这个数据
    extras: [{
        name: "mKey",
        value: "哈哈哈"
    } ],
    // 指定接受端的应用(固定写法)
    component: {
        cls: "org.aigame.api.bus.receiver.AgBusReceiver",
        pkg: "org.aigame.pro"
    }
});

//然后发送广播
$app.sendBroadcast(intent,"org.aigame.pro.bus.permission");



//
```

## $bus-消息总线-01.广播交互-04.在autojs中与AIGame广播交互

```javascript
//以下是auto.js的代码,无法在aigame中执行

app.sendBroadcast({
    packageName: "org.aigame.pro",
    className: "org.aigame.api.bus.receiver.AgBusReceiver",
    extras: {
        mKey: "我是auto.js发送的广播数据",
    } ,
});


//
```

## $bus-消息总线-02.发送一条信息

```javascript
// AIGame官方示例


$bus.post("我的监听器1号","我是数据");




// 示例结束
```

## $bus-消息总线-02.Tasker执行脚本-01.使用教学

```javascript
$dialog.create()
.title("Tasker执行脚本")
.msg(`
1.打开Tasker
2.创建Tasker意图任务
3.操作(action)填写:'runJs:/sdcard/main.js'
4.包名(package)填写:'org.aigame.pro'
5.类名(class)填写:'org.aigame.api.bus.receiver.AgBusReceiver'
6.目标(type)设置成:'(广播)BroadcastReceiver'
7.最后执行任务,发送意图,AIGame便会执行/sdcard/main.js脚本
`)
.but1("复制类名",(dialog)=>{
    dialog.dismiss();
    setClip("org.aigame.api.bus.receiver.AgBusReceiver");
})
.but2("复制包名",(dialog)=>{
    dialog.dismiss();
    setClip("org.aigame.pro");
})
.but3("关闭",(dialog)=>{
    dialog.dismiss();
})
.show();
```

## $bus-消息总线-03.添加监听

```javascript
// AIGame官方示例


$bus.event("我的监听器1号",(data)=>{
log("获得数据:",data);
toast(data);
});




// 示例结束
```

## $bus-消息总线-04.移除监听器

```javascript
// AIGame官方示例


//指定关闭监听器
$bus.close("我的监听器1号");




// 示例结束
```

## $bus-消息总线-05.移除所有监听器

```javascript
// AIGame官方示例


$bus.clear();//关闭所有监听器




// 示例结束
```

## $bus-消息总线-06.关闭所有监听器

```javascript
// AIGame官方示例


$bus.stopAll();//关闭所有监听器效果和clear()一样




// 示例结束
```
