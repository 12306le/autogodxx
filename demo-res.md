# 示例：$res

> 来源：上传 zip 中 `4` 个原始示例文件自动合并。

## $res-资源管理器-01.存储对象

```javascript
//AIGame 官方示例

//(1)创建资源对象(指定名称)
let res = $res.create("我的资源");

//(2)添加资源

//1.存储一个字符串
res.set("名字","张三");

//2.存储一个对象
res.set("对象", {
    名字: "翠花",
    年龄: 18,
    身高: 175,
    体重: 98,
    儿子: {
        名字: "小安",
        年龄: 1,
        身高: 45,
    }
});

//3.存储一个列表
res.set("列表",[1,2,3]);


//(3)获取资源
log(res.get("名字"));
log(res.get("对象").名字);
log(res.get("对象").年龄);
log(res.get("对象").身高);
log(res.get("对象").体重);
log(res.get("对象").儿子.名字);
log(res.get("对象").儿子.年龄);
log(res.get("对象").儿子.身高);
log(res.get("列表"));




//示例结束
```

## $res-资源管理器-02.查询资源名称

```javascript
//AIGame 官方示例

//(1)创建资源对象(指定名称)
let res = $res.create("我的资源");

//(2)查询所有资源名称
let resList = res.ls();

log(resList);





//示例结束
```

## $res-资源管理器-03.导出资源

```javascript
//AIGame 官方示例

//(1)加载资源对象(指定名称)
let res = $res.create("我的资源");

//(2)导出资源
res.dump("sdcard/Pictures/示例/$res/资源.res");


//示例结束
```

## $res-资源管理器-04.查看资源内容

```javascript
//AIGame 官方示例

//(1)加载资源对象(指定名称)
let res = $res.create("我的资源");

//(2)获得资源内容
let content = res.cat();

$tip.show("资源内容", content, null);


//示例结束
```
