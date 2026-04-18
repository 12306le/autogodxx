# $ext - 拓展:加载Dex,Apk,Jar,So

- 更新时间:2026-01-30 19:32:52

> 加载DexApkJarSo拓展API
> 
> $ext顾名思义就是"拓展"的意思，主要用来加载第三方库，拓展本应用中没有的功能。




### loadApk(apkPath)

> 加载apk文件

- 参数 : apkPath {string} apk文件路径
- 返回 : {DexClassLoader} 类加载器
- 版本 : 1.2.5


```javascript
$ext.loadApk("/sdcard/测试.apk");
```


### loadDex(dexPath)

> 加载dex文件
> 
> $ext中存在一个内置的缓存机制,被加载的dex文件会被生成一个唯一的id作为类加载器的标识,
> 
> 在起初加载dex文件的时候会保存id和类加载器对象
> 
> 当再次加载相同的dex文件时,会通过id直接取得类加载器对象来执行类
> 
> 如果想重新加载需要调用$ext.clear()清除id和类加载器

- 参数 : dexPath {string} dex文件路径
- 返回 : {DexClassLoader} 类加载器
- 版本 : 1.1.0


```javascript
$ext.loadDex("./res/demo.dex");
//开始使用dex中的类
```


### loadDexs(paths)

> 加载多个dex文件

- 参数 : paths {string[]} dex文件路径
- 返回 : {DexClassLoader} 类加载器
- 版本 : 1.2.6


```javascript
//加载多个dex文件(传入所有dex文件的路径数组即可)
$ext.loadDexs(["/res/demo1.dex","/res/demo2.dex","/res/demo3.dex"]);
```


### loadJar(jarPath)

> 加载jar文件
> 
> $ext中存在一个内置的缓存机制,被加载的jar文件会被生成一个唯一的id作为类加载器的标识,
> 
> 在起初加载jar文件的时候会保存id和类加载器对象
> 
> 当再次加载相同的jar文件时,会通过id直接取得类加载器对象来执行类
> 
> 如果想重新加载需要调用$ext.clear()清除id和类加载器
> 
> 注意:被加载的jar必须经过安卓开发环境(AndroidStudio)编译生成class字节码归档文件才可被加载

- 参数 : jarPath {string} jar文件路径
- 返回 : {DexClassLoader} 类加载器
- 版本 : 1.1.0


```javascript
$ext.loadJar("/res/demo.jar");
//开始使用jar中的类
```


### loadJars(paths)

> 加载多个jar文件
> 
> 注意:被加载的jar必须经过安卓开发环境(AndroidStudio)编译生成class字节码归档文件才可被加载

- 参数 : paths {string[]} jar文件路径
- 返回 : {DexClassLoader} 类加载器
- 版本 : 1.2.6


```javascript
//加载多个jar文件(传入所有jar文件的路径数组即可)
$ext.loadJars(["/res/demo1.dex","/res/demo2.dex","/res/demo3.dex"]);
```


### loadDex(options)

> 加载dex/so文件
> 
> 值得注意的就是so文件也有很多架构(x86_64,arm64_v8a等),根据自己手机的架构来选择需要加载的so文件(安卓特性);
> 此外:如果dex(java代码)中已经使用System.load(so);加载过的so文件不要重复加载,因为so文件只能被类加载器加载一次(安卓机制)

- 参数 : options {LoadExtConfig} 加载配置
- 返回 : {DexClassLoader} 类加载器
- 版本 : 1.1.0


```javascript
let options = {
    path:["dexOrJarPath"],//jar或者dex文件路径数组(可以传入多个dex或jar文件路径)
    so:[
         {path:"soPath", load:false},
         {
            path:"soPath",//so文件路径
            load:false //是否执行系统加载System.load(so);
         },
         //...
    ]
}
$ext.loadDex(options);
//开始使用dex里面的类
```


### loadJar(options)

> 加载jar/so文件
> 
> 值得注意的就是so文件也有很多架构(x86_64,arm64_v8a等),根据自己手机的架构来选择需要加载的so文件(安卓特性);
> 此外:如果dex(java代码)中已经使用System.load(so);加载过的so文件不要重复加载,因为so文件只能被类加载器加载一次(安卓机制)
> 
> 注意:被加载的jar必须经过安卓开发环境(AndroidStudio)编译生成class字节码归档文件才可被加载

- 参数 : options {LoadExtConfig} 加载配置
- 返回 : {DexClassLoader} 类加载器
- 版本 : 1.1.0


```javascript
let options = {
    path:["dexOrJarPath"],//jar或者dex文件路径数组,可以传入多个dex或jar文件路径
    so:[
         {path:"soPath", load:false},
         {
            path:"soPath",//so文件路径
            load:false //是否执行系统加载System.load(so);
         },
         //...
    ]
}
$ext.loadJar(options);
//开始使用jar里面的类
```


### loadApk(options)

> 加载apk/so文件

- 参数 : options {LoadExtConfig} 加载配置
- 返回 : {DexClassLoader} 类加载器
- 版本 : 1.2.5


```javascript
let options = {
    path:["apk路径"],数组格式,但是只支持一个apk路径,传入多个apk文件路径,只会加载第一个apk文件
    so:[
         {path:"soPath", load:false},
         {
            path:"soPath", //so文件路径
            load:false //是否执行系统加载System.load(so);
         },
         //...
    ]
}
$ext.loadApk(options);
//开始使用apk里面的类
```


### clear()

> 清除缓存的类加载器
> 
> $ext中存在一个内置的缓存机制,被加载的jar/dex文件会被生成一个唯一的id作为类加载器的标识,
> 
> 在起初加载jar/dex文件的时候会保存id和类加载器对象
> 
> 当再次加载相同的jar/dex文件时,会通过id直接取得类加载器对象来执行类
> 
> 如果想重新加载需要调用$ext.clear()清除id和类加载器
> 
> 如果只是单纯的加载dex/jar文件,这个函数可以随便调用;
> 但是如果加载了so文件,这个函数最好只使用一次,因为so文件只能被一个类加载器加载一次
> 
> 就算不小心把加载过so文件的类加载器清空了也没有关系，重启app重新运行即可。

- 版本 : 1.1.0


```javascript
$ext.clear();
```


### delete()

> 删除缓存文件
> 
> dex加载必须要在安卓的私有目录(安卓机制),所以每次加载的dex文件都会放在私有目录下面
> 
> 然而我们最主要只是拿到类加载器,当加载完后dex文件也就不需要了,所以可以调用这个函数来删除dex文件

- 版本 : 1.1.1


```javascript
$ext.delete();
```


