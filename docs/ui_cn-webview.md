# 网页

- 更新时间:2026-01-30 19:33:13

> 网页-webview
> 
> 你可以用vant,vue,layui,element-ui等框架编写html界面，在这个控件中加载这个界面，之后就是处理一些交互函数了




### onLoaded(onLoad)

> 设置加载完成回调

- 参数 : onLoad (()=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//设置加载完成回调
wv.onLoaded(()=>{
    //一般在控件加载完html之后注册一些交互函数,例如：
    wv.addFunc("getWza",()=>{
        $permit.wza();//获取无障碍权限
    });
    //之后就可以在html中使用:$.call("getWza");调用这个函数了
});
```


### clear()

> 清除网页缓存


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//清除网页缓存
wv.clear();
```


### loadUrl(url)

> 加载url

- 参数 : url url


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//加载url
wv.loadUrl("http://...");
```


### loadHtml(html)

> 加载html字符串

- 参数 : html html字符串


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//加载html字符串
wv.loadHtml(`
<html>
    //这里是html字符串
</html>
`);
```


### loadFile(path)

> 加载html文件

- 参数 : path html文件路径


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//加载html文件
wv.loadFile("./html/index.html");
```


### callJs(functionName, callBack)

> 调用js无参函数


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJs("mFunc",(returnValue)=>{
    //..
});
```


### callJs(functionName)

> 调用js无参函数


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数
wv.callJs("mFunc");
```


### callJsInt(functionName, param, callBack)

> 调用js的整数参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {int} 参数
- 参数 : callBack ((str)=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsInt("setFontSize",22,(returnValue)=>{
    //..
});
```


### callJsInt(functionName, param)

> 调用js的整数参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {int} 参数


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数
wv.callJsInt("setFontSize",22);
```


### callJsLong(functionName, param, callBack)

> 调用js的长整数参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {long} 参数
- 参数 : callBack ((str)=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsLong("setLength",546894564564849,(returnValue)=>{
    //..
});
```


### callJsLong(functionName, param)

> 调用js的长整数参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {long} 参数


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数
wv.callJsLong("setLength",546894564564849);
```


### callJsDouble(functionName, param, callBack)

> 调用js的浮点数参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {float} 参数
- 参数 : callBack ((str)=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsDouble("setVal",3.1415926,(returnValue)=>{
    //..
});
```


### callJsDouble(functionName, param)

> 调用js的浮点数参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {float} 参数


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsDouble("setVal",3.1415926);
```


### callJsFloat(functionName, param, callBack)

> 调用js的浮点数参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {float} 参数
- 参数 : callBack ((str)=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsFloat("setVal",3.1415926,(returnValue)=>{
    //..
});
```


### callJsFloat(functionName, param)

> 调用js的浮点数参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {float} 参数


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsFloat("setVal",3.1415926);
```


### callJsChar(functionName, param, callBack)

> 调用js的字符串参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {char} 参数
- 参数 : callBack ((str)=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsChar("setChar",'A',(returnValue)=>{
    //..
});
```


### callJsChar(functionName, param)

> 调用js的字符串参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {char} 参数


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsChar("setChar",'A');
```


### callJsBool(functionName, param, callBack)

> 调用js的布尔参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {boolean} 参数
- 参数 : callBack ((str)=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsBool("setEnable",true,(returnValue)=>{
    //..
});
```


### callJsBool(functionName, param)

> 调用js的布尔参数函数

- 参数 : functionName {String} js函数名
- 参数 : param {boolean} 参数


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数
wv.callJsBool("setEnable",true);
```


### callJsStr(functionName, param, callBack)

> 调用js的长文本参数函数
> 
> 在传入长文本之前，会把文本进行URL编码，所以在html使用的时候需要使用函数``解码才能得到原本的长文本内容。

- 参数 : functionName {String} js函数名
- 参数 : param {String} 长文本参数
- 参数 : callBack ((str)=>{}) 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数,如果有返回值,那么就会通过returnValue回调获取
wv.callJsStr("setCode","一大堆文字",(returnValue)=>{
    //..
});
//在html中的代码:
function setCode(str){
    //html使用的时候需要使用函数`decodeURIComponent`解码才能得到原本的长文本内容。
    let code =  decodeURIComponent(str);
    $.alert("代码",code);
}
```


### callJsStr(functionName, param)

> 调用js的长文本参数函数
> 
> 在传入长文本之前，会把文本进行URL编码，所以在html使用的时候需要使用函数``解码才能得到原本的长文本内容。

- 参数 : functionName {String} js函数名
- 参数 : param {String} 长文本参数


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//调用js无参函数
//mFunc是html中定义的函数
wv.callJsStr("setCode","一大堆文字");
//在html中的代码:
function setCode(str){
    //html使用的时候需要使用函数`decodeURIComponent`解码才能得到原本的长文本内容。
    let code =  decodeURIComponent(str);
    $.alert("代码",code);
}
```


### addFunc(funcName, callback)

> 注册桥梁函数
> 
> 向桥梁对象$中注册(添加)自定义函数，之后就可以在html中通过$.call(函数名称);来调用啦

- 参数 : funcName {()=>{ return "数据"; }} 回调


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let wv = ui.id("mWebView");
//设置加载完成回调
wv.onLoaded(()=>{
    //一般在控件加载完html之后注册一些交互函数,例如：
    wv.addFunc("getWza",()=>{
        $permit.wza();//获取无障碍权限
    });
    //之后就可以在html中使用:$.call("getWza");调用这个函数了
});
```


