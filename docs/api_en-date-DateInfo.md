# DateInfo - 日期信息

- 更新时间:2026-01-30 19:32:51

> 日期信息




### const {long} stamp;

> 时间戳


```javascript
//获取日期信息
let info = $date.info();
log(info.stamp);//时间戳
log(info.year);//年
log(info.month);//月
log(info.day);//日
log(info.week);//星期
log(info.hour);//时
log(info.min);//分
log(info.sec);//秒
log(info.mil);//毫秒
```


### const {int} year;

> 年


### const {int} month;

> 月


### const {int} day;

> 日


### const {int} week;

> 星期


### const {int} hour;

> 时


### const {int} min;

> 分


### const {int} sec;

> 秒


### const {int} mil;

> 毫秒


### getStamp()

> 获得时间戳

- 返回 : {long} 时间戳


```javascript
let info = $date.info("2025/12/08 12-35-24");
log(info.getStamp());
```


### getYear()

> 获得年

- 返回 : {int} 年


```javascript
let info = $date.info("2025/12/08 12-35-24");
log(info.getYear());
```


### getMonth()

> 获得月

- 返回 : {int} 月


```javascript
let info = $date.info("2025/12/08 12-35-24");
log(info.getMonth());
```


### getDay()

> 获得日

- 返回 : {int} 日


```javascript
let info = $date.info("2025/12/08 12-35-24");
log(info.getDay());
```


### getWeek()

> 获得星期

- 返回 : {int} 星期


```javascript
let info = $date.info("2025/12/08 12-35-24");
log(info.getWeek());
```


### getHour()

> 获得时

- 返回 : {int} 时


```javascript
let info = $date.info("2025/12/08 12-35-24");
log(info.getHour());
```


### getMin()

> 获得分

- 返回 : {int} 分


```javascript
let info = $date.info("2025/12/08 12-35-24");
log(info.getMin());
```


### getSec()

> 获得秒

- 返回 : {int} 秒


```javascript
let info = $date.info("2025/12/08 12-35-24");
log(info.getSec());
```


### getMil()

> 获得毫秒

- 返回 : {int} 毫秒


```javascript
let info = $date.info("2025/12/08 12-35-24");
log(info.getMil());
```


### json()

> 转换为JSON字符串

- 返回 : {string} JSON字符串


