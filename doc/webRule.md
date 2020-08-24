## 一、vue

### 1、结构

> vue项目基本文件目录，可根据项目做微调。

```javascript
src
├── App.vue		// 入口文件
├── main.js		// 主文件
├── views		// 路由文件
├── api			// API接口文件
├── assets		// 资源文件
├── router		// 路由文件
├── store		// vuex
│  	 ├── modules
│    ├── getters.js
│	 └── index.js
├── styles		// 样式文件
│	 ├── index.scss		// 样式主文件
│    ├── variables.scss	// 颜色文件
│    ├── mixin.scss		// 混入样式
│    ├── transition.scss	// 动画文件
│    ├── table.scss		// 表格文件
│    └── ...				// 其他文件
├── utils		// 插件
│    ├── directive.js	// 指令
│    ├── filter.js		// 过滤器
│    ├── validate.js		// 其他验证
│    ├── cookies.js		// 缓存
│    └── plugin			// 其他组件
└── components	// 组件
     ├── index.js		// 主文件
     └── ...
```

### 2、组件方法顺序

> 组件默认顺序

```
- components
- props
- data
- computed
- created
- mounted
- metods
- filter
- watch
```



### 3、文件命名

> 文件名称统一用 全部采用小写方式， 以中划线分隔 ，其中不得包含汉字、空格和特殊字符；命名原则的指导思想一是使得你自己和工作组的每一个成员能够方便的理解每一个文件的意义，二是当我们在文件夹中使用“按名称排例”的命令时，同一种大类的文件能够排列在一起，以便我们查找、修改、替换、计算负载量等等操作；

```html
//正面
news-item

//反面
news_item
```

### 4、组件name

>  组件名应该始终是多个单词组成（大于等于 2），且命名规范为大驼峰格式。这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的 

```vue
// 正例
export default {
  name: 'TodoItem'
  // ...
};

// 反例
export default {
  name: 'Todo',
  // ...
}
export default {
  name: 'todo-item',
  // ...
}
```

### 5、组件名

>  和父组件紧密耦合的子组件应该以父组件名作为前缀命名

```vue
// 正例
components/
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue

// 反例
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
```



> 组件名为多个单词，并且用连接线（-）连接，避免与 HTML 标签冲突，并且结构更加清晰。

```vue
// 正面
<page-header></page-header>

// 反面
<pageHeader></pageHeader>
```

### 6、prop 定义

> prop 的定义应该尽量详细的指定其类型、默认值和验证。

```vue
// 正例
props: {
    attrM: Number,
    attrA: {
        type: String,
        required: true
    },
    attrZ: {
        type: Object,
        default: function () { // 数组/对象的默认值应该由一个工厂函数返回
            return {
                msg: '成就你我'
            }
        }
    }
}
// 反例
props: ['attrM', 'attrA']
```



### 7、prop 命名

> 定义 prop 的时候应该始终以`驼峰格式命名`，在父组件赋值的时候使用连接线（-）。这里遵循每个语言的特性，因为在 HTML 标记中对大小写是不敏感的，使用连接线更加友好；而在 JavaScript 中更自然的是驼峰命名。

```vue
// 正例
props: {
    articleStatus: {
		type:Boolean
	}
}
//HTML
<article-item :article-status="true"></article-item>
// 反例
props: {
    article-status: {
		type:Boolean
	}
}
//HTML
<article-item :articleStatus="true"></article-item>
```

### 8、v-for在执行

> v-for 遍历的时候，总是应该带上 key 值使更新 DOM 时渲染效率更高。

```vue
<li v-for="item in list" :key="item.id">
    {{ item.title }}
</li>
```

### 9、v-if / v-else-if / v-else

> 若同一组 v-if 逻辑控制中的元素逻辑相同，Vue 为了更高效的元素切换，会复用相同的部分，例如：value。为了避免复用带来的不合理效果，应该在同种元素上加上 `key` 做标识。

```vue
// 正例
<div v-if="hasData" key="mazey-data">
    <span>{{ mazeyData }}</span>
</div>
<div v-else key="mazey-none">
    <span>无数据</span>
</div>

// 反例
<div v-if="hasData">
    <span>{{ mazeyData }}</span>
</div>
<div v-else>
    <span>无数据</span>
</div>
```

### 10、指令缩写

> 为了统一规范始终使用指令缩写，使用v-bind，v-on并没有什么不好，这里仅为了统一规范

```vue
<input :value="userName" @click="userName">
```

### 11、样式

> 为了避免样式冲突，整个项目要么全都使用 scoped 特性，要么使用 BEM 约定。

```scss
<style scoped>
...
</style>
```



### 12、单文件组件的顶级元素顺序

> vue单文件模块书写顺序，按照`template`、`script`、`style`

```vue
// 正例
<template>
<!-- HTML -->
</template>

<script>
/* JavaScript */
</script>

<style>
/* CSS */
</style>



// 反例
<style>
/* CSS */
</style>

<script>
/* JavaScript */
</script>

<template>
<!-- HTML -->
</template>

```

### 13、使用ESlint

项目必须使用ESlint开发

## 二、css

- id和class命名`越简短越好`，便于提高代码效率；
- id控制行为层（javascript）；
- class控制表示层（css）；
- 避免选择器嵌套层级过多，尽量`少于 4级`；
- 同类css写一起，不同类中间用分隔符`/*==== 导航 ====*/`分割；
- 媒体查询`@media screen` 与打印`@media print`单独创建样式文件；
-  级建议使用动态css，如`Sass`。

### 1、样式文件命名

|    名称    |   文件名    |
| :--------: | :---------: |
|   主要的   | master.css  |
|    模块    | module.css  |
|  基本共用  |  base.css   |
| 布局，版面 | layout.css  |
|    主题    | themes.css  |
|    专栏    | columns.css |
|    文字    |  font.css   |
|    表单    |  forms.css  |
|    打印    |  print.css  |

### 2、文件顶部注释（推荐使用）

> 每个文件头部都应写上具体信息

```css
/*
*   @description: 中文说明
*   @author: 作者
*   @update: 2013-04-13 18:32
*
*/
```

### 3、模块注释

```css
/* mischieff 2019-7-17 */ 
```

### 4、class类前

> 建议使用公司简写或个人标注，如zq-（众擎）、mis-（本人）

- 一律小写;

- 建议使用`-`连接符

- 所用类名一律用英文;
- 所用类见名知意。

```scss
.zq-class{}          /*  众擎简写 zq  */
.mis-class{}         /*  mischieff本人简写  */
```

### 5、样式建议（示例）

> 样式渲染时，由于定位（position）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。
> 盒模型决定了组件的尺寸和位置，因此排在第二位。其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。

```scss
.zq-login{
    opsition:absolute;
    top:0;
    left:0;
    border: 1px solid red;
    font-size: 16px;
}
```

### 6、css属性尽量使用缩写

```scss
.zq-login{
    font: 12px/1.5 serif;
    padding: 0 10px;10
}
```

### 7、省略0后面的单位

```scss
.zq-login{
    margin: 0;
    padding: 0;
}
```

### 8、字体规则

> 为了防止文件合并及编码转换时造成问题，建议将样式中文字体名字改成对应的英文名字，如：
> 黑体(SimHei) 
> 宋体(SimSun) 
> 微软雅黑 (Microsoft Yahei，几个单词中间有空格组成的必须加引号)

### 9、字体大小

> 直接使用"font+字体大小"作为名称，如下所示：

```scss
.font12px {
    font-size: 12px; 
}
.font9pt {
    font-size: 9pt; 
}
```

### 10、浏览器字体

> font-family 属性中的字体族名称应使用字体的英文 Family Name，其中如有空格，须放置在引号中；常见的字体族名称如下`西文字体在前，中文字体在后`打印优先使用`宋体`

```scss
body{
    font-family: Arial, "Microsoft YaHei", sans-serif;
}
```

|      字体       | 操作系统 | Family Name        |
| :-------------: | :------: | ------------------ |
| 宋体 (中易宋体) | Windows  | SimSun             |
| 黑体 (中易黑体) | Windows  | SimHei             |
|    微软雅黑     | Windows  | Microsoft YaHei    |
|    微软正黑     | Windows  | Microsoft JhengHei |
|    华文黑体     | Mac/iOS  | STHeiti            |
|    冬青黑体     | Mac/iOS  | Hiragino Sans GB   |

### 11、命名规范

```scss
容器: container 
页头：header 
内容：content/container
页面主体：main 
页尾：footer 
导航：nav 
侧栏：sidebar 
栏目：column 
页面外围：wrapper 
左右中：left right center
导航：nav 
主导航：mainbav 
子导航：subnav 
顶导航：topnav 
边导航：sidebar 
左导航：leftsidebar 
右导航：rightsidebar 
菜单：menu 
子菜单：submenu 
标题: title
摘要: summary
标志：logo 
广告：banner 
登陆：login 
登录条：loginbar 
注册：regsiter 
搜索：search 
功能区：shop 
标题：title 
加入：joinus 
状态：status 
按钮：btn
滚动：scroll 
标签页：tab 
文章列表：list
提示信息：msg 
当前的: current 
小技巧：tips 
图标: icon 
注释：note 
指南：guild 
服务：service 
热点：hot 
新闻：news 
下载：download 
投票：vote 
合作伙伴：partner 
友情链接：link 
版权：copyright 
```

## 三、JavaScript

### 1、注释

```javascript
/** 
* @param {String} grid 需要合并的Grid
* @autho mischieff  2015/07/21 
**/
```

|  注释名  | 含义                 | 语法                                      | 示例                                         |
| :------: | -------------------- | ----------------------------------------- | -------------------------------------------- |
|  @param  | 描述参数的信息       | @param {参数类型} 参数名 描述信息         | @param {String} name 传入名称                |
| @return  | 描述返回值的信息     | @return {返回类型} 描述信息               | @return {Boolean} true:可执行;false:不可执行 |
|  @autho  | 描述此函数作者的信息 | @author 作者信息 [附属信息：如邮箱、日期] | @author mischieff 2020/08/22                 |
| @version | 描述此函数的版本号   | @version XX.XX.XX                         | @version 1.0.1                               |

### 2、var / let / const

> 建议不再使用 var，而使用 let / const，优先使用 const。

任何一个变量的使用都要提前申明，除了 function 定义的函数可以随便放在任何位置。

### 3、变量

> 私有属性、变量方法以下划线 _ 开头，如下：

```javascript
let _myStyle = {}
```

### 4、常量

> 全部字母大写，单词间下划线分隔的命名方式，如下：

```javascript
const MY_STYLE = {}
```

### 5、函数/函数的参数

> 使用 Camel(驼峰) 命名法，如下：

```javascript
function stringFormat(theBells){}
```

### 6、构造函数

> 构造函数首字母必须大写，如下：

```javascript
function Student(name) {
    this.name = name;
}
let st = new Student('tom');
```

### 7、函数命名

> 函数的命名采用前缀为动词，直观看出函数的作用，动词如下：

| 动词 | 含义                            | 返回值                                                |
| :--: | ------------------------------- | ----------------------------------------------------- |
| can  | 判断是否可执行某个动作 ( 权限 ) | 函数返回一个布尔值true：可执行；false：不可执行       |
| has  | 判断是否含有某个值              | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
|  is  | 判断是否为某个值                | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get  | 获取某个值                      | 函数返回一个非布尔值                                  |
| set  | 设置某个值                      | 无返回值、返回是否设置成功或者返回链式对象            |

### 8、True 和 False 布尔表达式

`下面的布尔表达式都返回 false:`

+ null
+ undefined
+ ‘’空字符串
+ 0 （数字0）

`但小心下面的, 可都返回 true:`

+ ‘0’（字符串0）
+ [] 空数组
+ {} 空对象

### 9、引号

> 建议不再使用双引号，静态字符串使用单引号，动态字符串使用反引号衔接。

```javascript
// 正例
const foo = '众擎'
const bar = `${foo}，前端工程师`

// 反例
const foo = "众擎"
const bar = foo + "，前端工程师"
```

### 10、函数

> 匿名函数统一使用箭头函数，多个参数/返回值时优先使用对象的结构赋值。
>

```javascript
// 正例
function getPersonInfo ({name, sex}) {
    return {name, gender}
}

// 反例
function getPersonInfo (name, sex) {
    return [name, gender]
}
```

`函数名统一使用驼峰命名，以大写字母开头申明的都是构造函数，使用小写字母开头的都是普通函数，也不该使用 new 操作符去操作普通函数。`

### 11、对象

> 建议使用扩展运算符（...foo）拷贝对象而不是 Object.assign(target, ...sources)。

```javascript
// 正例
const foo = {a: 0, b: 1}
const bar = {...foo, c: 2}

// 错误
const foo = {a: 0, b: 1}
const bar = Object.assign(foo, {c: 2})
```

### 12、console用完及时删掉

> console在ie下存在兼容性，使页面加载不出来。常用的console如下：

```javascript
console.log('hello');
console.info('信息');
console.error('错误');
console.warn('警告');
```