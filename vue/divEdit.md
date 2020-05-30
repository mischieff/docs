# div模拟input

## 一、插件说明
用div实现input的功能
</br></br>

## 二、属性说明
属性|类型(type)|默认值 | 说明
 ------ | ------ | ------ | ------ |
value | String | '' | 回显的值 
canEdit | Boolean | true | 是否可编辑 
teaxtareaChange | Function |  | 输入变幻时的值
</br></br>

## 三、使用方式
页面中引用本插件进行使用
```javascript
<textareaTag @teaxtareaChange="teaxtareaChange"></textareaTag>
```
</br></br>

## 四、插件代码
```javascript
<template>
  <span
    class="textareaTag"
    v-html="innerText"
    :contenteditable="canEdit"
    @focus="isLocked = true"
    @blur="isLocked = false"
    @input="changeText"
  ></span>
</template>
<script>
export default {
  name: 'textareaTag',
  props: {
    value: {
      type: String,
      default: ''
    },
    canEdit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      innerText: this.value,
      isLocked: false
    }
  },
  watch: {
    'value'() {
      if (!this.isLocked || !this.innerText) {
        this.innerText = this.value;
      }
    }
  },
  methods: {
    changeText() {
      this.$emit('teaxtareaChange', this.$el.innerHTML);
    }
  }
}

</script>
<style lang="scss">
.textareaTag {
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  min-height: 52px;
  line-height: 1.5;
  padding: 4px 7px;
  text-align: left;
  display: inline-block;
  &:focus {
    border-color: #1d5aff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(#1d5aff, 0.3);
  }
}
</style>
```