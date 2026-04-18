# 示例：$excel

> 来源：上传 zip 中 `6` 个原始示例文件自动合并。

## $excel-表格操作-01.读取第1个表

```javascript
//官方示例


//读取第一个表格数据
let data = $excel.read("example/$excel - 表格操作/data.xlsx");//相对路径
alert("表格数据",data);




//示例结束
```

## $excel-表格操作-02.读取第2个表

```javascript
//官方示例


//读取第2个表格数据:指定下标
let data = $excel.read(
"example/$excel - 表格操作/data.xlsx" ,//相对路径
 1 //表格下标
);
alert("表格数据",data);



//示例结束
```

## $excel-表格操作-03.获取表格数量

```javascript
//官方示例


//获取表格数量
let sheetNum = $excel.num("example/$excel - 表格操作/data.xlsx");
alert("表格数量",sheetNum);



//示例结束
```

## $excel-表格操作-04.罗列表格名称

```javascript
//官方示例


//获取表格名称列表
let sheetList = $excel.ls("example/$excel - 表格操作/data.xlsx");
alert("表格名称",sheetList);



//示例结束
```

## $excel-表格操作-05.遍历所有表格数据

```javascript
//官方示例


//遍历所有表格数据
let path = "example/$excel - 表格操作/data.xlsx";
$excel.loop(path, (name, data) => {
    alert(name,data);
});



//示例结束
```

## $excel-表格操作-06.写入数据到表格

```javascript
//官方示例


//数据
let sheetData = [
    ["姓名", "年龄"],
    ["小红", "18"],//注意必须都是字符串类型
    ["小明", "19"]
];
//表名
let sheetName = "我的表格";
//路径
let savePath = "/sdcard/demo.xlsx";
$excel.write(sheetName, sheetData, savePath);

toast("写入完毕");

//之后再读取出来看看
sleep(1000);
alert("表格数据",$excel.read(savePath));

//示例结束
```
