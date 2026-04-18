# $tip - 阻塞式对话框

- 更新时间:2026-01-30 19:32:57

> 阻塞式对话框
> 
> 什么是阻塞式对话框？
> 
> 答：当对话框发起调用时，阻塞当前线程不向下执行代码，当对话框处理完事件之后，下面的代码才会执行。




### i(msg)

> [信息]对话框

- 参数 : msg {Object...} 信息内容
- 版本 : 1.0.0


```javascript
$tip.i("我是信息");
```


### v(msg)

> [说明]对话框

- 参数 : msg {Object...} 信息内容
- 版本 : 1.0.0


```javascript
$tip.v("我是信息");
```


### w(msg)

> [警告]对话框

- 参数 : msg {Object...} 信息内容
- 版本 : 1.0.0


```javascript
$tip.w("我是信息");
```


### e(msg)

> [异常]对话框

- 参数 : msg {Object...} 信息内容
- 版本 : 1.0.0


```javascript
$tip.e("我是信息");
```


### d(msg)

> [调试]对话框

- 参数 : msg {Object...} 信息内容
- 版本 : 1.0.0


```javascript
$tip.d("我是信息");
```


### input(title, callback)

> 输入对话框

- 参数 : title {string} 标题
- 参数 : callback {(value)=>{}} 确定按钮回调
- 版本 : 1.0.0


```javascript
$tip.input("请输入你的名字",(value)=> {
    toast("输入的内容:"+value);
});
```


### input(title, def, callback)

> 输入对话框(默认值)

- 参数 : title {string} 标题
- 参数 : def {string} 默认值
- 参数 : callback {(value)=>{}} 确定按钮回调
- 版本 : 1.0.0


```javascript
$tip.input("请输入你的名字","张三",(value)=> {
    toast("输入的内容:"+value);
});
```


### input(title, hint, def, callback)

> 输入对话框(默认值)

- 参数 : title {string} 标题
- 参数 : hint {string} 提示
- 参数 : def {string} 默认值
- 参数 : callback {(value)=>{}} 确定按钮回调
- 版本 : 1.0.0


```javascript
$tip.input("你是?","输入名字","张三",(value)=> {
    toast("输入的内容:"+value);
});
```


### inputInt(title, callback)

> 输入整数
> 
> 如果输入的字符串最后无法解析成数字则回调结果为0
> 
> 引导文字默认为标题
> 
> 默认值为0

- 参数 : title {string} 标题
- 参数 : callback {(num)=>{}} 结果回调


```javascript
$tip.inputInt("年龄",(num)=> {
    toast("刚满"+num+"岁~");
});
```


### inputInt(title, def, callback)

> 输入整数
> 
> 如果输入的字符串最后无法解析成数字则回调结果为0
> 
> 引导文字默认为标题

- 参数 : title {string} 标题
- 参数 : def {int} 默认值
- 参数 : callback {(num)=>{}} 结果回调


```javascript
$tip.inputInt("年龄",18,(num)=> {
    toast("刚满"+num+"岁~");
});
```


### inputInt(title, hint, callback)

> 输入整数
> 
> 如果输入的字符串最后无法解析成数字则回调结果为0
> 
> 默认值为0

- 参数 : title {string} 标题
- 参数 : hint {string} 引导文字
- 参数 : callback {(num)=>{}} 结果回调


```javascript
$tip.inputInt("年龄","请输入年龄:",(num)=> {
    toast("刚满"+num+"岁~");
});
```


### inputInt(title, hint, def, callback)

> 输入整数
> 
> 如果输入的字符串最后无法解析成数字则回调结果为0

- 参数 : title {string} 标题
- 参数 : hint {string} 引导文字
- 参数 : def {int} 默认值
- 参数 : callback {(num)=>{}} 结果回调


```javascript
$tip.inputInt("年龄","请输入你的年龄:",18,(num)=> {
    toast("刚满"+num+"岁~");
});
```


### show(title, msg)

> 文本提示对话框

- 参数 : title {string} 标题
- 参数 : msg {string} 信息
- 版本 : 1.0.0


```javascript
$tip.show("你好新人","我是你的AIGame助手");
```


### show(title, msg, click)

> 文本提示对话框(有回调)

- 参数 : title {string} 标题
- 参数 : msg {string} 信息
- 参数 : click {()=>{}} [确定]按钮回调
- 版本 : 1.0.0


```javascript
$tip.show("你好新人","我是你的AIGame助手",()=> {
    toast("你好!");
});
```


### show(title, view)

> 自定义对话框(右上角关闭)

- 参数 : title {string} 标题
- 参数 : view {View} 自定义view
- 版本 : 1.0.0


```javascript
//解析xml并且获得ui对象
let ui = $ui.layout("ag-app-example/$tip - 阻塞式对话框/01.自定义对话框/ui.xml");
//通过ui对象拿到View对象
let view = ui.getView();
//这种方式不会显示底部的按钮
$tip.show("自定义对话框", view);
```


### show(title, view, click)

> 自定义对话框(确定关闭)

- 参数 : title {string} 标题
- 参数 : view {View} 自定义view
- 参数 : click {()=>{}} 点击确定按钮的回调
- 版本 : 1.0.0


```javascript
//解析xml并且获得ui对象
let ui = $ui.layout("ag-app-example/$tip - 阻塞式对话框/01.自定义对话框/ui.xml");
//通过ui对象拿到View对象
let view = ui.getView();
//通过tip显示这个view
$tip.show("自定义对话框", view, ()=> {
    toast("保存成功");
});
```


### one(title, items, callback)

> 单选对话框

- 参数 : title {string} 标题
- 参数 : items {list[string]} 选项
- 参数 : callback {(value)=>{}} 选择回调
- 版本 : 1.0.0


```javascript
let arr = ["小狗","小猫","小猪"];
$tip.one("请选择",arr,(value)=> {
    toast("你选择了:"+value);
});
```


### more(title, items, callback)

> 多选对话框

- 参数 : title {string} 标题
- 参数 : items {list[string]} 选项
- 参数 : callback {(values)=>{}} 选择回调
- 版本 : 1.0.0


```javascript
let arr = ["小狗","小猫","小猪"];
$tip.more("请选择",arr,(values)=> {
    toast("你选择了:"+values);
});
```


### calendar(callback)

> 日期选择对话框

- 参数 : callback {(dateInfo)=>{}} 选择回调
- 版本 : 1.7.0


```javascript
//选择日期
$tip.calendar((info)=> {
    //此回调处于第三方线程
    let year = info.year; //年
    let month = info.month; //月
    let day = info.day; //日
    //显示日期
    alert("日期",year+"-"+month+"-"+day);
});
```


### date(callback)

> 滚轮方式选择日期

- 参数 : callback {(timeInfo)=>{}} 选择回调
- 版本 : 1.2.8


```javascript
//滚轮方式选择日期
$tip.date((info)=> {
    //此回调处于第三方线程
    let year = info.year; //年
    let month = info.month; //月
    let day = info.day; //日
    //显示日期
    alert("日期",year+"-"+month+"-"+day);
});
```


### clock(callback)

> 时间选择对话框

- 参数 : callback {(timeInfo)=>{}} 选择回调
- 版本 : 1.7.0


```javascript
//24小时制:时间选择对话框
$tip.clock((info)=> {
    //此回调处于第三方线程
    let hour = info.hour; //时
    let minute = info.minute; //分
    //显示时间
    alert("时间",hour+":"+minute);
});
```


### time(callback)

> 时间滚动选择对话框

- 参数 : callback {(timeInfo)=>{}} 选择回调
- 版本 : 1.2.8


```javascript
//24小时制:滚轮方式时间选择对话框
$tip.time((info)=> {
    //此回调处于第三方线程
    let hour = info.hour; //时
    let minute = info.minute; //分
    //显示时间
    alert("时间",hour+":"+minute);
});
```


