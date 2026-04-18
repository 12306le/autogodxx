# 示例：全局函数

> 来源：上传 zip 中 `8` 个原始示例文件自动合并。

## 全局函数-01.睡眠

```javascript
//官方示例

//停止1秒钟
sleep(1000);







//示例结束
```

## 全局函数-02.土司

```javascript
//官方示例



toast("我是土司");






//示例结束
```

## 全局函数-03.提示

```javascript
//官方示例



tip("我是提示");






//示例结束
```

## 全局函数-04.提示对话框

```javascript
//官方示例


alert("提示对话框","我很好");



//示例结束
```

## 全局函数-05.显示图片

```javascript
//官方示例

//【方式一】显示图片路径上的图片
showImg("example/全局函数/t01.png");

//【方式二】显示图片对象(Image)
let imgPath = "example/全局函数/t01.png";
let img = $img.read(imgPath);//获取(Image)图片对象
showImg(img);//显示图片对象(Image)



//示例结束
```

## 全局函数-06.剪切板

```javascript
//官方示例


setClip("设置的内容");

if(hasClip()){
    let clip = getClip();
    alert("剪切板内容",clip);
}

//清空剪切板
clearClip();

//示例结束
```

## 全局函数-07.随机函数

```javascript
//官方示例


let num1 = random();//0-1之间的随机数
alert("随机数(0-1)",num1);

let num2 = random(10);//0-10之间的随机数(不包含10)
alert("随机数(0-10)",num2);

let num3 = random(10,30);//0-10之间的随机数
alert("随机数(10-30)",num3);


//示例结束
```

## 全局函数-08.全局土司

```javascript
//官方示例


//本质上是一个悬浮窗提示土司
info("我是土司");


//示例结束
```
