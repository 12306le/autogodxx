# AppTaskInfo - 任务信息

- 更新时间:2026-01-30 19:32:51

> 应用任务信息
> 
> 通过 $app.lsRecent(); 方法返回的列表元素类型




### const {String} appName;

> 应用名称


### const {String} pkgName;

> 包名


### const {String} lastUseTime;

> 最后使用时间


### const {long} lastUsedTime;

> 最后使用时间


### const {ApplicationInfo} info;

> 安卓原生应用信息
> 
> 类型：{android.content.pm.ApplicationInfo}


### getLastUsedTime()

> 最后使用时间

- 返回 : {long} 最后使用时间


### getAppName()

> 获取应用名称

- 返回 : {string} 应用名称


### getPkgName()

> 获得包名

- 返回 : {string} 包名


### getLastUseTime()

> 获得最后时间格式化字符串

- 返回 : {string} 最后使用时间


### json()

> 将当信息对象转为json字符串

- 返回 : {String} json字符串
- 版本 : 1.7.0


