# $ - 桥梁对象

- 更新时间:2026-01-30 19:33:13

> WebView桥梁对象
> 作为WebView和脚本引擎之间的桥梁,在html中:$符号就是这个桥梁的对象名称,你可以直接通过$对象来调用这里提供的方法




### call(funcName)

> 调用注册函数

- 参数 : funcName {string} 函数名称
- 返回 : {string} 返回值


```javascript
//在js中:注册一个函数
let ui = $ui.layout("./mUi.xml");
let mWeb = ui.id("mWebView");
mWeb.addFunc("mFunc",()=>{
    //获得无障碍权限
    $permit.wza();
    return "";//返回值是一个字符串类型,如果在html中不需要返回值,则不用写这行代码
});
//在html中:调用这个函数
$.call("mFunc");
```


### log(log)

> 调用注册函数
> 
> 此函数只能打印一个普通的文本内容，请注意调用方式

- 参数 : log {string} 日志文本


```javascript
//在html中:
$.log("我是一个文本");
```


### toast(msg)

> 土司提示

- 参数 : msg {string} 信息


```javascript
//在html中:
$.toast("我是一个文本");
```


### alert(msg)

> 对话框提示

- 参数 : msg {string} 信息


```javascript
//在html中:
$.alert("信息");
```


### alert(title, msg)

> 对话框提示

- 参数 : title {string} 标题
- 参数 : msg {string} 信息


```javascript
//在html中:
$.alert("信息","你好啊!");
```


### getClip()

> 获得剪切板

- 返回 : {string} 文字


```javascript
//在html中:
let text = $.getClip();
```


### setClip(text)

> 设置剪切板

- 参数 : text {string} 文字


```javascript
//在html中:
$.setClip("我是来自html中的字符串");
```


