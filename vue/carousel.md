# 左右滑动

## 一、效果图
![image](/docs/assets/images/vue-carousel.gif)


## 二、使用方式
直接引用本页面
</br></br>

## 三、代码
```javascript
<template>
  <div class="mis-carousel" ref="mis-carousel">
    <div
      class="mis-carousel-group clear"
      :style="{width:`${(carouselList.length)*itemWidth}px`,transform: `translateX(${translateX}px)`}"
    >
      <div
        class="mis-carousel-item fl"
        :style="{width:`${itemWidth}px`}"
        v-for="(item,index) in carouselList"
        :key="index"
      >
        <div class="mis-carousel-cell">{{item}}</div>
      </div>
    </div>
    <div
      class="mis-carousel-tools mis-carousel-prev mis-icon"
      :class="{'active':isMoveRight}"
      @click="carouselPrev()"
    ></div>
    <div
      class="mis-carousel-tools mis-carousel-next mis-icon"
      :class="{'active': thisPower !=0}"
      @click="carouselNext()"
    ></div>
  </div>
</template>
<script>
export default {
  name: "mis-carousel",
  data() {
    return {
      /* 轮播图开始 */
      itemWidth: 320, // 宽度
      thisPower: 0, // 当前第几个
      translateX: 0, // 移动位置
      isMoveRight: true, // 是否可向右移动
      step: 2, // 每次滑动几个
      carouselList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      /* 轮播图结束 */
    };
  },
  methods: {
    /* 轮播开始 */
    carouselPrev() {
      // 上一页
      let thisWidth = this.itemWidth; // 宽度
      let carouselWidth = this.$refs["mis-carousel"].offsetWidth; // 页面宽度
      let carouselLength = this.carouselList.length; // 数据长度

      if (
        thisWidth * this.step * -this.thisPower + carouselWidth <
        thisWidth * (carouselLength - this.step)
      ) {
        // 没超出时候
        this.thisPower = this.thisPower - this.step; // 设置当前状态
        this.translateX = this.thisPower * (thisWidth + this.itemRight); // 滚动位置
        this.isMoveRight = true; // 是否可向右移动
      } else {
        // 超出显示最后一个 
        this.translateX = -((thisWidth + this.itemRight) * carouselLength - carouselWidth);
        this.isMoveRight = false; // 是否可向右移动
      }
    },
    carouselNext() {
      // 下一页
      if (this.translateX < 0) {
        this.thisPower = this.thisPower + this.step; // 设置当前状态
        this.translateX = this.thisPower * this.itemWidth; // 滚动位置
        this.isMoveRight = true; // 是否可向右移动
      }
    }
    /* 轮播结束 */
  }
};
</script>
<style lang="scss" scoped>
.mis-carousel {
  padding: 6px 0 6px 6px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  .mis-carousel-group:not(:last-child) {
    transition: all 0.3s;
    .mis-carousel-item {
      height: 124px;
      padding-right: 20px;
      margin-bottom: 10px;
      .mis-carousel-cell {
        background-color: #ffffff;
        height: inherit;
        border-radius: 6px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
        &:hover {
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
        }
      }
    }
  }

  .mis-carousel-tools {
    display: inline-block;
    width: 20px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    transition: all 0.3s;
    background-color: rgba(#000000, 0.6);
    &:hover {
      background-color: rgba(#000000, 0.7);
    }
    &.active {
      background-color: rgba(#4170dc, 0.8);
      &:hover {
        background-color: rgba(#4170dc, 0.9);
      }
    }
    &.mis-carousel-prev {
      top: 6px;
      right: 0;
      background-position: -6px 5px;
    }
    &.mis-carousel-next {
      bottom: 6px;
      right: 0;
      background-position: -36px 5px;
    }
  }
}
</style>
```