# $excel - 表格操作

- 更新时间:2026-01-30 19:32:51

> 表格操作
> 
> 用于读取和写入二维数组到表格中，这个库需要在安卓8+的系统上才能完美运行。




### read(path)

> 读取第一个表格

- 参数 : path {String} 路径(支持相对路径)
- 返回 : {String[][]} 表格数据
- 版本 : 1.7.8


```javascript
//读取第一个表格数据
let data = $excel.read("data.xlsx");//相对路径
log(data);
// 输出:
// [
//    ["学号","姓名","年龄","性别","入学日期"],
//    ["2023001","张三","20","男","2023-09-01"],
//    ["2023002","李四","19","女","2023-09-01"],
//    ["2023003","王五","21","男","2022-09-01"],
//    ["2023004","赵六","20","女","2023-09-01"]
// ]
```


![](./img/228115506309900.png)

### read(path, index)

> 读取表格

- 参数 : path {String} 路径(支持相对路径)
- 参数 : index {int} 表格索引
- 返回 : {String[][]} 表格数据
- 版本 : 1.7.8


```javascript
//读取第2个表格数据
let data = $excel.read("data.xlsx", 1);//相对路径
log(data);
// 输出:
// [
//    ["商品ID","商品名称","商品单价","库存"],
//    ["P001","笔记本电脑","4999","10"],
//    ["P002","智能手机","3999","25"],
//    ["P003","平板电脑","2499","18"],
//    ["P004","无线耳机","799","50"]
// ]
```


![](./img/228156133564800.png)

### num(path)

> 表格数量

- 参数 : path {String} 路径(支持相对路径)
- 返回 : {int} 表格数量
- 版本 : 1.7.8


```javascript
//获取表格的数量
let sheetNum = $excel.num("data.xlsx");//相对路径
log(sheetNum);//输出:3
```


### ls(path)

> 列表

- 参数 : path {String} 路径(支持相对路径)
- 返回 : {String[]} 表格名称列表
- 版本 : 1.7.8


```javascript
//获取表格的数量
let sheetList = $excel.ls("data.xlsx");//相对路径
log(sheetList);//输出:["班级表","商品表","部门表"]
```


### loop(path, onSheet)

> 遍历所有表格

- 参数 : path {String} 路径(支持相对路径)
- 参数 : onSheet {(sheetName,sheetData)=>{}} 数据回调
- 版本 : 1.7.8


```javascript
//遍历所有表格数据
let data = $excel.loop("data.xlsx", (name, data) => {
    alert(name,data);
});
```


### write(sheetName, sheetData, path)

> 写入表格

- 参数 : sheetName {String} 表格名称
- 参数 : sheetData {String[][]} 表格数据
- 参数 : path {String} 保存路径(不支持相对路径,必须是绝对路径)
- 版本 : 1.7.8


```javascript
//数据
let sheetData = [
    ["姓名", "年龄"],
    ["小红", "18"],//注意必须都是字符串类型
    ["小明", "19"]
];
//表名
let sheetName = "我的表格";
//路径(必须是绝对路径)
let savePath = "/sdcard/demo.xlsx";
$excel.write(sheetName, sheetData, savePath);
```


![](./img/227580225758600.png)

