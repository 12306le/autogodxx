# $screen - 屏幕操作

- 更新时间:2026-01-30 19:32:55

> 屏幕操作




### getPermit()

> 获取截屏权限
> 
> 如果系统是安卓11+并且无障碍可以截屏的话就会返回true，否则就判断录屏权限是否可用，如果可用也会返回true，如果这两种截屏方式都不可用，就尝试获取录屏权限。
> 该方法会阻塞线程，直到获取权限成功后，才会结束。
> 
> 需要注意的是：安卓15+的用户在获取录屏权限的时候记得选中整个屏幕选项，而不是单个当前应用截屏。

- 返回 : {boolean} 是否获取成功
- 版本 : 1.0.0


```javascript
//等待获取截屏权限
$screen.getPermit();
```


### getPermitOnce()

> 获取截屏权限一次
> 
> 本质上只是取消了阻塞线程的行为，然而如果获取不到权限，会继续重新向用户请求权限，直到获取为止。


```javascript
//获取截屏权限一次
$screen.getPermitOnce();
```


### hasPermit()

> 是否有截屏权限
> 
> 如果支持无障碍截屏的话(安卓11+且无障碍服务可用)，会直接返回true，否则就会判断录屏权限是否可用，如果可用也会返回true。

- 返回 : {boolean} 是否有截屏权限
- 版本 : 1.1.5


```javascript
if($screen.hasPermit()){
    log("有截屏权限");
}
```


### hasRecord()

> 判断是否有录屏权限
> 
> 这个方法只会判断是否有录屏权限，不会判断无障碍截屏是否可用

- 返回 : {boolean} 是否有录屏权限
- 版本 : 1.7.4


```javascript
if($screen.hasRecord()){
    log("有录屏权限");
}
```


### onlyRecord(onlyRecord)

> 只用录屏权限
> 
> 默认是false，即默认优先使用无障碍截屏，后用录屏权限截屏。
> 如果设置为true，那么判断是否有权限的函数只会判断录屏权限是否可用，不会判断无障碍截屏是否可用。并且获取截屏的时候只会通过录屏权限获取截屏。

- 参数 : onlyRecord {boolean} 是否只用录屏权限
- 版本 : 1.7.4


```javascript
//设置只使用录屏权限获取截屏
$screen.onlyRecord(true);
```


### getScreen()

> 获取屏幕截屏
> 
> 此函数将优先使用无障碍截屏(安卓11+)，否则将使用截屏权限来进行截屏。

- 返回 : {Image} 截屏图片
- 版本 : 1.0.0


```javascript
//等待获取截屏权限
$screen.getPermit();
//如果不想用上面的方式，也可以使用 $act.getPermit(); //获取无障碍，也可以截屏(安卓11+以上才行)
let img = $screen.getScreen();//获得屏幕截屏
$img.show(img);//显示截屏
```


### bright(bright)

> 设置屏幕亮度

- 参数 : bright {int} 亮度值(0-255)
- 版本 : 1.0.0


```javascript
//设置屏幕亮度
$screen.bright(100);
```


### dir(degree)

> 设置屏幕方向

- 参数 : degree {string} 屏幕旋转度数
- 版本 : 1.0.0


```javascript
//设置屏幕方向
$screen.dir(0);//(强制)竖屏
$screen.dir(90);//(强制)右转横屏
$screen.dir(180);//(强制)倒置竖屏
$screen.dir(270);//(强制)左转横屏
$screen.dir(-1);//(不强制)自动旋转(任何其他数字都是自动旋转)
// 模拟器测试：
// 逍遥     安卓5  : 成功旋转屏幕 会闪退
// 逍遥     安卓7  : 成功旋转屏幕 会闪退
// 逍遥     安卓9  : 成功旋转屏幕 会闪退
// 逍遥     安卓12 : 完美!!!
// 雷电     安卓9  : 毫无反应
//真机测试：
// OPPO    安卓12 : 完美!!!
```


### getHeight()

> 屏幕高
> 
> 该方法会先获取屏幕的所有信息，之后再反馈屏幕高度。

- 返回 : {int} 屏幕高度
- 版本 : 1.0.0


```javascript
let w = $screen.getWidth();
let h = $screen.getHeight();
alert("屏幕宽高",w+"x"+h);
```


### getWidth()

> 屏幕宽
> 
> 该方法会先获取屏幕的所有信息，之后再反馈屏幕宽度。

- 返回 : {int} 屏幕宽度
- 版本 : 1.0.0


```javascript
let w = $screen.getWidth();
let h = $screen.getHeight();
alert("屏幕宽高",w+"x"+h);
```


### getScreenInfo()

> 屏幕信息
> 
> 该方法会获取屏幕的所有信息。

- 返回 : {ScreenInfo} 屏幕宽高信息
- 版本 : 1.0.0


```javascript
let info = $screen.getScreenInfo();//等价于：'$screen.info()'
alert("详细信息",info);
```


### info()

> 屏幕信息
> 
> 该方法会获取屏幕的所有信息。

- 返回 : {ScreenInfo} 屏幕宽高信息
- 版本 : 1.7.0


```javascript
let info = $screen.info();//等价于：'$screen.getScreenInfo()'
alert("详细信息",info);
```


### getDensity()

> 获取密度
> 
> 获取屏幕的密度因子

- 返回 : {float} 密度因子
- 版本 : 1.0.0


```javascript
let density = $screen.getDensity();
alert("当前设备的密度",density);
```


### isScreenOff()

> 判断屏幕是否息屏

- 返回 : {boolean} 是否息屏
- 版本 : 1.0.0


```javascript
if($screen.isScreenOff()){
    toast("屏幕息屏");
}
```


### isScreenOn()

> 判断屏幕是否亮屏

- 返回 : {boolean} 是否亮屏
- 版本 : 1.0.0


```javascript
if($screen.isScreenOn()){
    toast("屏幕亮屏");
}
```


### split(tranCut, vertCut, index)

> 屏幕分割
> 
> 将屏幕进行横向和纵向的分割，返回指定索引的范围，该函数对于制作全分辨率脚本非常有用。

- 参数 : tranCut {int} 横向分割数量
- 参数 : vertCut {int} 纵向分割数量
- 参数 : index {int} 块的索引
- 返回 : {Rect} 范围
- 版本 : 1.1.2


```javascript
$draw.closeAll();
//将屏幕分割成9份，找到最后一份的范围
let region = $screen.split(3, 3, 8);
//绘制出这个范围
$draw.rect(region);
```


### save(path)

> 截屏并保存
> 
> 该函数会直接截屏(需要截屏权限或者无障碍权限)，之后保存截屏到指定的路径。

- 参数 : path {String} 保存路径
- 版本 : 1.0.0


```javascript
//截屏并且保存(支持相对路径写法)
let imgPath = "/sdcard/Pictures/截屏.png";
$screen.save(imgPath);
```


### mustV()

> 强制竖屏截屏
> 
> 一般情况下用不到该函数，但是确实存在少量设备存在横竖屏异常，此函数就是为了应对特殊情况的。

- 版本 : 1.1.8


```javascript
$screen.mustV();//强制竖屏截屏
```


### mustH()

> 强制横屏截屏
> 
> 一般情况下用不到该函数，但是确实存在少量设备存在横竖屏异常，此函数就是为了应对特殊情况的。

- 版本 : 1.1.8


```javascript
$screen.mustH();//强制横屏截屏
```


### cancelMust()

> 取消强制横竖屏
> 
> 默认情况下,$screen会根据当前屏幕状态自动检测截屏是横屏还是竖屏,所以一般情况下mustV、mustH、cancelMust这三个函数没必要调用。
> 之所以设计这三个函数,是为了更好的适配更多的设备,正常情况下手机的宽度都是小于高度的,但是也有那种宽度大于高度的情况,例如：平板设备，此时就可以使用强制横屏或竖屏来截屏了。

- 版本 : 1.1.8


```javascript
$screen.cancelMust();//取消强制横竖屏(默认是:自动检测)
```


