# 滑动布局

- 更新时间:2026-01-30 19:33:12

> 滑动布局-nested
> 
> 是布局父类的(XLayout)的子类,因此可以使用XLayout的所有方法
> 
> 原生类型:{androidx.core.widget.NestedScrollView}




## 子控件属性表

被滑动布局包裹的子控件可以使用如下属性：

| 中文名     | 英文名          | 描述                                                         |
|------------|-----------------|--------------------------------------------------------------|
| 布局方向   | dir             | 设置子视图的排列方向，可选值为“rtl”（右到左）或“ltr”（左到右） |
| 解决方向   | resolveDir      | 确定视图应遵循的实际布局方向，可选值为“rtl”（右到左）或“ltr”（左到右） |
| 宽         | w               | 设置视图的宽度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |
| 高         | h               | 设置视图的高度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |
| 布局重力   | layout_gravity  | 设置视图的布局重力，通过GravityAdd获取对应的重力值             |
| 外边距     | margin          | 设置视图的外边距，可传入单个整数（四边外边距相同）或四个整数（分别对应左、上、右、下外边距），单位为dp |
| 左外边距   | margin_left     | 单独设置视图的左外边距，单位为dp                             |
| 上外边距   | margin_top      | 单独设置视图的上外边距，单位为dp                             |
| 右外边距   | margin_right    | 单独设置视图的右外边距，单位为dp                             |
| 下外边距   | margin_bottom   | 单独设置视图的下外边距，单位为dp                             |


### onScroll(callback)

> 监听滚动

- 参数 : callback 滚动回调 


```javascript
let ui = $ui.layout("./res/main.xml");//解析界面
ui.show();//显示界面
//找到滑动控件
let mNested = ui.id("mNested");
//监听混动事件
mNested.onScroll((x,y,view)=>{
    //处理事情
});
```


