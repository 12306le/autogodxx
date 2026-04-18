# 锚点布局

- 更新时间:2026-01-30 19:33:12

> 锚点布局-coord
> 
> 是布局父类(XLayout)的子类,因此可以使用XLayout的所有方法
> 
> 原生类型:{androidx.coordinatorlayout.widget.CoordinatorLayout}




锚点布局，能够实现的效果让人意想不到，你可以理解为：船舶停靠在某个驿站上，一般用anchor属性指定驿站的名字，用anchorLayout指定要前往的驿站。


![](../img/coord_toolbar_fab.png)


```html
<ui>
    <statusbar />
    <!--
    anchor属性是所有控件都有的属性，但是使用anchorLayout属性必须要被coord锚点布局包才可以
    -->
    <coord h="max" w="max">
        <!--
        anchor="linear" 指的是:给线性布局(linear)取一个驿站名称为'linear'
        -->
        <linear anchor="linear" gravity="center" h="max" margin_bottom="75" w="max">
            <text text="Hello World!" />
        </linear>
        <!--
        anchorLayout="linear" 指的是:锚定到名称为'linear'的布局上
        -->
        <toolbar anchor="toolbar" anchorGravity="center|bottom" anchorLayout="linear"
            fabAnim="slide" fabGravity="center" fabMode="out" fabRadius="25" h="75"
            layout_gravity="bottom" w="max">
            <menu icon="ic_search" text="搜搜" />
            <menu icon="ic_set" text="设置" />
            <menu icon="ic_menu" text="菜单" />
        </toolbar>
        <!--
        这里我让(fab)悬浮按钮锚定到(toolbar)工作条的布局上，同时在(toolbar)工作条的布局上设置悬浮按钮的样式，
        然而(toolbar)工作条能够专门和(fab)悬浮按一起联动，实现凹陷的效果。
        -->
        <fab anchorLayout="toolbar" icon="ic_add" iconTint="txt" radius="27" />
    </coord>
</ui>
```


## 一、常用属性


## 二、子控件属性表

被锚点布局约束的子控件可以使用如下属性：

| 中文名       | 英文名          | 描述                                                         |
|--------------|-----------------|--------------------------------------------------------------|
| 布局方向     | dir             | 设置子视图的排列方向，可选值为“rtl”（右到左）或“ltr”（左到右） |
| 解决方向     | resolveDir      | 确定视图应遵循的实际布局方向，可选值为“rtl”（右到左）或“ltr”（左到右） |
| 行为         | behavior        | 指定视图与其他视图或父布局的交互方式，可选值为“appbar”（应用条，对应AppBarLayout.ScrollingViewBehavior）或“fab”（悬浮按钮，对应ScrollAwareFabBehavior） |
| 参考线       | keyline         | 在CoordinatorLayout中定义参考线，帮助子视图根据参考线定位，单位为dp |
| 锚点视图       | anchorLayout        | 设置锚定的视图，用于让当前视图相对锚定视图进行布局（需为每个视图设置anchor以引用） |
| 锚点重力     | anchorGravity   | 设置当前视图相对于锚点视图的重力方向，通过GravityAdd获取对应的重力值 |
| 避让插入边   | dodgeInsetEdges | 指定视图在遇到系统窗口插入边（如状态栏、导航栏等）时的避让行为，通过GravityAdd获取对应值 |
| 插入边       | insetEdge       | 指定视图哪一侧视为系统窗口插入边的边界，当系统窗口覆盖布局时，视图会调整位置或大小为系统窗口留出空间，通过GravityAdd获取对应值 |
| 宽           | w               | 设置视图的宽度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |
| 高           | h               | 设置视图的高度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |
| 布局重力     | layout_gravity  | 设置视图的布局重力，通过GravityAdd获取对应的重力值             |
| 外边距       | margin          | 设置视图的外边距，可传入单个整数（四边外边距相同）或四个整数（分别对应左、上、右、下外边距），单位为dp |
| 左外边距     | margin_left     | 单独设置视图的左外边距，单位为dp                             |
| 上外边距     | margin_top      | 单独设置视图的上外边距，单位为dp                             |
| 右外边距     | margin_right    | 单独设置视图的右外边距，单位为dp                             |
| 下外边距     | margin_bottom   | 单独设置视图的下外边距，单位为dp                             |


