# 示例：$sqlite

> 来源：上传 zip 中 `9` 个原始示例文件自动合并。

## $sqlite-轻量数据库-01.链接数据库

```javascript
//示例开始

let hasOpen = $sqlite.open("mData");
if(hasOpen){
    log("链接成功");
}

//示例结束
```

## $sqlite-轻量数据库-02.创建表

```javascript
//示例开始

let hasTable = $sqlite.newTab("table1",["name","sex","age"]);
if(hasTable){
    log("建表成功");
}

//示例结束
```

## $sqlite-轻量数据库-03.添加数据

```javascript
//示例开始

//其实此函数等价于 $sqlite.exe("INSERT INTO table1 (name, sex, age) VALUES ('张三', '男', 20)");
let hasAdd = $sqlite.add("table1",{
    name:"张三",
    sex:"男",
    age:20
});
if(hasAdd){
    log("添加成功");
}

//示例结束
```

## $sqlite-轻量数据库-04.更新数据

```javascript
//示例开始

let okUpdate = $sqlite.update("table1", {
    name: "张三",
    sex: "女",
    age: 20
},"name='张三'");
if (okUpdate) {
    log("更新成功");
}

//示例结束
```

## $sqlite-轻量数据库-05.查询数据

```javascript
//示例开始

//即使是报错也不会返回null，而是返回空列表，因此可以不用判断数据是否为空
let result = $sqlite.ls("table1");
for(let item of result){
    log(item);
}

//示例结束
```

## $sqlite-轻量数据库-06.删除表

```javascript
//示例开始

let hasDel = $sqlite.delTab("table1");
if(hasDel){
    log("删除表成功");
}

//示例结束
```

## $sqlite-轻量数据库-07.关闭链接

```javascript
//示例开始

let okFinish = $sqlite.close();
if(okFinish){
    log("结束操作");
}

//示例结束
```

## $sqlite-轻量数据库-08.删除数据库

```javascript
//示例开始

//无需打开数据库，直接就能删除数据库文件
let hasDelDb = $sqlite.delDb("mData");
if(hasDelDb){
    log("删库成功");
}

//示例结束
```

## $sqlite-轻量数据库-09.执行sql

```javascript
//示例开始

//删除表
$sqlite.exe("drop table if exists table1");



//示例结束
```
