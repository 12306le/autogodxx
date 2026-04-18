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




