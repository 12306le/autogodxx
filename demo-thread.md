# 示例：$thread

> 来源：上传 zip 中 `3` 个原始示例文件自动合并。

## $thread-多线程-01.多线程

```javascript
//AIGame 官方示例

let t1 = $thread.create(()=> {
    for (let i = 0; i < 10; i++) {
        sleep("300");
        log(t1.getName()+"==>"+i);
    }
    log(t1.getName()+"执行完毕");
});

let t2 = $thread.create(()=> {
    for (let i = 0; i < 10; i++) {
        sleep("300");
        log(t2.getName()+"==>"+i);
    }
    log(t1.getName()+"执行完毕");
});

let t3 = $thread.create(()=> {
    for (let i = 0; i < 10; i++) {
        sleep("300");
        log(t3.getName()+"==>"+i);
    }
    log(t1.getName()+"执行完毕");
});



t1.start();
t2.start();
t3.start();



//示例结束
```

## $thread-多线程-01.循环执行器-01.创建循环执行器

```javascript
//AIGame 官方示例

//执行完这个脚本后再执行[02.停止循环任务.js]可见效果

let t1 = $thread.loop("循环1号",()=>{
    sleep(1000);
    log("我还活着！");
});


t1.start();




//示例结束
```

## $thread-多线程-01.循环执行器-02.停止循环任务

```javascript
//AIGame 官方示例

//关闭循环器
$thread.stopLoop("循环1号");
//或者直接停止全部
//$thread.stopAllLoop();



//示例结束
```
