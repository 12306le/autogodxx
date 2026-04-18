# $plugin - 插件系统

- 更新时间:2026-01-30 19:32:54

> 插件系统
> 
> 本应用内置一个使用非常方便的插件系统，开发者可以开发自己的apk插件并且在这里进行调用。
> 
> 一个插件其实就是一个apk文件，它被安装在安卓手机上，之后就可以在本应用中使用$plugin进行调用。
> 
> 
> 和$ext不同的地方在于：
> 
> 1.$ext主要用于加载dex、jar、so、apk文件，$ext加载的是apk文件，无需安装apk文件，并且可以直接使用apk中的类。
> 
> 2.$plugin对象主要通过load("包名")加载已安装的插件apk，加载完成后，会返回一个主类对象，该对象中的函数可以直接调用，无需像$ext加载的apk那样需要导包调用。
> 
> 3.$plugin插件机制访问插件apk的资源更加方便。




### load(packageName)

> 加载插件

- 参数 : packageName {string} 插件的包名 
- 返回 : {object} 插件的实例对象
- 版本 : 1.4.0


```javascript
//加载插件
let myObj = $plugin.load("com.example.myplugin");
//使用api
myObj.myApi();
```


### ls()

> 获得插件列表

- 返回 : {AppInfo[]} 插件列表
- 版本 : 1.4.0


```javascript
//罗列所有插件应用
let infoList = $plugin.ls();
//打印信息
for (let info of infoList) {
    log("应用名:",info.appName);
    log("包名:",info.pkgName);
    //显示图标: info.icon.show();
}
```


