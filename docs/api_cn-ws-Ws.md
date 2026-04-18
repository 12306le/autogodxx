# Ws - WS封装对象

- 更新时间:2026-01-30 19:32:57

> 双工通信包装对象
> 
> 对okhttp3.WebSocket对象进行封装的对象




### 发送(字符串)

> 发送字符消息

- 参数 : 字符串 {字符串} 字符串消息
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//发送字符消息
通信.发送("你好呀~");
```


### 发送(字节数组)

> 发送字节消息

- 参数 : 字节数组 {byte[]} 字节消息
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//发送字节消息
通信.发送([10,15,0,1,20]);
```


### 发送(数据)

> 发送消息
> 
> ByteString类型是okhttp提供的一种数据类型，具体函数可以参考okhttp文档

- 参数 : 数据 {ByteString} byteString对象消息
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
定义 数据对象 = okio.ByteString.encodeUtf8("字符串");
//发送消息
通信.发送(数据对象);
```


### 发送base64(base64字符串)

> 发送base64消息

- 参数 : base64字符串 {字符串} base64 字符串
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//发送base64消息
通信.发送base64("QXV0by5qcyBQcm8geXlkcw==");
```


### 发送16进制字符串(十六进制字符串)

> 发送16进制消息

- 参数 : 十六进制字符串 {字符串} 16进制字符串
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//发送16进制消息
通信.发送16进制字符串("621172314F60");
```


### 取消()

> 关闭
> 
> 效果和 '停止()' 相同

- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//立即关闭
通信.取消();
```


### 停止()

> 关闭
> 
> 效果和 '取消()' 相同

- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//立即关闭
通信.停止();
```


### 关闭()

> 关闭
> 
> 效果和 '停止(),取消()' 相同

- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//立即关闭
通信.关闭();
```


### 关闭(退出码)

> 尝试正常关闭

- 参数 : 退出码 {number} 关闭码
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//尝试正常关闭(正常关闭退出码一般是1001)
通信.关闭(1001);
```


### 关闭(退出码, 原因)

> 尝试正常关闭

- 参数 : 退出码 {整数} 关闭码
- 参数 : 原因 {字符串} 关闭原因
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//尝试正常关闭(正常关闭退出码一般是1001)
通信.关闭(1001,"关闭");
```


### 监听消息(回调函数)

> 设置字节字符信息接受回调
> 
> 如果不设置，则使用默认的回调：打印字节数组

- 参数 : 回调函数 {(byteString)=>{}}
- 返回 : {Ws} 返回当前对象
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//发送消息
通信.监听字节消息((bs)=> {
    //参数说明：
    // bs: okio.ByteString (参考okhttp3文档)
    //接收到字节数据时回调
    日志("收到二进制消息：大小 ", bs.size());
    日志("hex: ", bs.hex());
    日志("base64: ", bs.base64());
    日志("md5: ", bs.md5());
    日志("bytes: ", bs.toByteArray());
});
```


### 监听字符串消息(回调函数)

> 设置字符串信息接受回调
> 
> 如果不设置，则使用默认的回调：打印字符串

- 参数 : 回调函数 {(str)=>{}}
- 返回 : {Ws} 返回当前对象
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//设置字符串信息接受回调
通信.监听字符串消息((str, ws)=> {
    //参数说明：
    // str: String 字符串数据
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    //接收到字符串信息时回调
    日志("收到字符串：",str);
});
```


### 监听打开(回调函数)

> 设置连接成功回调
> 
> 如果不设置，则使用默认的回调：打印连接信息

- 参数 : 回调函数 {(res,ws)=>{}} 回调
- 返回 : {Ws} 返回当前对象
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//设置连接成功回调
通信.监听打开((res,ws)=> {
    //参数说明：
    // res: okhttp3.Response (参考okhttp3文档)
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    日志("链接成功");
});
```


### 监听关闭(回调函数)

> 设置连接关闭回调
> 
> 如果不设置，则使用默认的回调：打印关闭信息

- 参数 : 回调函数 {(code,reason,ws)=>{}} 回调
- 返回 : {Ws} 返回当前对象
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//设置连接关闭回调
通信.监听关闭((code,reason,ws)=>{
    //参数说明：
    // code:   int    数字
    // reason: String 字符串
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    日志("正在关闭");
});
```


### 监听关闭中(回调函数)

> 设置连接关闭中回调
> 
> 如果不设置，则使用默认的回调：打印关闭信息

- 参数 : 回调函数 {(code,reason,ws)=>{}} 回调
- 返回 : {Ws} 返回当前对象
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//设置连接关闭中回调
通信.监听关闭中((code,reason,ws)=>{
    //参数说明：
    // code:   int    数字
    // reason: String 字符串
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    日志("正在关闭");
});
```


### 监听失败(失败回调)

> 设置连接失败回调
> 
> 如果不设置，则使用默认的回调：打印错误信息

- 参数 : 失败回调 {(err,res,ws)=>{}} 回调
- 返回 : {Ws} 返回当前对象
- 版本 : 1.6.9


```javascript
//创建ws对象
定义 通信 = $通信.创建("wss://echo.websocket.org");
//设置连接失败回调
通信.监听失败((err,res,ws)=>{
    //参数说明：
    // err: Throwable
    // res: okhttp3.Response (参考okhttp3文档)
    // ws: okhttp3.WebSocket (参考okhttp3文档)
    //打印错误信息
    日志("出现异常",err);
});
```


