# AppFloaty - 应用级悬浮窗

- 更新时间:2026-01-30 19:32:53

> 应用级悬浮窗
> 
> 通过$floaty.newApp(xml|path)创建，该悬浮窗不会覆盖标题栏和导航栏，是一个比较友好的悬浮窗。




### const {WindowManager.LayoutParams} params;

> 悬浮窗参数
> 
> 类型：{android.view.WindowManager.LayoutParams}

- 版本 : 1.3.5


### const {WindowManager} manager;

> 悬浮窗管理器
> 
> 类型：{android.view.WindowManager}

- 版本 : 1.3.5


### onScreenChange(callback)

> 设置屏幕旋转监听

- 参数 : callback {(screenInfo)=>{}} 屏幕旋转时回调
- 版本 : 1.4.3


```javascript
let floaty = $floaty.newApp("./floaty/main.xml");
floaty.onScreenChange((screenInfo)=>{
    //屏幕旋转时回调
    floaty.fill(true);//设置成全屏
});
```


### id(id)

> 获取控件

- 参数 : id {string} 控件id
- 返回 : {XView} 组件
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
        <button id="mButton" text="关闭"/>
    </linear>
</ui>
`);
//获取按钮控件
let mButton = floaty.id("mButton");
//绑定点击事件
mButton.click(()=>{
    //关闭悬浮窗
    floaty.close();
});
```


### fill(fill)

> 是否全屏显示
> 
> 此函数会将悬浮窗的尺寸设置成全屏大小，之后刷新悬浮窗界面
> 
> 当fill(true)的时候悬浮窗将位置设置为(0,0)并且设置宽高为最大后全屏显示；
> 
> 当fill(false)的时候悬浮窗将位置设置为上次位置，并且宽高设置为自适应，之后显示。

- 参数 : fill {boolean} 是否全屏
- 返回 : {SysFloaty} 自己
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//全屏显示
floaty.fill(true);
```


### touch(touchable)

> 设置是否可触摸
> 
> 此函数会配置悬浮窗的参数是否可以触摸，之后刷新悬浮窗界面

- 参数 : touchable {boolean} 是否可触摸
- 返回 : {SysFloaty} 自己
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//设置不可触摸
floaty.touch(false);
```


### setX(x)

> 设置X坐标
> 
> 此函数会设置悬浮窗x坐标参数，之后刷新悬浮窗界面

- 参数 : x {int} X坐标
- 返回 : {SysFloaty} 自己
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//设置X坐标
floaty.setX(100);
```


### setY(y)

> 设置Y坐标
> 
> 此函数会设置悬浮窗y坐标参数，之后刷新悬浮窗界面

- 参数 : y {int} Y坐标
- 返回 : {SysFloaty} 自己
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//设置Y坐标
floaty.setY(100);
```


### setXY(x, y)

> 设置XY坐标
> 
> 此函数会设置悬浮窗xy坐标参数，之后刷新悬浮窗界面

- 参数 : x {int} X坐标
- 参数 : y {int} Y坐标
- 返回 : {SysFloaty} 自己
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//设置XY坐标
floaty.setXY(100, 100);
```


### setW(w)

> 设置宽度
> 
> 此函数会设置悬浮窗宽度参数，之后刷新悬浮窗界面

- 参数 : w {int} 宽度
- 返回 : {SysFloaty} 自己
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//设置宽度
floaty.setW(100);
```


### setH(h)

> 设置高度
> 
> 此函数会设置悬浮窗高度参数，之后刷新悬浮窗界面

- 参数 : h {int} 高度
- 返回 : {SysFloaty} 自己
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//设置高度
floaty.setH(100);
```


### setWH(w, h)

> 设置宽高
> 
> 此函数会设置悬浮窗宽高参数，之后刷新悬浮窗界面

- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 返回 : {SysFloaty} 自己
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//设置宽高
floaty.setWH(100, 100);
```


### check()

> 断言
> 
> 判断悬浮窗是否处于可此操作状态，不可操作的状态情况如下：
> 
> 1.view为空或被移除
> 
> 2.悬浮窗被关闭

- 返回 : {boolean} 是否可操作
- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//断言
if(floaty.check()){
    //可以操作
}else{
    //悬浮窗已经关闭啦，不能操作了
}
```


### close()

> 关闭悬浮窗

- 版本 : 1.3.5


```javascript
//创建悬浮窗对象
let floaty = $floaty.newApp(`
<ui>
    <linear w="max" h="max">
        <!--省略组件-->
    </linear>
</ui>
`);
//关闭悬浮窗
floaty.close();
```


