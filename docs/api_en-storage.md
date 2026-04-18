# $storage - 应用内存储

- 更新时间:2026-01-30 19:32:55

> 应用内存储
> 
> 轻量级的存储方案，用于存储一些简单基础的数据，一般用作于全局配置，当应用被卸载后，这些配置也会随之清空。




### create(namespace)

> 创建storage
> 
> 其实如果不创建应用存储也可以，因为默认就有一个命名空间，但是建议还是自己创建一个自定义的命名空间。

- 参数 : namespace {string} 命名空间
- 返回 : {$storage} 存储对象
- 版本 : 1.0.0


```javascript
//命名空间的名称随意
let storage = $storage.create("namespace");
```


### get(key, defaultValue)

> 获取值
> 
> 如果设置了默认值，就算拿不到数据，也会返回默认值

- 参数 : key {string} 关键字
- 参数 : defaultValue {Object} 默认值
- 返回 : {Object} 获取到的值
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
alert("数据",storage.get("MyStr","我是默认值"));
```


### get(key)

> 获取值

- 参数 : key {string} 关键字
- 返回 : {Object} 获取到的值
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.put("MyStr","我是被存放进来的数据");
alert("数据",storage.get("MyStr"));
```


### put(key, value)

> 存放数据

- 参数 : key {string} 关键字
- 参数 : value {Object} 数据
- 版本 : 1.0.0


```javascript
//只要保持命名空间的名称一致,就能正常读取到数据
let storage = $storage.create("namespace");
storage.put("MyStr","我是被存放进来的数据");
```


### getStr(key)

> 获得字符串数据
> 
> 如果没有,就返回null

- 参数 : key {string} 关键字
- 返回 : {string} 数据
- 版本 : 1.0.0


```javascript
//只要保持命名空间的名称一致,就能正常读取到数据
let storage = $storage.create("namespace");
storage.put("MyStr","我是被存放进来的数据");
alert("数据",storage.getStr("MyStr"));
```


### getString(key)

> 获得字符串数据
> 
> 等价于getStr方法，如果没有,就返回null

- 参数 : key {string} 关键字
- 返回 : {string} 数据
- 版本 : 1.5.4


```javascript
//只要保持命名空间的名称一致,就能正常读取到数据
let storage = $storage.create("namespace");
storage.put("MyStr","我是被存放进来的数据");
alert("数据",storage.getStr("MyStr"));
```


### getStr(key, defaultValue)

> 获得字符串数据

- 参数 : key {string} 关键字
- 参数 : defaultValue {string} 默认值
- 返回 : {string} 数据
- 版本 : 1.0.0


```javascript
//只要保持命名空间的名称一致,就能正常读取到数据
let storage = $storage.create("namespace");
storage.put("MyStr","我是被存放进来的数据");
alert("数据",storage.getStr("MyStr","默认数据"));
```


### getString(key, defaultValue)

> 获得字符串数据
> 
> 等价于getStr方法

- 参数 : key {string} 关键字
- 参数 : defaultValue {string} 默认值
- 返回 : {string} 数据
- 版本 : 1.5.4


```javascript
//只要保持命名空间的名称一致,就能正常读取到数据
let storage = $storage.create("namespace");
storage.put("MyStr","我是被存放进来的数据");
alert("数据",storage.getString("MyStr","默认数据"));
```


### putStr(key, value)

> 存放字符串数据

- 参数 : key {string} 关键字
- 参数 : value {string} 存放的数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putStr("MyStr","我是内容");
alert("数据",storage.getStr("MyStr")); //我是内容
```


### putString(key, value)

> 存放字符串数据
> 
> 等价于putStr方法

- 参数 : key {string} 关键字
- 参数 : value {string} 存放的数据
- 版本 : 1.5.4


```javascript
let storage = $storage.create("namespace");
storage.putString("MyStr","我是内容");
alert("数据",storage.getStr("MyStr")); //我是内容
```


### getInt(key, defaultValue)

> 获得整数数据

- 参数 : key {int} 关键字
- 参数 : defaultValue {int} 默认值
- 返回 : {int} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
alert("数据",storage.getInt("MyIntDefault",20)); //20
```


### getInt(key)

> 获得整数数据
> 
> 如果没有找打就返回默认值-1

- 参数 : key {int} 关键字
- 返回 : {int} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
alert("数据",storage.getInt("MyIntDefault")); //-1
```


### putInt(key, value)

> 存放数字数据

- 参数 : key {string} 关键字
- 参数 : value {int} 存放的数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putInt("MyInt",100);
alert("数据",storage.getInt("MyInt")); //100
```


### getBool(key, defaultValue)

> 获得布尔数据

- 参数 : key {Boolean} 关键字
- 参数 : defaultValue {Boolean} 默认值
- 返回 : {Boolean} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putBool("MyBool",true);
alert("数据",storage.getBool("MyBoolDefault")); //false
//如果默认值是true，那么就在找不到数据的时候返回true
alert("数据",storage.getBool("MyBoolDefault",true)); //true
```


### getBoolean(key, defaultValue)

> 获得布尔数据
> 
> 等价于getBool方法

- 参数 : key {Boolean} 关键字
- 参数 : defaultValue {Boolean} 默认值
- 返回 : {Boolean} 数据
- 版本 : 1.5.4


```javascript
let storage = $storage.create("namespace");
storage.putBool("MyBool",true);
alert("数据",storage.getBool("MyBoolDefault")); //false
//如果默认值是true，那么就在找不到数据的时候返回true
alert("数据",storage.getBoolean("MyBoolDefault",true)); //true
```


### getBool(key)

> 获得布尔数据

- 参数 : key {Boolean} 关键字
- 返回 : {Boolean} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putBool("MyBool",true);
alert("数据",storage.getBool("MyBool")); //true
```


### getBoolean(key)

> 获得布尔数据
> 
> 等价于getBool方法

- 参数 : key {Boolean} 关键字
- 返回 : {Boolean} 数据
- 版本 : 1.5.4


```javascript
let storage = $storage.create("namespace");
storage.putBool("MyBool",true);
alert("数据",storage.getBoolean("MyBool")); //true
```


### putBool(key, value)

> 存放布尔数据

- 参数 : key {string} 关键字
- 参数 : value {Boolean} 存放的数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putBool("MyBool",true);
alert("数据",storage.getBool("MyBool")); //true
```


### putBoolean(key, value)

> 存放布尔数据
> 
> 等价于putBool方法

- 参数 : key {string} 关键字
- 参数 : value {Boolean} 存放的数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putBoolean("MyBool",true);
alert("数据",storage.getBoolean("MyBool")); //true
```


### getFloat(key, defaultValue)

> 获得浮点数数据

- 参数 : key {float} 关键字
- 参数 : defaultValue {float} 默认值
- 返回 : {float} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
alert("数据",storage.getFloat("MyFloatDefault")); //-1.0
```


### getFloat(key)

> 获得浮点数数据

- 参数 : key {float} 关键字
- 返回 : {float} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putFloat("MyFloat",3.1415926);
alert("数据",storage.getFloat("MyFloat")); //3.1415926
```


### putFloat(key, value)

> 存放浮点数数据

- 参数 : key {string} 关键字
- 参数 : value {float} 存放的数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putFloat("MyFloat",3.1415926);
alert("数据",storage.getFloat("MyFloat",0)); //3.1415926
```


### getLong(key, defaultValue)

> 获得长数字数据

- 参数 : key {long} 关键字
- 参数 : defaultValue {long} 默认值
- 返回 : {Long} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
alert("数据",storage.getLong("MyLongDefault",100));
```


### getLong(key)

> 获得长数字数据

- 参数 : key {String} 关键字
- 返回 : {Long} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putLong("MyLong",5201314);
alert("数据",storage.getLong("MyLong"));
```


### putLong(key, value)

> 存放长数字数据
> 

- 参数 : key {string} 关键字
- 参数 : value {Long} 存放的数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putLong("MyLong",5201314);
alert("数据",storage.getLong("MyLong",100));//5201314
```


### getStrSet(key, defaultValue)

> 获得字符串集合数据

- 参数 : key {string} 关键字
- 参数 : defaultValue {string[]} 默认值
- 返回 : {string[]} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putStrSet("MySet",["数据1","数据2","数据3"]);
alert("数据",storage.getStrSet("MySet",[])); //["数据1","数据2","数据3"]
```


### getStrSet(key)

> 获得字符串集合数据
> 
> 如果没有数据就默认返回空集合

- 参数 : key {string} 关键字
- 返回 : {string[]} 数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putStrSet("MySet",["数据1","数据2","数据3"]);
alert("数据",storage.getStrSet("MySet")); //["数据1","数据2","数据3"]
```


### putStrSet(key, value)

> 存放字符串集合数据

- 参数 : key {string} 关键字
- 参数 : value {string[]} 存放的数据
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.putStrSet("MySet",["数据1","数据2","数据3"]);
alert("数据",storage.getStrSet("MySet",[])); //["数据1","数据2","数据3"]
```


### getAll()

> 获得全部数据

- 返回 : {obj} 数据(使用时直接当作js对象打.调用即可)
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
alert("数据",storage.getAll());
```


### has(key)

> 是否包含

- 参数 : key {string} 关键字
- 返回 : {boolean} 是否包含
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.put("MyInt",100);
log(storage.has("MyInt"));//true
storage.clear();
log(storage.has("MyInt"));//false
alert("数据",storage.getInt("MyInt"));//-1
```


### clear()

> 删除全部数据

- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.put("MyInt",100);
storage.clear();
alert("数据",storage.getInt("MyInt"));//-1
```


### del(key)

> 移除数据

- 参数 : key {string} 关键字
- 版本 : 1.0.0


```javascript
let storage = $storage.create("namespace");
storage.put("MyInt",100);
storage.del("MyInt");
alert("数据",storage.getInt("MyInt"));//-1(默认值)
```


