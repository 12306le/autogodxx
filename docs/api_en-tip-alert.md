# $alert - 原生对话框

- 更新时间:2026-01-30 19:32:56

> 矩形对话框
> 
> 目前我们的对话框有三种:$tip($提示)、$dialog($对话框)、$alert($提示框)，这三种有哪些特点？
> 
> - $tip($提示):阻塞式对话框，很适合流程脚本，当对话框关闭后，下面的代码才会接着运行
> - $dialog($对话框):非阻塞式对话框，采用M3的风格，缺点就是由于遵循了M3布局规则导致显示的视图范围有限。
> - $alert($提示框):非阻塞式对话框，采用安卓默认实体风格，弥补$dialog显示视图小的缺点，可以通过maxWH(true)显示较大的视图区域。




### create()

> 创建一个对话框

- 返回 : {alert} 对话框对象
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
```


### title(title)

> 设置对话框标题

- 参数 : title {string} 对话框标题
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置对话框标题
alt.title("标题");
```


### isShowing()

> 检查对话框是否正在显示

- 返回 : {boolean} 对话框是否正在显示
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//是否显示了
log(alt.isShowing());//false
```


### msg(msg)

> 设置对话框消息

- 参数 : msg {string} 对话框消息
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置内容
alt.msg("内容");
```


### cancelable(cancelable)

> 设置对话框是否可以取消

- 参数 : cancelable {boolean} 是否可以取消
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置是否可以取消
alt.cancelable(true);
```


### icon(icon)

> 设置对话框图标

- 参数 : icon {string} 图标资源路径
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置对话框图标
alt.icon("ag_logo");
```


### view(view)

> 设置对话框视图

- 参数 : view {view} 视图
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//解析一个布局
let ui = $ui.layout("main.xml");
let view = ui.getView();//获取视图
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置对话框视图
alt.view(view);
```


### view(view)

> 设置对话框视图

- 参数 : view {xview} 视图
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//解析一个布局
let ui = $ui.layout("main.xml");
let xview = ui.id("myView");//获取XView组件视图
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置对话框视图
alt.view(xview);
```


### maxH(max)

> 设置最高显示

- 参数 : max {boolean} 是否最宽高显示
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置最高显示，对话框的高度会显示到最大
alt.maxH(true);
```


### maxW(max)

> 设置最宽显示

- 参数 : max {boolean} 是否最宽显示
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置最宽显示，对话框的宽度会显示到最大
alt.maxW(true);
```


### maxWH(max)

> 设置最大宽高显示

- 参数 : max {xview} 是否最大宽高显示
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置最宽高显示，对话框的宽高会显示到最大
alt.maxWH(true);
```


### but1(text)

> 设置对话框第一个按钮

- 参数 : text {string} 按钮文本
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置按钮
alt.but1("按钮1");
```


### but1(text, callback)

> 设置对话框第一个按钮
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : text {string} 按钮文本
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置按钮
alt.but1("按钮1",(di,which)=>{
    //点击事件
});
```


### but2(text)

> 设置对话框第二个按钮

- 参数 : text {string} 按钮文本
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置按钮
alt.but2("按钮2");
```


### but2(text, callback)

> 设置对话框第二个按钮
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : text {string} 按钮文本
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置按钮
alt.but2("按钮2",(di,which)=>{
    //点击事件
});
```


### but3(text)

> 设置对话框第三个按钮

- 参数 : text {string} 按钮文本
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置按钮
alt.but3("按钮3");
```


### but3(text, callback)

> 设置对话框第三个按钮
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : text {string} 按钮文本
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置按钮
alt.but3("按钮3",(di,which)=>{
    //点击事件
});
```


### items(items, callback)

> 设置对话框选项
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : items {string[]} 选项数组
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置对话框选项
alt.items(["选项1","选项2","选项3"],(di,which)=>{
    //点击事件
});
```


### oneItems(items, checkedItem, callback)

> 设置对话框单选选项
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : items {string[]} 选项数组
- 参数 : checkedItem {int} 选中的选项位置
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置对话框选项
alt.oneItems(["选项1","选项2","选项3"],0,(di,which)=>{
    //点击事件
});
```


### moreItems(items, callback)

> 设置对话框多选选项
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置 isChecked:{boolean} 是否被选中

- 参数 : items {string[]} 选项数组
- 参数 : callback {(di,which,isChecked)=>{}} 回调函数
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置对话框选项
alt.moreItems(["选项1","选项2","选项3"],(di,which,isChecked)=>{
    //点击事件
});
```


### moreItems(items, checkedItems, callback)

> 设置对话框多选选项
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置 isChecked:{boolean} 是否被选中

- 参数 : items {string[]} 选项数组
- 参数 : checkedItems {boolean[]} 选中的选项数组
- 参数 : callback {(di,which,isChecked)=>{}} 回调函数
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//创建一个对话框(注意对象名称不要和全局函数alert相同)
let alt = $alert.create();
//设置对话框选项
alt.moreItems(["选项1","选项2","选项3"],[false,false,true],(di,which,isChecked)=>{
    //点击事件
});
```


### show()

> 显示对话框

- 返回 : {AlertDialog} 对话框对象
- 版本 : 1.5.1


```javascript
$alert.create()
.title("标题")
.msg("我是信息")
.but3("确定",()=>{
    log("我被点击了");
})
.show();//显示对话框
```


### showBefore(callback)

> 对话框显示前回调
> 
> 需要注意的是:该回调是放在UI线程中执行的

- 参数 : callback {()=>{}} 回调函数 
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
$alert.create()
.title("标题")
.msg("我是信息")
.but3("确定",()=>{
    log("我被点击了");
})
.showBefore(()=>{
    log("准备显示对话框啦");
})
.show();//显示对话框
```


### showAfter(callback)

> 对话框显示后回调
> 
> 需要注意的是:该回调是放在UI线程中执行的

- 参数 : callback {()=>{}} 回调函数 
- 返回 : {alert} 自己
- 版本 : 1.5.1


```javascript
//在自定义view中，如果有界面元素需要刷新，那么就最好在alert显示之后再操作
//例如:
let ui = $ui.layout("ui.xml");//解析一个视图
let mAlert = $alert.create();//创建一个对话框
mAlert.showAfter(()=>{
    //如果自定义视图中存在需要操作的ui元素，可以放到这里操作
    let but = ui.id("mButtonClose");
    mButtonClose.click(()=>{
        mAlert.close();//关闭对话框
    });
}).view(ui.getView()).show();//显示自定义视图
```


### onClose(callback)

> 监听提示框关闭

- 参数 : callback {()=>{}} 提示框关闭后回调
- 版本 : 1.8.0


```javascript
let alt = $alert.create()
.title("标题")
.msg("我是信息")
.but3("关闭",()=>{
    //这里关闭提示框
    alt.close();
})
.onClose(()=>{
    log("对话框被关闭了");
})
.show();//显示提示框
```


### close()

> 关闭对话框

- 版本 : 1.5.1


```javascript
let alt = $alert.create()
.title("标题")
.msg("我是信息")
.but3("关闭",()=>{
    //这里关闭对话框
    alt.close();
})
.show();//显示对话框
```


