# js动态添加Css
## 一、js动态加载 css
```javascript
 function addNewStyle(newStyle) {
    let styleElement = document.getElementById('styles_js');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}
// 添加样式
addNewStyle('.t-num {height: 100%;overflow: hidden;width: 25px;line-height: 60px;text-align: center;}');
addNewStyle('.t-num-s {display: block;height: 100%;width: 100%;}');
```
`生成的Css如下`
```css
.t-num {
    height: 100%;
    overflow: hidden;
    width: 25px;
    line-height: 60px;
    text-align: center;
}
.t-num-s {
    display: block;
    height: 100%;
    width: 100%;
}
```

## 二、循环计算css
```javascript
var spanArray = document.getElementsByClassName("h-power-g-item");  
var linkObj = document.createElement('style');
for (let i = 1; i <= spanArray.length; i++) {
      var styleObj = document.createTextNode('\n.h-power-g-item:nth-of-type(' + i + '){ \n -webkit-transform: rotate(' + (360 / spanArray.length) * i + 'deg);\n transform: rotate(' + (360 / spanArray.length) * i + 'deg);\n } \n')
      linkObj.appendChild(styleObj)
      document.getElementsByTagName("body")[0].appendChild(linkObj);
}
```
`生成的Css如下`
```css
    .item:nth-of-type(1){ 
        -webkit-transform: rotate(72deg);
        transform: rotate(72deg);
    } 

    .item:nth-of-type(2){ 
        -webkit-transform: rotate(144deg);
        transform: rotate(144deg);
    } 

    .item:nth-of-type(3){ 
        -webkit-transform: rotate(216deg);
        transform: rotate(216deg);
    } 
```