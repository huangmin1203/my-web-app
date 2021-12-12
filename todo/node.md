###### 1、弹性布局的运用
针对父盒子进行弹性布局的设置
```
.data{
    display:flex;
    align-items: center;
    height: 20px; 
    width:100%;
    /* border:1px solid black; */
    color:black;
    background: white;
    border-radius: 5px;
    font-size: 18px;
    line-height: 20px;

}
```

```
设置父盒子后，子元素直接设置宽高位置
1、每个子元素所占比例
width:10%;
width:80%;
width:10%;

2、文本的位置  text-align: right;
.satr-box{
    width:10%;
    text-align: right;
  
```

```
flex的用法——摆放位置
flex-direction: row | row-reverse | column | column-reverse;
row（默认值）：主轴为水平方向，起点在左端
row-reverse：主轴为水平方向，起点在右端
column：主轴为垂直方向，起点在上沿
column-reverse：主轴为垂直方向，起点在下沿


```

```
flex的用法——换行
flex-wrap: nowrap | wrap | wrap-reverse;
nowrap:不换行
wrap:换行，第一行在上面
wrap-reverse:换行，第一行在下面

```

```
flex的用法——定义项目的放大比例
flex-grow
默认为0份

```

###### 2、绝对定位，固定定位
```
position:fixed  相对浏览器定位
position:absolute 相对 相对定位的父盒子定位

eg:
padding-top:20px距顶
bottom:20px  距底
```



###### 3、怎么获取和修改元素的属性
```
1）获取到元素
 const inputNode = document.getElementsByClassName('star')[0]
2）获取到元素属性
 inputNode.src 
3）修改属性
   inputNode.src = "http://127.0.0.1:5500/assets/images/start.png"
```


###### 4、绝对定位和相对定位---偏移的使用
```
width,height 设置盒子大小
position:fixed,absolute使用相对定位，绝对定位
通过left,right,top,bottom定位
left:50%
注意：相对于浏览器定位，% 代表相对于浏览器的高度/宽度的占比

transform: translate(-50%, 50%);偏移
注意：相对于盒子本身定位,% 代表相对于盒子本身的宽度/高度的占比

- 向左/向上  
+ 向右/向下

```