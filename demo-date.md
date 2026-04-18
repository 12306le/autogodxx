# 示例：$date

> 来源：上传 zip 中 `8` 个原始示例文件自动合并。

## $date-日期与时间-01.日期时间字符串

```javascript
//官方示例

let dateStr = $date.dt();

alert("日期时间字符串",dateStr);//2025-10-25 18:32:53


//示例结束
```

## $date-日期与时间-02.日期字符串

```javascript
//官方示例

let dateStr = $date.d();

alert("日期时间字符串",dateStr);//2025-10-25


//示例结束
```

## $date-日期与时间-03.解析日期字符串

```javascript
//官方示例

let date = $date.parse("2025/12/08 12/35/24","yyyy/MM/dd HH/mm/ss");
//获得日期对象
alert("日期对象",date);//Dec 8, 2025 12:35:24 PM


//示例结束
```

## $date-日期与时间-04.解析日期

```javascript
//官方示例

//无需日期模板，自动匹配
let date = $date.parse("2025/12/08 12/35/24");
//获得日期对象
alert("日期对象",date);//Dec 8, 2025 12:35:24 PM


//示例结束
```

## $date-日期与时间-05.日期信息

```javascript
//官方示例

//获取当前日期信息
let info = $date.info();

alert("日期信息",info);


//示例结束
```

## $date-日期与时间-06.格式化

```javascript
//官方示例

//格式化指定日期
let info = $date.format(1747985594110,"yyyy年MM月dd日 HH时mm分ss秒");

alert("日期信息",info);


//示例结束
```

## $date-日期与时间-07.新建日期对象

```javascript
//官方示例

//新建日期对象
let date = $date.date();

alert("日期对象",date);


//示例结束
```

## $date-日期与时间-08.时间字符串

```javascript
//官方示例

//将时间戳转为时间描述
let info = $date.dur(1234567890);

alert("时间", info);//14天6时56分7秒


//示例结束
```
