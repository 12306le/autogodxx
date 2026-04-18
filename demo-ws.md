# 示例：$ws

> 来源：上传 zip 中 `1` 个原始示例文件自动合并。

## $ws-WebSocket-基础使用

```javascript
//AIGame 官方示例

//返回的ws是经过封装的WebSocket对象(不是okhttp3.WebSocket原生对象)
let ws = $ws.create("wss://echo.websocket.org");

//设置监听
ws.onOpen((res,ws)=> {
    //当成功连接时回调(此函数可以不用设置，拥有默认回调:打印信息)
    console.log("链接成功");
    //参数说明：
    // res: okhttp3.Response (参考okhttp3文档)
    // ws: okhttp3.WebSocket (参考okhttp3文档)
})
.onClosed((code,reason,ws)=> {
    //当关闭后回调(此函数可以不用设置，拥有默认回调:打印信息)
    console.log("关闭成功");
    //参数说明：
    // code:   int    数字
    // reason: String 字符串
    // ws: okhttp3.WebSocket (参考okhttp3文档)
})
.onClosing((code,reason,ws)=> {
    //处于关闭时回调(此函数可以不用设置，拥有默认回调:打印信息)
    console.log("正在关闭");
    //参数说明：
    // code:   int    数字
    // reason: String 字符串
    // ws: okhttp3.WebSocket (参考okhttp3文档)
})
.onFail((err,res,ws)=> {
    //出现异常时回调(此函数可以不用设置，拥有默认回调:打印信息)
    console.log("出现异常",err);
    //参数说明：
    // err: Throwable
    // res: okhttp3.Response (参考okhttp3文档)
    // ws: okhttp3.WebSocket (参考okhttp3文档)
})
.onMsgStr((str, ws)=> {
    //接收到字符串信息时回调
    console.log("收到字符串：",str);
    //参数说明：
    // str: String 字符串数据
    // ws: okhttp3.WebSocket (参考okhttp3文档)
})
.onMsgByte((bs)=> {
    //接收到字节数据时回调
    console.log("收到二进制消息：大小 ", bs.size());
    console.log("hex: ", bs.hex());
    console.log("base64: ", bs.base64());
    console.log("md5: ", bs.md5());
    console.log("bytes: ", bs.toByteArray());
    //参数说明：
    // bs: okio.ByteString (参考okhttp3文档)
});

//发送字符串消息
ws.send("Hello AIGame!");

//发送二进制消息
//ws.send([10,15,1,1,0,5]);



//示例结束
```
