# UiSelector - UI选择器

- 更新时间:2026-01-30 19:32:50

> UI选择器
> 
> 界面的元素有很多，但不一定都是我们要找的那个节点，因此我们需要一些筛选条件过滤掉这些节点。
> 
> UI选择器主要用来过滤界面元素，并且选中我们想要的元素。所以在使用的时候我们需要两类方法：(1).筛选元素;(2).选中元素;



```javascript
//(1)筛选元素
let selector = $act.selector() // 创建UI选择器
     .text("登录") //筛选文本是"登录"的元素
     .cls("android.widget.Button") //筛选类名为"android.widget.Button"的元素
     .pkg("org.aigame.pro") //筛选包名为"org.aigame.pro"的元素
     .desc("点击登录"); //筛选描述是"点击登录"的元素
//(2)选中节点
let node = selector.findFirst(); // 查找一个节点
//其实上面的代码可以直接写成：
let node = $act.selector()
     .text("登录") //筛选文本是"登录"的元素
     .cls("android.widget.Button") //筛选类名为"android.widget.Button"的元素
     .pkg("org.aigame.pro") //筛选包名为"org.aigame.pro"的元素
     .desc("点击登录") //筛选描述是"点击登录"的元素
     .findFirst(); // 查找一个节点
```




### screen(transCut, vertCut, index)

> 屏幕区域
> 
> 按照屏幕进行切割,在切割的范围中查找元素

- 参数 : transCut {int} 横向切割数
- 参数 : vertCut {int} 纵向切割数
- 参数 : index {int} 第几个区域
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


```javascript
//你可以提前使用下面的方式找到自己想要的范围(查看$screen的文档)
$draw.closeAll();
//将屏幕分割成9份，找到最后一份的范围
let region = $screen.split(3, 3, 8);
//绘制出这个范围
$draw.rect(region);
//用上面这种方式可以快速的定位一个自己想要的范围，而且如果需要找的控件就在范围内，基本上就是全分辨率的。
//如果位置不合适，再调整参数，尽量提高容错，保证自己的脚本支持全分辨率。
//如果位置合适，再把这三个参数传入进来
let nodes = $act.selector()
.screen(3, 3, 8) //我们想要的三个参数
.findAll();
```


### clickable(able)

> 可点击的

- 参数 : able {boolean} 是否可点击
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### visible(able)

> 是否可见

- 参数 : able {boolean} 是否可见
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.6.1


### longClickable(able)

> 可长按的

- 参数 : able {boolean} 是否可长按
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### enabled(able)

> 可用的

- 参数 : able {boolean} 是否可用
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### selected(able)

> 选中的

- 参数 : able {boolean} 是否选中
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### scrollable(able)

> 可滚动的

- 参数 : able {boolean} 是否可滚动
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### checkable(able)

> 可勾选的

- 参数 : able {boolean} 是否可勾选
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### checked(able)

> 勾选的

- 参数 : able {boolean} 是否勾选
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### region(x, y, w, h)

> 范围

- 参数 : x {int} x坐标
- 参数 : y {int} y坐标
- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### regionHas(x, y, w, h)

> 输入的范围包含了控件范围

- 参数 : x {int} x坐标
- 参数 : y {int} y坐标
- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### regionInside(x, y, w, h)

> 输入的范围在控件范围的里面

- 参数 : x {int} x坐标
- 参数 : y {int} y坐标
- 参数 : w {int} 宽度
- 参数 : h {int} 高度
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### multiLine(able)

> 多行的

- 参数 : able {boolean} 是否多行
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### drawOrder(order)

> 绘制顺序

- 参数 : order {int} 绘制顺序
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### desc(desc)

> 描述

- 参数 : desc {String} 描述
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### descNotNull(notNull)

> 描述不能为空
> 
> 如规定描述不能为空，当遇到描述为空的节点时会自动过滤这个节点

- 参数 : notNull {boolean} 是否不能为空
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.7.6


### descHas(desc)

> 描述包含

- 参数 : desc {String} 描述
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### descStart(desc)

> 描述开头

- 参数 : desc {String} 描述
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### descEnd(desc)

> 描述结尾

- 参数 : desc {String} 描述
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### descMatch(regex)

> 描述匹配正则表达式

- 参数 : regex {String} 正则表达式
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.6.8


### windowId(id)

> 窗口id

- 参数 : id {String} id
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### id(id)

> 资源id

- 参数 : id {String} id
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### idNotNull(notNull)

> 资源id不能为空
> 
> 如规定资源id不能为空，当遇到id为空的节点时会自动过滤这个节点

- 参数 : notNull {boolean} 是否不能为空
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.7.6


### idHas(id)

> 资源id包含

- 参数 : id {String} id
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### idStart(id)

> 资源id开头

- 参数 : id {String} id
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### idEnd(id)

> 资源id结尾

- 参数 : id {String} id
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### idMatch(regex)

> 资源id匹配正则表达式

- 参数 : regex {String} 正则表达式
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.6.8


### tip(tip)

> 提示信息

- 参数 : tip {String} tip
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### tipNotNull(notNull)

> 提示信息不能为空
> 
> 如规定提示信息不能为空，当遇到提示信息为空的节点时会自动过滤这个节点

- 参数 : notNull {boolean} 是否不能为空
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.7.6


### tipHas(tip)

> 提示信息包含

- 参数 : tip {String} tip
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### tipStart(tip)

> 提示信息开头

- 参数 : tip {String} tip
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### tipEnd(tip)

> 提示信息结尾

- 参数 : tip {String} tip
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### tipMatch(regex)

> 提示信息匹配正则表达式

- 参数 : regex {String} 正则表达式
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.6.8


### pkg(packageName)

> 包名

- 参数 : packageName {String} 包名
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### pkgNotNull(notNull)

> 包名不能为空
> 
> 如规定包名不能为空，当遇到提包名为空的节点时会自动过滤这个节点

- 参数 : notNull {boolean} 是否不能为空
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.7.6


### pkgHas(packageName)

> 包名包含

- 参数 : packageName {String} 包名
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### pkgStart(packageName)

> 包名开头

- 参数 : packageName {String} 包名
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### pkgEnd(packageName)

> 包名结尾

- 参数 : packageName {String} 包名
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### pkgMatch(regex)

> 包名匹配正则

- 参数 : regex {String} 正则表达式
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.6.8


### cls(className)

> 类名

- 参数 : className {String} 类名
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### clsNotNull(notNull)

> 类名不能为空
> 
> 如规定类名不能为空，当遇到提类名为空的节点时会自动过滤这个节点

- 参数 : notNull {boolean} 是否不能为空
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.7.6


### clsHas(className)

> 类名包含

- 参数 : className {String} 类名
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### clsStart(className)

> 类名开头

- 参数 : className {String} 类名
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### clsEnd(className)

> 类名结尾

- 参数 : className {String} 类名
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### clsMatch(regex)

> 类名匹配正则表达式

- 参数 : regex {String} 正则表达式
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.6.8


### text(text)

> 文本

- 参数 : text {String} 文本
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### textNotNull(notNull)

> 文本不能为空
> 
> 如规定文本不能为空，当遇到文本为空的节点时会自动过滤这个节点

- 参数 : notNull {boolean} 是否不能为空
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.7.6


### textHas(text)

> 文本包含

- 参数 : text {String} 文本
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### textStart(text)

> 文本开头

- 参数 : text {String} 文本
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### textEnd(text)

> 文本结尾

- 参数 : text {String} 文本
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.0.0


### textMatch(regex)

> 文本匹配正则

- 参数 : regex {String} 正则表达式
- 返回 : {UiSelector} 节点选择器
- 版本 : 1.6.8


### or()

> 构建或者过滤器
> 
> 创建新的过滤器，并且与之前的过滤器处于或者的关系，当选择当前界面元素的时候，如果存在多个过滤器，只要有一个过滤器满足条件，即可返回结果节点。

- 返回 : {UiSelector} 节点选择器
- 版本 : 1.7.8


```javascript
//这里我封装好了一个强制停止应用的示例
let killApp = function (APP) {
    //先打开指定app的设置界面
    $app.openAppSetting(APP);
    sleep(1000);
    //找到强制停止的按钮
    let node = $act.selector()
        //这里相当于构建了第1个过滤器
        .cls("android.widget.Button")
        .textMatch("强行停止|结束运行|停止|结束")
        .or() //调用 or 函数的时候，可以继续构建下一个过滤器
        //这里相当于构建了第2个过滤器
        .cls("android.widget.TextView")
        .textMatch("强行停止|结束运行|停止|结束")
        //其实你还可以继续用 or 构建更多的情况
        .waitFirst();
    if (node != null) {
        // 绘制节点位置
        node.draw();
        //点击这个节点
        node.click();
        //找到确定按钮
        let node_ensure = $act.selector()
            .cls("android.widget.Button")
            .text("确定")
            .waitFirst();
        if (node_ensure != null) {
            // 绘制节点位置
            node_ensure.draw();
            // 点击
            node_ensure.click();
            //关闭所有悬浮窗
            $draw.closeAll();
            //回到主程序
            $app.openSelf();
        }
    }
}
//先打开这个软件，让它存在运行的状态才能够出现强制停止
$app.run("抖音");
sleep(5000);
// 强制停止app
killApp("抖音");
```


### findAll()

> 查找全部

- 返回 : {Node[]} 找到的集合
- 版本 : 1.0.0


### find(index)

> 查找指定

- 参数 : index {int} 第几个，如果index在集合的范围内，就返回index对应的控件，否则返回第一个
- 返回 : {Node} 找到的控件
- 版本 : 1.0.0


### findFirst()

> 查找第一个

- 返回 : {Node} 找到的控件
- 版本 : 1.0.0


### findLast()

> 查找最后一个

- 返回 : {Node} 找到的控件
- 版本 : 1.0.0


### waitAll()

> 等待出现任意一个

- 返回 : {Node[]} 找到的控件集合
- 版本 : 1.0.0


### waitAll(failCallback)

> 等待出现任意一个
> 
> 会按照默认的等待次数来等待控件出现，当然你可以通过setWaitDur()和setWaitTime()来配置这些参数

- 返回 : {Node[]} 找到的控件列表
- 版本 : 1.0.0


```javascript
let nodes = $act.selector().text("登录").waitAll();
```


### wait(index, failCallback)

> 等待出现

- 参数 : index {int} 第几个，如果index在集合的范围内，就返回index对应的控件，否则返回第一个
- 参数 : failCallback {()=>{}} 失败回调:连一个控件也没有找到时会回调
- 返回 : {Node} 找到的控件
- 版本 : 1.0.0


### wait(index)

> 等待出现

- 参数 : index {int} 第几个，如果index在集合的范围内，就返回index对应的控件，否则返回第一个
- 返回 : {Node} 找到的控件
- 版本 : 1.0.0


### waitFirst()

> 等待出现第一个

- 返回 : {Node} 找到的控件
- 版本 : 1.0.0


### waitFirst(failCallback)

> 等待出现第一个

- 参数 : failCallback {()=>{}} 失败回调:连一个控件也没有找到时会回调
- 返回 : {Node} 找到的控件
- 版本 : 1.0.0


### waitLast()

> 等待出现最后一个

- 返回 : {Node} 找到的控件
- 版本 : 1.0.0


### waitLast(failCallback)

> 等待出现最后一个

- 参数 : failCallback {()=>{}} 失败回调:连一个控件也没有找到时会回调
- 返回 : {Node} 找到的控件
- 版本 : 1.0.0


### setWaitTime(times)

> 设置等待次数

- 参数 : times {int} 等待次数(默认:120)
- 版本 : 1.0.0


### setWaitDur(times)

> 设置等待延迟
> 
> 每次等待中会有一定的间隔

- 参数 : times {int} 等待延迟(默认:500[毫秒])
- 版本 : 1.0.0


### setMainWindow(yes)

> 设置是否只搜索主窗口
> 
> 默认情况下搜索所有的窗口，不过有时候应对一些复杂的UI可能会出现窗口过多(导致元素过多)导致栈溢出的异常，
> 部分app的创建界面如果构建的很复杂，也会导致节点元素不能被及时找出来，因此这个函数就是设置当前选择器只在主窗口中查找元素。
> 
> 举个比较奇葩的例子：有些软件只有当分析主窗口的时候才能找到节点，但是如果分析全部窗口反而找不到节点了，非常奇葩。

- 参数 : yes {boolean} true:只搜索主窗口，false:搜索所有窗口
- 返回 : 1.7.8


