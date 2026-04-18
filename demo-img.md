# 示例：$img

> 来源：上传 zip 中 `6` 个原始示例文件自动合并。

## $img-图片处理-二值化

```javascript
//读取要处理的图片
let img = $img.read("example/$img - 图片处理/img/t01.png");
//二值化操作
let resultImg = $img.threshold(img,100);
//显示二值化结果图片
resultImg.show();
```

## $img-图片处理-取出颜色

```javascript
let colorArr = [[107, 28],
[108, 28],
[105, 29],
[106, 29],
[107, 29],
[103, 30],
[104, 30],
[105, 30],
[106, 30],
[102, 31],
[103, 31],
[104, 31],
[105, 31],
[101, 32],
[102, 32],
[103, 32],
[104, 32],
[100, 33],
[101, 33],
[102, 33],
[103, 33],
[100, 34],
[101, 34],
[102, 34],
[100, 35],
[101, 35],
[102, 35],
[99, 36],
[100, 36],
[101, 36],
[99, 37],
[100, 37],
[98, 38],
[99, 38],
[100, 38],
[98, 39],
[99, 39],
[99, 40],
[104, 103],
[144, 120]];

let img = $img.read("example/$img - 图片处理/img/t02.png");

for(let index of colorArr){
    let x = index[0];
    let y = index[1];
    let color = img.pixel(x,y);
    log("坐标:"+x+","+y);
    log("颜色:"+color);
    log("代码:"+$color.str(color),"\n");
}
```

## $img-图片处理-多点找色

```javascript
//读取图片
let img = $img.read("example/$img - 图片处理/img/t02.png");
//在这张图片中执行多点找色
let result = $img.findMultiColors(img,null,"#E9AF6D",5,[
                	-10, 1, "#908E8A", 5,
                	-4, -8, "#908E8A", 5,
                	-18, -4, "#FBFBFB", 5
]);
alert("执行结果",result);
```

## $img-图片处理-颜色信息

```javascript
let color = "#908E8A";
let r = $color.r(color);
let g = $color.g(color);
let b = $color.b(color);
log(r,g,b);
```

## $img-图片处理-颜色值转颜色

```javascript
$tip.input("请输入颜色值",(value)=> {
    $thread.run(()=>{
        alert("颜色代码",$color.str(value * 1));
    });
});
```

## $img-图片处理-颜色转颜色值

```javascript
$tip.input("请输入颜色",(value)=> {
    $thread.run(()=>{
        alert("颜色值",$color.parse(value));
    });
});
```
