# 小片组

- 更新时间:2026-01-30 19:33:13

> 小片组-chip-group
> 
> 是布局父类的(XLayout)的子类
> 
> 原生类型:{com.google.android.material.chip.ChipGroup}




## 一、常用属性


### check(text)

> 选中指定文本的小片
> 
> 该方法会选中所有文本相同的小片

- 参数 : text {string} 文本


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChipGroup = ui.id("mChipGroup");
//选中指定文本的小片
mChipGroup.check("选项1");
```


### inverse(text)

> 反选指定文本
> 
> 如果文本匹配则选中，否则就取消选中。

- 参数 : text {string} 文本


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChipGroup = ui.id("mChipGroup");
//选中指定文本
mChipGroup.inverse("选项1");
```


### check(index)

> 选中指定下标的小片

- 参数 : index {int} 下标


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChipGroup = ui.id("mChipGroup");
//选中指定下标的小片
mChipGroup.check(0);
```


### childCount()

> 获取子项数量

- 返回 : {int} 子项数量


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChipGroup = ui.id("mChipGroup");
//获取子项数量
let count = mChipGroup.childCount();
```


### getChild(index)

> 获取指定下标下的子项
> 
> 该函数返回的是Chip类型的子项目，而不是本应用封装的XChip类型，对Chip进行操作时需要放在ui线程中操作。

- 参数 : index {int} 下标
- 返回 : {chip} 子项


```javascript
//解析布局,获取ui对象
let ui = $ui.layout("./mUi.xml");
//获取控件
let mChipGroup = ui.id("mChipGroup");
//获取指定下标下的子项
let chip = mChipGroup.getChild(0);
```


