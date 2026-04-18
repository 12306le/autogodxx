# AdjFloaty - 可调节悬浮窗

- 更新时间:2026-01-30 19:32:53

> 可调节悬浮窗
> 
> 通过$floaty.newAdj(xml|path)创建，天生就是一个可以调节的悬浮窗，支持移动到自己想要移动的位置，调节悬浮窗的大小，关闭悬浮窗等操作。




### const {WindowManager.LayoutParams} params;

> 悬浮窗参数
> 
> 类型：{android.view.WindowManager.LayoutParams}

- 版本 : 1.5.4


### const {WindowManager} manager;

> 悬浮窗管理器
> 
> 类型：{android.view.WindowManager}

- 版本 : 1.5.4


### id(id)

> 选择控件

- 参数 : id {string} 控件id
- 返回 : {XView} 控件


```javascript
let adj = $floaty.newAdj("main.xml");
//找控件
let but = adj.id("button_close");
```


### close()

> 关闭悬浮窗


```javascript
let adj = $floaty.newAdj("main.xml");
//找控件
let but = adj.id("button_close");
//点击按钮后关闭悬浮窗
but.click(()=>{
    adj.close();
});
```


### getW()

> 获得宽度

- 返回 : {int} 宽度


```javascript
let adj = $floaty.newAdj("main.xml");
//获得宽度
let w = adj.getW();
```


### getX()

> 获得x坐标

- 返回 : {int} x坐标


```javascript
let adj = $floaty.newAdj("main.xml");
//获得x坐标
let x = adj.getX();
```


### getY()

> 获得y坐标

- 返回 : {int} y坐标


```javascript
let adj = $floaty.newAdj("main.xml");
//获得y坐标
let y = adj.getY();
```


### getH()

> 获得高度

- 返回 : {int} 高度


```javascript
let adj = $floaty.newAdj("main.xml");
//获得高度
let h = adj.getH();
```


