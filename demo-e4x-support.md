# 示例：E4X支持

> 来源：上传 zip 中 `6` 个原始示例文件自动合并。

## E4X支持-E4X-属性注入

```javascript
//属性注入
var empId = "E001";
var status = "active";
var employee2 = <employee id={empId} status={status}>
    <name>{"Employee " + empId}</name>
    <created>{new Date().getFullYear()}</created>
</employee>;
console.log("属性注入: " + employee2.toXMLString());
```

## E4X支持-E4X-异常处理

```javascript
// 错误处理示例
try {
    var riskyValue = null;
    var safeXml = <test>
        <value>{riskyValue !== null ? riskyValue : "default"}</value>
    </test>;
    console.log("安全注入:" + safeXml.toXMLString());
} catch(e) {
    console.log("注入异常:" + e.message);
}
```

## E4X支持-E4X-注入函数

```javascript
// 注入函数调用
function formatSalary(salary) {
    return "$" + salary.toLocaleString();
}

var salary = 75000;
var myEmployee = <employee>
    <name>格式化薪资</name>
    <salary>{formatSalary(salary)}</salary>
    <tax>{Math.round(salary * 0.2)}</tax>
</employee>;

console.log("注入函数: " + myEmployee.toXMLString());
```

## E4X支持-E4X-注入变量

```javascript
// 注入变量
var name = "John";
var age = 30;
var dept = "IT";

// 注入到元素内容中
var employee1 = <employee id="1">
    <name>{name}</name>
    <age>{age}</age>
    <department>{dept.toUpperCase()}</department>
</employee>;

console.log("注入变量: " + employee1.toXMLString());
```

## E4X支持-E4X-计算属性

```javascript
// 计算属性值
var dynamicAttr = "customValue";
var dynamicElement = <element {"attr-" + "name"}={dynamicAttr} custom={true}>
    <content>{dynamicAttr.toUpperCase()}</content>
</element>;

console.log("计算属性: " + dynamicElement.toXMLString());
```

## E4X支持-E4X-UI交互

```javascript
//此示例简单的演示E4X与UI的交互

let getButtonText = function () {
    return "我是按钮";
}

//E4X中调用js函数
let uiXml = <ui>
    <statusbar />
    <linear w="max" h="max" gravity="center">
        <button text={getButtonText()} />
    </linear>
</ui>;

//解析xml并显示
let ui = $ui.layout(uiXml);
ui.show();
```
