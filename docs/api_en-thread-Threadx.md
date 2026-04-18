# Threadx - 增强线程

- 更新时间:2026-01-30 19:32:56

> 增强线程
> 
> 增强线程名为"Threadx"，它继承自"java.lang.Thread"类，提供了额外的功能和属性，主要允许线程携带一些简单的基础数据。




### name()

> 获取线程名称

- 返回 : {string} 线程名称
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//获取线程名称
let name = tx.name();
//输出线程名称
alert("线程名称" , name);
```


### hasRun()

> 判断当前线程是否终止

- 返回 : {boolean} 是否停止运行
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//判断当前线程是否终止
let run = tx.hasRun();
if(run){
     alert("线程正在运行");
}else{
     alert("线程已终止");
}
```


### setStr(str)

> 设置字符类型的标志

- 参数 : str {string} 字符类型的标志
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//设置字符类型的标志
tx.setStr("携带数据");
```


### getStr()

> 获得字符类型的标志

- 返回 : {string} 字符类型的标志
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//获得字符类型的标志
let srt = tx.getStr();
```


### setBool(booFlag)

> 设置布尔类型的标志
> 
> 需要注意:当线程(非循环器)被终止时，布尔类型的标志位会被设置为false;

- 参数 : booFlag {boolean} 布尔类型的标志
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//设置布尔类型的标志
tx.setBool(false);
```


### getBool()

> 获取布尔类型的标志
> 
> 需要注意:当线程(非循环器)被终止时，布尔类型的标志位会被设置为false;

- 返回 : {boolean} 布尔类型的标志
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//获取布尔类型的标志
let b = tx.getBool();
```


### getInt()

> 获取整数类型的标志

- 返回 : {int} 整数标志值
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//获取整数类型的标志
let i = tx.getInt();
```


### setInt(flag)

> 设置整数类型的标志

- 参数 : flag {int} 整数标志值
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//设置整数类型的标志
tx.setInt(0);
```


### getLong()

> 获取长整数类型的标志

- 返回 : {long} 长整数标志值
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//获取长整数类型的标志
let l = tx.getLong();
```


### setLong(flag)

> 设置长整数类型的标志

- 参数 : flag {long} 长整数标志值
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//设置长整数类型的标志
tx.setLong(1000);
```


### getObj()

> 获取对象类型的标志

- 返回 : {Object} 对象标志值
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//获取对象类型的标志
let o = tx.getObj();
```


### setObj(flag)

> 设置对象类型的标志

- 参数 : flag {Object} 对象标志值
- 版本 : 1.2.0


```javascript
//增强线程对象
let tx = $thread.create(()=>{
    //...
});
//设置对象类型的标志
tx.setObj("我是任意数据");
```


### kill()

> 终止线程

- 版本 : 1.5.1


```javascript
//由于interrupt不太好记，所以就写了个'kill()'方便中止线程。
//使用kill方法中止线程
tx.kill();//等价于tx.interrupt();
```


