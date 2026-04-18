# Ws - WS封装对象

- 更新时间:2026-01-30 19:32:57

> 双工通信包装对象
> 
> 对okhttp3.WebSocket对象进行封装的对象




### send(msg)

> 发送字符消息

- 参数 : msg {string} 字符串消息


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//发送字符消息
ws.send("hello");
```


### send(bytes)

> 发送字节消息

- 参数 : bytes {byte[]} 字节消息


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//发送字节消息
ws.send([10,15,0,1,20]);
```


### send(byteString)

> 发送消息
> 
> ByteString类型是okhttp提供的一种数据类型，具体函数可以参考okhttp文档

- 参数 : byteString {ByteString} byteString对象消息


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
let byteString = okio.ByteString.encodeUtf8("字符串");
//发送消息
ws.send(byteString);
```


### sendBase64(base64Str)

> 发送base64消息

- 参数 : base64Str {string} base64 字符串


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//发送base64消息
ws.sendBase64("QXV0by5qcyBQcm8geXlkcw==");
```


### sendHex(hexStr)

> 发送16进制消息

- 参数 : hexStr {string} 16 进制字符串


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//发送16进制消息
ws.sendHex("621172314F60");
```


### cancel()

> 关闭
> 
> 效果和 'stop()' 相同


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//立即关闭
ws.cancel();
```


### stop()

> 关闭
> 
> 效果和 'cancel()' 相同


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//立即关闭
ws.stop();
```


### close()

> 关闭
> 
> 效果和 stop(),cancel() 相同


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//立即关闭
ws.close();
```


### close(code)

> 尝试正常关闭

- 参数 : code {number} 关闭码


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//尝试正常关闭(正常关闭退出码一般是1001)
ws.close(1001);
```


### close(code, reason)

> 尝试正常关闭

- 参数 : code {number} 关闭码
- 参数 : reason {string} 关闭原因


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//尝试正常关闭(正常关闭退出码一般是1001)
ws.close(1001,"close");
```


### onMsgByte(callback)

> 设置字节字符信息接受回调
> 
> 如果不设置，则使用默认的回调：打印字节数组

- 参数 : callback {(byteString)=>{}}
- 返回 : {Ws} 返回当前对象


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//发送消息
ws.onMsgByte((bs)=> {
    //参数说明：
    // bs: okio.ByteString (参考okhttp3文档)
    //接收到字节数据时回调
    console.log("收到二进制消息：大小 ", bs.size());
    console.log("hex: ", bs.hex());
    console.log("base64: ", bs.base64());
    console.log("md5: ", bs.md5());
    console.log("bytes: ", bs.toByteArray());
});
```


### onMsgStr(callback)

> 设置字符串信息接受回调
> 
> 如果不设置，则使用默认的回调：打印字符串

- 参数 : callback {(str)=>{}}
- 返回 : {Ws} 返回当前对象


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//设置字符串信息接受回调
ws.onMsgStr((str, ws)=> {
    //参数说明：
    // str: String 字符串数据
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    //接收到字符串信息时回调
    console.log("收到字符串：",str);
});
```


### onOpen(callback)

> 设置连接成功回调
> 
> 如果不设置，则使用默认的回调：打印连接信息

- 参数 : callback {(res,ws)=>{}} 回调
- 返回 : {Ws} 返回当前对象


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//设置连接成功回调
ws.onOpen((res,ws)=> {
    //参数说明：
    // res: okhttp3.Response (参考okhttp3文档)
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    console.log("链接成功");
});
```


### onClosed(callback)

> 设置连接关闭回调
> 
> 如果不设置，则使用默认的回调：打印关闭信息

- 参数 : callback {(code,reason,ws)=>{}} 回调
- 返回 : {Ws} 返回当前对象


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//设置连接关闭回调
ws.onClosed((code,reason,ws)=>{
    //参数说明：
    // code:   int    数字
    // reason: String 字符串
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    console.log("正在关闭");
});
```


### onClosing(callback)

> 设置连接关闭中回调
> 
> 如果不设置，则使用默认的回调：打印关闭信息

- 参数 : callback {(code,reason,ws)=>{}} 回调
- 返回 : {Ws} 返回当前对象


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//设置连接关闭中回调
ws.onClosing((code,reason,ws)=>{
    //参数说明：
    // code:   int    数字
    // reason: String 字符串
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    console.log("正在关闭");
});
```


### onFail(onFailure)

> 设置连接失败回调
> 
> 如果不设置，则使用默认的回调：打印错误信息

- 参数 : onFailure {(err,res,ws)=>{}} 回调
- 返回 : {Ws} 返回当前对象


```javascript
//创建ws对象
let ws = $ws.create("wss://echo.websocket.org");
//设置连接失败回调
ws.onFail((err,res,ws)=>{
    //参数说明：
    // err: Throwable
    // res: okhttp3.Response (参考okhttp3文档)
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    //打印错误信息
    console.log("出现异常",err);
});
```


