# $date - 日期工具

- 更新时间:2026-01-30 19:32:51

> 日期工具




### dt()

> 当前日期时间字符串
> 
> 函数名称dt表示dateTime的缩写

- 返回 : {string} 日期时间字符串,格式为:yyyy-MM-dd HH:mm:ss
- 版本 : 1.1.4


```javascript
let dateStr = $date.dt();
alert("日期",dateStr);//2025-10-25 18:32:53
```


### dt(time)

> 当前日期时间字符串
> 
> 指定时间戳,获得日期和时间的字符串
> 
> 函数名称dt表示dateTime的缩写

- 参数 : time {number} 时间戳
- 返回 : {string} 日期时间字符串,格式为:yyyy-MM-dd HH:mm:ss
- 版本 : 1.1.4


```javascript
let dateStr = $date.dt(1747985594110);
alert("日期",dateStr);
```


### dt(time)

> 当前日期时间字符串
> 
> 指定时间字符串,获得日期和时间的字符串
> 
> 函数名称dt表示dateTime的缩写

- 参数 : time {string} 时间字符串
- 返回 : {string} 日期时间字符串,格式为:yyyy-MM-dd HH:mm:ss
- 版本 : 1.1.4


```javascript
let dateStr = $date.dt("2025/12/08 12/35/24");
alert("日期",dateStr);//2025-12-08 12:35:24
```


### d()

> 当前日期字符串
> 
> 函数名称d表示date的缩写

- 返回 : {string} 日期字符串,格式为:yyyy-MM-dd
- 版本 : 1.1.4


```javascript
let dateStr = $date.d();
alert("日期",dateStr);//2025-05-23
```


### d(time)

> 当前日期字符串
> 
> 指定时间戳,获得日期的字符串
> 
> 函数名称d表示date的缩写

- 参数 : time {number} 时间戳
- 返回 : {string} 日期字符串,格式为:yyyy-MM-dd
- 版本 : 1.1.4


```javascript
let dateStr = $date.d(1747985594110);
alert("日期",dateStr);//2025-05-23
```


### parse(dateStr, pattern)

> 解析日期

- 参数 : dateStr {string} 日期字符串
- 参数 : pattern {string} 日期格式
- 返回 : {Date} 日期对象
- 版本 : 1.1.4


```javascript
//时间字符串的格式和后面解析模板的格式保持一致
//这样才能解析成功
let date = $date.parse("2025/12/08 12/35/24","yyyy/MM/dd HH/mm/ss");
alert("日期对象",date);//Dec 8, 2025 12:35:24 PM
```


### parse(dateStr)

> 解析日期
> 
> 内部预制了27种字符串的情况,自动使用这些情况的模板去匹配日期字符串
> 
> 如果解析失败,返回null

- 参数 : dateStr {string} 日期字符串
- 返回 : {Date} 日期对象
- 版本 : 1.1.4


```javascript
//自动解析
let date = $date.parse("2025/12/08 12/35/24");
alert("日期",date);//Mon Dec 08 12:35:24 GMT+08:00 2025
```


### info()

> 获取日期信息
> 
> 将当前日期的各个字段都分析出来,并且返回

- 返回 : {DateInfo} 日期信息对象
- 版本 : 1.1.4


```javascript
//获取当前日期信息
let info = $date.info();
alert("日期",info);
```


### info(time)

> 获取指定时间日期信息
> 
> 指定time时间,并且获得这个时间的所有信息

- 返回 : {DateInfo} 日期信息对象
- 版本 : 1.1.4


```javascript
//解析指定时间戳的日期信息
let info = $date.info(1747985594110);
alert("日期",info);
```


### info(time)

> 获取指定时间日期信息
> 
> 指定字符串时间,并且获得这个时间的所有信息

- 参数 : time {string}  时间字符串
- 返回 : {DateInfo} 日期信息对象
- 版本 : 1.1.4


```javascript
//解析指定时间戳的日期信息
let info = $date.info("2025/12/08 12-35-24");
alert("日期",info);
```


### format(time, pattern)

> 格式化日期

- 参数 : time {long} 时间戳
- 参数 : pattern {string} 日期格式
- 返回 : {string} 日期字符串
- 版本 : 1.1.4


```javascript
//第一个参数:日期时间戳
//第二个参数:自己想要的格式
let info = $date.format(1747985594110,"yyyy年MM月dd日 HH时mm分ss秒");
alert("日期",info);//2025年05月23日 15时33分14秒
```


### format(date, pattern)

> 格式化日期

- 参数 : date {Date} 日期
- 参数 : pattern {string} 日期格式
- 返回 : {string} 日期字符串
- 版本 : 1.1.4


```javascript
let date = new java.util.Date();
let info = $date.format(date,"yyyy年MM月dd日 HH时mm分ss秒");
alert("日期",info);//2025年05月23日 15时59分50秒
```


### format(dateStr, pattern)

> 格式化日期

- 参数 : dateStr {string} 标准日期字符串
- 参数 : pattern {string} 日期格式,自定义的字符串
- 返回 : {string} 日期字符串
- 版本 : 1.1.4


```javascript
//第一个参数:比较乱的日期字符串
//第二个参数:自己想要的格式
let info = $date.format("2025/12/08 12-35-24","yyyy年MM月dd日 HH时mm分ss秒");
alert("日期",info);//2025年12月08日 12时35分24秒
```


### date()

> 创建日期
> 
> 从当前时间创建一个日期对象

- 返回 : {Date} 当前日期
- 版本 : 1.1.4


```javascript
let info = $date.date();
alert("日期",info);//Fri May 23 15:56:07 GMT+08:00 2025
```


### date(time)

> 创建日期
> 
> 从指定时间戳中创建日期对象

- 参数 : time {long} 时间戳
- 返回 : {Date} 当前日期
- 版本 : 1.1.4


```javascript
let info = $date.date(1747985594110);
alert("日期",info);//Fri May 23 15:33:14 GMT+08:00 2025
```


### date(dateStr)

> 创建日期
> 
> 从字符串中创建日期对象，效果和parse(str)一样，内部预制了27种字符串的情况,自动使用这些情况的模板去匹配日期字符串，如果解析失败,返回null

- 参数 : dateStr {string} 日期字符串
- 返回 : {Date} 日期对象
- 版本 : 1.1.4


```javascript
let info = $date.date("2025/12/08 12-35-24");
alert("日期",info);//Mon Dec 08 12:35:24 GMT+08:00 2025
```


### dur(milliseconds)

> 将毫秒数转换为时间字符串 "x天x时x分x秒"

- 参数 : milliseconds {long}  毫秒数
- 返回 : {string} 格式化的时间字符串
- 版本 : 1.6.1


```javascript
let info = $date.dur(1234567890);
alert("日期",info);//14天6时56分7秒
```


### curTime()

> 获取当前时间戳

- 返回 : {long} 时间戳
- 版本 : 1.7.8


```javascript
let timestamp = $date.curTime();
alert("时间戳",timestamp);
```


