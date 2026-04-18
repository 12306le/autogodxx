# $yolo - 目标检测

- 更新时间:2026-01-30 19:32:57

> 目标检测
> 
> $yolo支持全系列的yolo版本：yoloV5、yoloV6、yoloV7、yoloV8、yoloV9、yoloV10、yoloV11、yoloV12、yoloV13；




### create(version)

> 创建yolo对象
> 
> 当前支持的Yolo版本有：YoloX、YoloV5、YoloV6、YoloV7、YoloV8、YoloV9、YoloV10、YoloV11、YoloV12、YoloV13，
> 当你传入版本号为0，则创建一个YoloX对象；当你传入版本号为5，则创建一个YoloV5对象；为11，则创建一个YoloV11对象，以此类推。
> 
> 每当创建一个yolo对象的时候，我会存储一个键值对[yoloId,yolo对象]，因此你可以在任何脚本中通过这个id拿到对象。

- 参数 : version {int} yolo版本
- 返回 : {YoloObject} yolo对象
- 版本 : 1.8.3


```javascript
//首选创建一个对象
let yolo12 = $yolo.create(12);
//接下来就可以设置一些基础配置了
//使用gpu这个配置必须在初始化之前调用才能生效，其他的配置可以在任何地方调用
yolo12.setUseGpu(true);//是否使用GPU加速
yolo12.setSize(192,64);//注意尺寸必须是32的倍数
yolo12.setProbThreshold(0.5);//设置相似度
```


### has(id)

> 是否有yolo对象

- 参数 : id {string} yoloID
- 返回 : {boolean} 是否有
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
log($yolo.has(yolo.getId()));//true
```


### get(id)

> 获取yolo对象

- 参数 : id {string} yoloID
- 返回 : {YoloObject} yolo对象
- 版本 : 1.8.3


```javascript
//[初始化脚本.js]:
let storage = $storage.create("我的YOLO");
let yolo = $yolo.create(12);
yolo.setSize(192,64);
yolo.setUseGpu(true);
storage.putStr("mYoloId",yolo.getId());//保存yolo对象id
//[其他脚本.js]:
let storage = $storage.create("我的YOLO");
let yolo = $yolo.get(storage.getStr("mYoloId","null"));
yolo.detect(img);//使用yolo对象进行检测
```


### close(id)

> 关闭yolo对象
> 
> 由于java端只是持有了C端的(yolo对象)对象句柄，双端的回收机制无法相互干涉，如果java端回收了对象，并不会回收C端的对象，因此需要手动释放资源。
> 
> 因此在使用yolo的时候，在初始化阶段就先存好一个yolo对象的ID，之后就可以在任何脚本中获取这个对象了。

- 参数 : id {string} yoloID
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
//拿到id
let id = yolo.getId();
//释放(C端)yolo对象
$yolo.close(id);
```


### closeAll()

> 释放所有yolo对象
> 
> 由于java端只是持有了C端的(yolo对象)对象句柄，双端的回收机制无法相互干涉，如果java端回收了对象，并不会回收C端的对象，因此需要手动释放资源。
> 
> 因此在使用yolo的时候，在初始化阶段就先存好一个yolo对象的ID，之后就可以在任何脚本中获取这个对象了。

- 版本 : 1.8.3


```javascript
//释放所有(C端)yolo对象
$yolo.closeAll();
```


