<template>
  <label class="b-checkbox">
    <span
      class="b-checkbox__input"
      :class="{
        'is-checked': isChecked
      }">
      <span class="b-checkbox__inner">
        <transition name="zoom-in">
          <i class="fa fa-check" aria-hidden="true" v-if="isChecked"></i>
        </transition>
      </span>
      <input
        class="b-checkbox__original"
        type="checkbox"
        v-model="value"
        aria-hidden="true">
    </span>
    <span class="b-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'BCheckbox',
  
  data() {
    return {
      value: ''
    }
  },

  props: {
    label: null
  },

  watch: {
    value(val) {
      console.log('watch-value', val)
    }
  },

  computed: {
    isChecked() {
      return this.value
    }
  }
}
</script>

<style scoped>
.b-checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
  &+.b-checkbox {
    margin-left: 30px;
  }
}
.b-checkbox__input {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  line-height: 1px;
  vertical-align: middle;
  &.is-checked {
    & .b-checkbox__inner {
      background-color: var(--highlight-color);
      border: none;
    }
  }
}
.b-checkbox__inner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 0;
  color: #fff;
  border: 1px solid #ccc;
}
.b-checkbox__original {
  position: absolute;
  opacity: 0;
  outline: none;
  width: 0;
  height: 0;
  z-index: -1;
}
.b-checkbox__label {
  margin-left: 10px;
  color: #7f7f7f;
}
</style>
