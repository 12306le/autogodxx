# Node - 节点信息

- 更新时间:2026-01-30 19:32:49

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




