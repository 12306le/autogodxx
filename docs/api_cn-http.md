# $http - 网络请求

- 更新时间:2026-01-30 19:32:53

> 网络请求




### uri(uri)

> 解析Uri字符串
> 
> 如果你想通过文件提供器{FileProvider}来解析文件路径，那么可以使用$file.uri("path");函数

- 参数 : uri {String} Uri字符串
- 返回 : {Uri} Uri对象
- 版本 : 1.3.7


```javascript
let uri = $http.uri("smsto:"+$str.uriEncode("13693749475"));
```


### get(url)

> 同步请求

- 参数 : url {url} 链接地址
- 返回 : {HttpResponse} 返回结果
- 版本 : 1.2.0


```javascript
//全部配置参数
let opt = {
    url:"",//请求地址
    head:{
        "key":"value",
        "key2":"value2"
    },
    data: "请求数据",//支持file、xml、json、string等类型，会自动判断
    connectTimeout:30, //[可选]连接超时时间(默认30秒)
    readTimeout:30, //[可选]读超时时间(默认30秒)
    writeTimeout:30, //[可选]写超时时间(默认30秒)
    callTimeout:60 //[可选]请求超时时间(默认60秒)
}
//如果要发送文件
let opt = {
    url:"",//请求地址
    head:{ },
    data: "/sdcard/img.png"
}
//如果要发送json
let opt = {
    url:"",//请求地址
    head:{ },
    //直接写json对象，或json字符串也可以
    data: {
        "key":"value",
        "key2":"value2"
    }
}
```


### get(opts)

> GET请求

- 参数 : opts {HttpOptions} 配置
- 返回 : {HttpResponse} 返回结果
- 版本 : 1.2.0


### post(opts)

> POST请求

- 参数 : opts {HttpOptions} 配置
- 返回 : {HttpResponse} 返回结果
- 版本 : 1.2.0


### del(opts)

> DELETE请求

- 参数 : opts {HttpOptions} 配置
- 返回 : {HttpResponse} 返回结果
- 版本 : 1.2.0


### delete(opts)

> DELETE请求

- 参数 : opts {HttpOptions} 配置
- 返回 : {HttpResponse} 返回结果
- 版本 : 1.2.0


### put(opts)

> PUT请求

- 参数 : opts {HttpOptions} 配置
- 返回 : {HttpResponse} 返回结果
- 版本 : 1.2.0


### patch(opts)

> PATCH请求

- 参数 : opts {HttpOptions} 配置
- 返回 : {HttpResponse} 返回结果
- 版本 : 1.2.0


### download(url, savePath)

> 下载文件

- 参数 : url {string}  url
- 参数 : savePath {string} 保存路径


### download(url, savePath, completeCallback)

> 下载文件

- 参数 : url {string}  url
- 参数 : savePath {string} 保存路径
- 参数 : completeCallback {()=>{}} 下载完成回调


### download(url, savePath, completeCallback, onFailure)

> 下载文件

- 参数 : url {string}  url
- 参数 : savePath {string} 保存路径
- 参数 : completeCallback {()=>{}} 下载完成回调
- 参数 : onFailure {(res)=>}  错误回调


### download(url, savePath, progressListener, completeCallback, onFailure)

> 下载文件

- 参数 : url {string}  url
- 参数 : savePath {string} 保存路径
- 参数 : progressListener {(cur,total,percent)=>{}} 进度监听器
- 参数 : completeCallback {()=>{}} 下载完成回调
- 参数 : onFailure {(res)=>}    错误回调


```javascript
$http.download(
"https://pics0.baidu.com/feed/f11f3a292df5e0feee2783e88baf3fa75fdf727e.jpeg?token=4afc91463326e4f4a44e2cde691a54a0",
"/sdcard/美女.png",
(cur,total,percent)=>{
    log("下载进度",percent);
},()=>{
    log("下载完毕");
},(res)=>{
    log("下载失败",res);
});
```


### wifiIp()

> 获取wifi的ip地址
> 
> 如果连接方式不是wifi则返回null

- 返回 : {string} ip地址


