---
title:"textarea回车标签插件"
---
# textarea回车标签插件
## 一、效果图
![image](/docs/assets/images/textareaEdit.gif)
<br/><br/>

## 二、属性说明
属性|类型(type)|默认值 | 说明
 ------ | ------ | ------ | ------ |
v-model | Array | [] | 绑定的值 
disabled | Boolean | false | 是否禁用 
parentArr | Array | [] | 回显的值 
@on-change | Function |  | 父组件响应事件 
<br/><br/>

## 三、使用方式
#### 整数使用方式
```vue
<textareaTag
    class="textarea-tag"
    v-model="formData2.keyWord1"
    :disabled="false"
    :parentArr="formData2.keyWord1"
    @on-change="keyWord1Change2"
></textareaTag>
```
<br/><br/>

## 四、插件代码
```vue
<template>
  <div
    class="textareaTag"
    :class="[inputFocus?'inputFocus':'',disabled?'textareaTag-disabled':'']"
    @click="focusInput"
  >
    <div v-for="(item,index) in tagArray" :key="index" class="tag-item">
      <span>{{item}}</span>
      <i class="tag-close" @click="removeTag(index,item)"></i>
    </div>
    <input
      ref="textareaTag-input"
      :placeholder="placeholderText"
      :size="placeholderText?10:6"
      v-model="currentval"
      @keyup.space="addTag"
      @focus="focusInput"
      @blur="blurInput"
      class="textareaTag-input"
      type="text"
    />
    <span class="close-all" v-show="tagArray.length>0" @click="removeAll"></span>
  </div>
</template>
 
<script>
export default {
  name: 'textareaTag',
  props: {
    parentArr: {
      type: Array,
      default: []
    },
    disabled: { // 禁止操作
      type: Boolean,
      default: false
    }
  },
  data() {
    let tagArray = this.parentArr || [];
    let placeholderText = tagArray && tagArray.length > 0 ? '' : '请输入关键词';
    return {
      placeholderText,  // placeholder
      currentval: '',   // 当前输入的值
      tagArray,     // 输入的词组
      inputFocus: false, // 是否获取焦点
    }
  },
  watch: {
    tagArray(old, cur) {  // 检测tag
      let tagArray = this.tagArray; // 获取当前的tag
      if (tagArray.length >= 1) { // placeholder删掉
        this.placeholderText = ''
      }
    },
    parentArr() {
      if (this.parentArr.length > 0) {
        this.tagArray = []
        for (let i = 0; i < this.parentArr.length; i++) {
          this.tagArray.push(this.parentArr[i])
        }
      } else {
        this.tagArray = []
      }
    }
  },
  methods: {
    removeTag(index, item) {// 移除标签
      this.tagArray.splice(index, 1)
      this.$emit('on-change', this.tagArray);
    },
    removeAll() {  // 移除所有
      this.tagArray = [];
      this.$emit('on-change', this.tagArray);
    },
    addTag() { // input回车加入 tag 中
      let thisValue = this.currentval;  // 获取输入的值
      if (thisValue[thisValue.length - 1] == " ") { // 判断是否有空格
        this.pushTag(); // 添加骚操作
      }
    },
    pushTag() { // 添加操作
      let findTag = this.tagArray.indexOf(this.currentval); // 判断有没有输入过
      if (findTag === -1 && this.currentval.trim()) {// 没有输入过或者不为空格
        this.tagArray.push(this.currentval.trim());

        this.$emit('on-change', this.tagArray); // 发送事件

      }
      this.currentval = ''
    },
    blurInput() {  // 失去焦点
      this.inputFocus = false;  // 取消边框样式
      if (this.currentval) {
        this.pushTag()
      }
    },
    focusInput() {  //获取焦点
      this.$refs['textareaTag-input'].focus();  // 让input获取焦点
      this.inputFocus = true; // 显示获取时候边框样式
    }
  }
}
</script>
 
<style lang="scss" scoped>
::-webkit-input-placeholder {
  color: #c0c4cc;
  font-size: 14px;
}
.textareaTag {
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  min-height: 52px;
  line-height: 1.5;
  padding: 4px 7px;
  text-align: left;
  display: inline-block;
  transition: all 0.3s;
  width: 100%;
  position: relative;
  .close-all {
    position: absolute;
    top: 2px;
    right: 2px;
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 50%;
    text-align: center;
    background-color: #e8e8e8;
    transition: all 0.3s;
    &::before {
      content: "\2716";
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      color: rgba(#000, 0.8);
    }
    &:hover {
      background-color: #d0d0d0;
      cursor: pointer;
    }
  }
  &.inputFocus {
    border-color: #1d5aff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(#1d5aff, 0.3);
  }
  &.textareaTag-disabled {
    pointer-events: none;
  }
  .tag-item {
    line-height: 24px;
    margin: 5px 6px 5px 0;
    padding: 0 10px;
    background-color: rgba(#e6e9ed, 0.9);
    color: rgba(#000, 0.8);
    border-radius: 14px;
    font-size: 13px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    transition: 0.25s linear;
    &:hover {
      padding: 0px 20px 0 6px;
      .tag-close {
        opacity: 1;
      }
    }
    .tag-close {
      padding: 0 10px 0 0;
      cursor: pointer;
      font-size: 14px;
      position: absolute;
      right: -3px;
      top: -2px;
      text-align: right;
      text-decoration: none;
      top: 0;
      width: 100%;
      bottom: 0;
      z-index: 2;
      opacity: 0;
      filter: "alpha(opacity=0)";
      transition: opacity 0.25s linear;
      &::before {
        content: "\2716";
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        color: rgba(#000, 0.8);
      }
    }
  }
  /* 输入框 */
  .textareaTag-input {
    border: none;
    outline: none;
  }
}
</style>
```
