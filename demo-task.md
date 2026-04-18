# 示例：$task

> 来源：上传 zip 中 `4` 个原始示例文件自动合并。

## $task-脚本任务-01.获得当前脚本的路径

```javascript
//AIGame 官方示例


alert("当前任务路径",$task.getPath());



//示例结束
```

## $task-脚本任务-02.相对当前脚本的路径

```javascript
//AIGame 官方示例


alert("相对路径",$task.getPath("./../../res"));



//示例结束
```

## $task-脚本任务-03.自身停止

```javascript
//AIGame 官方示例


for (let i = 0; i < 10; i++) {
    sleep(1000);
    toast("我还活着");
    if (i == 3) {
        //每个脚本都会内置一个独属于自己的$task对象，代表当前脚本任务
        $task.stop();
    }
}



//示例结束
```

## $task-脚本任务-04.控制脚本暂停与运行

```javascript
//(1)创建可调节悬浮窗并且显示
let ui = $floaty.newAdj(
`
<ui>
    <linear dir="v" w="max">
        <button id="bt1" text="暂停" w="max"/>
        <button id="bt2" text="开始" w="max"/>
        <button id="bt3" text="是否活着" w="max"/>
    </linear>
</ui>
`);

//(2)绑定事件
ui.id("bt1").click(()=>{
    $task.pause();//暂停脚本(原理是控制脚本引擎的解释执行)
});
ui.id("bt2").click(()=>{
    $task.start();//继续执行(原理是控制脚本引擎的解释执行)
});
ui.id("bt3").click(()=>{
    if($task.isRunning()){
        info("我还活着");
    }else{
        info("我已经死了");
    }
});

//当执行到这里的时候，上面的脚本都被执行了，所以可以正常的控制暂停和运行下面的代码
//假设这是任务代码：
for(let i = 0;i<20;i++){
    sleep(1000);
    info("正在运行"+i);
}

//当循环代码走完之后，当前任务就死了。所以点击按钮[是否活着]会提示"我已经死了"
```
