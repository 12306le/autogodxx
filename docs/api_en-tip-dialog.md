# $dialog - M3对话框

- 更新时间:2026-01-30 19:32:57

> M3对话框
> 
> 与$alert($提示框)不同，$dialog($对话框)是一个Material Design 3风格的对话框。




### create()

> 创建一个对话框

- 返回 : {dialog} 对话框对象


```javascript
// 创建一个对话框
let dlg = $dialog.create()
```


### title(title)

> 设置对话框标题

- 参数 : title {string} 对话框标题
- 返回 : {dialog} 自己


```javascript
// 创建一个对话框
let dlg = $dialog.create()
// 设置对话框标题
dlg.title("标题")
```


### isShowing()

> 检查对话框是否正在显示

- 返回 : {boolean} 对话框是否正在显示


```javascript
// 创建一个对话框
let dlg = $dialog.create()
// 设置对话框标题
if(dlg.isShowing()){
    log("对话框正再显示");
}
```


### msg(msg)

> 设置对话框消息

- 参数 : msg {string} 对话框消息
- 返回 : {dialog} 自己


```javascript
// 创建一个对话框
let dlg = $dialog.create()
// 设置对话框消息
dlg.msg("内容");
```


### cancelable(cancelable)

> 设置对话框是否可以取消

- 参数 : cancelable {boolean} 是否可以取消
- 返回 : {dialog} 自己


```javascript
// 创建一个对话框
let dlg = $dialog.create()
// 设置对话框是否可以取消
dlg.cancelable(true);
```


### icon(icon)

> 设置对话框图标

- 参数 : icon {string} 图标资源路径
- 返回 : {dialog} 自己


```javascript
// 创建一个对话框
let dlg = $dialog.create()
// 设置对话框图标
dlg.icon("ag_logo);
```


### view(view)

> 设置对话框视图

- 参数 : view {view} 视图
- 返回 : {dialog} 自己


```javascript
//解析一个布局
let ui = $ui.layout("main.xml");
let view = ui.getView();//获取视图
//创建一个对话框
let dlg = $dialog.create()
//设置对话框视图
dlg.view(view);
```


### view(view)

> 设置对话框视图

- 参数 : view {xview} 视图
- 返回 : {dialog} 自己


```javascript
//解析一个布局
let ui = $ui.layout("main.xml");
let view = ui.id("myView");//获取XView对象
//创建一个对话框
let dlg = $dialog.create()
//设置对话框视图
dlg.view(view);
```


### but1(text)

> 设置对话框第一个按钮

- 参数 : text {string} 按钮文本
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
//设置按钮
dlg.but1("按钮1");
```


### but1(text, callback)

> 设置对话框第一个按钮
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : text {string} 按钮文本
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
//设置按钮
dlg.but1("按钮1",(di,which)=>{
    log("我被点击了");
});
```


### but2(text)

> 设置对话框第二个按钮

- 参数 : text {string} 按钮文本
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
//设置按钮
dlg.but2("按钮2");
```


### but2(text, callback)

> 设置对话框第二个按钮
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : text {string} 按钮文本
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
//设置按钮
dlg.but2("按钮2",(di,which)=>{
    log("我被点击了");
});
```


### but3(text)

> 设置对话框第三个按钮

- 参数 : text {string} 按钮文本
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
//设置按钮
dlg.but3("按钮3");
```


### but3(text, callback)

> 设置对话框第三个按钮
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : text {string} 按钮文本
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
//设置按钮
dlg.but3("按钮3",(di,which)=>{
    log("我被点击了");
});
```


### items(items, callback)

> 设置对话框选项
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : items {string[]} 选项数组
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
.items(["选项1","选项2","选项3"],(di,which)=>{
    log("我被点击了");
})
.show();
```


### oneItems(items, checkedItem, callback)

> 设置对话框单选选项
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置

- 参数 : items {string[]} 选项数组
- 参数 : checkedItem {int} 选中的选项位置
- 参数 : callback {(di,which)=>{}} 回调函数
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
.oneItems(["选项1","选项2","选项3"],0,(di,which)=>{
    log("我被点击了");
})
.show();
```


### moreItems(items, callback)

> 设置对话框多选选项
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置 isChecked:{boolean} 是否被选中

- 参数 : items {string[]} 选项数组
- 参数 : callback {(di,which,isChecked)=>{}} 回调函数
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
.moreItems(["选项1","选项2","选项3"],(di,which)=>{
    log("我被点击了");
})
.show();
```


### moreItems(items, checkedItems, callback)

> 设置对话框多选选项
> 
> 回调参数：di:{DialogInterface} 接收到点击的对话框 which:{int}被点击的按钮位置 isChecked:{boolean} 是否被选中

- 参数 : items {string[]} 选项数组
- 参数 : checkedItems {boolean[]} 选中的选项数组
- 参数 : callback {(di,which,isChecked)=>{}} 回调函数
- 返回 : {dialog} 自己


```javascript
//创建一个对话框
let dlg = $dialog.create()
.moreItems(["选项1","选项2","选项3"],[false,true,false],(di,which,isChecked)=>{
    log("我被点击了");
})
.show();
```


### show()

> 显示对话框

- 返回 : {AlertDialog} 对话框对象


```javascript
//创建一个对话框
let dlg = $dialog.create()
.title("提示")
.msg("我是一个对话框")
.show();//显示对话框
```


### showBefore(callback)

> 对话框显示前回调
> 
> 需要注意的是:该回调是放在UI线程中执行的

- 参数 : callback {()=>{}} 回调函数 
- 返回 : {dialog} 自己
- 版本 : 1.5.0


```javascript
//创建一个对话框
let dlg = $dialog.create()
.title("提示")
.msg("我是一个对话框")
.showBefore(()=>{
    log("对话框显示前回调");
})
.show();//显示对话框
```


### showAfter(callback)

> 对话框显示后回调
> 
> 需要注意的是:该回调是放在UI线程中执行的

- 参数 : callback {()=>{}} 回调函数 
- 返回 : {dialog} 自己
- 版本 : 1.5.0


```javascript
//在自定义view中，如果有界面元素需要刷新，那么就最好在dialog显示之后再操作
//例如:
let ui = $ui.layout("ui.xml");//解析一个视图
let dialog = $dialog.create();//创建一个对话框
dialog.showAfter(()=>{
    //如果自定义视图中存在需要操作的ui元素，可以放到这里操作
    let but = ui.id("mButtonClose");
    mButtonClose.click(()=>{
        dialog.close();//关闭对话框
    });
}).view(ui.getView()).show();//显示自定义视图
```


### onClose(callback)

> 监听对话框关闭

- 参数 : callback {()=>{}} 对话框关闭后回调
- 版本 : 1.8.0


```javascript
let alt = $dialog.create()
.title("标题")
.msg("我是信息")
.but3("关闭",()=>{
    //这里关闭对话框
    alt.close();
})
.onClose(()=>{
    log("对话框被关闭了");
})
.show();//显示对话框
```


### close()

> 关闭对话框


```javascript
//创建一个对话框
let dlg = $dialog.create()
.title("提示")
.msg("我是一个对话框")
.but1("关闭",()=>{
    dlg.close();//关闭对话框
})
.show();//显示对话框
```


