---
title:"滚动数字组件(向上)"
---
# 滚动数字组件(向上)
## 一、效果图
![image](/docs/assets/images/scrollNumber3.gif)
![image](/docs/assets/images/scrollNumber4.gif)

## 二、属性说明
属性 | 类型(type) | 默认值 | 说明 
 ------ | ------ | ------ | ------ 
value | Number | 0 | 滚动到数值 
startTime | Number | 500(毫秒) | 开始多少毫秒滚动
color | String | #2d7cff | 默认颜色

## 三、使用方式
#### 整数使用方式
```vue
<scroll-number value="641"></scroll-number>
```
#### 小数使用方式
```vue
<scroll-number :value="641,62"></scroll-number>
``` 

## 四、插件代码
```vue
<template>
  <ul class="scrollNumber" :style="{ color}">
    <li
      :class="{'scrollNum-item': !isNaN(item), 'scrollNum-cell': isNaN(item) }"
      v-for="(item,index) in numberValue"
      :key="index"
    >
      <span v-if="!isNaN(item)">
        <i ref="scrollNum">0123456789</i>
      </span>
      <span class="comma" v-else>{{item}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'scrollNumber',
  props: {
    startTime: {  // 多少秒后开始滚动
      type: [String, Number],
      default: 500
    },
    value: {  // 结束值
      type: [String, Number],
      default: '0'
    },
    color: {
      type: String,
      default: '#2d7cff'
    }
  },
  data() {
    return {
      numberValue: ['0'], // 默认总数
    }
  },
  created() {
  },
  mounted() {
    this.numberFilter(this.value) // 这里输入数字即可调用
  },
  methods: {
    // 把总数变成字符串, 总数数中加入逗号
    numberFilter(num) {
      this.numberValue = num.toString().split('')
      this.numberTo()
    },
    // 定时增长数字
    numberTo() {
      clearInterval(this.timer)
      this.timer = setInterval(function () {
        this.setNumberTransform()
      }.bind(this), this.startTime)
    },
    // 设置每一位数字的偏移
    setNumberTransform() {
      let numberItems = this.$refs.scrollNum
      let numberArr = this.numberValue.filter(item => !isNaN(item))
      for (let index = 0; index < numberItems.length; index++) {
        let elem = numberItems[index]
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
      }
    }
  }
}
</script>
<style scoped lang='scss'>
/*总量滚动数字设置*/
.scrollNum {
  margin: 0;
  position: relative;
  display: inline-block;
  height: 100px;
  font-size: 54px;
  line-height: 41px;
  text-align: center;
  list-style: none;
  writing-mode: vertical-lr;
  text-orientation: upright;
  /*文字禁止编辑*/
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  /* 默认逗号设置 */
  .scrollNum-cell {
    width: 10px;
    height: 100px;
    margin-right: 5px;
    line-height: 10px;
    font-size: 48px;
    position: relative;
    & > span {
      position: absolute;
      width: 100%;
      bottom: 17px;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
  }

  /*滚动数字设置*/
  .scrollNum-item {
    width: 41px;
    height: 75px;
    background: #ccc;
    list-style: none;
    margin-right: 5px;
    background: rgba(250, 250, 250, 1);
    border-radius: 4px;
    border: 1px solid rgba(221, 221, 221, 1);
    & > span {
      position: relative;
      display: inline-block;
      margin-right: 10px;
      width: 100%;
      height: 100%;
      writing-mode: vertical-rl;
      text-orientation: upright;
      overflow: hidden;
      & > i {
        font-style: normal;
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translate(-50%, 0);
        transition: transform 1s ease-in-out;
        letter-spacing: 10px;
      }
    }
  }
}
</style>
```
