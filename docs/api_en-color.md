# $color - 颜色操作

- 更新时间:2026-01-30 19:32:51

> 颜色操作
> 
> 在$color中内置了很多常用的颜色，并且也有依据当前app主题动态获取对应颜色值的函数，尤其是在ui开发的过程中使用较多。
> 
> $color主要用来解析颜色，对比颜色，获取亮色暗色，为颜色设置透明度等等功能。




### const {int} BLACK;

> 黑色


### const {int} DGRAY;

> 深灰色


### const {int} GRAY;

> 灰色


### const {int} LGRAY;

> 浅灰色


### const {int} WHITE;

> 白色


### const {int} RED;

> 红色


### const {int} GREEN;

> 绿色


### const {int} BLUE;

> 蓝色


### const {int} YELLOW;

> 黄色


### const {int} CYAN;

> 青色


### const {int} MAGENTA;

> 品红


### const {int} TRANSPARENT;

> 透明


### find(img, color, threshold, region)

> 查找颜色的位置

- 参数 : img {Image} 在指定图片中找色 
- 参数 : color {String} 颜色值 
- 参数 : threshold {int} 阈值 
- 参数 : region {double[]} 范围 
- 返回 : {Point} 找到颜色的位置
- 版本 : 1.0.0


```javascript
//(1)截屏
let img = $screen.getScreen();
//(2)在屏幕上找到颜色
let point = $color.find(img, "#a55978", 5, [300,200,500,500]);
if (point != null) {
    //绘制出颜色的位置
    $draw.cross(point);
    sleep(3000);
}
img.close(); //回收截屏图片
$draw.closeAll(); //关闭绘制
```


### find(img, color, threshold)

> 查找颜色的位置

- 参数 : img {Image} 在指定图片中找色 
- 参数 : color {String} 颜色值 
- 参数 : threshold {int} 阈值 
- 返回 : {Point} 找到颜色的位置
- 版本 : 1.0.0


```javascript
//(1)截屏
let img = $screen.getScreen();
//(2)在屏幕上找到颜色
let point = $color.find(img, "#a55978", 5);
if (point != null) {
    //绘制出颜色的位置
    $draw.cross(point);
    sleep(3000);
}
img.close(); //回收截屏图片
$draw.closeAll(); //关闭绘制
```


### find(img, color)

> 查找颜色的位置

- 参数 : img {Image} 在指定图片中找色 
- 参数 : color {String} 颜色值 
- 返回 : {Point} 找到颜色的位置
- 版本 : 1.0.0


```javascript
//(1)截屏
let img = $screen.getScreen();
//(2)在屏幕上找到颜色
let point = $color.find(img, "#a55978");
if (point != null) {
    //绘制出颜色的位置
    $draw.cross(point);
    sleep(3000);
}
img.close(); //回收截屏图片
$draw.closeAll(); //关闭绘制
```


### findAll(img, color, threshold, region)

> 查找颜色所有的位置

- 参数 : img {Image} 在指定图片中找色 
- 参数 : color {String} 颜色值 
- 参数 : threshold {int} 阈值 
- 参数 : region {double[]} 范围 
- 返回 : {Point[]} 找到颜色的位置
- 版本 : 1.0.0


```javascript
let screenImg = $screen.getScreen();
let result = $color.findAll(screenImg,"#d28384",5,[]);
if(result!=null){
    for(let index of result){
        $draw.dot(index);//绘制位置的点
        $draw.log(index);//屏幕显示位置
        sleep(300);
    }
    //3秒后关闭悬浮绘制
    sleep(5000);
    $draw.closeAll();
}
```


### findAll(img, color, threshold)

> 查找颜色所有的位置

- 参数 : img {} 在指定图片中找色 
- 参数 : color {String} 颜色值 
- 参数 : threshold {int} 阈值 
- 返回 : {Point[]} 找到颜色的位置
- 版本 : 1.0.0


```javascript
let screenImg = $screen.getScreen();
let result = $color.findAll(screenImg,"#d28384",5);
if(result!=null){
    for(let index of result){
        $draw.dot(index);//绘制位置的点
        $draw.log(index);//屏幕显示位置
        sleep(300);
    }
    //3秒后关闭悬浮绘制
    sleep(5000);
    $draw.closeAll();
}
```


### findAll(img, color)

> 查找颜色所有的位置

- 参数 : img {} 在指定图片中找色 
- 参数 : color {String} 颜色值 
- 返回 : {Point[]} 找到颜色的位置
- 版本 : 1.0.0


```javascript
let screenImg = $screen.getScreen();
let result = $color.findAll(screenImg,"#d28384");
if(result!=null){
    for(let index of result){
        $draw.dot(index);//绘制位置的点
        $draw.log(index);//屏幕显示位置
        sleep(300);
    }
    //3秒后关闭悬浮绘制
    sleep(5000);
    $draw.closeAll();
}
```


### similar(c1, c2)

> 计算相似度

- 参数 : c1 {string|int} 颜色1 
- 参数 : c2 {string|int} 颜色2 
- 返回 : {double} 相似度
- 版本 : 1.0.0


```javascript
//计算相似度
let result = $color.similar("#1E1F22","#2B2D30");
log("相似度",result);
```


### similar(c1, c2)

> 计算相似度

- 参数 : c1 {string|int} 颜色1 
- 参数 : c2 {string|int} 颜色2 
- 返回 : {double} 相似度
- 版本 : 1.0.0


```javascript
//计算相似度
let result = $color.similar("#1E1F22","#2B2D30");
log("相似度",result);
```


### similar(c1, c2)

> 计算相似度

- 参数 : c1 {string|int} 颜色1 
- 参数 : c2 {string|int} 颜色2 
- 返回 : {double} 相似度
- 版本 : 1.0.0


```javascript
//计算相似度
let result = $color.similar("#1E1F22","#2B2D30");
log("相似度",result);
```


### similar(c1, c2)

> 计算相似度

- 参数 : c1 {string|int} 颜色1 
- 参数 : c2 {string|int} 颜色2 
- 返回 : {double} 相似度
- 版本 : 1.0.0


```javascript
//计算相似度
let result = $color.similar("#1E1F22","#2B2D30");
log("相似度",result);
```


### toString(color)

> 颜色值转换为8位字符

- 参数 : color {int} 颜色 
- 返回 : {string} 字符串颜色
- 版本 : 1.0.0


```javascript
//转为#00000000
let color = $color.toString(-166780);
```


### str(color)

> 颜色值转6位字符

- 参数 : color {int} 颜色值 
- 返回 : {string} 颜色
- 版本 : 1.0.0


```javascript
//转为#000000
let color = $color.str(-166780);
```


### parse(r, g, b)

> 解析rgb的颜色值

- 参数 : r {int} 红 
- 参数 : g {int} 绿 
- 参数 : b {int} 蓝 
- 返回 : {int} 颜色值
- 版本 : 1.0.0


```javascript
let color = $color.parse(105,78,230);
```


### parse(color)

> 解析颜色值
> 
> 该函数内置了M3风格主题的动态主题颜色，可以通过传入对应的主题字符串来获取对应的颜色值

- 参数 : color {string} 颜色 
- 返回 : {int} 颜色值
- 版本 : 1.0.0


```javascript
//解析颜色值
let colorValue = $color.parse("#1E1F22");
log("颜色值",colorValue);
//除了上面的常规使用方法你也可以用$color动态获取主题颜色
//获取颜色值(返回int类型的颜色值)
let color = $color.parse("white");
let color = $color.parse("black");
let color = $color.parse("null");
let color = $color.parse("none");
let color = $color.parse("green");
let color = $color.parse("red");
let color = $color.parse("blue");
let color = $color.parse("yellow");
//主题颜色值(返回int类型的颜色值)
let color = $color.parse("colorPrimary");//(常用)一般是主题最明显的颜色：蓝色主题一般呈现蓝色
let color = $color.parse("colorSurface");//(常用)一般是背景颜色：亮色主题一般呈现白色，暗色主题一般呈现黑色
let color = $color.parse("colorOnSurface");//(常用)一般是文字颜色：亮色主题一般呈现黑色，暗色主题一般呈现白色
let color = $color.parse("colorOnPrimary");
let color = $color.parse("colorPrimaryContainer");
let color = $color.parse("colorOnPrimaryContainer");
let color = $color.parse("colorSecondary");
let color = $color.parse("colorOnSecondary");
let color = $color.parse("colorSecondaryContainer");
let color = $color.parse("colorOnSecondaryContainer");
let color = $color.parse("colorTertiary");
let color = $color.parse("colorOnTertiary");
let color = $color.parse("colorTertiaryContainer");
let color = $color.parse("colorOnTertiaryContainer");
let color = $color.parse("colorError");
let color = $color.parse("colorErrorContainer");
let color = $color.parse("colorOnErrorContainer");
let color = $color.parse("colorOnBackground");
let color = $color.parse("colorSurfaceVariant");
let color = $color.parse("colorOnSurfaceVariant");
let color = $color.parse("colorOutline");
let color = $color.parse("colorOutlineVariant");
let color = $color.parse("colorPrimaryInverse");
```


### setAlpha(color, alpha)

> 设置颜色的透明度

- 参数 : color {int} 颜色值 
- 参数 : alpha {int} 透明度(0-255)  
- 返回 : {int} 颜色值
- 版本 : 1.4.3


```javascript
//解析颜色值
let colorValue = $color.parse("#1E1F22");
//设置颜色的透明度
let color = $color.setAlpha(colorValue,100);
```


### brighter(color)

> 获取较亮颜色

- 参数 : color {int} 颜色值 
- 返回 : {int} 颜色值
- 版本 : 1.4.3


```javascript
//解析颜色值
let colorValue = $color.parse("#1E1F22");
//获取较亮颜色
let color = $color.brighter(colorValue);
```


### darker(color)

> 获取较暗颜色值

- 参数 : color {int} 颜色值 
- 返回 : {int} 颜色值
- 版本 : 1.4.3


```javascript
//解析颜色值
let colorValue = $color.parse("#1E1F22");
//获取较暗颜色值
let color = $color.darker(colorValue);
```


### rgb(red, green, blue)

> 通过RGB通道获得颜色值

- 参数 : red {int} R通道 
- 参数 : green {int} G通道 
- 参数 : blue {int} B通道 
- 返回 : {int} 颜色值
- 版本 : 1.0.0


```javascript
let color = $color.rgb(105,78,230);
```


### argb(alpha, red, green, blue)

> 通过ARGB通道获得颜色值

- 参数 : alpha {int} A通道 
- 参数 : red {int} R通道 
- 参数 : green {int} G通道 
- 参数 : blue {int} B通道 
- 返回 : {int} 颜色值
- 版本 : 1.0.0


```javascript
let color = $color.argb(255,105,78,230);
```


### a(color)

> 计算[A通道]的值

- 参数 : color {String} 颜色 
- 返回 : {int} 数值
- 版本 : 1.0.0


```javascript
let a = $color.a("#357C94");
```


### r(color)

> 计算[R通道]的值

- 参数 : color {String} 颜色 
- 返回 : {int} 数值
- 版本 : 1.0.0


```javascript
let r = $color.r("#357C94");
```


### g(color)

> 计算[G通道]的值

- 参数 : color {String} 颜色 
- 返回 : {int} 数值
- 版本 : 1.0.0


```javascript
let g = $color.g("#357C94");
```


### b(color)

> 计算[B通道]的值

- 参数 : color {String} 颜色 
- 返回 : {int} 数值
- 版本 : 1.0.0


```javascript
let b = $color.b("#357C94");
```


### equals(c1, c2)

> 比较两个颜色

- 参数 : c1 {string|int} 颜色1 
- 参数 : c2 {string|int} 颜色2 
- 返回 : {boolean} 是否相等
- 版本 : 1.0.0


```javascript
let color = "#1E1F22";
let colorValue =-14803166;
let same = $color.equals(color,colorValue);
if(same){
    toast("颜色相同");
}else{
    toast("颜色不同");
}
```


### equals(c1, c2)

> 比较两个颜色

- 参数 : c1 {string|int} 颜色1 
- 参数 : c2 {string|int} 颜色2 
- 返回 : {boolean} 是否相等
- 版本 : 1.0.0


```javascript
let color = "#1E1F22";
let colorValue =-14803166;
let same = $color.equals(color,colorValue);
if(same){
    toast("颜色相同");
}else{
    toast("颜色不同");
}
```


### equals(c1, c2)

> 比较两个颜色

- 参数 : c1 {string|int} 颜色1 
- 参数 : c2 {string|int} 颜色2 
- 返回 : {boolean} 是否相等
- 版本 : 1.0.0


```javascript
let color = "#1E1F22";
let colorValue =-14803166;
let same = $color.equals(color,colorValue);
if(same){
    toast("颜色相同");
}else{
    toast("颜色不同");
}
```


### equals(c1, c2)

> 比较两个颜色

- 参数 : c1 {string|int} 颜色1 
- 参数 : c2 {string|int} 颜色2 
- 返回 : {boolean} 是否相等
- 版本 : 1.0.0


```javascript
let color = "#1E1F22";
let colorValue =-14803166;
let same = $color.equals(color,colorValue);
if(same){
    toast("颜色相同");
}else{
    toast("颜色不同");
}
```


### isDarkTheme()

> 是否是黑暗主题
> 

- 返回 : {boolean} 是否是深色主题


```javascript
let isDark = $color.isDarkTheme();
if(isDark){
    toast("黑暗主题");
}else{
    toast("亮色主题");
}
```


### isColor(colorStr)

> 判断颜色格式是否正确

- 参数 : colorStr {string} 颜色字符串 
- 返回 : {boolean} 是否是正确的颜色格式
- 版本 : 1.4.3


```javascript
let isColor = $color.isColor("#1E1F22");
if(isColor){
    toast("颜色格式正确");
}else{
    toast("颜色格式错误");
}
```


