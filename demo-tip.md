# 示例：$tip

> 来源：上传 zip 中 `19` 个原始示例文件自动合并。

## $tip-阻塞式对话框-01.自定义对话框-01.默认显示

```javascript
// AIGame官方示例


//解析xml并且获得ui对象
let ui = $ui.layout("example/$tip - 阻塞式对话框/01.自定义对话框/ui.xml");
//通过ui对象拿到View对象
let view = ui.getView();



//通过tip显示这个view
$tip.show("自定义对话框", view, ()=> {
    toast("保存成功");
});




// 示例结束
```

## $tip-阻塞式对话框-01.自定义对话框-02.不显示底部按钮

```javascript
// AIGame官方示例


//解析xml并且获得ui对象
let ui = $ui.layout("example/$tip - 阻塞式对话框/01.自定义对话框/ui.xml");
//通过ui对象拿到View对象
let view = ui.getView();


//这种方式不会显示底部的按钮
$tip.show("自定义对话框", view);




// 示例结束
```

## $tip-阻塞式对话框-01.[信息]对话框

```javascript
// AIGame官方示例


$tip.i("我是信息");




// 示例结束
```

## $tip-阻塞式对话框-02.[说明]对话框

```javascript
// AIGame官方示例


$tip.v("我是信息");




// 示例结束
```

## $tip-阻塞式对话框-03.[警告]对话框

```javascript
// AIGame官方示例


$tip.w("我是信息");




// 示例结束
```

## $tip-阻塞式对话框-04.[异常]对话框

```javascript
// AIGame官方示例


$tip.e("我是信息");




// 示例结束
```

## $tip-阻塞式对话框-05.[调试]对话框

```javascript
// AIGame官方示例


$tip.d("我是信息");




// 示例结束
```

## $tip-阻塞式对话框-06.输入对话框

```javascript
// AIGame官方示例


$tip.input("请输入你的名字",(value)=> {
    toast("输入的内容:"+value);
});




// 示例结束
```

## $tip-阻塞式对话框-07.输入对话框(默认值)

```javascript
// AIGame官方示例


$tip.input("请输入你的名字","张三",(value)=> {
    toast("输入的内容:"+value);
});




// 示例结束
```

## $tip-阻塞式对话框-08.文本提示对话框

```javascript
// AIGame官方示例


$tip.show("你好新人","我是你的AIGame助手");




// 示例结束
```

## $tip-阻塞式对话框-09.文本提示对话框(有回调)

```javascript
// AIGame官方示例


$tip.show("你好新人","我是你的AIGame助手",()=> {
    toast("你好!");
});




// 示例结束
```

## $tip-阻塞式对话框-10.自定义对话框(点击其他地方关闭)

```javascript
// AIGame官方示例


//解析xml并且获得ui对象
let ui = $ui.layout("example/$tip - 阻塞式对话框/01.自定义对话框/ui.xml");
//通过ui对象拿到View对象
let view = ui.getView();


//这种方式不会显示底部的按钮
$tip.show("自定义对话框", view);




// 示例结束
```

## $tip-阻塞式对话框-11.自定义对话框(确定关闭)

```javascript
// AIGame官方示例


//解析xml并且获得ui对象
let ui = $ui.layout("example/$tip - 阻塞式对话框/01.自定义对话框/ui.xml");
//通过ui对象拿到View对象
let view = ui.getView();



//通过tip显示这个view
$tip.show("自定义对话框", view, ()=> {
    toast("保存成功");
});




// 示例结束
```

## $tip-阻塞式对话框-12.单选对话框

```javascript
// AIGame官方示例


let arr = ["小狗","小猫","小猪"];

$tip.one("请选择",arr,(value)=> {
    toast("你选择了:"+value);
});




// 示例结束
```

## $tip-阻塞式对话框-13.多选对话框

```javascript
// AIGame官方示例


let arr = ["小狗","小猫","小猪"];

$tip.more("请选择",arr,(values)=> {
    toast("你选择了:"+values);
});




// 示例结束
```

## $tip-阻塞式对话框-14.日期选择(日历)

```javascript
//AIGame 官方示例


//选择日期
$tip.calendar((info)=> {
    //此回调处于第三方线程
    log(info); //用log打印具体的元素
    //常用调用：
    let year = info.year; //年
    let month = info.month; //月
    let day = info.day; //日
    //或者：
    year = info.y; //年
    month = info.m; //月
    day = info.d; //日
    //显示日期
    alert("日期",year+"-"+month+"-"+day);
});




//示例结束
```

## $tip-阻塞式对话框-15.日期选择(滚轮)

```javascript
//AIGame 官方示例


//选择日期
$tip.date((info)=> {
    //此回调处于第三方线程
    log(info); //用log打印具体的元素
    //常用调用：
    let year = info.year; //年
    let month = info.month; //月
    let day = info.day; //日
    //或者：
    year = info.y; //年
    month = info.m; //月
    day = info.d; //日
    //显示日期
    alert("日期",year+"-"+month+"-"+day);
});




//示例结束
```

## $tip-阻塞式对话框-16.时间选择(时钟)

```javascript
//AIGame 官方示例


//24小时制:选择时间对话框
$tip.clock((info)=> {
    //此回调处于第三方线程
    log(info); //用log打印具体的元素
    //常用调用：
    let hour = info.hour; //时
    let minute = info.minute; //分
    //或者：
    hour = info.h; //时
    minute = info.m; //分
    //显示时间
    alert("时间",hour+":"+minute);
});




//示例结束
```

## $tip-阻塞式对话框-17.时间选择(滚轮)

```javascript
//AIGame 官方示例


//24小时制:选择时间对话框
$tip.time((info)=> {
    //此回调处于第三方线程
    log(info); //用log打印具体的元素
    //常用调用：
    let hour = info.hour; //时
    let minute = info.minute; //分
    //或者：
    hour = info.h; //时
    minute = info.m; //分
    //显示时间
    alert("时间",hour+":"+minute);
});




//示例结束
```
