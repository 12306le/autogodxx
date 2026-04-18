# 示例：$draw

> 来源：上传 zip 中 `11` 个原始示例文件自动合并。

## $draw-全局绘制-01.绘制方框

```javascript
//AIGame 官方示例


//关闭所有绘制图案
$draw.closeAll();

//绘制矩形
$draw.rect(200,200,200,100);

sleep(2000);

//绘制一个向外拓展50像素的矩阵
$draw.rect(200,200,200,100,50);




//示例结束
```

## $draw-全局绘制-02.绘制圆形

```javascript
//AIGame 官方示例


//关闭所有绘制图案
$draw.closeAll();

//绘制半径为100像素的圆形
$draw.circle(350,400,100);

sleep(2000);

//向外拓展50像素
$draw.circle(350,400,100,50);




//示例结束
```

## $draw-全局绘制-03.绘制准心

```javascript
//AIGame 官方示例


//关闭所有绘制图案
$draw.closeAll();

//绘制准心
$draw.cross(400,500);





//示例结束
```

## $draw-全局绘制-04.绘制点

```javascript
//AIGame 官方示例


//关闭所有绘制图案
$draw.closeAll();

//绘制一个点
$draw.dot(400,500);





//示例结束
```

## $draw-全局绘制-05.绘制文字

```javascript
//AIGame 官方示例


//关闭所有绘制图案
$draw.closeAll();

//绘制文字
$draw.text("Hello aigame !",400,300);

//绘制文字(大小为20像素)
$draw.text("Hello aigame !",400,400,20);




//示例结束
```

## $draw-全局绘制-06.绘制线

```javascript
//AIGame 官方示例


//关闭所有绘制图案
$draw.closeAll();

//绘制一条线
$draw.line(300,0,100,1000);

//再绘制几条
$draw.line(300,0,200,1000);
$draw.line(300,0,400,1000);
$draw.line(300,0,700,1000);

//示例结束
```

## $draw-全局绘制-07.绘制路径-画爱心

```javascript
//AIGame 官方示例


//关闭所有绘制图案
$draw.closeAll();


function generateHeartCoordinates(size, offsetX , offsetY) {
    const coordinates = [];
    for (let t = 0; t < 2 * Math.PI; t += 0.01) {
        // 根据爱心参数方程计算 x 和 y
        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        // 缩放坐标，size 控制爱心大小
        x = x * size / 32;
        y = -y * size / 32;

        // 偏移坐标，让爱心居中
        x += size / 2;
        y += size / 2;

        // 应用额外的偏移量来设置爱心位置
        x += offsetX;
        y += offsetY;

        coordinates.push([Math.round(x), Math.round(y)]);
    }
    return coordinates;
}

// 调用函数生成爱心坐标数组
const size = 250;
const offsetX = 300; // 设置爱心在 x 轴上的偏移量
const offsetY = 260; // 设置爱心在 y 轴上的偏移量
const heartCoordinates = generateHeartCoordinates(size, offsetX, offsetY);




$draw.path(heartCoordinates);




//示例结束
```

## $draw-全局绘制-08.绘制日志

```javascript
//AIGame 官方示例


//关闭所有绘制图案
$draw.closeAll();

$draw.i("信息");

sleep(2000);

$draw.d("调试");

sleep(2000);

$draw.w("警告");

sleep(2000);

$draw.e("异常");

sleep(2000);

$draw.v("忽略");

sleep(2000);



//示例结束
```

## $draw-全局绘制-09.关闭绘制

```javascript
//AIGame 官方示例


//关闭所有绘制的图案
$draw.closeAll();



//示例结束
```

## $draw-全局绘制-10.国际手势

```javascript
//AIGame 官方示例

//国际通用手势
$draw.path([
    [100, 800],
    [120, 750],
    [150, 720],
    [180, 750],
    [200, 800],
    [200, 800],
    [220, 700],
    [250, 680],
    [280, 700],
    [300, 800],
    [300, 800],
    [320, 250],
    [350, 200],
    [380, 250],
    [400, 800],
    [400, 800],
    [420, 740],
    [450, 730],
    [480, 740],
    [500, 800],
    [500, 800],
    [520, 770],
    [550, 760],
    [580, 770],
    [600, 800]
]);

//示例结束
```

## $draw-全局绘制-11.流畅清空绘制

```javascript
//开头先清空所有
$draw.closeAll();
sleep(1000);

//设置速度
let speed = 3;

//动态的绘制一个点
for (let i = 0; i < $screen.getWidth(); i += speed) {
    $draw.dot(i, 500);
    //显示10毫秒后再清空(时间太短了就看不到绘制的内容了)
    sleep(10);
    //[重要]这个函数不会销毁悬浮窗，只会清空绘制
    $draw.clear();
}

//结尾再清空所有
sleep(1000);
$draw.closeAll();//这个函数会销毁悬浮窗
```
