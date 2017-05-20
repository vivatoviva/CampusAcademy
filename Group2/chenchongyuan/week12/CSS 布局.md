## 水平居中布局

水平居中这个问题首先要搞清楚存在两个条件才能够称之为水平居中，即**父元素必须是块级盒子容器**，**父元素宽度必须已经被设定好**，在这两个前提下我们来看水平居中问题**

### 场景1：子元素是块级元素且宽度没有设定 ->充满整个父级元素的宽度
**它会充满整个父级元素的宽度，即在水平位置上宽度和父元素一致**
```
这里就不多说了
```
### 场景2：子元素是行内元素，子元素宽度是由其内容撑开的(**有无span都一样**)text-align:center

这种情况下解决方案是给**父元素**设定text-align:center;

### 场景3：子元素是块级元素且宽度已经设定
#### 解法1：给子元素添加`margin:0 auto;`（推荐使用）
#### 解法2：通过计算指定父元素的padding-left或padding-right
> 结果同上，这里计算父元素padding-left或padding-right的方法为(父元素宽度-子元素宽度)/2,注意这里为了计算方便给父元素和子元素都设定了box-sizing:border-box,这样设定的宽度就是包含border+padding+content整个宽度来计算的，如果不设定box-sizing:border-box，浏览器默认是认为content-box,所以设定的宽度仅包含content的宽度，在这种情况下，计算父容器的padding-left或padding-right的方式就是[（父容器content宽度+左右border宽度）-(子容器content宽+水平padding宽+左右border宽)]/2,可以看到较为麻烦，所以这里建议让父元素和子元素都采取border-box.

#### 解法3：通过计算指定子元素的margin-left或margin-right
#### 解法4：通过子元素相对父元素绝对定位
    * 这里还要设定子元素margin-top为-50(子元素自身100px)是需要消除父元素50%造成的偏移  

#### 解法4：利用flex-box
```
display:flex;
flex-direction: row;
justify-content:center;　　　　　
```

## 垂直居中布局

和水平居中一样，这里要讲垂直居中，首先设定两个条件即父元素是盒子容器且高度已经设定

### 场景1：子元素是行内元素，高度是由其内容撑开的

>需要通过设定父元素的line-height为其高度来使得子元素垂直居中(一行)


>如果是多行文字垂直居中，则需要在父元素添加
```
display: table-cell;//相当于表格
vertical-align: middle;
```

### 场景2：子元素是块级元素但是子元素高度没有设定，在这种情况下实际上是不知道子元素的高度的，无法通过计算得到padding或margin来调整，但是还是存在一些解法。
#### 解法1：通过给父元素设定display:table-cell;vertical-align:middle来解决
#### 解法2：flexbox（css3）
    
### 场景3：子元素是块级元素且高度已经设定
#### 解法1：计算子元素的margin-top或margin-bottom，计算方法为父(元素高度-子元素高度)/2
#### 解法2：计算父元素的padding-top或padding-bottom，计算方法为(父元素高度-子元素高度)/2
#### 解法3：利用绝对定位，让子元素相对于父元素绝对定位(translate -50%)
#### 解法4：利用flexbox，在父级添加
```
display: flex;
flex-direction: column;
justify-content: center;
```

## 响应式布局
> Flexbox布局最适合应用程序的组件和小规模的布局，而网格布局更适合那些更大规模的布局。

#### [Creating Your Own CSS Grid System](http://j4n.co/blog/Creating-your-own-css-grid-system)

## flex布局

> 1. Flexbox布局（Flexible Box）模块旨在提供一个更加有效的方式制定、调整和分布一个容器里的项目布局，即使他们的大小是未知或者是动态的（这里我们称为Flex）。
> 2. Flex布局主要思想是让容器有能力让其子项目能够改变其宽度、高度(甚至顺序)，以最佳方式填充可用空间（主要是为了适应所有类型的显示设备和屏幕大小）。Flex容器会使子项目（伸缩项目）扩展来填满可用空间，或缩小他们以防止溢出容器。
> 3. 最重要的是，Flexbox布局方向不可预知，他不像常规的布局（块就是从上到下，内联就从左到右）。而那些常规的适合页面布局，但对于支持大型或者杂的应用程序（特别是当他涉及到取向改变、缩放、拉伸和收缩等）就缺乏灵活性。

### 什么是flex布局
1. Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
2. 任何一个**容器**和**行内元素**都可以指定为Flex布局。
3. 设为Flex布局以后，子元素的float、clear和vertical-align属性***将失效***。

### 基础概念
1. 采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。
2. 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

### 容器的属性
1. flex-direction：决定主轴的方向（即项目的排列方向）。
```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
2. flex-wrap：定义了如果一条轴线排不下，如何换行。
```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
3. flex-flow：它是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
```
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
4. justify-content：定义了项目在主轴上的对齐方式。
```
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
5. align-items：定义了项目在交叉轴上如何对齐。
```
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
6. align-content：定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
```
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### 项目的属性
1. order：定义了项目的排列顺序。数值越小，排列越靠前，默认为0。
```
.item {
  order: <integer>;
}
```
2. flex-grow：定义了项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
```
.item {
  flex-grow: <number>; /* default 0 */
}
```
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。  
3. flex-shrink：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```
.item {
  flex-shrink: <number>; /* default 1 */
}
```
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。
4. flex-basis：定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
5. flex：它是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
6. align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

#### [一个完整的Flexbox指南](http://www.w3cplus.com/css3/a-guide-to-flexbox.html)
#### [Flex 布局教程：语法篇](http://note.youdao.com/)