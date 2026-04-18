# $arc - 悬浮球

- 更新时间:2026-01-30 19:32:51

> 悬浮球
> 
> 轻松的实现悬浮球菜单效果，并且可以定制每个按钮的样式。




![](./img/407372540692722.gif)

### item(iconName)

> 创建悬浮按钮
> 
> 我们必须要先了解两个概念：容器(MenuBody)和悬浮按钮(MenuItem)；
> 
> 容器可以装多个悬浮按钮，并且可以显示出来。
> 
> 而悬浮按钮中每个按钮都有不一样的样式，所以悬浮按钮用来控制自身的样式。

- 参数 : iconName {string} 图标资源名或本地相对路径 
- 返回 : {MenuItem} 悬浮按钮
- 版本 : 1.0.0


```javascript
//创建悬浮小按钮,可以被容器添加进去
let menu1 = $arc.item("logo_ag");//内置图标资源名称或者本地自定义图片相对路径
//之后可以创建容器并且显示，例如：
$arc.body("悬浮球1号").add(menu1).show();
//如果有多个悬浮小按钮：
let menu01 = $arc.item("logo_ag");
let menu02 = $arc.item("ic_color");
$arc.body("悬浮球2号").add(menu01).add(menu02).show();
```


### body(name)

> 创建容器
> 
> 容器主要用来控制显示和关闭的，它可以装入多个悬浮按钮，之后显示出来。
> 
> 需要注意：如果悬浮球菜单已经存在了，那么将无法显示第二个名称相同的悬浮球。

- 参数 : name {string} 名称 
- 返回 : {MenuBody} 容器
- 版本 : 1.0.0


```javascript
//创建悬浮按钮容器,用于存放多个小按钮，并且显示
let mBody01 = $arc.body("悬浮球1号");//指定一个名称，方便后面根据名称关闭
//添加一个按钮并且显示，例如：
mBody01.add($arc.item("logo_ag"));
```


### has(name)

> 判断悬浮球是否存在

- 参数 : name {string} 名称 
- 返回 : {boolean} 是否存在
- 版本 : 1.0.0


```javascript
if($arc.has("悬浮球1号")){
    toast("悬浮球1号存在");
}
```


### close(name)

> 关闭
> 
> 根据容器的名称来关闭容器

- 参数 : name {string} 名称 
- 版本 : 1.0.0


```javascript
$arc.close("悬浮球1号");
```


### closeAll()

> 关闭全部
> 
> 将所有创建的悬浮球都关闭掉

- 版本 : 1.0.0


```javascript
//关闭全部悬浮球(容器)
$arc.closeAll();
```


