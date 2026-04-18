# $sqlite - 轻量数据库

- 更新时间:2026-01-30 19:32:55

> 轻量数据库
> 
> 线程安全,支持并发编程,本地轻量级数据库存储,存储的文件会随着应用的卸载而清空。




### newSqlite()

> 创建新对象
> 
> 创建一个新的数据库对象，你可以用这个对象来操作其他数据库

- 返回 : {this} 自己


```javascript
let sqlite = $sqlite.newSqlite();
let hasOpen = sqlite.open("myDb");
if(hasOpen){
    log("链接成功");
}
```


### open(dbName, external)

> 打开数据库
> 
> 如果数据库文件存在则会加载数据库，如果不存在则先创建数据库文件后加载数据库

- 参数 : dbName {string} 数据库名称 
- 参数 : external {boolean} 是否保存到外部存储(默认:false) 
- 返回 : {boolean} 是否连接成功


```javascript
//第二个参数的含义:
//false:保存到内部存储:无需后缀，只需要取一个数据库名称即可，应用卸载后数据会被删除
//true:保存到外部存储:需全路径，包括文件名和后缀，应用卸载后数据不会被删除
let hasOpen = $sqlite.open("/sdcard/mData.db",true);
if(hasOpen){
    log("链接成功");
}
```


### open(dbName)

> 打开数据库
> 
> 如果数据库文件存在则会加载数据库，如果不存在则先创建数据库文件后加载数据库

- 参数 : dbName {string} 数据库名称 
- 返回 : {boolean} 是否连接成功


```javascript
//无需后缀，只需要取一个数据库名称即可
let hasOpen = $sqlite.open("VideoData");
if(hasOpen){
    log("链接成功");
}
```


### newTab(tableName, columns)

> 创建数据表
> 
> 如果这个表已经在数据库中存在了，那么就不继续创建了
> 
> 注意:不管你的数据是什么类型都用字符串类型存储

- 参数 : tableName {string} 表名称 
- 参数 : columns {string[]} 列名称 
- 返回 : {boolean} 是否执行成功


```javascript
let hasTable = $sqlite.newTab("table1",["name","sex","age"]);
if(hasTable){
    log("建表成功");
}
```


### add(tableName, data)

> 添加数据
> 
> 注意:不管你的数据是什么类型都用字符串类型存储，默认使用自增id作为主键

- 参数 : tableName {string} 表名 
- 参数 : data {obj}  数据对象 
- 返回 : {boolean} 是否执行成功


```javascript
//其实此函数等价于 $sqlite.exe("INSERT INTO table1 (name, sex, age) VALUES ('张三', '男', 20)");
let hasAdd = $sqlite.add("table1",{
    name:"张三",
    sex:"男",
    age:20
});
if(hasAdd){
    log("添加成功");
}
```


### update(tableName, map, where)

> 更新数据

- 参数 : tableName {string} 表名称 
- 参数 : map {obj} 数据对象 
- 参数 : where {string} 条件语句 
- 返回 : {boolean} 是否执行成功


```javascript
//更新数据
let okUpdate = $sqlite.update("table1", {
    name: "张三",
    sex: "女",
    age: 20
},"name='张三'");
if (okUpdate) {
    log("更新成功");
}
```


### ls(tableName)

> 罗列数据
> 
> 注意:不管你的数据是什么类型，查询出来的必是字符串类型，即使是报错也不会返回null，而是返回空列表，因此可以不用判断数据是否为空

- 参数 : tableName {string} 表名称
- 返回 : {obj[]} 数据集合对象


```javascript
//即使是报错也不会返回null，而是返回空列表，因此可以不用判断数据是否为空
let result = $sqlite.ls("table1");
for(let item of result){
    log(item);
}
```


### ls()

> 罗列表名
> 
> 查询数据库中的所有表名并且返回表名列表

- 返回 : {string[]} 表名列表


```javascript
//罗列数据库中的表
let result = $sqlite.ls();
for(let item of result){
    log(item);
}
```


### select(selectSql)

> 执行查询语句
> 
> 注意:不管你的数据是什么类型，查询出来统一是字符串类型。

- 参数 : selectSql {string} 查询语句
- 返回 : {obj[]} 数据集合对象


```javascript
//即使是报错也不会返回null，而是返回空列表，因此可以不用判断数据是否为空
let result = $sqlite.select("select * from table1");
for(let item of result){
    log(item);
}
```


### hasTab(tableName)

> 判断表是否存在

- 参数 : tableName {string} 表名称
- 返回 : {boolean} 是否存在该表


```javascript
let result = $sqlite.hasTab("table1");
if(result){
    log("存在表");
} else {
    log("不存在表");
}
```


### exe(sql)

> 执行SQL语句

- 参数 : sql {string} sql语句
- 返回 : {boolean} 是否执行成功


```javascript
//删除表
$sqlite.exe("drop table if exists table1");
```


### delDb(external)


### delDb(dbName, external)

> 删除数据库
> 
> 我将直接删除本地数据库的存储文件，那么你将丢失所有数据

- 参数 : dbName {string} 数据库名称
- 返回 : {boolean} 是否执行成功


```javascript
//无需打开数据库，直接就能删除数据库文件
let hasDelDb = $sqlite.delDb("VideoData");
if(hasDelDb){
    log("删库成功");
}
```


### delDb(dbName)

> 删除数据库
> 
> 我将直接删除本地数据库的存储文件，那么你将丢失所有数据

- 参数 : dbName {string} 数据库名称
- 返回 : {boolean} 是否执行成功


```javascript
//无需打开数据库，直接就能删除数据库文件
let hasDelDb = $sqlite.delDb("VideoData");
if(hasDelDb){
    log("删库成功");
}
```


### delTab(table)

> 删除表

- 参数 : table {string} 表名
- 返回 : {boolean} 是否删除成功


```javascript
let hasDel = $sqlite.delTab("table1");
if(hasDel){
    log("删除表成功");
}
```


### close()

> 关闭数据库
> 
> 当你操作完毕后可以关闭数据库链接，释放资源。

- 返回 : {boolean} 是否关闭成功


```javascript
let okFinish = $sqlite.close();
if(okFinish){
    log("结束操作");
}
```


