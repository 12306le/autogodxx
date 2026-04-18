# AppInfo - 应用信息

- 更新时间:2026-01-30 19:32:51

> 应用信息
> 
> 通过 $app.ls(); 方法返回的列表元素类型




### const {String} appName;

> 应用名称


### const {String} pkgName;

> 包名


### const {Image} icon;

> 图标


### const {ApplicationInfo} info;

> 安卓原生应用信息
> 
> 类名：android.content.pm.ApplicationInfo


### getAppName()

> 获取应用名称

- 返回 : {string} 应用名称


### getPkgName()

> 获取包名

- 返回 : {string} 包名


### getIcon()

> 获取图标

- 返回 : {Image} 图标


### getInfo()

> 获取安卓原生应用信息

- 返回 : {ApplicationInfo} 安卓原生应用信息


### json()

> 转成json字符串

- 返回 : {string} json字符串
- 版本 : 1.7.0


