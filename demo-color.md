# 示例：$color

> 来源：上传 zip 中 `9` 个原始示例文件自动合并。

## $color-颜色工具-01.图片找色-01.找出一个位置

```javascript
//如果没有无障碍权限，则会获取录屏权限
if(!$act.hasPermit()){
    //阻塞方法:直到获取录屏权限为止，才会继续向下执行代码
    $screen.getPermit();
}

//获取悬浮窗权限
$floaty.getPermit();
//把图片显示在屏幕上
$img.show("example/$color - 颜色工具/01.图片找色/p01.png")
//截屏并且找颜色
sleep(1000);//显示图片需要时间,所以延迟一秒
let screenImg = $screen.getScreen();//如果有无障碍就会使用无障碍来截屏
//第4个参数因为我不知到具体的范围所以就空着(默认全屏查找)
let result = $color.find(screenImg,"#d87d83");
if(result!=null){
    $draw.dot(result);//绘制结果位置
    $draw.log(result);//屏幕显示位置
    sleep(3000);
    $draw.closeAll();//关闭绘制
}
```

## $color-颜色工具-01.图片找色-02.找出一个位置(完整参数)

```javascript
//如果没有无障碍权限，则会获取录屏权限
if(!$act.hasPermit()){
    //阻塞方法:直到获取录屏权限为止，才会继续向下执行代码
    $screen.getPermit();
}

//获取悬浮窗权限
$floaty.getPermit();
//把图片显示在屏幕上
$img.show("example/$color - 颜色工具/01.图片找色/p01.png")
//截屏并且找颜色
sleep(1000);//显示图片需要时间,所以延迟一秒
let screenImg = $screen.getScreen();//如果有无障碍就会使用无障碍来截屏
//第4个参数因为我不知到具体的范围所以就空着(默认全屏查找)
let result = $color.find(screenImg,"#d87d83",5,[]);
if(result!=null){
    $draw.dot(result);//绘制结果位置
    $draw.log(result);//屏幕显示位置
    sleep(3000);
    $draw.closeAll();//关闭绘制
}
```

## $color-颜色工具-01.图片找色-03.找出多个位置

```javascript
//如果没有无障碍权限，则会获取录屏权限
if(!$act.hasPermit()){
    //阻塞方法:直到获取录屏权限为止，才会继续向下执行代码
    $screen.getPermit();
}

//获取悬浮窗权限
$floaty.getPermit();
//把图片显示在屏幕上
$img.show("example/$color - 颜色工具/01.图片找色/p02.png")
//截屏并且找颜色
sleep(1000);//显示图片需要时间,所以延迟一秒
let screenImg = $screen.getScreen();//如果有无障碍就会使用无障碍来截屏
//只用两个参数其他的默认
let result = $color.findAll(screenImg,"#d28384");
if(result!=null){
    for(let index of result){
        $draw.dot(index);//绘制位置的点
        $draw.log(index);//屏幕显示位置
        sleep(300);
    }
    //3秒后关闭悬浮绘制
    sleep(5000);
    $draw.closeAll();
}
```

## $color-颜色工具-01.图片找色-04.找出多个位置(完整参数)

```javascript
//如果没有无障碍权限，则会获取录屏权限
if(!$act.hasPermit()){
    //阻塞方法:直到获取录屏权限为止，才会继续向下执行代码
    $screen.getPermit();
}

//获取悬浮窗权限
$floaty.getPermit();
//把图片显示在屏幕上
$img.show("example/$color - 颜色工具/01.图片找色/p02.png")
//截屏并且找颜色
sleep(1000);//显示图片需要时间,所以延迟一秒
let screenImg = $screen.getScreen();//如果有无障碍就会使用无障碍来截屏
//第4个参数因为我不知到具体的范围所以就空着(默认全屏查找)
let result = $color.findAll(screenImg,"#d28384",5,[]);
if(result!=null){
    for(let index of result){
        $draw.dot(index);//绘制位置的点
        $draw.log(index);//屏幕显示位置
        sleep(300);
    }
    //3秒后关闭悬浮绘制
    sleep(5000);
    $draw.closeAll();
}
```

## $color-颜色工具-01.计算颜色相似度

```javascript
let result = $color.similar("#1E1F22","#2B2D30");

alert("相似度",result);
```

## $color-颜色工具-02.颜色值转字符串

```javascript
//转为#00000000
let color1 = $color.toString(-166780);

//转为#000000
let color2 = $color.str(-166780);

alert("8位颜色值",color1);

alert("6位颜色值",color2);
```

## $color-颜色工具-03.解析rgb拿到颜色值

```javascript
let colorValue1 = $color.parse("#784cde");
let colorValue2 = $color.parse(105,78,230);
let colorValue3 = $color.rgb(105,78,230);
let colorValue4 = $color.argb(255,105,78,230);


let info = `
colorValue1=${colorValue1}
colorValue2=${colorValue2}
colorValue3=${colorValue3}
colorValue4=${colorValue4}
`;

alert("颜色值",info);
```

## $color-颜色工具-04.解析颜色通道

```javascript
let a = $color.a("#357C94");
let r = $color.r("#357C94");
let g = $color.g("#357C94");
let b = $color.b("#357C94");

let info = `
a=${a}
r=${r}
g=${g}
b=${b}
`;
alert("解析通道",info);
```

## $color-颜色工具-05.比较颜色

```javascript
let color = "#1E1F22"; 

let colorValue =-14803166;

let same = $color.equals(color,colorValue);

if (same) {
    alert("比较颜色","颜色相同");
} else {
    alert("比较颜色","颜色不同");
}
```
