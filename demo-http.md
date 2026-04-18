# 示例：$http

> 来源：上传 zip 中 `4` 个原始示例文件自动合并。

## $http-网络请求-01.post发送字符串

```javascript
//此示例的服务器我已经临时搭建,可以直接运行看到效果

let ip = "47.105.110.90";
let port = "8347";
let mode = "postString";

let res = $http.post({
    url: `http://${ip}:${port}/org/aigame/pro/example/${mode}`,
    data: "本地字符串",
});


alert("结果",res.str());
```

## $http-网络请求-01.post发送json

```javascript
//此示例的服务器我已经临时搭建,可以直接运行看到效果

let ip = "47.105.110.90";
let port = "8347";
let mode = "postJson";

let res = $http.post({
    url: `http://${ip}:${port}/org/aigame/pro/example/${mode}`,
    //直接发送json对象或者json字符串也可以
    data: {
        sex:"女"
    },
});


alert("结果",res.str());
```

## $http-网络请求-03.DeepSeek调用示例

```javascript
let url = "https://api.deepseek.com/chat/completions";

alert("注意","请到代码中填写ApiKey才能调用成功!");

//自己填写key
let apiKey = ""; //类似于"sk-m451xc526v394f82b90163272c577s"

let res = $http.post({
    url: url,
    head: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+apiKey,
    },
    data: {
            model: "deepseek-chat",
            messages: [
            {
                role: "system",
                content: "You are a helpful assistant."
            },
            {
                role: "user",
                content: "Hello!"
            }],
            stream: false
    }
});


/*
原理很简单，就是把官方网站提供的curl调用示例，用javascript翻译过来就行了

curl https://api.deepseek.com/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <DeepSeek API Key>" \
  -d '{
        "model": "deepseek-chat",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Hello!"}
        ],
        "stream": false
      }'

*/


alert("请求结果",res.str());

/*
注意：res.str();是返回响应的字符串

如果你想直接操作json对象，那么请调用 res.json(); 然后打点调属性即可


*/
```

## $http-网络请求-04.下载文件

```javascript
let url = "https://pics0.baidu.com/feed/f11f3a292df5e0feee2783e88baf3fa75fdf727e.jpeg?token=4afc91463326e4f4a44e2cde691a54a0";
let path = "/sdcard/美女.png";

//异步下载
$http.download(url,path,(cur,total,percent)=>{
    log("下载进度",percent);
},()=>{
    log("下载完毕，正在显示美女图片...");
    showImg(path);
},(res)=>{
    log("下载失败",res);
});
```
