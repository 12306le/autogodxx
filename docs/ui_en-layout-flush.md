# 刷新布局

- 更新时间:2026-01-30 19:33:12

> 刷新布局-flush
> 
> 是布局父类的(XLayout)的子类,因此可以使用XLayout的所有方法
> 
> 原生类型:{androidx.swiperefreshlayout.widget.SwipeRefreshLayout}




## 子控件属性表

被下拉刷新布局包含的子控件可以使用如下属性：

| 中文名   | 英文名    | 描述                                                         |
|----------|-----------|--------------------------------------------------------------|
| 解决方向 | resolveDir | 确定视图应遵循的实际布局方向，可选值为“rtl”（右到左）或“ltr”（左到右） |
| 宽       | w         | 设置视图的宽度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |
| 高       | h         | 设置视图的高度，可选值为“auto”（自动，即WRAP_CONTENT）、“max”（最大，即MATCH_PARENT）或具体整数（单位为dp） |


### flush(runnable)

> 设置下拉刷新监听

- 参数 : runnable {()=>{}} 刷新时执行的任务


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUii.xml");
//获取控件
let fl = ui.id("mFlushLayout");
//监听下拉刷新
fl.flush(()=>{
    //处理一些事情...
});
```


