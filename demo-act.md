# 示例：$act

> 来源：上传 zip 中 `11` 个原始示例文件自动合并。

## $act-动作手势-01.获取权限

```javascript
//AIGame 官方示例

//(1)判断是否获取无障碍权限
let has = $act.hasPermit();

//(2)如果没有取无障碍，则获取权限
if (has) {
    log("已经获得无障碍权限");
} else {
    log("请求获取无障碍权限");
    $act.getPermit();
}


//示例结束
```

## $act-动作手势-02.点击

```javascript
//AIGame 官方示例

//安卓7以上使用无障碍执行手势
//安卓7以下自动切换成root执行手势

$act.click(400,348);



//示例结束
```

## $act-动作手势-03.长按

```javascript
//AIGame 官方示例

//安卓7以上使用无障碍执行手势
//安卓7以下自动切换成root执行手势

$act.press(400,348);



//示例结束
```

## $act-动作手势-04.滑动

```javascript
//AIGame 官方示例

//安卓7以上使用无障碍执行手势
//安卓7以下自动切换成root执行手势

//下拉通知
$act.move(400,0,400,800,1000);



//示例结束
```

## $act-动作手势-05.双指操作

```javascript
//AIGame 官方示例

//安卓7以上使用无障碍执行手势
//安卓7以下自动切换成root执行手势

//注意:不推荐在android7以下使用多指手势,因为root手势本身就不支持多指
//虽然可以正常运行，但是和无障碍手势的效果有差别

//(1)先长按
let g1 = [504,583,504,583,0,1000];
//(2)再滑动
let g2 = [504,583,504,883,1000,1000];
$act.gesture(g1,g2);



//示例结束
```

## $act-动作手势-06.三指手势

```javascript
//AIGame 官方示例

//安卓7以上使用无障碍执行手势
//安卓7以下自动切换成root执行手势

//注意:不推荐在android7以下使用多指手势,因为root手势本身就不支持多指
//虽然可以正常运行，但是和无障碍手势的效果有差别

//模拟三指下滑
let g1 = [500,900,500,1500,0,1000];
let g2 = [500,900,500,1500,0,1000];
let g3 = [500,900,500,1500,0,1000];
$act.gesture(g1,g2,g3);



//示例结束
```

## $act-动作手势-07.按键操作

```javascript
//AIGame 官方示例
sleep(2000);
$draw.i("执行操作:$act.home()");
$act.home();

sleep(2000);
$draw.i("执行操作:$act.menu()");
$act.menu();//此函数和recen()t函数效果一致

sleep(2000);
$draw.i("执行操作:$act.back()");
$act.back();

sleep(2000);
$draw.i("执行操作:$act.power()");
$act.power();

sleep(2000);
$draw.i("执行操作:$act.back()");
$act.back();

sleep(2000);
$draw.i("执行操作:$act.settings()");
//打开设置界面
$act.settings();

sleep(2000);
$draw.i("返回主页");
$act.home();

sleep(2000);
$draw.i("执行操作:$act.notifications()");
//打开通知
$act.notifications();

sleep(2000);
$draw.i("返回主页");
$act.home();


sleep(2000);
$draw.closeLog();


//示例结束
```

## $act-动作手势-08.安卓9特殊操作

```javascript
//AIGame 官方示例

sleep(2000);
//执行分屏操作
$act.splitScreen();

sleep(2000);
//执行截屏操作
$act.screenshot();


//示例结束
```

## $act-动作手势-09.息屏与唤醒

```javascript
//AIGame 官方示例

//注意：当无障碍不可用时，自动切换使用root手势执行息屏和亮屏
$act.lock();//息屏
sleep(2000);
$act.unlock();//亮屏



//使用root版本的息屏与亮屏
/*
sleep(2000);
$root.lock();//息屏
sleep(2000);
$root.unlock();//亮屏
*/

//示例结束
```

## $act-动作手势-10.界面监听

```javascript
//AIGame 官方示例

let curActivity = $act.activity(); //获得当前界面类名
log(curActivity);

//设置界面变化监听(你可以打开其他软件界面,看看日志信息)
$act.activity((name)=> {
    log("当前界面:",name);
});

//20秒后关闭界面变化监听
sleep(20000);

//关闭界面变化监听
$act.activity(null);

//示例结束
```

## $act-动作手势-11.输入文本框

```javascript
//AIGame 官方示例

//当界面中有文本框获得焦点时，可以直接设置内容
$act.input("需要设置的内容");

//示例结束
```
