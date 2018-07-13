<template>
  <div class="page">
    <b-form style="padding-bottom: 80px">
      <b-form-item
        required
        :labelText="'商品名称'">
        <b-input
          placeholder="请在此输入商品名称">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'商品类别'">
        <b-select
          v-model="type"
          placeholder="请在此选择商品类别">
          <b-option
            v-for="(item, index) in types"
            :key="index"
            :label="item.label"
            :value="item.value">
          </b-option>
        </b-select>
      </b-form-item>
      <b-form-item
        required
        :labelText="'标题'">
        <b-input
          placeholder="请在此输入标题">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'标签'">
        <b-input
          placeholder="请在此选择商品标签">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'价格'">
        <b-input
          placeholder="请在此选择商品价格">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'折扣'">
        <b-input
          placeholder="请在此选择商品折扣">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'总量'">
        <b-input
          placeholder="请在此选择商品总量">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'商品主图'">
        <b-upload
          :action="'post'"
          autoUpload
          :on-preview="handlePreview">
          <b-button slot="trigger">选取图片</b-button>
          <!-- <b-button slot="submit" type="success">上传到服务器</b-button> -->
          <span slot="tip">只能上传jpg/png文件，且不超过500kb</span>
        </b-upload>
      </b-form-item>
      <b-form-item
        required
        :labelText="'商品详情轮播图'">
        <b-upload
          :action="'post'">
          <b-button slot="trigger">选取图片</b-button>
          <!-- <b-button slot="submit" type="success">上传到服务器</b-button> -->
          <span slot="tip">只能上传jpg/png文件，且不超过500kb</span>
        </b-upload>
      </b-form-item>
      <b-form-item
        required
        :labelText="'商品详情'">
        <b-input
          type="textarea"
          :row="10"
          placeholder="请在此填写商品详情">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'商品规格'">
        <b-input
          placeholder="请在此选择商品规格">
        </b-input>
      </b-form-item>
      <b-button-group style="margin-top: 40px">
        <b-button type="cancel" disabled :styles="{ width: '100px' }">取消</b-button>
        <b-button type="primary" :styles="{ width: '100px', marginLeft: '40px' }">提交</b-button>
      </b-button-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'GoodsAddPage',
  data () {
    return {
      type: '',
      types: [
        { value: '0', label: '水'},
        { value: '1', label: '火'},
        { value: '2', label: '吐'},
      ]
    }
  },
  watch: {
    type (val) {
      console.log('watch-type', val)
    }
  },
  methods: {
    handlePreview () {
      console.log('handlePreview')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

