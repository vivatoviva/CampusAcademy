## String 对象
- **String 对象属性**
1. constructor：对创建该对象的函数的引用
2. length：字符串长度
3. prototype：允许您向对象添加属性和方法
- **String 对象方法**
1. charAt()：返回在指定位置的字符
2. charCodeAt()：返回在指定的位置的字符的 Unicode 编码
3. concat():连接字符串
4. fontcolor()：使用指定的颜色来显示字符串
5. indexOf()：检索字符串
6. lastIndexOf()：从后向前搜索字符串
7. match()：找到一个或多个正则表达式的匹配
8. replace()：替换与正则表达式匹配的子串
9. search()：检索与正则表达式相匹配的值
10. slice()：提取字符串的片断，并在新的字符串中返回被提取的部分
11. split()：把字符串分割为字符串数组
12. sub()/sup()：把字符串显示为下标/上标
13. substr()：从起始索引号提取字符串中指定数目的字符
14. substring()：提取字符串中两个指定的索引号之间的字符
15. toUpperCase():把字符串转换为大写
16. toString():返回字符串
17. valueOf()：返回某个字符串对象的原始值
- **String 对象描述**  
JavaScript 的字符串是不可变的（immutable），String 类定义的方法都不能改变字符串的内容。像 String.toUpperCase() 这样的方法，返回的是全新的字符串，而不是修改原始字符串。

## 隐式转换
1、小技巧：
```
num + '' = string
'numString' - 0 = num
```
2、== 是可隐式转换的比较：
```
null == undefined
string 转 number
boolean 转 number
Object 转 number/string
```
而 === 是全等比较：类型不同，返回false；类型相同，则开始比较：
```
null === null
undefined === undefined
NaN === NaN //false
new Object === new Object //false,对象比较的是引用
```
## 包装对象
当把一个**基本类型**尝试以**对象**的方式去使用时，JS会将此基本类型转换为对应的包装类型对象，相当于使用new String/Number/Boolean()；又当调用完对应属性或设置好相应值后会销毁临时对象
## 类型检测
1. typeof用于检测6大基本类型(S,N,B,O,n,u,F)，但遇到null失效。
2. instanceof用于检测Object的原生对象和自定义对象
```
obj instanceof Object
```
注意：不同的 window 和 iframe 不能使用 instanceof !
3. Object.prototype.toString.apply()适合内置对象和基元类型，但遇到null和undefined失效。
## 运算符
1. 逗号运算符：会依次计算每一个值，结果取最后
```
var a = (1,2,3); //a = 3,结果取最后一个值
```
2. in运算符
3. void运算符：void x //undefined

## 作用域
1. JS没有块级作用域
2. 

## for-in语句
1. 遍历顺序不确定
2. enumerable为false时不会出现
3. for in对象属性时受原型链影响

## with语句  
用于修改当前的作用域,不建议使用
```
with(...){
    ...
}
```

## 异常语句
1. try-catch
2. try-finally
3. try-catch-finally

**执行顺序**：try抛出异常后会寻找最近的catch，然后执行finally，且在内部异常处理之前会先执行内部的finally(最高优先级)；若内部异常已在内部处理，则不会抛到外部处理

## 严格模式
```
'use strict'
```
1. 不能使用with语句
2. 不允许未声明的变量被赋值
3. arguments变为参数的静态副本：arguments[0]与传入的基本类型形参不会绑定，但会与传入的对象绑定(call by sharing)，所以可以改变此对象的属性值
```
!function(a){
    'use strict';
    arguments[0].x = 100;
    console.log(a.x); //100,从1变为100
}({x:1});
```
4. delete参数、函数名，不可配置(configurable=false)的属性报错
5. 不能写八进制数字
6. eval、arguments变为关键字，不能作为变量名、函数名
7. eval具有独立作用域，并在eval返回时丢弃
8. 一般函数调用时this指向null，而不是全局对象
9. 使用apply/call，当传入null或undefined时，this将指向null或undefined，而不是全局对象
10. 试图修改不可写属性(writable=false)，在不可扩展的对象上添加属性时会报TypeError，而不是忽略
11. arguments.callee、arguments.caller被禁用

## 对象
> 对象包含一系列++无序++属性，每个属性都有一个字符串key和对应的value

1. 对象属性可以动态添加或删除
2. 每个函数都有一个prototype对象属性[[proto]]
3. 原型链：1. 一般形式为obj—>.prototype—>Object.prototype(可以用toString方法)—>null 2. 对象会继承原型链中的属性，且此属性无法改动 3. 查找会从对象找到其原型链，而赋值只能在对象中赋值 4.可以用hasOwnProperty()，in，delete，Object.create()此方法的参数为原型链中继承的

## 属性操作
1. 属性读写
```
obj.x||obj['x'];
var yz = obj && obj.y && obj.y.z //小技巧
```
2. 属性删除  
```
delete person.age;
```
获得属性标签：
```
var a = Object.getOwnPropertyDescriptor(Object,'prototypr');
a.configurable; //false
```
特殊：删除全局变量或eval()中的var定义的对象返回为true
3. 属性检测
```
obj.hasOwnProperty('key');
Object.defineProperty(obj,'key',{,});
```
4. 属性枚举
```
obj.propertyIsEnumerable('key');
```
5. get/set方法  
无法再次设置原型链中已有的变量，但可以
```
Object.defineProperty(obj,'x',{writable:true,configurable:true,value:100});
```

## 对象标签
1. proto
2. class
3. extensible
```
Object.isExtensible(obj);
Object.preventExtensions(obj);
Object.seal(obj); //使configurable变为false
Object.isSealed(obj);
Object.freeze(obj); //使writeable和configurable均变为false
Object.isFrozen(obj);
```

## 对象序列化
1. JS对象变为字符串
```
JSON.stringify(obj);
```
注意：若属性值为undefined时，返回时会忽略此属性值；为NaN、Infinity时，返回时此属性值为null
2. 字符串变为JS对象
```
JSON.parse('{"x":1}');
```

## RegExp 对象
1. 直接量语法
```
var pat = /pattern/attributes;
```
2. 创建 RegExp 对象的语法
```
var pat = new RegExp(pattern, attributes);
```
3. **参数attributes**：它是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。ECMAScript 标准化之前，不支持 m 属性。如果 pattern 是正则表达式，而不是字符串，则必须省略该参数。
4. **返回值：**       
      1. 一个新的 RegExp 对象，具有指定的模式和标志。如果参数 pattern 是正则表达式而不是字符串，那么 RegExp() 构造函数将用与指定的 RegExp 相同的模式和标志创建一个新的 RegExp 对象。
      2. 如果不用 new 运算符，而将 RegExp() 作为函数调用，那么它的行为与用 new 运算符调用时一样，只是当 pattern 是正则表达式时，它只返回 pattern，而不再创建一个新的 RegExp 对象。
5. **异常：**
    1. SyntaxError - 如果 pattern 不是合法的正则表达式，或 attributes 含有 "g"、"i" 和 "m" 之外的字符，抛出该异常。
    2. TypeError - 如果 pattern 是 RegExp 对象，但没有省略 attributes 参数，抛出该异常。
6. ![](http://note.youdao.com/favicon.ico)