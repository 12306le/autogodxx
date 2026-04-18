# 示例：脚本语法

> 来源：上传 zip 中 `27` 个原始示例文件自动合并。

## 脚本语法-01.变量声明

```javascript
// var声明（函数作用域）
var globalVar = "我是全局变量";
function testVar() {
    var funcVar = "我是函数内变量";
    console.log("函数内var变量:", funcVar); // 输出: 函数内var变量: 我是函数内变量
}
testVar();
console.log("全局var变量:", globalVar); // 输出: 全局var变量: 我是全局变量

// let声明（块级作用域）
let blockLet = "块外let变量";
if (true) {
    let blockLet = "块内let变量";
    console.log("块内let变量:", blockLet); // 输出: 块内let变量: 块内let变量
}
console.log("块外let变量:", blockLet); // 输出: 块外let变量: 块外let变量

// const声明（常量）
const PI = 3.14159;
console.log("常量PI:", PI); // 输出: 常量PI: 3.14159
// PI = 3.14; // 报错：常量不能重新赋值
```

## 脚本语法-02.数据类型

```javascript
// 原始类型
console.log("undefined类型:", typeof undefined); // 输出: undefined类型: undefined
console.log("null类型:", typeof null); // 输出: null类型: object（特殊情况）
console.log("布尔类型:", typeof true); // 输出: 布尔类型: boolean
console.log("数字类型:", typeof 123); // 输出: 数字类型: number
console.log("字符串类型:", typeof "hello"); // 输出: 字符串类型: string

// 引用类型
var obj = {name: "测试对象"};
var arr = [1, 2, 3];
var func = function() {};
console.log("对象类型:", typeof obj); // 输出: 对象类型: object
console.log("数组类型:", typeof arr); // 输出: 数组类型: object
console.log("函数类型:", typeof func); // 输出: 函数类型: function
```

## 脚本语法-03.运算符

```javascript
// 算术运算符
var a = 10, b = 3;
console.log("加法:", a + b); // 输出: 加法: 13
console.log("除法:", a / b); // 输出: 除法: 3.3333333333333335
console.log("取余:", a % b); // 输出: 取余: 1

// 比较运算符
console.log("等于(==):", 5 == "5"); // 输出: 等于(==): true
console.log("严格等于(===):", 5 === "5"); // 输出: 严格等于(===): false

// 逻辑运算符
console.log("与运算:", true && false); // 输出: 与运算: false
console.log("或运算:", true || false); // 输出: 或运算: true
```

## 脚本语法-04.条件语句

```javascript
// if-else语句
var score = 85;
if (score >= 90) {
    console.log("优秀");
} else if (score >= 80) {
    console.log("良好"); // 输出: 良好
} else {
    console.log("及格");
}

// switch语句
var day = 3;
switch (day) {
    case 1:
        console.log("星期一");
        break;
    case 2:
        console.log("星期二");
        break;
    case 3:
        console.log("星期三"); // 输出: 星期三
        break;
    default:
        console.log("其他天");
}
```

## 脚本语法-05.循环语句

```javascript
// for循环
console.log("for循环:");
for (var i = 1; i <= 3; i++) {
    console.log("  循环次数:", i); // 依次输出1, 2, 3
}

// for-in循环
var person = {name: "张三", age: 20, gender: "男"};
console.log("for-in循环:");
for (var key in person) {
    console.log("  " + key + ":", person[key]); // 输出所有属性
}

// while循环
console.log("while循环:");
var count = 0;
while (count < 3) {
    console.log("  计数:", count); // 依次输出0, 1, 2
    count++;
}
```

## 脚本语法-06.函数定义

```javascript
// 命名函数
function add(a, b) {
    return a + b;
}
console.log("add(2, 3) =", add(2, 3)); // 输出: add(2, 3) = 5

// 匿名函数
var multiply = function(a, b) {
    return a * b;
};
console.log("multiply(4, 5) =", multiply(4, 5)); // 输出: multiply(4, 5) = 20

// 自执行函数
(function() {
    console.log("自执行函数被调用了"); // 输出: 自执行函数被调用了
})();
```

## 脚本语法-07.对象与属性

```javascript
// 对象字面量
var car = {
    brand: "特斯拉",
    price: 300000,
    run: function() {
        console.log(this.brand + "正在行驶");
    }
};
console.log("汽车品牌:", car.brand); // 输出: 汽车品牌: 特斯拉
console.log("汽车价格:", car["price"]); // 输出: 汽车价格: 300000
car.run(); // 输出: 特斯拉正在行驶


car.showType = function() {
    return typeof this;
};
console.log("car的类型:", car.showType()); // 输出: car的类型: object
```

## 脚本语法-08.数组操作

```javascript
var fruits = ["苹果", "香蕉", "橙子"];
console.log("数组长度:", fruits.length); // 输出: 数组长度: 3

// 添加元素
fruits.push("葡萄");
console.log("添加后数组:", fruits); // 输出: 添加后数组: 苹果,香蕉,橙子,葡萄

// 遍历数组
console.log("数组元素:");
fruits.forEach(function(fruit, index) {
    console.log("  索引" + index + ":", fruit); // 输出所有元素
});

// 数组方法
var numbers = [3, 1, 4, 1, 5];
numbers.sort();
console.log("排序后数组:", numbers); // 输出: 排序后数组: 1,1,3,4,5
```

## 脚本语法-09.字符串方法

```javascript
var str = "Hello, Rhino!";
console.log("字符串长度:", str.length); // 输出: 字符串长度: 12
console.log("子串位置:", str.indexOf("Rhino")); // 输出: 子串位置: 7
console.log("截取子串:", str.substring(0, 5)); // 输出: 截取子串: Hello
console.log("分割字符串:", str.split(",")); // 输出: 分割字符串: Hello, Rhino!
console.log("小写转换:", str.toLowerCase()); // 输出: 小写转换: hello, rhino!
```

## 脚本语法-10.正则表达式

```javascript
var text = "Rhino 1.8.0 is a JavaScript engine";
var pattern = /Rhino/;
console.log("是否匹配:", pattern.test(text)); // 输出: 是否匹配: true

var versionPattern = /\d+\.\d+\.\d+/;
console.log("版本号:", text.match(versionPattern)); // 输出: 版本号: 1.8.0

var globalPattern = /s/g;
console.log("全局匹配:", text.match(globalPattern)); // 输出: 全局匹配: s,s
```

## 脚本语法-11.自定义异常

```javascript
try {
    console.log("尝试执行代码");
    var result = 10 / 0; // 不会抛出异常，但会得到Infinity
    console.log("除法结果:", result); // 输出: 除法结果: Infinity

    // 主动抛出异常
    throw new Error("这是一个自定义错误");
} catch (e) {
    console.log("捕获到异常:", e.message); // 输出: 捕获到异常: 这是一个自定义错误
} finally {
    console.log("无论是否异常，都会执行"); // 输出: 无论是否异常，都会执行
}
```

## 脚本语法-12.JSON支持

```javascript
var user = {name: "李四", age: 30, hobbies: ["读书", "运动"]};
// 对象转JSON
var jsonStr = JSON.stringify(user);
console.log("JSON字符串:", jsonStr); // 输出: {"name":"李四","age":30,"hobbies":["读书","运动"]}

// JSON转对象
var parsedUser = JSON.parse(jsonStr);
console.log("解析后的对象:", parsedUser.name); // 输出: 解析后的对象: 李四
```

## 脚本语法-13.日期与时间

```javascript
var now = new Date();
console.log("当前日期:", now.toLocaleString()); // 输出本地日期时间
console.log("时间戳:", now.getTime()); // 输出毫秒级时间戳
console.log("年份:", now.getFullYear()); // 输出当前年份
console.log("月份:", now.getMonth() + 1); // 输出当前月份（注意月份从0开始）
```

## 脚本语法-14.模块化构造

```javascript
// 模块模式：使用立即执行函数创建独立作用域
var Calculator = (function() {
    // 私有方法
    function validateNumber(n) {
        if (typeof n !== "number" || isNaN(n)) {
            throw new Error("无效的数字: " + n);
        }
    }

    // 私有常量
    var PI = 3.1415926535;

    // 公共接口
    return {
        add: function(a, b) {
            validateNumber(a);
            validateNumber(b);
            return a + b;
        },
        multiply: function(a, b) {
            validateNumber(a);
            validateNumber(b);
            return a * b;
        },
        circleArea: function(radius) {
            validateNumber(radius);
            return PI * radius * radius;
        }
    };
})();

// 测试模块
console.log("加法结果:", Calculator.add(2, 3)); // 输出: 5
console.log("乘法结果:", Calculator.multiply(4, 5)); // 输出: 20
console.log("圆面积(半径2):", Calculator.circleArea(2)); // 输出: 12.566370614

// 尝试访问私有成员（会失败）
console.log("尝试访问私有PI:", Calculator.PI); // 输出: undefined
```

## 脚本语法-15.模拟异步请求

```javascript
// 模拟异步操作
function fetchData(url, callback) {
    console.log("开始请求:", url);

    // 使用Java线程模拟异步延迟
    var thread = new java.lang.Thread(function() {
        try {
            // 模拟网络延迟（1秒）
            java.lang.Thread.sleep(1000);

            // 模拟返回数据
            var data = {
                url: url,
                content: "模拟从" + url + "获取的数据",
                timestamp: new Date().getTime()
            };

            // 执行回调函数
            callback(null, data);
        } catch (e) {
            callback(e, null);
        }
    });

    thread.start();
}

// 串行执行多个异步操作
console.log("开始串行异步操作");
fetchData("https://api.example.com/data1", function(err, data1) {
    if (err) {
        console.log("错误:", err);
        return;
    }
    console.log("收到数据1:", data1.content);

    fetchData("https://api.example.com/data2", function(err, data2) {
        if (err) {
            console.log("错误:", err);
            return;
        }
        console.log("收到数据2:", data2.content);
        console.log("所有异步操作完成");
    });
});

// 等待异步操作完成（Rhino会等待所有线程结束）
java.lang.Thread.sleep(2500);
```

## 脚本语法-16.闭包与高阶函数

```javascript
// 闭包实现计数器工厂
function createCounter(initialValue) {
    var count = initialValue; // 私有变量（闭包保存）

    return {
        increment: function(step) {
            count += (step || 1);
            return count;
        },
        decrement: function(step) {
            count -= (step || 1);
            return count;
        },
        getCount: function() {
            return count;
        },
        reset: function() {
            count = initialValue;
        }
    };
}

// 创建两个独立计数器
var counter1 = createCounter(0);
var counter2 = createCounter(100);

console.log("counter1初始值:", counter1.getCount()); // 输出: 0
console.log("counter1+3:", counter1.increment(3)); // 输出: 3
console.log("counter1-1:", counter1.decrement()); // 输出: 2

console.log("counter2初始值:", counter2.getCount()); // 输出: 100
console.log("counter2+50:", counter2.increment(50)); // 输出: 150

// 高阶函数：函数作为参数
function processNumbers(numbers, processor) {
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        result.push(processor(numbers[i]));
    }
    return result;
}

var numbers = [1, 2, 3, 4];
var squared = processNumbers(numbers, function(n) {
    return n * n;
});
console.log("平方处理结果:", squared); // 输出: [1, 4, 9, 16]

var doubled = processNumbers(numbers, function(n) {
    return n * 2;
});
console.log("加倍处理结果:", doubled); // 输出: [2, 4, 6, 8]
```

## 脚本语法-17.高级正则表达式

```javascript
// 1. 解析URL
var url = "https://www.example.com:8080/path?name=test&age=20#fragment";
var urlPattern = /^(\w+):\/\/([\w.]+):?(\d*)?([^?#]+)?\??([^#]*)?#?(.*)?$/;

var matches = url.match(urlPattern);
if (matches) {
    console.log("URL解析结果:");
    console.log("  协议:", matches[1]); // 输出: https
    console.log("  域名:", matches[2]); // 输出: www.example.com
    console.log("  端口:", matches[3] || "默认"); // 输出: 8080
    console.log("  路径:", matches[4]); // 输出: /path
    console.log("  查询参数:", matches[5]); // 输出: name=test&age=20
    console.log("  锚点:", matches[6]); // 输出: fragment
}

// 2. 复杂替换（驼峰命名转下划线）
function camelToUnderscore(str) {
    return str.replace(/([A-Z])/g, function(match, p1, offset) {
        return (offset > 0 ? "_" : "") + p1.toLowerCase();
    });
}

var testStr = "userName ageInYears isActive";
console.log("驼峰转下划线:", camelToUnderscore(testStr));
// 输出: user_name age_in_years is_active

// 3. 验证邮箱格式
function validateEmail(email) {
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

var emails = ["test@example.com", "invalid-email", "user.name+tag@domain.co"];
emails.forEach(function(email) {
    console.log("邮箱'" + email + "'是否有效:", validateEmail(email));
});
// 输出:
// 邮箱'test@example.com'是否有效: true
// 邮箱'invalid-email'是否有效: false
// 邮箱'user.name+tag@domain.co'是否有效: true
```

## 脚本语法-18.promise

```javascript
function asyncOperation() {
    return new Promise((resolve, reject) => {
        sleep(1000);
        const success = true;
        if (success) {
            resolve('Operation successful');
        } else {
            reject('Operation failed');
        }
    });
}

asyncOperation()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
```

## 脚本语法-19.闭包

```javascript
function outerFunction() {
    var outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

var closure = outerFunction();
closure();
```

## 脚本语法-20.代理

```javascript
var target = {
    name: 'John',
    age: 30
};

var handler = {
    get: function(target, property) {
        console.log(`Getting property ${property}`);
        return target[property];
    },
    set: function(target, property, value) {
        console.log(`Setting property ${property} to ${value}`);
        target[property] = value;
        return true;
    }
};

var proxy = new Proxy(target, handler);
console.log(proxy.name);
proxy.age = 31;
```

## 脚本语法-21.对象操作

```javascript
// 对象操作
var person = {
    name: 'John',
    age: 30
};
console.log(person.name);
person.gender = 'male';
console.log(person);
```

## 脚本语法-22.高阶函数

```javascript
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

var double = multiplyBy(2);
var triple = multiplyBy(3);

console.log(double(5));
console.log(triple(5));
```

## 脚本语法-23.回调函数

```javascript
function fetchData(callback) {
    sleep(1000);
    var data = 'Some data from server';
    callback(data);
}

fetchData(function(result) {
    console.log(result);
});
```

## 脚本语法-24.生成式函数

```javascript
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

var gen = generatorFunction();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
```

## 脚本语法-25.原型链

```javascript
// 构造函数
function Animal(name) {
    this.name = name;
}

// 原型方法
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a noise.');
};

// 子类构造函数
function Dog(name) {
    Animal.call(this, name);
}

// 继承原型
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// 重写方法
Dog.prototype.speak = function() {
    console.log(this.name + ' barks.');
};

var dog = new Dog('Buddy');
dog.speak();
```

## 脚本语法-26.正则表达式

```javascript
// 检查字符串是否包含邮箱格式的文本
const strWithEmail = "Contact me at test@example.com";
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
const hasEmail = emailRegex.test(strWithEmail);
console.log(`字符串是否包含邮箱: ${hasEmail}`);

// 提取字符串里的所有数字
const strWithNumbers = "There are 12 apples and 3 bananas";
const numberRegex = /\d+/g;
const numbers = strWithNumbers.match(numberRegex);
console.log("提取到的数字: "+ numbers);
```

## 脚本语法-27.类型校验

```javascript
// 示例1：基本类型检查
function Animal(name) {
    this.name = name;
}

// 创建Animal实例
var dog = new Animal("小狗");
var cat = new Animal("小猫");
var notAnimal = {name: "不是动物"};

print(dog instanceof Animal);  // 输出 true（dog是Animal的实例）
print(cat instanceof Animal);  // 输出 true（cat是Animal的实例）
print(notAnimal instanceof Animal);  // 输出 false（不是通过Animal构造的）


// 示例2：继承关系中的类型检查
function Mammal(name) {
    Animal.call(this, name);
}
// 实现继承
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

function Bird(name) {
    Animal.call(this, name);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

var lion = new Mammal("狮子");

print(lion instanceof Mammal);  // 输出 true（直接实例）
print(lion instanceof Animal);  // 输出 true（继承自Animal）
print(lion instanceof Bird);    // 输出 false（不属于Bird分支）


// 示例3：原生对象类型检查
var arr = [1, 2, 3];
var date = new Date();
var func = function() {};
var strObj = new String("hello");
var strPrim = "hello";  // 字符串字面量（基本类型）

print(arr instanceof Array);    // 输出 true
print(date instanceof Date);    // 输出 true
print(func instanceof Function); // 输出 true
print(strObj instanceof String); // 输出 true（对象类型）
print(strPrim instanceof String); // 输出 false（基本类型不是实例）


// 示例4：特殊情况处理
var nullVal = null;
var undefVal = undefined;

print(nullVal instanceof Object);  // 输出 false（null不是任何对象的实例）
print(undefVal instanceof Object); // 输出 false（undefined不是任何对象的实例）
```
