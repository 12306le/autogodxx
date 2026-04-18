# 列表

- 更新时间:2026-01-30 19:33:13

> 列表-ls
> 
> 原生类型:{androidx.recyclerview.widget.RecyclerView}




列表控件，算的算是一个比较复杂的控件，但是该组件确是最常用的组件之一，
因为它可以用来展示一个列表，比如一个商品列表、一个用户列表、一个消息列表等等。


![](./img/1036371318861000.png)

![](./img/1036371318861000.png)


```javascript
let ui = $ui.layout("/ui.xml");
ui.show();
//找到列表控件
let ls = ui.id("mLs");
//绑定解析视图的方法(必须优先调用)
ls.bindHolder((itemUi, itemData, position) => {
    itemUi.id("name").setText("姓名:" + itemData.name);
    itemUi.id("age").setText("年龄:" + itemData.age);
    itemUi.id("delBut").click(() => {
        $tip.show("删除", "确定删除:" + itemData.name + "吗？", () => {
            //列表删除指定下标的元素
            ls.del(position);
        });
    });
});
//设置数据
ls.flush([
    {
        name: "张三",
        age: 16
    }, {
        name: "李四",
        age: 18
    }
]);
```


![](./img/1036885281225000.png)

![](./img/1036952604432100.png)

![](./img/1037040261908500.png)

![](./img/1037283848936000.png)

### scrollTop()

> 滚动到顶部


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//滚动到顶部
mLs.scrollTop();
```


### scrollBottom()

> 滚动到底部


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//滚动到底部
mLs.scrollBottom();
```


### scroll(position)

> 滚动到指定位置

- 参数 : position {int} 下标


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//滚动到指定位置
mLs.scroll(10);
```


### bindHolder(holder)

> 数据绑定
> 
> 在ls标签中，我没需要设置layout标签设计每个列表子项的布局，而该函数就是用来解析每个子项的布局的。

- 参数 : holder {(itemHolder, itemData, position)=>{}} 绑定


```javascript
let ui = $ui.layout("main.xml");
let mLs = ui.id("mLs");//获取列表组件
//开始解析每个数据对应的布局
mLs.bindHolder((itemUi,itemData,position)=>{
    //itemUi相当于解析layout节点后返回的ui对象，可以通过这个对象拿到子组件，例如:
    let text = itemUi.id("mText");
    //接下来绑定数据，如果数组每个元素是字符串，则可以直接设置数据
    text.setText(itemData);
});
```


### flush(data)

> 设置并且刷新数据

- 参数 : data {obj[]} 数据


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//设置并且刷新数据
mLs.flush(["数据1","数据2","数据3"]);
```


### flush(data, position)

> 刷新指定位置数据

- 参数 : data {obj} 数据
- 参数 : position {int} 下标


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//刷新指定位置数据
mLs.flush("新数据", 0);
```


### del(position)

> 删除指定位置数据

- 参数 : position {int} 下标


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//删除指定位置数据
mLs.del(0);
```


### add(data)

> 添加一个数据

- 参数 : data {obj} 数据


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//添加一个数据
mLs.add("新数据");
```


### add(data, position)

> 添加一个数据到指定位置

- 参数 : data {obj} 数据
- 参数 : position {int} 下标


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//添加一个数据到指定位置
mLs.add("新数据", 0);
```


### clear()

> 清空列表


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//清空列表
mLs.clear();
```


### getData()

> 获取数据

- 返回 : {obj[]} 数据列表
- 版本 : 1.7.3


```javascript
//解析布局,获得ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mLs = ui.id("mLs");
//获取数据
let data = mLs.getData();
//打印出来
log(data);
```


