# 示例：$canvas

> 来源：上传 zip 中 `5` 个原始示例文件自动合并。

## $canvas-画布-01.显示方式-01.在布局中显示

```javascript
//AIGame官方示例

let ui= $ui.layout(`
<ui>
    <statusbar/>
    <appbar back="true" id="mAppbar" title="显示画布图片" w="max"/>
    <img id="mImg" w="max" h="max" gravity="center|top" padding="10"/>
</ui>
`);
ui.show();
ui.id("mAppbar").back(()=>{
    ui.finish();
});

//创建画布对象
let canvas = $canvas.create(500,500);
//创建画笔
let paint = $canvas.paint();
paint.setColor($color.RED);//红色
//绘制红色方框
canvas.drawRect(30,30,400,400,paint);
//布局显示画布中的图片
ui.id("mImg").setImg(canvas.getBitmap());



//示例结束
```

## $canvas-画布-01.显示方式-02.在对话框中显示

```javascript
//AIGame官方示例

//创建画布对象
let canvas = $canvas.create(500,500);

//创建画笔
let paint = $canvas.paint();
paint.setColor($color.RED); //红色

//绘制红色方框
canvas.drawRect(30,30,400,400,paint);

//转换成Image对象后显示(AIGame的内置对象:$img的操作对象)
canvas.show();

//或者使用 canvas.toImg().show();    来显示图片
//或者使用 $img.show(canvas.toImg());来显示图片





//示例结束
```

## $canvas-画布-02.拟定合同-拟定合同

```javascript
//AIGame官方示例

//创建画布对象(加载图片对象)
let canvas = $canvas.create("example/$canvas - 画布/02.拟定合同/合同.jpg");

//创建黑色彩笔
let paint = $canvas.paint("#000000");
paint.setTextSize(25);

//绘制颜色
canvas.drawText("张三丰",170,145,paint);
canvas.drawText("420321200006524388",480,145,paint);
canvas.drawText("13564962035",900,145,paint);
canvas.drawText("翻斗花园2号街A501",170,195,paint);

//显示图片
canvas.show();
//保存图片
canvas.save("/sdcard/新合同.jpg");


//示例结束
```

## $canvas-画布-03.画个表格

```javascript
//AIGame官方示例

let ui= $ui.layout(`
<ui>
    <statusbar/>
    <appbar back="true" id="mAppbar" title="我的表格" w="max"/>
    <img id="mImg" w="max" h="max" gravity="center|top" padding="10"/>
</ui>
`);
ui.show();
ui.id("mAppbar").back(()=>{
    ui.finish();
});

let aw = 750; //合同宽度
let ah = 750; //合同高度
let th01_h = 45; //第1行表格线条高度("姓名之类的")
let th02_h = 45; //第2行表格线条高度("调查地址")
let th03_h = 300; //第3行表格线条高度("立案事由")
let th04_h = 60; //第4行表格线条高度("联系微信啥的")

//创建画布对象
let canvas = $canvas.create(aw,ah);

//绘制表格
let tabs = [
    1,1,aw-2,1,//上边框
    1,1,1,ah-2,//左边框
    1,ah-2,aw-2,ah-2,//下边框
    aw-2,1,aw-2,ah-2,//右边框
    //第1行表格线条高度(横线)
    1,1+th01_h,aw-2,1+th01_h,
    //第1行表格线条高度(竖线)
    70,1,70,1+th01_h,
    150,1,150,1+th01_h,
    270,1,270,1+th01_h,
    500,1,500,1+th01_h,
    570,1,570,1+th01_h,
    //第2行表格线条高度(横线)
    1,1+th01_h+th02_h,aw-2,1+th01_h+th02_h,
    100,1+th01_h,100,1+th01_h+th02_h,
    //第3行表格线条高度(横线)
    1,1+th01_h+th02_h+th03_h,aw-2,1+th01_h+th02_h+th03_h,
    100,1+th01_h+th02_h,100,1+th01_h+th02_h+th03_h,
    //第4行表格线条高度(横线)
    1,1+th01_h+th02_h+th03_h+th04_h,aw-2,1+th01_h+th02_h+th03_h+th04_h,
];
canvas.drawLines(tabs ,$canvas.paint("#000000"));
//绘制文字
let txtPaint = $canvas.paint("#000000");
txtPaint.setTextSize(20);
canvas.drawText("姓名",10,30,txtPaint);
canvas.drawText("身份证号",10+150,30,txtPaint);
canvas.drawText("号码",10+500,30,txtPaint);
canvas.drawText("调查地址",10,30+th01_h,txtPaint);
canvas.drawText("立案事由",10,30+th01_h+(th02_h+th03_h)/2,txtPaint);
let lxPaint = $canvas.paint($color.RED);
lxPaint.setTextSize(26);
canvas.drawText("1小时内联系:132584946(微信同号)偿还欠款可办理撤案",15,45+th01_h+th02_h+th03_h,lxPaint);


//布局显示画布
ui.id("mImg").setImg(canvas.getBitmap());





//示例结束
```

## $canvas-画布-04.画个验证码

```javascript
//AIGame官方示例

//创建画布对象
let size = 20;
let canvas = $canvas.create(100,size+10);

//生成6位验证码
let vcode = random(10)+""+random(10)+random(10)+random(10)+random(10)+random(10);

//创建画笔
let txtPaint = $canvas.paint("#000000");
txtPaint.setTextSize(size);

//绘制文字
canvas.drawText(vcode,0,size,txtPaint);

//布局显示画布
canvas.show();




//示例结束
```
