# 输入输出层名称对照表

- 更新时间:2026-01-30 19:32:57

> 输入输出层名称对照表
> 
> 使用任何模型之前，确保param文件的输入层名称和输出层名称一致。




## 输入输出层名称对照表

在onnx转换为ncnn模型文件的时候，如果导出的param文件中输入输出层对应不上，则会出现闪退。为此，我将源码中的输入输出层罗列出来，方便开发者们对照各个版本的输入输出层名称来调整模型转换参数。

| 版本  | input  | output         | 尺寸      |
|-----|--------|----------------|---------|
| V5  | images | output、数字、数字   | 320x320 |
| V6  | images | output         | 640x640 |
| V7  | in0    | out0、out1、out2 | 640x640 |
| V8  | images | output         | 640x640 |
| V9  | images | output0        | 640x640 |
| V10 | in0    | out0、out1、out2 | 640x640 |
| V11 | in0    | out0、out1、out2 | 640x640 |
| V12 | in0    | out0           | 640x640 |
| V13 | in0    | out0           | 640x640 |

YoloV5版本后面输出层的两个"数字"需要看param文件的末尾"Permute"开头的行

例如:

```bash
Permute                  Transpose_590            1 1 780 781 0=1
Convolution              Conv_591                 1 1 741 782 0=255 1=1 5=1 6=130560
Reshape                  Reshape_605              1 1 782 800 0=-1 1=85 2=3
Permute                  Transpose_606            1 1 800 801 0=1
```

两个Permute行的输出层分别是：781、801 (需要你自己找找看，有一定规律，一般在"0=1"这个字段前一个，或者 1 1
800 801 这里的801就是第三个输出层名称)

那么在脚本开发的过程中如何设置yolo的输入输出层的名称呢？仔细观察输入输出层名称对照表，可以发现输入层的名称是固定的，只有一个，而输出层的名称要么是一个，要么就是三个，因此我提供了三个函数用来配置：

```javascript
$yolo.v(5);//指定版本之后才能调用，不然我不知道你要对哪个版本的yolo进行配置
$yolo.input("");//输入层只有一个名称
//输出层
$yolo.output("");//适用于yolo6、8、9(参看对照表)
$yolo.output("", "", "");//适用于yolo5、7、10、11(参看对照表)
//当你指定完输入输出层名称之后再加载模型，模型加载的时候会使用你指定的输入输出层名称
$yolo.init("demo.bin","demo.params","labels.txt");
```

其实将pt或者onnx转为ncnn模型有狠多坑要踩，为了减少一些乱七八糟的坑，我提供了输入输出层名称对照表，方便开发者们配置。


## 默认参数对照表

使用'$yolo.config()'即可配置参数，设计这个函数的主要作用是用来调优的，如果不配置则使用默认配置数据。

```js
//首先指定版本,若不指定版本，默认使用Yolo V8
$yolo.v(5);//指定使用的yolo版本为:Yolo V5
//为Yolo V5设置配置参数
$yolo.config(targetSize, meanVals, normVals, useGpu, probThreshold, nmsThreshold);
```

参数说明：不需要配置的参数填null即可

- targetSize {int} : 期望的输入图像边长（通常为正方形），例如 640 表示 640×640 像素。图像会被缩放至该尺寸后输入网络
- meanVals {float[3]} : 图像通道归一化的均值，格式为[B_mean, G_mean, R_mean] 元素范围:(0-255)
- normVals {float[3]} : 图像通道归一化的标准差，格式为[B_std, G_std, R_std] 元素范围:(0.001-0.1)
- useGpu {boolean} : 是否使用 GPU 加速
- probThreshold {float} : 过滤低置信度预测框的阈值，范围[0,1]
- nmsThreshold {float} : 抑制重叠检测框的阈值，范围[0,1]

但是我在开发yolo系列的时候，发现有些版本对于配置参数的支持也是不一样的，所以我在C/C++中尽可能的完善了所有yolo的配置参数，
不过呢还是存在无法完成的配置参数，具体的配置支持度如下：

打`Y`的表示支持配置此参数,打`N`表示不支持此参数,如果配置了这个参数也不会生效。

| 版本        | targetSize | meanVals     | normVals                          | useGpu | probThreshold | nmsThreshold |
|-----------|------------|--------------|-----------------------------------|--------|---------------|--------------|
| V5        | Y          | Y            | Y                                 | Y      | Y             | Y            |
| V6        | Y          | Y            | Y                                 | Y      | Y             | Y            |
| V7        | Y          | Y            | Y                                 | Y      | Y             | Y            |
| V8        | Y          | Y            | Y                                 | Y      | Y             | Y            |
| V9        | Y          | Y            | Y                                 | Y      | Y             | Y            |
| V10       | Y          | Y            | Y                                 | Y      | Y             | N            |
| V11       | Y          | Y            | Y                                 | Y      | Y             | Y            |
| V12       | Y          | Y            | Y                                 | Y      | Y             | Y            |
| V13       | Y          | Y            | Y                                 | Y      | Y             | Y            |
| VX        | Y          | Y            | Y                                 | Y      | Y             | Y            |
| AIGame默认值 | 640        | [0f, 0f, 0f] | [1 / 255.f, 1 / 255.f, 1 / 255.f] | false  | 0.25          | 0.45         |

总的来说，除了YoloV10不支持NMS阈值配置外，其他版本都支持全部配置。


## 如何查看输出层名称

让我们来学习几个param文件是如何查看输出层名称的吧：

在yolo5的param文件后面几行可以在0=1的地方看到781、801这样的名称作为输出层名称，所以yolo5的坑是最隐蔽的，很多人训练完模型后，高高兴兴的用移动端部署运行模型，结果闪退报错等等。

```bash
Permute                  Transpose_590            1 1 780 781 0=1
Convolution              Conv_591                 1 1 741 782 0=255 1=1 5=1 6=130560
Reshape                  Reshape_605              1 1 782 800 0=-1 1=85 2=3
Permute                  Transpose_606            1 1 800 801 0=1
```

![](../img/407162455999700.png)


在yolo8的param文件中可以找到最后一行看到output这样的输出层名称

```bash
Reshape                  Reshape_287              1 1 405 434 0=-1 1=144
Reshape                  Reshape_288              1 1 420 441 0=-1 1=144
Concat                   Concat_289               3 1 427 434 441 442 0=1
Permute                  Transpose_526            1 1 442 output 0=1
```

![](../img/407224323928300.png)


在yolo11的param文件中：可以看见out0、out1、out2这样的输出层名称

```bash
Permute                  permute_171              1 1 300 301 0=3
Concat                   cat_19                   2 1 291 301 out2 0=2
```

![](../img/407372540692700.png)


