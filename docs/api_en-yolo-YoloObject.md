# YoloObject - 目标检测对象

- 更新时间:2026-01-30 19:32:57

> Yolo对象




### init(binPath, paramPath, labelPath)

> 初始化

- 参数 : binPath {string} 模型文件路径
- 参数 : paramPath {string} 参数文件路径
- 参数 : labelPath {string} 标签文件路径
- 返回 : {YoloResult} 结果
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.init("res/yolov5s.bin", "res/yolov5s.param", "res/classes.txt")
```


### init(binPath, paramPath, labels)

> 初始化

- 参数 : binPath {string} 模型文件路径
- 参数 : paramPath {string} 参数文件路径
- 参数 : labels {string[]} 标签
- 返回 : {YoloResult} 结果
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.init("res/yolov5s.bin", "res/yolov5s.param", ["人","鸟","自行车"])
```


### detect()

> 检测屏幕
> 
> 需要截屏权限

- 返回 : {YoloResult} 结果
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.init("res/yolov5s.bin", "res/yolov5s.param", "res/classes.txt");
let res = yolo.detect();
log("检测结果",res);
```


### detect(img)

> 检测图片

- 参数 : img {Image} 图片
- 返回 : {YoloResult} 结果
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.init("res/yolov5s.bin", "res/yolov5s.param", "res/classes.txt");
let img = $img.read("res/t01.png");
let res = yolo.detect(img);
log("检测结果",res);
```


### detect(bitmap)

> 检测位图

- 参数 : bitmap {Bitmap} 位图
- 返回 : {YoloResult} 结果
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.init("res/yolov5s.bin", "res/yolov5s.param", "res/classes.txt");
let img = $img.read("res/t01.png");
let res = yolo.detect(img.getBitmap());
log("检测结果",res);
```


### detect(imgPath)

> 检测路径中的图片

- 参数 : imgPath {string} 图片路径
- 返回 : {YoloResult} 结果
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.init("res/yolov5s.bin", "res/yolov5s.param", "res/classes.txt");
let res = yolo.detect("res/test.jpg");
```


### isInit()

> 是否初始化
> 
> 只有成功加载模型之后才会返回true

- 返回 : {boolean} 是否初始化了
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.init("res/yolov5s.bin", "res/yolov5s.param", "res/classes.txt");
if(yolo.isInit()) {
    log("初始化成功");
}
```


### setDir(dir)

> 设置排序方向
> 
> 排序方向一共有15种，默认是不排序，具体排序顺序请参考：结果排序规则表

- 参数 : dir {int} 排序方向(默认:-1)
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setDir(-1);//如果不需要排序就不排序，以免影响速度
```


### setSize(w, h)

> 设置输入尺寸

- 参数 : w {int} 宽
- 参数 : h {int} 高
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setSize(640,640);
```


### setUseGpu(use)

> 设置是否使用GPU

- 参数 : use {boolean} 是否使用GPU
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setUseGpu(true);
```


### setProbThreshold(pt)

> 设置相似度阈值

- 参数 : pt {float} 相似度阈值
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setProbThreshold(0.5f);
```


### setNmsThreshold(nt)

> 设置抑制阈值

- 参数 : nt {float} 抑制阈值
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setNmsThreshold(0.5f);
```


### setMeanVals(meanVals)

> 设置均值

- 参数 : meanVals {float[]} 均值
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setMeanVals([0.485f, 0.456f, 0.406]);
```


### setNormVals(normVals)

> 设置归一化

- 参数 : normVals {float[]} 归一化
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setNormVals([0.00392157f, 0.00392157f, 0.00392157f]);
```


### setInputName(inputName)

> 设置输入层名称
> 
> 输入层一般只有一个

- 参数 : inputName {string} 输入层名称
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setInputName("images");
```


### setOutputName(outputName1)

> 设置输出层名称
> 
> 有些版本的模型输出层可能有多个，当模型输出层只有一个的时候可以使用这个函数。

- 参数 : outputName1 {string} 输出层名称1
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setOutputName("output1");
```


### setOutputName(outputName1, outputName2, outputName3)

> 设置输出层名称
> 
> 有些版本的模型有多个输出层，但是有些输出层只有一个，即便你设置了三个，也只会生效第一个。

- 参数 : outputName1 {string} 输出层名称1
- 参数 : outputName2 {string} 输出层名称2
- 参数 : outputName3 {string} 输出层名称3
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.setOutputName("output1", "output2", "output3");
```


### getId()

> 获取id

- 返回 : {String} id
- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
log(yolo.getId());
```


### recycle()

> 释放资源
> 
> 释放资源，效果和 'close()' 等价

- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.recycle();
```


### close()

> 关闭
> 
> 释放资源，效果和 'recycle()' 等价

- 版本 : 1.8.3


```javascript
let yolo = $yolo.create(12);
yolo.close();
```


