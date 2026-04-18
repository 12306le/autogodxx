# 示例：$ui

> 来源：上传 zip 中 `30` 个原始示例文件自动合并。

## $ui-交互界面-01进阶用法-01.动态添加控件与删除

```javascript
alert("注意","开始运行后,我会在10秒内添加9个卡片,最后1秒删除所有卡片");

//解析一个可以滑动的界面
let mainUi = $ui.layout(`
<ui>
    <statusbar/>
    <nested w="max">
        <linear w="max" id="mLayout" />
    </nested>
</ui>
`);
let mLayout = mainUi.id("mLayout");

$thread.create(()=> {
    for (let i = 0; i < 10; i ++) {
        sleep(1000);
        //由于我们需要动态的添加布局,所以每次都必须使用layout重新解析生成新的布局
        //因为view被添加后,已经归属于父容器了,就不允许添加到其他容器,因此view不能被重复使用(安卓机制)
        //所以需要重新使用layout解析生成新的布局
        let itemUi = $ui.layout(`
            <ui>
                <card w="max" id="mCard" margin="3">
                    <text text="我是卡片" margin="15" />
                </card>
            </ui>
            `);
        let card = itemUi.id("mCard");
        //[核心方法]直接在第三方线程操作view,因为已经封装好了,不需要手动调用ui线程操作view
        mLayout.addView(card);
    }
    //[核心方法]最后移除所有元素
    mLayout.removeAll();
    alert("结束","执行结束了");
    mainUi.finish();
}).start();



mainUi.show();
```

## $ui-交互界面-01.appbar-应用条-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/01.appbar-应用条/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-02.button-按钮-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/02.button-按钮/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-03.button-group-按钮组-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/03.button-group-按钮组/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-04.card-卡片-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/04.card-卡片/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-05.check-多选框-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/05.check-多选框/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-06.chip-小片-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/06.chip-小片/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-06.chip-group-小片组-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/06.chip-group-小片组/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-07.drop-下拉框-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/07.drop-下拉框/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-08.edit-编辑器-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/08.edit-编辑器/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-09.fab-悬浮按钮-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/09.fab-悬浮按钮/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-10.hr-分割线-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/10.hr-分割线/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-11.img-图片-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/11.img-图片/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-12.input-输入框-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/12.input-输入框/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-13.ls-列表-main

```javascript
//解析布局获得ui对象
let ui = $ui.layout("example/$ui - 交互界面/13.ls-列表/ui.xml");
//返回按钮
ui.id("mAppbar").back(()=> {
    ui.finish();
});
//显示界面
ui.show();

//获取列表控件
let ls = ui.id("mLs");
//设置绑定数据(优先调用)
ls.bindHolder((holder,data,position)=> {
    //适配器会不断的创建layout标签中的视图放在holder中
    let tv = holder.id("mText");
    //data就是通过ls.flush传入进来的数组元素
    tv.setText(data);

    //[删除按钮]
    holder.id("delBut").click(()=> {
        $tip.show("删除","确定删除："+data+"吗?",()=> {
            //删除指定下标的元素
            ls.del(position);
        });
    });

    //[修改按钮]
    holder.id("edtBut").click(()=> {
        $tip.input("修改名称",data,(value)=> {
            //修改指定下标的元素
            ls.flush(value,position);
        });
    });
});
//设置一些基础的元素
ls.flush(["张三","李四","王五"]);

//获取按钮(点击就添加一个元素进去)
let i = 0;
ui.id("mAppbar").menu((title)=> {
    if (title == "添加元素") {
        i++;
        //列表添加一个数据
        ls.add("数据"+i);//还有一个函数 ls.add("数据",1); 添加到指定的位置中
        //列表滚动到最底部
        ls.scrollBottom();//还有函数 scrollTop() 滚动到顶部 scroll(index) 滚动到指定位置
    }
});



//..
```

## $ui-交互界面-14.nav-导航栏-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/14.nav-导航栏/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-15.pager-滑动页面-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/15.pager-滑动页面/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}

//滑动页面(pager)与标签(tab)联动
let mPager = ui.id("mPager");
let mTab = ui.id("mTab");
if(mPager!=null&&mTab!=null){
    mPager.bind(mTab);
}

ui.show();
```

## $ui-交互界面-16.progress-进度条-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/16.progress-进度条/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-17.radio-单选按钮-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/17.radio-单选按钮/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-18.radio-group-单选按钮组-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/18.radio-group-单选按钮组/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-19.rail-轨道工具栏-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/19.rail-轨道工具栏/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-20.range-范围条-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/20.range-范围条/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-21.slider-拖拽条-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/21.slider-拖拽条/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-22.statusbar-状态栏-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/22.statusbar-状态栏/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-23.switch-开关-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/23.switch-开关/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-24.text-文本-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/25.toolbar-工具栏/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-25.toolbar-工具栏-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/25.toolbar-工具栏/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-26.webview-网页控件-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/26.webview-网页控件/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-27.log-日志显示控件-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/27.log-日志显示控件/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```

## $ui-交互界面-28.video-视频-main

```javascript
let ui = $ui.layout("example/$ui - 交互界面/28.video-视频/ui.xml");

let mAppbar = ui.id("mAppbar");

if(mAppbar!=null){
    mAppbar.back((view) => {
        ui.finish();
    });
}


ui.show();
```
