# ScreenInfo - 屏幕信息

- 更新时间:2026-01-30 19:32:48

> 屏幕信息




### const {int} w;

> 屏幕宽度


### const {int} h;

> 屏幕高度


### const {int} dpi;

> 屏幕密度


### const {float} xdpi;

> 屏幕水平分辨率


### const {float} ydpi;

> 屏幕垂直密度


### const {float} density;

> 屏幕密度因子


### const {float} scaledDensity;

> 屏幕缩放密度


### const {Boolean} isVertical;

> 是否为垂直方向


### const {Boolean} navShow;

> 是否显示导航栏


### const {int} navH;

> 导航栏高度


### const {Boolean} barShow;

> 是否显示状态栏


### const {int} barH;

> 状态栏高度


### getW()

> 获取屏幕宽度

- 返回 : {int} 屏幕宽度


```javascript
let screenInfo = $screen.info();
//获取屏幕宽度
log(screenInfo.getW());
```


### getH()

> 获取屏幕高度

- 返回 : {int} 屏幕高度


```javascript
let screenInfo = $screen.info();
//获取屏幕高度
log(screenInfo.getH());
```


### getDpi()

> 获取屏幕密度

- 返回 : {int} 屏幕密度


```javascript
let screenInfo = $screen.info();
//获取屏幕密度
log(screenInfo.getDpi());
```


### isVertical()

> 是否为垂直方向

- 返回 : {boolean} 是否为垂直方向


```javascript
let screenInfo = $screen.info();
//判断:是否为垂直方向
log(screenInfo.isVertical());
```


### getDensity()

> 获取屏幕密度因子

- 返回 : {float} 屏幕密度因子


```javascript
let screenInfo = $screen.info();
//获取屏幕密度因子
log(screenInfo.getDensity());
```


### isNavShow()

> 是否显示导航栏

- 返回 : {boolean} 是否显示导航栏


```javascript
let screenInfo = $screen.info();
//判断：是否显示导航栏
log(screenInfo.isNavShow());
```


### getNavH()

> 获取导航栏高度

- 返回 : {int} 导航栏高度


```javascript
let screenInfo = $screen.info();
//获取导航栏高度
log(screenInfo.getNavH());
```


### isBarShow()

> 是否显示状态栏

- 返回 : {boolean} 是否显示状态栏


```javascript
let screenInfo = $screen.info();
//判断：是否显示状态栏
log(screenInfo.isBarShow());
```


### getBarH()

> 获取状态栏高度

- 返回 : {int} 状态栏高度


```javascript
let screenInfo = $screen.info();
//获取状态栏高度
log(screenInfo.getBarH());
```


### getXdpi()

> 获取水平密度

- 返回 : {float} 水平密度


```javascript
let screenInfo = $screen.info();
//获取水平密度
log(screenInfo.getXdpi());
```


### getYdpi()

> 获取垂直密度

- 返回 : {float} 垂直密度


```javascript
let screenInfo = $screen.info();
//获取垂直密度
log(screenInfo.getYdpi());
```


### getScaledDensity()

> 获取缩放密度

- 返回 : {float} 缩放密度


```javascript
let screenInfo = $screen.info();
//获取缩放密度
log(screenInfo.getScaledDensity());
```


