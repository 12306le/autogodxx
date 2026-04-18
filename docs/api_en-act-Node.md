# Node - 节点信息

- 更新时间:2026-01-30 19:32:50

> 节点信息
> 
> 该节点信息由本应用进行封装，提供了大量便捷的操作，例如可以直接绘制出节点在屏幕上的位置、可以直接调用点击、滑动、输入文字等操作。



```javascript
//首先创建节点选择器
let selector = $act.selector();
//接下来可以通过selector进行界面ui的选择，不过要先进行条件筛选和过滤，因此可以先调用一些筛选类的方法：
selector = selector
.text("登录") //筛选控件文本必须是"登录"的节点
.cls("android.widget.Button");//筛选控件类必须是"android.widget.Button"的节点
//接下来可以调用一些选择类的方法选择节点
let node = selector.waitLast();//在筛选完毕的列表中选择最后一个节点
//接下来就可以使用{Node}中封装的函数了，例如绘制出节点在屏幕的位置：
if(node!=null){
    node.draw();
}
```




### const {Integer} x;

> x坐标


### const {Integer} y;

> y坐标


### const {Integer} w;

> 宽度


### const {Integer} h;

> 高度


### const {Integer} cx;

> 中心点x坐标


### const {Integer} cy;

> 中心点y坐标


### const {Boolean} clickable;

> 是否可点击


### const {Boolean} longClickable;

> 是否可长按


### const {Boolean} enabled;

> 是否可用


### const {Boolean} selected;

> 是否选中


### const {Boolean} scrollable;

> 是否可滚动


### const {Boolean} checkable;

> 是否可勾选


### const {Boolean} checked;

> 是否勾选


### const {Boolean} visible;

> 是否可见


### const {int[]} region;

> 区域
> 格式为[left, top, width, height]


### const {Boolean} multiLine;

> 是否多行


### const {Integer} drawOrder;

> 绘制顺序


### const {String} desc;

> 描述信息


### const {String} tip;

> 提示信息
> 仅Android 9.0+支持


### const {String} id;

> 资源id


### const {String} pkg;

> 包名


### const {String} cls;

> 类名


### const {String} text;

> 文本


### const {Integer} windowId;

> 窗口id


### const {AccessibilityNodeInfo} node;

> 安卓原生节点信息
> 
> 类名：android.view.accessibility.AccessibilityNodeInfo


### parent()

> 获取父节点

- 返回 : {Node} 父节点
- 版本 : 1.3.6


### childNum()

> 获取子节点数

- 返回 : {int} 子节点数量
- 版本 : 1.4.3


### childs()

> 获取所有子节点

- 返回 : {Node[]} 子节点列表
- 版本 : 1.4.3


### child(index)

> 获取子节点

- 参数 : index {int} 下标
- 返回 : {Node} 子节点
- 版本 : 1.4.3


### getX()

> 获取x坐标

- 返回 : {int} x坐标
- 版本 : 1.3.6


### getY()

> 获取y坐标

- 返回 : {int} y坐标
- 版本 : 1.3.6


### getW()

> 获取宽度

- 返回 : {int} 宽度
- 版本 : 1.3.6


### getH()

> 获取高度

- 返回 : {int} 高度
- 版本 : 1.3.6


### getCx()

> 获取中心点x坐标

- 返回 : {int} 中心点x坐标
- 版本 : 1.3.6


### getCy()

> 获取中心点y坐标

- 返回 : {int} 中心点y坐标
- 版本 : 1.3.6


### getClickable()

> 获取是否可点击

- 返回 : {boolean} 是否可点击
- 版本 : 1.3.6


### getLongClickable()

> 获取是否可长按

- 返回 : {boolean} 是否可长按
- 版本 : 1.3.6


### getEnabled()

> 获取是否可用

- 返回 : {boolean} 是否可用
- 版本 : 1.3.6


### getSelected()

> 获取是否选中

- 返回 : {boolean} 是否选中
- 版本 : 1.3.6


### getScrollable()

> 获取是否可滚动

- 返回 : {boolean} 是否可滚动
- 版本 : 1.3.6


### getCheckable()

> 获取是否可勾选

- 返回 : {boolean} 是否可勾选
- 版本 : 1.3.6


### getChecked()

> 获取是否勾选

- 返回 : {boolean} 是否勾选
- 版本 : 1.3.6


### getRegion()

> 获取区域

- 返回 : {int[]} 区域
- 版本 : 1.3.6


### getMultiLine()

> 获取是否多行

- 返回 : {boolean} 是否多行
- 版本 : 1.3.6


### getDrawOrder()

> 获取绘制顺序

- 返回 : {int} 绘制顺序
- 版本 : 1.3.6


### getTip()

> 获取提示信息

- 返回 : {String} 提示信息
- 版本 : 1.3.6


### getDesc()

> 获取描述信息

- 返回 : {String} 描述信息
- 版本 : 1.3.6


### getId()

> 获取资源id

- 返回 : {String} 资源id
- 版本 : 1.3.6


### getPkg()

> 获取包名

- 返回 : {String} 包名
- 版本 : 1.3.6


### getCls()

> 获取类名

- 返回 : {String} 类名
- 版本 : 1.3.6


### getText()

> 获取文本

- 返回 : {String} 文本
- 版本 : 1.3.6


### getWindowId()

> 获取窗口id

- 返回 : {int} 窗口id
- 版本 : 1.3.6


### getNode()

> 获取安卓原生节点信息
> 
> 获取安卓原本的对象{AccessibilityNodeInfo}之后就可以调用它本身就具有的API了

- 返回 : {AccessibilityNodeInfo} 安卓原生节点信息
- 版本 : 1.3.6


```javascript
//获得安卓原生类
let andNodeInfo = node.getNode();
//调用安卓API:获取子节点个数
let count = andNodeInfo.getChildCount();//参考{AccessibilityNodeInfo}类中的方法
alert("子节点个数",""+count);
```


### click()

> 点击
> 
> 默认不使用坐标手势:click(false)，而是使用节点手势执行点击动作。

- 版本 : 1.3.6


### click(useAct)

> 点击
> 
> 节点执行的手势有时候没有效果，此时可以使用坐标来进行点击:click(true);

- 参数 : useAct {boolean} 是否使用act点击
- 版本 : 1.3.6


### click(px, py)

> 点击
> 
> 偏移点击，会相对于当前节点的坐标进行偏移x或y的距离，可传入正负数。

- 参数 : px {int} x的偏移量
- 参数 : py {int} y的偏移量
- 版本 : 1.3.6


### press()

> 长按
> 
> 默认不使用坐标手势:press(false)，而是使用节点手势执行长按动作。

- 版本 : 1.3.6


### press(dur)

> 长按

- 参数 : dur {int} 长按时间
- 版本 : 1.3.6


### press(px, py)

> 长按

- 参数 : px {int} x的偏移量
- 参数 : py {int} y的偏移量
- 版本 : 1.3.6


### press(px, py, dur)

> 长按

- 参数 : px {int} x的偏移量
- 参数 : py {int} y的偏移量
- 参数 : dur {int} 长按时间
- 版本 : 1.3.6


### press(useAct)

> 长按
> 
> 节点执行的手势有时候没有效果，此时可以使用坐标来进行长按:press(true);

- 参数 : useAct {boolean} 是否使用坐标长按
- 版本 : 1.3.6


### move(dir)

> 滑动

- 参数 : dir {string} 方向:up,down,left,right
- 版本 : 1.3.6


### move(x2, y2, dur)

> 滑动

- 参数 : x2 {int} 目标x坐标
- 参数 : y2 {int} 目标y坐标
- 参数 : dur {int} 滑动时间
- 版本 : 1.3.6


### move(x2, y2, dur, delay)

> 滑动

- 参数 : x2 {int} 目标x坐标
- 参数 : y2 {int} 目标y坐标
- 参数 : dur {int} 滑动时间
- 参数 : delay {int} 滑动延迟
- 版本 : 1.3.6


### move(px, py, x2, y2, dur, delay)

> 滑动

- 参数 : px {int} x的偏移量
- 参数 : py {int} y的偏移量
- 参数 : x2 {int} 目标x坐标
- 参数 : y2 {int} 目标y坐标
- 参数 : dur {int} 滑动时间
- 参数 : delay {int} 滑动延迟
- 版本 : 1.3.6


### draw()

> 全屏绘制节点方框
> 
> 需要悬浮窗权限

- 版本 : 1.3.6


### input(text)

> 输入内容
> 
> 对于使用网页开发的输入框，需要指定本应用的输入法才可以输入文字，此函数可以判断输入法是否可用，如果可用就优先使用输入法输入，否则就用无障碍输入。

- 版本 : 1.3.6


### input(text, useAcc)

> 输入内容
> 
> 对于使用网页开发的输入框，需要指定本应用的输入法才可以输入文字

- 参数 : text {boolean} 是否只用无障碍输入，为true时，只会使用无障碍输入，如果为false则会判断输入法是否可用,可用就用输入法输入，否则就用无障碍输入
- 版本 : 1.3.6


### findFirst(selector)

> 查找子孙节点

- 参数 : selector {uiSelector} 筛选器 
- 返回 : {node} 符合条件的节点


```javascript
let node = $act.selector() //创建选择器
.pkg("com.taobao.idlefish") //为选择器添加过滤条件
.cls("android.view.View") //为选择器添加过滤条件
.desc("看对眼就留言，问问更多细节~") //为选择器添加过滤条件
.waitFirst(); //通过过滤条件找到符合要求的节点
if (node != null) {
    //如果想要查找node的子孙节点，也可以通过选择器来查找
    let mSelector = $act.selector() //创建选择器
    .pkg("com.taobao.idlefish") //为选择器添加过滤条件
    .cls("android.view.Button"); //为选择器添加过滤条件
    //然后把选择器传入进去即可过滤找到node的子孙节点
    let childNode = node.findFirst(mSelector);
    if(childNode!=null){
        log("找到子孙节点了");
        childNode.draw();//绘制位置
    }
}
```


### findLast(selector)

> 查找子孙节点

- 参数 : selector {uiSelector} 筛选器 
- 返回 : {node} 符合条件的节点


### find(selector, index)

> 查找子孙节点
> 
> 指定过滤器以及子孙节点的下标，当下标超过列表范围的时候，会返回列表最后一个node节点

- 参数 : selector {uiSelector} 筛选器 
- 参数 : index {num} 下标
- 返回 : {node} 符合条件的节点


### findAll(selector)

> 查找子孙节点

- 参数 : selector {uiSelector} 筛选器 
- 返回 : {node[]} 符合条件的节点列表


