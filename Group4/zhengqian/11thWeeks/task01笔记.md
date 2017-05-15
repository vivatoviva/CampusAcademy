# <h1>一级标题</h1>
## <h2>二级标题</h2>
### <h3>三级标题</h3>
#### <h4>四级标题</h4>
##### <h5>五级标题</h5>
###### <h6>六级标题</h6>
**重要事情说三遍<b>加粗</b>**<em>强调为斜体</em>  <strong>强调为粗体</strong>
[link](http://www.baidu.com/)
1. html常见的标签
    1. a标签（链接、下载、锚点）
        - 链接
             
        ```
        <a href="url" target="_self/_blank">a标签链接</a>
        
        ```
             定义页面中所有的打开方式
             <base target="_blank"> 
        - 下载
             
        ```
            <a href="文件">a标签的下载</a>
        ```

         - 锚点
             
        ```
         <a href="#id">a标签的锚点作用</a>
        ```


    1.img标签
        
        ```
        <img src="url" alt=""/>
        ```
    1. 列表
        1. 有序列表
        2. 有序列表
        3. 有序列表
                
        ```
        <ol>
            <li>有序列表</li>
        </ol>   
        ```

        -  无序列表
        -  无序列表
        -  无序列表
        
```
        <ul>
            <li>无序列表</li>
        </ul>
             <dl>
                <dt>定义列表</dt>
            </dl>
```
1. SCEO（搜索引擎）的浅析
    1. 方法    
        1. 页面语义化
        2. 使用对SEO有利的标签（h1/strong/em）
        3. 提高页面关键词密度
    1. SEM：搜索引擎营销；（包含SEO）
1. 基础选择符
    1. 选择符
        - id选择符[不可重复使用]
        - 群组选择符
        - class(类)选择器[可以重复使用的id]
        - 类型选择符
        - 包含选择符
        - 通配符*
    1. 优先级
        - 同级样式默认后者覆盖前者
        - 样式优先级
            类型（1）< class(10) <id(100) <style行间样式(1000) <js
        - 从高级向低级比较
1. a伪类
    - link 未访问
    - hover 鼠标悬停（鼠标划过）
    - active (鼠标按下)
    - visited 访问过后（点击过后）
    顺序记忆：love hate
1. 兼容性
IE6不支持a以外其他任何标签的伪类
IE6以上的浏览器支持所有标签的hover伪类
1. 标签默认样式重置css reset
    1. 清除外边距
    
        ```
        body,p,h1,h2,h3,h4,h5,h6{margin:0 auto} 
        
        ```
    1. 清除列表样式
    
     ```
        ul,ol{list-style:none;padding:0;margin:0;}
     
     ```
    3. a链接
    
    ```
        a{text-decoration:none;}
    ```
    4. 图片
    ```
    img{border:none;}
    ```
6. 内联和块
    1. 内联（内嵌，行内属性标签）
        1. 默认同行可以继续跟同类型标签
        4. 内容撑开宽度
        5. 不支持宽高
        6. 不支持上下margin和padding
        7. 代码换行被解析
    2. 块属性标签
        1. 默认独占一行显示
        1. 没有宽度时，默认撑满一排
        2. 支持所有命令
    3. display常见属性（inline/block/inline-block）
        1. display:inline-block特性
            4. 块在一行显示
            5. 行内属性标签支持宽高
            6. 没有宽度时由内容撑开宽度
        2. 问题
            1. 代码换行被解析
            9. ie6、ie7不支持块属性标签的inline-block;
    4. float(浮动)
        1. 块在一排显示
        2. 内联支持宽高
        3. 默认内容撑开宽度
        4. 脱离文档流（文档中可现实对象在排列时所占用的位置），元素加了浮动会脱离文档流，按照指定的一个方向移动，直到碰到父级的边界或者另外一个浮动元素停止。
        5. 提升层级半层
        6. clear left/right/none/both元素在指定方向不能浮动    
7. 清浮动
    1. 父级也加浮动
    2. 父级加display：inline-block;
    在IE6 7下最小高度为19px 任何小于19px的高度被处理为19px;
解决方法：1. font-size:0;2. overflow:hidden;
    4. 在浮动元素的下方加
    
    ```
    <div class="clear"></div>
    .clear{ height:0px; font-size:0;clear:both;}
    ```
    5. 在浮动元素下方加上<br/>
    haslayout 根据元素内容大小 或者父级的腹肌的大熊啊来重新计算或元素的宽高
    {
        display:inline-block;
        height:(任何值除了auto)
        width：（任何值除了auto）
        zoom：（除了normal以外的任意值）
    }
    
    ```
    <br clear="all" />
    ```
    6. *after伪类{zoom:1}
    
    ```
    p:after{ content:"";display:block; clear:both;}
    
    ```
    7. 给浮动元素父级加overflow:auto/hidden;配合zoom:1;
8. 浮动问题
    1. 双边距bug
        1. 在ie6下， 块元素有浮动和横向的margin,横向的margin指会被放大成两倍
        3. 解决方法：
    4. ie67下li的间隙问题
        1. 在ie67下里本身没有浮动，但是内容浮动了li下就会多出几培训
        6. 解决方法：
          1. 给li加浮动
          2. 给力加vertical-align:top；垂直对齐方式（还可用于清理图片下的空隙）
9. 定位
    1. 相对定位
    2. 绝对定位
        1. 使元素完全脱离文档流；
        2. 使内嵌支持宽高；
        3. 相对定位一般都是配合绝对定位元素使用；
        3. 块属性标签内容撑开宽度；
        4. 如果有定位父级相对于定位父级发生偏移，没有定位父级相对于整个文档发生偏移；
    3. 遮罩滤镜、固定定位
        1. 遮罩弹窗
            1. 标准 不透明：opacity:0-1;
            2. IE滤镜： filter:alpha(opacity=0~100);
        2. position:fixed;固定定位
            1. 与绝对定位的特性基本保持一致，差别是始终相对于整个文档进行定位；
            2. 问题：iE6不支持固定定位
    4. 定位兼容性问题、清浮动方法
        1. position:relative;
        在IE6下父级的overflow:hidden;包不住子级的relative;
        2. position:absolute;
        在IE6下的定位元素的父级宽高都为奇数，那么在IE6下定位元素的right和bottom都有1像素偏差；
        3. position:absolute;绝对定位元素子级的浮动可以不用写清浮动方法；
        4. position:fixed;固定定位元素子级的浮动可以不用写清浮动方法；
10. 表格 重置样式table,td,th{padding:0px;}

```
<table>/*表格*/
    <thead>
        <tr>/*行*/
            <th>表格标题</th>
            <th>表格标题</th>
        </tr>
    </thead>/*表格头部*/
    <tbody>
        <tr>/*行*/
            <td>单元格</td>
            <td>单元格</td>
        </tr>
    </tbody>/*表格主体*/
    <tfoot>/*表格尾部*/
        <tr>
            <td>单元格</td>
        </tr>
    </tfoot>
```
注意事项
1. 不要给table,th,td以外的其他标签加样式
2. table的标签既不是block,inline或inline-block,而是table;
3. 单元格默认平分table宽
4. th里面文字默认加粗并且上下居中显示
5. table决定了整个表格的宽度
6. table里面的单元格宽度会被转化成百分比



