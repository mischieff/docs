---
title:"滚动数字组件(原地)"
---
# 滚动数字组件(原地)
> [数字向上滚动链接](https://mischieff.github.io/docs/vue/scrollNumberTop.html)
## 一、效果图
![image](/docs/assets/images/scrollNumber1.gif)
![image](/docs/assets/images/scrollNumber2.gif)


## 二、属性说明
属性|类型(type)|默认值 | 说明
 ------ | ------ | ------ | ------ |
value | Number | 0 | 滚动到的值 
time | Number | 1000(毫秒) | 滚动频率 
toFixed | Number | 2 | 保留小数位数 
color | String | #2d7cff | 颜色 
fontSize | Number | 64 | 字体

## 三、使用方式
#### 整数使用方式
```vue
<scroll-number :value="987"></scroll-number>
```
#### 小数使用方式
```vue
<scroll-number :value="987.3"></scroll-number>
``` 

## 四、插件代码
```vue
<template>
  <span
    class="number-group"
    ref="numberGroup"
    :data-time="time"
    :data-value="value"
    :style="{ color,fontSize:fontSize +'px'}"
  >{{value}}</span>
</template>

<script>
export default {
  name: "scrollNumber",
  props: {
    time: { // 运动时间 毫秒
      type: Number,
      default: 1000
    },
    value: {  // 值
      type: Number,
      default: 0
    },
    toFixed: {  // 保留小数位数
      type: Number,
      default: 2
    },
    color: {  // 颜色
      type: String,
      default: '#2d7cff'
    },
    fontSize: {  // 字体大小
      type: Number,
      default: 64
    }
  },
  methods: {
    numberGo(ele) {
      let _this = this
      let step = (_this.value * 10) / _this.time
      let current = 0
      let start = 0
      let t = setInterval(function () {
        start += step
        if (start > _this.value) {
          clearInterval(t)
          start = _this.value
          t = null
        }
        if (current === start) {
          return
        }
        current = start
        var re = /^-?\d+$/; // 正数
        if (re.test(_this.value)) { // 判断为正数还是浮点数
          ele.innerHTML = current.toFixed(0)
        } else {
          ele.innerHTML = current.toFixed(_this.toFixed)
        }
      }, 10)
    }
  },
  mounted() {
    this.numberGo(this.$refs.numberGroup)
  }
}
</script>

<style>
.number-group {
  letter-spacing: 2.67px;
}
</style>
```
