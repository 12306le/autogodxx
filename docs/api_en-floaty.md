# $floaty - 悬浮窗

- 更新时间:2026-01-30 19:32:53

> 悬浮窗




### getPermit()

> 获取悬浮窗权限
> 
> 这个方法是个阻塞方法，如果没有获取到悬浮窗权限，则每隔30秒会请求一次权限，那么后面的代码不会被执行，并且会一直等待悬浮窗权限，直到获取到为止。
> 
> 如果你希望只获取一次悬浮窗权限，可以调用$permit.floaty();来获取权限

- 返回 : {boolean} 是否有权限
- 版本 : 1.0.0


```javascript
//获取悬浮窗权限
let hasPermit = $floaty.getPermit();
if(hasPermit){
    log("获取到悬浮窗权限");
}
```


### hasPermit()

> 是否有悬浮窗权限

- 返回 : {boolean} 是否有悬浮窗权限
- 版本 : 1.0.0


```javascript
//是否有悬浮窗权限
let hasPermit = $floaty.hasPermit();
if(hasPermit){
    log("有悬浮窗权限");
}
```


### newAdj(xmlOrPath)

> 创建可调节悬浮窗

- 参数 : xmlOrPath {xml|path} xml或路径
- 返回 : {AdjustableFloaty} 可调节悬浮窗
- 版本 : 1.4.4


```javascript
//你可以直接引入一个布局文件创建一个可调节悬浮窗
let adjFloaty = $floaty.newAdj("./res/layout/floaty_adj.xml");
//你也可以直接把xml写成字符串传入
let adjFloaty = $floaty.newAdj(`<ui>...</ui>`);
```


### newApp(xmlOrPath)

> 创建应用级悬浮窗

- 参数 : xmlOrPath {xml|path} xml或路径
- 返回 : {AppFloaty} 悬浮窗
- 版本 : 1.4.4


```javascript
//你可以直接引入一个布局文件创建一个应用级悬浮窗
let appFloaty = $floaty.newApp("./res/layout/floaty_app.xml");
//你也可以直接把xml写成字符串传入
let appFloaty = $floaty.newApp(`<ui>...</ui>`);
```


### newApp(xmlOrPath, touchable)

> 创建应用级悬浮窗

- 参数 : xmlOrPath {xml|path} xml或路径
- 参数 : touchable {boolean} 是否可触摸(默认:true)
- 返回 : {AppFloaty} 悬浮窗
- 版本 : 1.8.3


```javascript
//你可以直接引入一个布局文件创建一个应用级悬浮窗
let appFloaty = $floaty.newApp("./res/layout/floaty_app.xml",false);
//你也可以直接把xml写成字符串传入
let appFloaty = $floaty.newApp(`<ui>...</ui>`,false);
```


### newSys(xmlOrPath)

> 创建系统级悬浮窗
> 
> 系统级悬浮窗可以全屏覆盖包括导航栏和状态栏的位置，不过这种悬浮窗容易被第三方应用检测到，部分游戏检测到此类悬浮窗后会自动闪退。

- 参数 : xmlOrPath {xml|path} xml或路径
- 返回 : {SysFloaty} 悬浮窗
- 版本 : 1.4.4


```javascript
//你可以直接引入一个布局文件创建一个系统级悬浮窗
let sysFloaty = $floaty.newSys("./res/layout/floaty_sys.xml");
//你也可以直接把xml写成字符串传入
let sysFloaty = $floaty.newSys(`<ui>...</ui>`);
```


### newSys(xmlOrPath, touchable)

> 创建系统级悬浮窗
> 
> 系统级悬浮窗可以全屏覆盖包括导航栏和状态栏的位置，不过这种悬浮窗容易被第三方应用检测到，部分游戏检测到此类悬浮窗后会自动闪退。

- 参数 : xmlOrPath {xml|path} xml或路径
- 参数 : touchable {boolean} 是否可触摸(默认:true)
- 返回 : {SysFloaty} 悬浮窗
- 版本 : 1.8.3


```javascript
//你可以直接引入一个布局文件创建一个系统级悬浮窗
let sysFloaty = $floaty.newSys("./res/layout/floaty_sys.xml",false);
//你也可以直接把xml写成字符串传入
let sysFloaty = $floaty.newSys(`<ui>...</ui>`,false);
```


### newSelect(callback)

> 创建选择范围悬浮窗
> 
> 该悬浮窗将显示一个范围选择器，你可以调节选框的大小和位置，当悬浮窗关闭的时候，将会回调出选框的位置和范围数据。

- 参数 : callback {SimpleFloatArrCallback} 关闭时回调范围数据
- 返回 : {SelectFloaty} 选择范围悬浮窗
- 版本 : 1.8.3


```javascript
$floaty.newSelect((rect)=>{
    log("用户选择范围:",rect);
});
```


![](./img/floaty_newSelect.png)

### closeAll()

> 关闭所有悬浮窗

- 版本 : 1.0.0


```javascript
$floaty.closeAll();
```


