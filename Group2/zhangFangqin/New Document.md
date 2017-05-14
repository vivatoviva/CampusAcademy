 img标签/a标签
    l img标签：<img src="图片地址" alt="图片名"/>  图片（单标签）alt属性 是图片名字，找不到图片时，名字会出现。
    l a标签：链接（a标签中放网址）/下载（a标签中放文件/安装包）/锚点（a标签中放id）
 target 链接打开方式
 blank  新窗口
 self   当前窗口（跳转）
 <base target="_blank"/> 定义页面链接默认打开方式。
常见标签
    div,img,a,h1,h2,h3,h4,h5,h6,p,strong{强调（粗体）}，em{强调（斜体）} ，span（区分样式），ul，ol,li,dl,dt,dd
SEO                
l搜索引擎优化；
l部分方法：
a、页面标签语义化；
b、使用对SEO有利的标签：h1/h2/h3/strong/em……
c、提高页面关键词密度；
d、……等等；
选择符
id选择符（#）,群组选择符（，）,class选择符（.）,类型选择符(div……),包含选择符（div p）,V通配符（*）
l 选择符的优先级
基础选择符的优先级
类型（1）  <  class（10）  <  id（100）  < style(行间)（1000）  < js
* { } 0 
li:first-line { }      2 (one element, one pseudo-element ) 
ul ol+li { }           3 (three elements) 
ul ol li.red { }       13 (one class, three elements) 
style="  "             1000 (one inline styling) 
div p { }              2 (two HTML selectors) 
div p.sith { }         12 (two HTML selectors and a class selector) 
body #darkside .sith p { }    112 (HTML selector, id selector, class selector, HTML selector; 1+100+10+1)
选择符使用原则：准确的选中元素，又不影响其他。
a的四个伪类
伪类：伪类用于向被选中元素添加特殊的效果。（元素在特定情况下才具备的。）
link   未访问（默认）
visited  访问过后（点击过后）持续性
hover  鼠标悬停（鼠标划过）
active  链接激活（鼠标按下）
a伪类的应用和兼容
a伪类的应用：
a、四个伪类全用(搜索引擎、新闻门户、小说网站)
b、一般网站只用（ a{}   a:hover{} 
同级样式默认后者覆盖前者
名字的先后顺序和样式优先级先后顺序无关，样式优先级看样式的权重和样式的书写顺序。



标签样式初始化
lcss reset 原则：
但凡是浏览默认的样式，都不要使用。
body,dl,dd,p,h1,h2,h3,h4,h5,h6{margin:0;font-size:12px;}
ol,ul{margin:0;padding:0;list-style:none;}
a{text-decoration:none;}
img{border:none;}
块元素和内嵌元素
l块的特征（p,h,div,ol,ul,li,dl,dt,dd）
1、默认独占一行
2、没有宽度时，默认撑满一排
3、支持所有css命令
l 内嵌(内联、行内)的特征（a,br,em,img,span,strong）
1、同排可以继续跟同类的标签
2、内容撑开宽度
3、不支持宽高
4、不支持上下的margin和padding
5、代码换行被解析(小间隙)
块和内嵌的转换
display：block        显示为块（使内联元素具备块属性标签的特性）
display：inline       显示为内嵌（使行块属性标签具备内联元素的特性）
display：inline-block;
l Inline-block的特点和问题（img）
特性：
 1、块在一行显示；
 2、行内属性标签支持宽高；
 3、没有宽度的时候内容撑开宽度
问题：
 1、代码换行被解析；
 2、ie6 ie7 不支持块属性标签的inline-block
inline-block的应用、cursor
a、分析结构（div 包一排a）
b、a标签支持宽高，并且在一排显示
c、有hover效果
d、当前状态不能点！
cursor 指针样式 （规定要显示的光标的类型）
cursor：pointer | text | move ……
cursor:url(hand.cur),pointer；
(可以使用图片，如果使用不了显示后面的pointer)
前端规范
1、所有书写均在英文半角状态下的小写；
2、id，class必须以字母开头；
3、所有标签必须闭合；
4、html标签用tab键缩进；
5、属性值必须带引号；
6、<!-- html注释 -->
7、/* css注释 */
8、ul,li/ol,li/dl,dt,dd拥有父子级关系的标签；
9、p,dt,h标签 里面不能嵌套块属性标签；
10、a标签不能嵌套a；
11、内联元素不能嵌套块；
float浮动(inline-block的升级）
1、块在一排显示
2、内联支持宽高
3、默认内容撑开宽度
4、脱离文档流
5、提升层级半层（元素可以看成上下两层，下一层是元素本身，上一层是写在元素里文字或者图片，如果两个块大小一样，元素本身挤进去了，而文字或图片会被挤在外面，半层即一半，也就是元素本身）
层级相当于楼房，层级越高，高度越高，下面的会被上面的盖住
6、 换行不被解析
float/文档流
float:left | right | none | inherit;
文档流是文档中可显示对象在排列时所占用的位置。
浮动的定义：使元素脱离文档流（float相当于让元素飘起来，下面的往上面挤） ，按照指定方向发生移动，遇到父级边界或者相邻的浮动元素停了下来。
后面一个元素会尽量向前一个元素顶部对齐，当高度不够上不去，会下到下一行
clear:left | right | both | none | inherit；元素的某个方向上不能有浮动元素，clear：both；在左右两侧均不允许浮动元素

清浮动方法
1.加高（扩展性不好）
2.父级浮动（问题：页面中所有元素都加浮动，margin左右自动失效）
3.inline-block清浮动方法（不脱离文档流）（margin左右自动失效）
3.空标签清浮动，加在浮动元素（IE6最小高度19px；）
5.br清浮动（不符合结构样式行列三者分离的要求）
6.after伪类清浮动
.clear:after{content:";display:block;clear:both;}
.clear{zoom:1;}
after伪类：元素内部末尾添加内容；
：after{content“添加的内容”；}IE6,7不兼容
zoom缩放
a.触发IE下haslayout,使元素根据自身内容计算宽高
b.FF不支持
7.ovflow:scroll|auto|hidden;
overflow:hidden;
IE6双边距bug（IE6下块属性标签浮动，并且有横向margin，横向margin加倍）
IE6下li部分兼容问题
左右两列布局，右边右浮动IE6 IE7下折行（左边元素浮动) IE6 IE7 li下方会产生4px间隙（加vertical-align:top;）
vertival-align/img问题
vertical-align垂直对齐方式
加垂直对齐方式的同排元素都要加垂直对齐方式；
垂直对齐方式可以解决元素下方间隙问题
图片下方间隙问题
display：block;（改变标签本身属性）
overflow：hidden;（必须知道图片高度）
vertical-align
relative相对定位/定位偏移量
1.position:relative;
a.不影响元素本身的特性；（不会使内联变成块也不会使块变成内联）
b.不会使元素脱离文档流；
c.如果没有定位偏移量，对元素本身没有任何影响；
2.定位元素位置控制
top/right/bottom/left 定位元素偏移量。
absolute绝对定位/定位层级
1.position:absolute;
a.元素完全脱离文档流；
b.使内嵌支持宽高；
c.块属性标签内容撑开宽度；
d.如果有定义父级相对于定位父级（有position）发生偏移，没有定位父级相对于整个文档发生偏移；
e.相对定位一般都是配合绝对定位元素使用；
2.z-index:[number];定位层级
a.定位元素默认后者层级高于前者；
b.  a.link{}(a标签具有link的属性)和.parent a{}权重一样，默认后者高于前者
遮罩滤镜/固定定位
1.遮罩弹窗
标准浏览器 不透明度：opacity：0~1；
IE滤镜：filter：alpha（opacity=0~100）；
2.position:fixed;固定定位
与绝对定位的特性基本一致，差别是始终相对于整个文档进行定位；
问题：IE6不支持固定定位；
定位其他值
position：static；默认值
position：inherit；从父元素继承定位属性的值
定位的兼容性问题，清浮动方法
1.position：relative;
在IE6下父级的overflow:hidden;包不住子级的relative;
2.position:absolute;
在IE6下定位父级的宽高都为奇数，那么在IE6下定位元素的right和bottom都有1像素的偏差
3.position:absolute;position:fixed;绝对定位元素子级，固定元素定位元素子级的浮动可以不用写清浮动方法；
float浮动(inline-block的升级）
1、块在一排显示
2、内联支持宽高
3、默认内容撑开宽度
4、脱离文档流
5、提升层级半层（元素可以看成上下两层，下一层是元素本身，上一层是写在元素里文字或者图片，如果两个块大小一样，元素本身挤进去了，而文字或图片会被挤在外面，半层即一半，也就是元素本身）
层级相当于楼房，层级越高，高度越高，下面的会被上面的盖住
6、 换行不被解析
float/文档流
float:left | right | none | inherit;
文档流是文档中可显示对象在排列时所占用的位置。
浮动的定义：使元素脱离文档流（float相当于让元素飘起来，下面的往上面挤） ，按照指定方向发生移动，遇到父级边界或者相邻的浮动元素停了下来。
后面一个元素会尽量向前一个元素顶部对齐，当高度不够上不去，会下到下一行
clear:left | right | both | none | inherit；元素的某个方向上不能有浮动元素，clear：both；在左右两侧均不允许浮动元素

清浮动方法
1.加高（扩展性不好）
2.父级浮动（问题：页面中所有元素都加浮动，margin左右自动失效）
3.inline-block清浮动方法（不脱离文档流）（margin左右自动失效）
3.空标签清浮动，加在浮动元素（IE6最小高度19px；）
5.br清浮动（不符合结构样式行列三者分离的要求）
6.after伪类清浮动
.clear:after{content:";display:block;clear:both;}
.clear{zoom:1;}
after伪类：元素内部末尾添加内容；
：after{content“添加的内容”；}IE6,7不兼容
zoom缩放
a.触发IE下haslayout,使元素根据自身内容计算宽高
b.FF不支持
7.ovflow:scroll|auto|hidden;
overflow:hidden;
IE6双边距bug（IE6下块属性标签浮动，并且有横向margin，横向margin加倍）
IE6下li部分兼容问题
左右两列布局，右边右浮动IE6 IE7下折行（左边元素浮动) IE6 IE7 li下方会产生4px间隙（加vertical-align:top;）
vertival-align/img问题
vertical-align垂直对齐方式
加垂直对齐方式的同排元素都要加垂直对齐方式；
垂直对齐方式可以解决元素下方间隙问题
图片下方间隙问题
display：block;（改变标签本身属性）
overflow：hidden;（必须知道图片高度）
vertical-align
