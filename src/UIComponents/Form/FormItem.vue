<template>
  <div class="b-form-item">
    <label class="b-form-item-label">
      <span class="required" v-if="required">*</span>
      {{ labelText }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BFormItem',
  props: {
    labelText: {
      type: String,
      default: 'Label'
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-form-item
  width 100%
  display flex
  flex-direction row
  margin-top 20px
  .required
    margin-right 6px
    line-height 37px
    font-size 18px
    color #e91e63
  label
    width 20%
    padding-right 30px
    line-height 37px
    text-align right
</style>

