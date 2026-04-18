# 示例：$arc

> 来源：上传 zip 中 `2` 个原始示例文件自动合并。

## $arc-悬浮球菜单-01.各种样式悬浮按钮

```javascript
//AIGame 官方示例

let myName = "悬浮球1号";

if (!$arc.has(myName)) {
    //当前名称如果不存在，那么就开始创建自己的悬浮球

    //创建按钮容器(用来装小按钮)
    let menuBody = $arc.body(myName); //指定菜单名称

    //创建小按钮
    let menu1 = $arc.item("logo").bg("#55FFFFFF"); //指定按钮图标
    let menu2 = $arc.item("ic_color_lens_outline").bg("#FAFDFA");
    let menu3 = $arc.item("ic_play_arrow_outline");
    let menu4 = $arc.item("ic_cloud_upload_outline").bg("#C7DFD9");
    let menu5 = $arc.item("ic_clear_outline").style("outline").iconTint("#FF0000"); //可以这样指定样式[方法1]

    //可以这样指定样式[方法2]
    menu3.radius(15).iconSize(80).iconPadding(0).iconTint("#57965C").bg("#55FFFFFF");
    let play = false;
    menu3.click(()=> {
        if (play) {
            menu3.icon("ic_play_arrow_outline").iconTint("#57965C");
            play = false;
        } else {
            menu3.icon("ic_stop_fill").iconTint("#FF0000");
            play = true;
        }
    });

    //为menu5绑定事件
    menu5.click(()=> {
        //$arc.close(myName); //关闭悬浮窗(指定名称)
        $arc.closeAll(); //或者直接关闭全部的悬浮菜单
    });

    //向容器中添加小按钮
    menuBody
    .add(menu1) //添加小按钮[主按钮]
    .add(menu2) //添加小按钮[关闭]
    .add(menu3) //添加小按钮[运行/停止]
    .add(menu4.iconTint("#F2C55C")) //可以这样指定样式[方法3]
    .add(menu5) //添加小按钮[调色盘]
    .show(); //显示
}else{
    log(myName+"已存在");
}




//示例结束
```

## $arc-悬浮球菜单-02.很简单的悬浮按钮

```javascript
//AIGame 官方示例

let myName = "悬浮球2号";
if (!$arc.has(myName)) {

    //创建按钮容器(用来装小按钮)
    let menuBody = $arc.body(myName); //指定菜单名称

    //创建小按钮
    let menu1 = $arc.item("ic_app").iconTint("#3574F0"); //指定按钮图标
    let menu2 = $arc.item("ic_clear");

    //为按钮2绑定事件
    menu2.click(()=> {
        $arc.close(myName); //关闭悬浮窗(和悬浮菜单名称一致)
        //$arc.closeAll();//或者直接关闭全部的悬浮菜单
    });

    //向容器中添加小按钮
    menuBody
    .add(menu1.bg("#55FFFFFF")) //添加小按钮
    .add(menu2.bg("#55000000").iconTint("#55FF0000").ripper("#550000FF")) //添加小按钮
    .show(); //显示



}

//示例结束
```
