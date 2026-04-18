# 示例：$ext

> 来源：上传 zip 中 `7` 个原始示例文件自动合并。

## $ext-加载ApkDexJarSo文件-加载单个apk文件示例

```javascript
//官方示例

//先加载apk文件
$ext.loadApk("example/$ext - 加载ApkDexJarSo文件/libs/apk/lib.apk");

//开始直接使用apk中的类(参考源代码)
let demo = new org.aigame.apk.ApkDemo();

//调用类中的方法
alert("示例",demo.getStr());



//示例结束
```

## $ext-加载ApkDexJarSo文件-加载单个dex文件示例

```javascript
//官方示例

//先加载dex文件
$ext.loadDex("example/$ext - 加载ApkDexJarSo文件/libs/dex/classes.dex");

//开始直接使用dex中的类(参考源代码)
let demo = new org.aigame.demo.DexDemo();

//调用类中的方法
alert("示例",demo.getStr());



//示例结束
```

## $ext-加载ApkDexJarSo文件-加载单个jar文件示例

```javascript
//官方示例

//先加载jar文件
$ext.loadJar("example/$ext - 加载ApkDexJarSo文件/libs/jar/classes.jar");

//开始直接使用dex中的类(参考源代码)
let demo = new org.aigame.demo.JarDemo();

//调用类中的方法
alert("示例",demo.getStr());



//示例结束
```

## $ext-加载ApkDexJarSo文件-加载多个dex文件示例

```javascript
//官方示例

//加载多个dex文件
let basePath = "example/$ext - 加载ApkDexJarSo文件/libs/dexs/多个dex";

//拼接目录
let paths = [
    `${basePath}/classes1.dex`,
    `${basePath}/classes2.dex`,
    `${basePath}/classes3.dex`
];

//加载多个dex文件(传入所有dex文件的路径数组即可)
$ext.loadDexs(paths);

//开始直接使用dex中的类(参考源代码)
let dex1 = new org.aigame.dex1.DexDemo();//classes1.dex
let dex2 = new org.aigame.dex2.DexDemo();//classes2.dex
let dex3 = new org.aigame.dex3.DexDemo();//classes3.dex

//调用类中的方法
alert("示例",dex1.getStr()+"\n"+dex2.getStr()+"\n"+dex3.getStr());



//示例结束
```

## $ext-加载ApkDexJarSo文件-加载多个jar文件示例

```javascript
//官方示例

//加载多个jar文件
let basePath = "example/$ext - 加载ApkDexJarSo文件/libs/jars/多个jar文件";

//拼接目录
let paths = [
    `${basePath}/classes1.jar`,
    `${basePath}/classes2.jar`,
    `${basePath}/classes3.jar`
];

//加载多个jar文件(传入所有jar文件的路径数组即可)
$ext.loadJars(paths);

//开始直接使用jar中的类(参考源代码)
let jar1 = new org.aigame.jar1.JarDemo();//classes1.jar
let jar2 = new org.aigame.jar2.JarDemo();//classes2.jar
let jar3 = new org.aigame.jar3.JarDemo();//classes3.jar

//调用类中的方法
alert("示例",jar1.getStr()+"\n"+jar2.getStr()+"\n"+jar3.getStr());



//示例结束
```

## $ext-加载ApkDexJarSo文件-加载dex和so文件示例

```javascript
//官方示例

//先加载dex文件
$ext.loadDex({
    path:["example/$ext - 加载ApkDexJarSo文件/libs/dex_so/classes.dex"],
    so:[
        {
            //根据自己手机的情况,选正确的架构,不然so文件的C代码无法运行
            path:"example/$ext - 加载ApkDexJarSo文件/libs/dex_so/lib/arm64-v8a/libdemo.so",
            load:false,//因为在dex的类中已经静态加载了so文件,所以不能再重复加载了(安卓机制)
        }
    ]
});

//开始直接使用dex中的类(参考源代码)
let demo = new org.aigame.demo.CallC();

//调用类中的方法
alert("示例",demo.getStr());



//示例结束
```

## $ext-加载ApkDexJarSo文件-加载jar和so文件示例

```javascript
//官方示例


//先加载jar文件
$ext.loadJar({
    path:["example/$ext - 加载ApkDexJarSo文件/libs/jar_so/classes.jar"],
    so:[
        {
            //根据自己手机的情况,选正确的架构,不然so文件的C代码无法运行
            path:"example/$ext - 加载ApkDexJarSo文件/libs/jar_so/lib/arm64-v8a/libdemo.so",
            load:false,//因为在jar的类中已经静态加载了so文件,所以不能再重复加载了(安卓机制)
        }
    ]
});

//开始直接使用jar中的类(参考源代码)
let demo = new org.aigame.demo.JarCallC();

//调用类中的方法
alert("示例",demo.getStr());



//示例结束
```
