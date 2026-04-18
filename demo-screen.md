# 示例：$screen

> 来源：上传 zip 中 `11` 个原始示例文件自动合并。

## $screen-屏幕操作-01.获取截屏权限

```javascript
// AIGame官方示例


//等待获取截屏权限
$screen.getPermit();




// 示例结束
```

## $screen-屏幕操作-02.截屏

```javascript
// AIGame官方示例


//如果没有无障碍权限，则会获取录屏权限
if(!$screen.hasPermit()){
    //阻塞方法:直到获取录屏权限为止，才会继续向下执行代码
    $screen.getPermit();
}

//如果有无障碍则会优先使用无障碍截屏，否则就使用录屏权限截屏
let img = $screen.getScreen();//获得屏幕截屏

if(img!=null){
    img.show();//显示截屏
}


// 示例结束
```

## $screen-屏幕操作-03.设置屏幕亮度

```javascript
// AIGame官方示例


//设置屏幕亮度
$screen.bright(100);




// 示例结束
```

## $screen-屏幕操作-04.设置屏幕方向

```javascript
// AIGame官方示例


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




// 示例结束
```

## $screen-屏幕操作-05.屏幕高

```javascript
// AIGame官方示例


let w = $screen.getWidth();
let h = $screen.getHeight();

alert("屏幕宽高",w+"x"+h);




// 示例结束
```

## $screen-屏幕操作-06.屏幕宽

```javascript
// AIGame官方示例


let w = $screen.getWidth();
let h = $screen.getHeight();

alert("屏幕宽高",w+"x"+h);




// 示例结束
```

## $screen-屏幕操作-07.屏幕信息

```javascript
// AIGame官方示例


let info = $screen.getScreenInfo();

$tip.show("详细信息",info.toString());




// 示例结束
```

## $screen-屏幕操作-08.当前设备的密度

```javascript
// AIGame官方示例


let density = $screen.getDensity();




// 示例结束
```

## $screen-屏幕操作-09.判断屏幕是否息屏

```javascript
// AIGame官方示例


if($screen.isScreenOff()){
    toast("屏幕息屏");
}




// 示例结束
```

## $screen-屏幕操作-10.判断屏幕是否亮屏

```javascript
// AIGame官方示例


if($screen.isScreenOn()){
    toast("屏幕亮屏");
}




// 示例结束
```

## $screen-屏幕操作-11.截屏并保存

```javascript
// AIGame官方示例


//截屏并且保存
let imgPath = "/sdcard/Pictures/截屏.png";
$screen.save(imgPath);




// 示例结束
```
