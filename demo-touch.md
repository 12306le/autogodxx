# 示例：$touch

> 来源：上传 zip 中 `3` 个原始示例文件自动合并。

## $touch-触摸驱动-01.点击

```javascript
//官方示例

//第一次执行大概需要4秒，第二次瞬间就能执行触摸操作
if($touch.hasPermit()){
    $touch.init();
}

$touch.click(410,350);



//示例结束
```

## $touch-触摸驱动-02.长按

```javascript
//官方示例

//第一次执行大概需要4秒，第二次瞬间就能执行触摸操作
if($touch.hasPermit()){
    $touch.init();
}

$touch.press(410,350);



//示例结束
```

## $touch-触摸驱动-03.滑动

```javascript
//官方示例

//第一次执行大概需要4秒，第二次瞬间就能执行触摸操作
if($touch.hasPermit()){
    $touch.init();
}

$touch.move(400,0,400,500);



//示例结束
```
