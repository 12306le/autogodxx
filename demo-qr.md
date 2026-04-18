# 示例：$qr

> 来源：上传 zip 中 `4` 个原始示例文件自动合并。

## $qr-二维码工具-生成二维码-全部参数

```javascript
//生成二维码
let img = $qr.make("Hello AIGame !", {
    w: 500,//宽度(默认:500)
    h: 500,//高度(默认:500)
    margin: 2,//边距(默认:2)
    foreColor: "#2AACB8",//前景色(默认:#000000)
    bgColor: "#2B2D30",//背景色(默认:#FFFFFF)
});

if (img != null) {
    //显示图片
    img.show(); //或者调用 showImg(img); 全局函数也可也显示图片

    //保存到本地
    img.save("/sdcard/qr.png");
}





//..
```

## $qr-二维码工具-生成二维码

```javascript
//生成二维码
let img = $qr.make("欢迎来到AIGame!");

//显示图片
img.show();//或者调用 showImg(img); 全局函数也可也显示图片

//保存到本地
img.save("/sdcard/qr.png");
```

## $qr-二维码工具-识别二维码

```javascript
//显示图片
showImg("./example/$qr - 二维码工具/imgs/t01.png");
//解析这个二维码内容
let content = $qr.parse("./example/$qr - 二维码工具/imgs/t01.png");
//显示内容
alert("二维码内容",content);
```

## $qr-二维码工具-识别本地

```javascript
let path = "/sdcard/qr.png";
if ($file.exists(path)) {
    //显示图片
    showImg(path);
    //解析这个二维码内容
    let content = $qr.parse(path);
    //显示内容
    alert("二维码内容",content);
}else{
    alert("本地图片","图片不存在:\n"+path);
}
```
