# 示例：$alert

> 来源：上传 zip 中 `8` 个原始示例文件自动合并。

## $alert-非阻塞对话框-01.基本使用

```javascript
//官方示例
//$alert比$dialog更适合显示较大的视图

$alert.create()
.title("标题")
.msg("我是信息内容")
.but1("按钮1")
.but2("按钮2")
.but3("按钮3")
.show();


//示例结束
```

## $alert-非阻塞对话框-02.不准自动关闭

```javascript
//官方示例


$alert.create()
.title("禁止自动关闭")
.msg("不允许通过点击外部自动关闭对话框")
.but3("取消")
.cancelable(false) //不允许通过点击外部自动关闭对话框
.show();


//示例结束
```

## $alert-非阻塞对话框-03.单选文本行

```javascript
//官方示例


$alert.create()
.title("单选")
//.msg("我是信息") 注意：使用了items就不能再使用msg设置消息体了
.items(["选项1","选项2","选项3"],(di,which)=> {
    info("选中了:"+which);
})
.but3("取消")
.cancelable(false) //不允许通过点击外部自动关闭对话框
.show();


//示例结束
```

## $alert-非阻塞对话框-04.单选按钮行

```javascript
//官方示例


$alert.create()
.title("单选")
//.msg("我是信息") 注意：使用了oneItems就不能再使用msg设置消息体了
.oneItems(
    ["选项1","选项2","选项3"],
    0 ,//默认单选中第一个
    (di,which)=> {
        info("选中了:"+which);
    })
.but3("取消")
.cancelable(false) //不允许通过点击外部自动关闭对话框
.show();


//示例结束
```

## $alert-非阻塞对话框-05.多选无默认值

```javascript
//官方示例


$alert.create()
.title("单选")
//.msg("我是信息") 注意：使用了moreItems就不能再使用msg设置消息体了
.moreItems(
    ["选项1","选项2","选项3"],
    (di,which)=> {
        info("选中了:"+which);
    })
.but3("取消")
.cancelable(false) //不允许通过点击外部自动关闭对话框
.show();


//示例结束
```

## $alert-非阻塞对话框-06.多选有默认值

```javascript
//官方示例


$alert.create()
.title("单选")
//.msg("我是信息") 注意：使用了moreItems就不能再使用msg设置消息体了
.moreItems(
    ["选项1","选项2","选项3"],
    [true , true , false],//默认多选中第一个和第二个
    (di,which)=> {
        info("选中了:"+which);
    })
.but3("取消")
.cancelable(false) //不允许通过点击外部自动关闭对话框
.show();


//示例结束
```

## $alert-非阻塞对话框-07.设置图标

```javascript
//官方示例


$alert.create()
.title("设置图标")
.icon("logo_ag")
.msg("看看我的图标")
.but3("取消")
.cancelable(false) //不允许通过点击外部自动关闭对话框
.show();


//示例结束
```

## $alert-非阻塞对话框-08.自定义布局

```javascript
//官方示例

let mAlert = $alert.create();

let ui = $ui.layout(`
<ui w="max">
    <button id="mButton1" style="text" text="点我试试" w="max"/>
    <button id="mButton2" text="关闭对话框" style="text" w="max" />
</ui>
`);

ui.id("mButton1").click(()=>{
    info("我被点击了");
});

ui.id("mButton2").click(()=>{
    mAlert.close();//关闭对话框
});

let mView = ui.getView();

mAlert
//不允许通过点击外部自动关闭对话框
//但是要记住一定要自己设置一个可以关闭对话框的方式
.cancelable(false) 
.view(mView) // 设置自定义布局
.show();


//示例结束
```
