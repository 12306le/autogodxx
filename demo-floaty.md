# 示例：$floaty

> 来源：上传 zip 中 `8` 个原始示例文件自动合并。

## $floaty-悬浮窗-01.可调节悬浮窗-01.简单案例

```javascript
//官方示例

//(1)创建并且显示可调节悬浮窗
let floaty = $floaty.newAdj(`
<ui>
    <linear dir="v" w="max">
        <button text="按钮1" w="max"/>
        <button text="按钮2" w="max"/>
        <button id="closeButton" text="关闭" w="max"/>
    </linear>
</ui>
`);

//(2).绑定按钮点击事件
floaty.id("closeButton").click(()=>{
    floaty.close();
});


//示例结束
```

## $floaty-悬浮窗-02.应用级悬浮窗-01.综合案例

```javascript
//AIGame官方示例

//先把之前创建的悬浮窗全部关掉
$floaty.closeAll();


let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max" bg="#33FF0000" >
        <button id="mButton" text="关闭" ripper="#FFFFFF" />
        <button id="mBut1" text="全屏" ripper="#FFFFFF" />
        <button id="mBut2" text="非全屏" ripper="#FFFFFF" />
        <button id="mBut3" text="取消触摸" ripper="#FFFFFF" />
        <button id="mBut4" text="修改位置" ripper="#FFFFFF" />
    </linear>
</ui>
`);


//监听按钮：点击后关闭这个悬浮窗
floaty.id("mButton").click(()=>{
    floaty.close();
});

//全屏
floaty.id("mBut1").click(()=>{
    floaty.fill(true);
});

//非全屏
floaty.id("mBut2").click(()=>{
    floaty.fill(false);
});

//取消触摸 3秒之后 开启触摸
floaty.id("mBut3").click(()=>{
    floaty.touch(false);
    $thread.run(()=>{
       sleep(3000);
       floaty.touch(true);
       toast("开启触摸啦");
    });
});

//修改位置
floaty.id("mBut4").click(()=>{
    floaty.setXY(300,400);
});



//示例结束
```

## $floaty-悬浮窗-02.应用级悬浮窗-02.拾取坐标

```javascript
//AIGame官方示例

//先把之前创建的悬浮窗全部关掉
$floaty.closeAll();

alert("提示","我将显示一个全屏的悬浮窗，你可以触摸任意位置，我会显示你触摸位置的坐标并且显示一个准心图片，点击关闭后，我会复制这个位置到剪切板上！");

let floaty = $floaty.newApp(`
<ui>
    <linear id="mLinear" w="max" h="max" gravity="center">
        <text id="mText"/>
        <button id="mButton" text="关闭" ripper="#FFFFFF" />
        <img id="mImg" src="ic_record" tint="colorPrimary" />
    </linear>
</ui>
`);

let x = 0;
let y = 0;

floaty.fill(true);
//获取安卓原生控件：监听touch事件 (原生交互案例,仅供学习)
floaty.id("mLinear").getView().setOnTouchListener((view,event)=> {
    x = Math.round(event.getRawX());
    y = Math.round(event.getRawY());
    floaty.id("mText").setText(x+","+y);
    //显示一个准心图标
    let img = floaty.id("mImg");
    img.setX(x-img.getW()/2);
    img.setY(y-img.getH()/2);
    return true;
});



//监听按钮：点击后关闭这个悬浮窗
floaty.id("mButton").click(()=> {
    floaty.close();
    setClip(x+","+y);
    toast("坐标复制完成");
});






//示例结束
```

## $floaty-悬浮窗-02.应用级悬浮窗-03.关闭悬浮窗

```javascript
//AIGame 官方示例


//关闭悬浮窗
$floaty.closeAll();



//示例结束
```

## $floaty-悬浮窗-03.系统级悬浮窗-01.综合案例

```javascript
//AIGame官方示例

//先把之前创建的悬浮窗全部关掉
$floaty.closeAll();


let floaty = $floaty.newSys(`
<ui>
    <linear w="max" h="max" bg="#33FF0000" >
        <button id="mButton" text="关闭" ripper="#FFFFFF" />
        <button id="mBut1" text="全屏" ripper="#FFFFFF" />
        <button id="mBut2" text="非全屏" ripper="#FFFFFF" />
        <button id="mBut3" text="取消触摸" ripper="#FFFFFF" />
        <button id="mBut4" text="修改位置" ripper="#FFFFFF" />
    </linear>
</ui>
`);


//监听按钮：点击后关闭这个悬浮窗
floaty.id("mButton").click(()=>{
    floaty.close();
});

//全屏
floaty.id("mBut1").click(()=>{
    floaty.fill(true);
});

//非全屏
floaty.id("mBut2").click(()=>{
    floaty.fill(false);
});

//取消触摸 3秒之后 开启触摸
floaty.id("mBut3").click(()=>{
    floaty.touch(false);
    $thread.run(()=>{
       sleep(3000);
       floaty.touch(true);
       toast("开启触摸啦");
    });
});

//修改位置
floaty.id("mBut4").click(()=>{
    floaty.setXY(300,400);
});



//示例结束
```

## $floaty-悬浮窗-03.系统级悬浮窗-02.拾取坐标

```javascript
//AIGame官方示例

//先把之前创建的悬浮窗全部关掉
$floaty.closeAll();

alert("提示","我将显示一个全屏的悬浮窗，你可以触摸任意位置，我会显示你触摸位置的坐标并且显示一个准心图片，点击关闭后，我会复制这个位置到剪切板上！");

let floaty = $floaty.newSys(`
<ui>
    <linear id="mLinear" w="max" h="max" gravity="center">
        <text id="mText"/>
        <button id="mButton" text="关闭" ripper="#FFFFFF" />
        <img id="mImg" src="ic_record" tint="colorPrimary" />
    </linear>
</ui>
`);

let x = 0;
let y = 0;

floaty.fill(true);
//获取安卓原生控件：监听touch事件 (原生交互案例,仅供学习)
floaty.id("mLinear").getView().setOnTouchListener((view,event)=> {
    x = Math.round(event.getRawX());
    y = Math.round(event.getRawY());
    floaty.id("mText").setText(x+","+y);
    //显示一个准心图标
    let img = floaty.id("mImg");
    img.setX(x-img.getW()/2);
    img.setY(y-img.getH()/2);
    return true;
});



//监听按钮：点击后关闭这个悬浮窗
floaty.id("mButton").click(()=> {
    floaty.close();
    setClip(x+","+y);
    toast("坐标复制完成");
});






//示例结束
```

## $floaty-悬浮窗-03.系统级悬浮窗-03.关闭悬浮窗

```javascript
//AIGame 官方示例


//关闭悬浮窗
$floaty.closeAll();



//示例结束
```

## $floaty-悬浮窗-04.选择区域

```javascript
//选择区域悬浮窗
$floaty.newSelect((rect)=>{
    log("用户选择范围:",rect);
});
```
