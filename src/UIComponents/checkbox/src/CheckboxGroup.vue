<template>
  <div class="b-checkbox-group">
    <label class="b-checkbox-group__label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BCheckboxGroup',

  props: {
    label: ''
  }
}
</script>

<style scoped>
.b-checkbox-group {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
}
.b-checkbox-group__label {
  margin-right: 30px;
  text-align: right;
}
</style>

