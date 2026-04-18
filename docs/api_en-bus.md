# $bus - 消息总线

- 更新时间:2026-01-30 19:32:51

> 消息总线
> 
> 在全局中发送消息，任意位置获取并且处理消息




### ls()

> 列出所有监听器

- 返回 : {String[]} 监听器列表
- 版本 : 1.0.0


```javascript
//获得所有监听器列表
let monis = $bus.ls();
log(monis);//[我的监听器1号]
```


### post(name, object)

> 发送一条信息

- 参数 : name {String} 监听器名称 
- 参数 : object {Object} 信息内容 
- 版本 : 1.0.0


```javascript
$bus.post("我的监听器1号","我是数据");
```


### event(name, listener)

> 添加监听

- 参数 : name {string} 监听器名称 
- 参数 : listener {(data)=>{}} 监听器 
- 版本 : 1.0.0


```javascript
$bus.event("我的监听器1号",(data)=>{
    log("获得数据:",data);
    toast(data);
});
```


### close(name)

> 移除监听器

- 参数 : name {string} 名称 
- 版本 : 1.0.0


```javascript
//指定关闭监听器
$bus.close("我的监听器1号");
```


### clear()

> 移除所有监听器

- 版本 : 1.0.0


```javascript
$bus.clear();//关闭所有监听器
```


### stopAll()

> 关闭所有监听器

- 版本 : 1.0.0


```javascript
$bus.stopAll();//关闭所有监听器效果和clear()一样
```


