# 

- 更新时间:2026-01-30 19:32:50

> 适配器
> 
> 用于自定义适配分辨率，并且提供大量帮助适配分辨率的工具，用户需要自定义各种回调函数来实现自定义适配分辨率的功能。
> 
> $adapt是全局唯一的对象，在$act(动作)、$ocr(文字识别)、$ag(图色)、$draw(绘制)等等只要用到坐标和尺寸的地方都内置了$adapt对象，用户只需要控制$adapt即可实现所有对象的分辨率适配。




### setDevDpi(devDpi)

> 设置开发环境的dpi

- 参数 : devDpi {int} 开发环境的dpi


### adtX(adtGetX)


### adtY(adtGetY)


### adtW(adtGetW)


### adtH(adtGetH)


### adtImgScale(adtImgScale)


### enable(enable)


### getPx(devPx)

> 获取像素
> 
> 工具函数：获取当前设备下的像素值，需要你通过适配器提前先设置好开发环境下的屏幕密度(density)，我将会根据当前屏幕密度计算出dp的值，之后再转换为当前设备的像素值。
> 
> 如果开发环境中的屏幕密度和当前环境中的屏幕密度相同，我将直接返回开发环境下的px值。

- 参数 : devPx {int} 开发环境下的px
- 返回 : {int} 当前设备下的px


