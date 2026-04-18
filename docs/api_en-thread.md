# $thread - 并发编程

- 更新时间:2026-01-30 19:32:56

> 并发编程
> 
> 本平台支持多线程并发编程，并且很多API内部都已经解决了并发问题




### ui(runnable)

> 在UI线程中执行
> 
> 其实也可以使用$ui.run(()=>{});在ui线程中执行

- 参数 : runnable {()=>{}} 任务
- 版本 : 1.0.0


```javascript
$thread.ui(()=>{
    //这里是UI线程
});
```


### run(runnable)

> 创建并且运行线程

- 参数 : runnable {()=>{}} 任务
- 返回 : {Threadx} 增强线程
- 版本 : 1.2.0


```javascript
let t1 = $thread.run(()=>{
    //耗时任务
});
//要想停止或者关闭
t1.interrupt();
```


### create(runnable)

> 创建线程
> 
> 会自动生成线程名称，之后将线程名称和线程对象存储到序列中。

- 参数 : runnable {()=>{}} 线程任务
- 返回 : {Threadx} 增强线程
- 版本 : 1.0.0


```javascript
let t1 = $thread.create(()=> {
    for (let i = 0; i < 10; i++) {
        sleep("300");
        log(t1.getName()+"==>"+i);
    }
    log(t1.getName()+"执行完毕");
});
t1.start();
```


### create(name, runnable)

> 创建线程
> 
> 优先去序列中查找是否存在这个线程名称，如果存在，会提示名称重复并且返回已经存在的线程对象(threadx)

- 参数 : name {()=>{}} 线程任务
- 返回 : {Threadx} 增强线程
- 版本 : 1.0.0


```javascript
let t1 = $thread.create("线程名称",()=> {
    for (let i = 0; i < 10; i++) {
        sleep("300");
        log(t1.getName()+"==>"+i);
    }
    log(t1.getName()+"执行完毕");
});
t1.start();
```


### newCdLock(num)

> 创建一个倒计时锁

- 参数 : num {int} 倒计时数量
- 返回 : {CdLock} 倒计时锁
- 版本 : 1.8.3


### has(name)

> 是否存在线程名称

- 参数 : name {string} 线程名称
- 返回 : {boolean} 是否存在
- 版本 : 1.2.0


```javascript
let has = $thread.has("线程名称");
if(has){
    //存在线程名称
}else{
    //不存在线程名称
}
```


### get(name)

> 获得已存在的线程

- 参数 : name {string} 线程名称
- 版本 : 1.0.0


```javascript
//获得线程对象
let t1 = $thread.get("线程名称");
if(t1!=null){
    //...
}
```


### loop(name, runnable)

> 创建一个循环执行器

- 参数 : name {string} 循环器名称
- 参数 : runnable {()=>{}} 循环体
- 返回 : {Threadx} 增强线程
- 版本 : 1.0.0


```javascript
let t1 = $thread.loop("循环1号",()=>{
    sleep(1000);
    log("我还活着！");
});
t1.start();
```


### hasLoop(name)

> 是否存在循环执行器

- 参数 : name {string} 循环器名称
- 返回 : {boolean} 是否存在
- 版本 : 1.0.0


```javascript
//关闭循环器
let exists = $thread.hasLoop("循环1号");
```


### stopLoop(name)

> 停止循环执行器

- 参数 : name {string} 循环器名称
- 版本 : 1.0.0


```javascript
//关闭循环器
$thread.stopLoop("循环1号");
```


### stop(threadx)

> 停止指定线程
> 
> 如果停止线程成功,会将增强线程中的布尔标识(setBool)设置为false

- 参数 : threadx {Threadx} 增强线程
- 版本 : 1.0.0


### stop(threadName)

> 停止指定线程

- 参数 : threadName {string} 线程名称
- 版本 : 1.0.0


### stopAll()

> 停止所有线程

- 版本 : 1.0.0


```javascript
//停止所有线程(不包括循环器线程)
$thread.stopAll();
```


### stopAllLoop()

> 停止所有循环执行器
> 
> 'setInterval'本质上也是通过循环执行器实现的，因此本函数也可以停止'setInterval'的循环执行

- 版本 : 1.0.0


```javascript
//停止所有循环执行器
$thread.stopAllLoop();
```


