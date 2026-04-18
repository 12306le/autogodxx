# $res - 资源管理器

- 更新时间:2026-01-30 19:32:54

> 资源管理器
> 
> 针对脚本引擎设计的资源管理器，方便存储和读取资源，支持跨线程访问，在对于一些大型项目中，可以起到非常好的维护效果。




### create(appName)

> 创建一个资源对象

- 参数 : appName {string} 应用名称,决定了资源文件存放的位置 
- 返回 : {AgRes} 资源对象
- 版本 : 1.0.0


```javascript
let res = $res.create("我的资源");
```


### set(resName, resData)

> 设置一个资源

- 参数 : resName {string} 资源名称 
- 参数 : resData {object} 资源数据,就是js对象,可以直接把js对象存入进来,用的时候打点调用即可 
- 版本 : 1.0.0


```javascript
//(1)创建资源对象(指定名称)
let res = $res.create("我的资源");
//(2)添加资源
res.set("名字","张三");
```


### get(resName)

> 获取一个资源

- 参数 : resName {string} 资源名称 
- 返回 : {object} 资源数据
- 版本 : 1.0.0


```javascript
//(1)创建资源对象(指定名称)
let res = $res.create("我的资源");
//(2)添加资源
res.set("名字","张三");
//(3)获取资源
log(res.get("名字"));
```


### get(resName, defaultValue)

> 获取资源

- 参数 : resName {String} 资源名称 
- 参数 : defaultValue {String} 默认值 
- 返回 : {String} 资源值


```javascript
//如果本身就不存在数据，就会返回默认值
let data = $res.get("name","张三");
```


### get(resName, defaultValue)

> 获取资源

- 参数 : resName {String} 资源名称 
- 参数 : defaultValue {float} 默认值 
- 返回 : {float} 资源值


```javascript
//如果本身就不存在数据，就会返回默认值
let data = $res.get("PI",3.14);
```


### get(resName, defaultValue)

> 获取资源

- 参数 : resName {String} 资源名称 
- 参数 : defaultValue {int} 默认值 
- 返回 : {int} 资源值


```javascript
//如果本身就不存在数据，就会返回默认值
let data = $res.get("age",18);
```


### get(resName, defaultValue)

> 获取资源

- 参数 : resName {String} 资源名称 
- 参数 : defaultValue {boolean} 默认值 
- 返回 : {boolean} 资源值


```javascript
//如果本身就不存在数据，就会返回默认值
let isBoy = $res.get("sex",false);
```


### load(path)

> 加载本地资源到内部存储中
> 
> 本质上就是把sdcard下的资源文件拷贝到内部存储中

- 参数 : path {string} 本地资源路径,可以是相对路径,但前提是文件必须要存在 
- 返回 : {boolean} 是否加载成功
- 版本 : 1.1.4


```javascript
//先准备数据名称
let res = $res.create("我的资源");
//加载数据到应用内部存储空间中(导入时不会添加.res后缀名,所以要写全文件名)
res.load("/data.res");//sdcard/当前项目/data.res
//看看数据
log(res.cat());
```


### ls()

> 列出所有资源名称

- 返回 : {string[]} 资源名称列表
- 版本 : 1.0.0


```javascript
//(1)创建资源对象(指定名称)
let res = $res.create("我的资源");
//(2)查询所有资源名称
let resList = res.ls();
log(resList);
```


### cat()

> 查看当前资源内容
> 
> 本质上是将存储的js对象转换成格式化美化后的json字符串

- 返回 : {string} 资源内容
- 版本 : 1.0.0


```javascript
//(1)加载资源对象(指定名称)
let res = $res.create("我的资源");
//(2)获得资源内容
let content = res.cat();
alert("资源内容", content);
```


### dump(path)

> 导出资源
> 
> 本质上是将内部存储的数据拷贝到指定路径下

- 参数 : path {string} 导出路径,可以使用相对路径,文件可以不存在,如果文件存在,则会覆盖 
- 返回 : {string} 导出路径
- 版本 : 1.0.0


```javascript
//先准备一点数据
let res = $res.create("我的资源");
res.set("人", {
    name: "张三",
    age: 16
});
//下载资源到当前项目的文件夹下(会自动添加.res后缀名)
res.dump("/data");//sdcard/当前项目/data.res
```


