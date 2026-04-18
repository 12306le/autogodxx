# 绝对布局

- 更新时间:2026-01-30 19:33:12

> 绝对布局-absolute
> 
> 是布局父类的(XLayout)的子类,因此可以使用XLayout的所有方法
> 
> 原生类型:{android.widget.AbsoluteLayout}




## 子控件属性表

被绝对布局包裹的子控件可以使用如下属性：

| 中文名   | 英文名    | 描述                                                         |
|----------|-----------|--------------------------------------------------------------|
| 横轴     | x         | 设置视图在AbsoluteLayout中的横轴（X轴）位置                   |
| 纵轴     | y         | 设置视图在AbsoluteLayout中的纵轴（Y轴）位置                   |
| 解决方向 | resolveDir | 确定视图应遵循的实际布局方向，可选值为“rtl”（右到左）或“ltr”（左到右） |
| 宽       | w         | 设置视图的宽度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |
| 高       | h         | 设置视图的高度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |


