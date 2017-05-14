# HTML & CSS 学习笔记

标签： 笔记

---

> * HTML 输入属性：

> * value 属性规定输入字段的初始值

> * form 属性规定<input>元素所属的一个或多个表单（如需引用一个以上的表单，用空格分隔的表单 id 列表）

> * height 和 width 属性（这个。。。应该不会忘的）

> * list 属性引用的datalist元素中包含了input元素的预定义选项

> * form列表举例：
><form>
	 <select>
	      <option value="北京">北京</option>
	      <option value="北京">北京</option>
	      <option value="北京">北京</option>
	 </select>
></form>

> * input复选框举例：
> <form>
> 我喜欢自行车：
> <input type="checkbox" name="Bike">
> <br />
> 我喜欢汽车：
> <input type="checkbox" name="Car">
> </form>

> * textarea文本域：直接声明标签，如要规定行列数，用rows='' & cols='' * <

> * 选择符优先级   1.同级样式默认后者覆盖前者 2.类型选择符(1)<class(10)<id(100)<style行间样式（1000）

> * 伪类   链接状态 link 未访问的  hover  鼠标悬停   active  点击链接  visited  点击过后  写法 如  a:link
 
> * 默认样式重置  （1）内联内嵌行内默认可以继续跟同类型标签 内容撑开高度（图片除外） 不支持高度、上下的margin和padding 

> * 代码换行解析（2）块属性默认独占一行  没有高度默认一行

> * 浮动 left/right/none 元素添加了浮动，会脱离文档流，按照指定的一个方向移动直到碰到父级的边界或者另外一个浮动元素停止<br> 
1、使块元素在一行显示<br>
2、是内嵌支持宽高<br>
3、不设置宽度的时候由内容撑开<br>
4、脱离文档流 **文档流是文档中可显示的对象排列时所占用的位置<br>
5、提升层级。。。半层

> * 清除浮动<br> 
clear left/right/nong/both 

> * 作用于元素的第一代后代，空格作用于元素的所有后代。
> * 表格<br>
1、table 表格 thead头部 tbody主体 tfoot尾部 tr行  td单元格 th标题<br>
2、单元格默认平分table的宽度<br>
3、th居中<br>
4、td上下居中左右居左<br>
5、table决定表格的宽度，里面的单元格宽度会被转换成百分比<br>
7、表格里面每一列需要设定宽度<br>
8、表格里同一竖列继承最大宽度，同行继承最大高度<br>
9、colspan 合并列  colspan“合并数量” rowspan合并行 rowspan“合并数量”被合并的单元格需要删除内容<br>

> * CSS关于子元素设置了float属性后父元素高度为0的解释和解决方法<br>
> 分析：<br>
> 浮动float属性会使得元素脱离当前HTML文档流，那么会使得：当前HTML文档会当作设置float属性的元素不存在一样。那么，由于这5个子元素都设置了float，所以可以看作父元素#container内根本没有内容，div在没内容的时候表现正好是高度=0.<br>
> 解决方法：<br>
> 1、设置父元素float<br>
> 2、在最后一个设置浮动的子元素后加一个空div ，并且让这个div清除浮动。  可以不用对父级设置高度 也无需技术父级高度，方便适用，但会多加CSS和HTML标签。<br>
> 3、父元素设置overflow:hidden;或overflow:auto;。  因为overflow:hidden属性相当于是让父级紧贴内容，这样即可紧贴其对象内内容（包括使用float的div盒子），从而实现了清除浮动。<br>
> 4、不要用浮动，而使用：子元素使用display:inline-table或者display:inline-block。<br>
> 5、使用CSS的:after伪元素<br>
>after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）。给浮动元素的容器添加一个clearfix的class，然后给这个class添加一个:after伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。
> * CSS让html中让模块绝对垂直居中
> 原理：<br>
> 1、使用CSS中的position:absolute 进行绝对定位，然后用百分比定位。<br>
> 2、固定居中模块的大小.<br>
> 3、使用CSS中的负边距进行居中，注意负边距一定要固定大小的一半，这样才能刚好的垂直左右居中<br>
> * HTML中SUBMIT的大小<br>
> <input type=submit value=" 提交 " style="width:50px;height:20px">
> * html文本对齐<br>
> <p align="right">文字居右</p><br>
> <p align="left">文字居左</p><br>
> <p align="center">文字居中</p><br>
> 
> * css文本对齐<br>
> text-align:center; 文字居中对齐<br>
> text-align:left;      文字左对齐<br>
> text-align:right;    文字右对齐<br>
> 
> * HTML 行间距的设置方法<br>
> <font style="line-height:1.5;">文字内容</font>,如果设置为1就是单倍行距了，2就是双倍行距。<br>
> <font style="line-height:150%;">文字内容</font>，设置为100%就是单倍行距。<br>
> 用换行符就可以空一行.<br>