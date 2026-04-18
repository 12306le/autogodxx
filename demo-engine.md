# 示例：$engine

> 来源：上传 zip 中 `11` 个原始示例文件自动合并。

## $engine-脚本引擎-01.不同线程中的路径-脚本1

```javascript
//在AIGame中，每个被执行的脚本都被看作成一个任务($task)
//每个被执行的脚本都含有一个属于自己的($task)任务对象
//我们可以根据每个脚本专有的($task)任务对象获取数据

for(let i = 0 ; i < 5; i++){
    sleep(1000);
    //获取当前脚本路径
    log("脚本1:"+$task.getPath());
}
```

## $engine-脚本引擎-01.不同线程中的路径-脚本2

```javascript
//在AIGame中，每个被执行的脚本都被看作成一个任务($task)
//每个被执行的脚本都含有一个属于自己的($task)任务对象
//我们可以根据每个脚本专有的($task)任务对象获取数据

for(let i = 0 ; i < 5; i++){
    sleep(1000);
    //获取当前脚本路径
    log("脚本2:"+$task.getPath());
}
```

## $engine-脚本引擎-01.不同线程中的路径-01.启动多个脚本

```javascript
//AIGame 官方示例

let path1 = "example/$engine - 脚本引擎/01.不同线程中的路径/脚本1.js";
let path2 = "example/$engine - 脚本引擎/01.不同线程中的路径/脚本2.js";

$engine.run(path1);
$engine.run(path2);


//示例结束
```

## $engine-脚本引擎-01.执行脚本

```javascript
//官方示例

$engine.run("/example/$engine - 脚本引擎/test/run.js");


//示例结束
```

## $engine-脚本引擎-02.运行代码

```javascript
//官方示例

//读取脚本文件
let code = $file.read("/example/$engine - 脚本引擎/test/run.js");
//执行脚本代码
$engine.runCode(code);


//示例结束
```

## $engine-脚本引擎-03.运行代码-全参

```javascript
//官方示例

//定义脚本路径
let path = "/example/$engine - 脚本引擎/test/run.js";
//读取脚本文件
let code = $file.read(path);
//执行脚本代码
$engine.runCode(path, code);


//示例结束
```

## $engine-脚本引擎-04.暂停与运行

```javascript
//官方示例

//定义脚本路径
let path = "/example/$engine - 脚本引擎/test/delay.js";

//执行脚本(目的是拿到任务ID)
let id = $engine.run(path);

//我先创建一个应用级悬浮窗方便控制脚本引擎的暂停和开始
let appFloaty = $floaty.newApp(`
<ui>
    <button id="pause" text="暂停" />
    <button id="run" text="运行" />
    <button id="close" text="关闭" />
</ui>
`);

//绑定按钮点击事件
appFloaty.id("pause").click(() => {
    //暂停任务ID对应的脚本
    $engine.pause(id);
});

appFloaty.id("run").click(() => {
    //开始执行任务ID对应的脚本
    $engine.start(id);
});

appFloaty.id("close").click(() => {
    //关闭应用级悬浮窗
    appFloaty.close();
});



//示例结束
```

## $engine-脚本引擎-05.罗列任务信息

```javascript
//官方示例


let list = $engine.lsTask();

for (let item of list) {
    log(item);
}



//示例结束
```

## $engine-脚本引擎-06.停止所有

```javascript
//官方示例



$engine.stopAll();



//示例结束
```

## $engine-脚本引擎-test-delay

```javascript
//这里模拟一个延迟任务
//主要是为了演示脚本的运行与暂停
//由于脚本引擎是解释执行的
//因此暂停脚本的时候：会从当前执行的语句暂停

for (let i = 0; i < 15; i++) {
    sleep(1000);
    info("我还活着:" + (i + 1) + "秒");
}
```

## $engine-脚本引擎-test-run

```javascript
alert("提示", "我是被执行的脚本");
```
