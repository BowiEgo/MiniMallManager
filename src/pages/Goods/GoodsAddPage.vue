<template>
  <div class="page">
    <b-form style="padding-bottom: 80px">
      <b-form-item
        required
        :labelText="'商品名称'">
        <b-input
          v-model="name"
          placeholder="请在此输入商品名称">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'商品类别'">
        <b-select
          v-model="category"
          placeholder="请在此选择商品类别">
          <b-option
            v-for="(item, index) in categories"
            :key="index"
            :label="item.name"
            :value="item.id"
            :labelProxy="'name'"
            :valueProxy="'id'"
            :children="item.children">
          </b-option>
        </b-select>
      </b-form-item>
      <b-form-item
        required
        :labelText="'标题'">
        <b-input
          v-model="title"
          placeholder="请在此输入标题">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'标签'">
        <b-input
          v-model="tag"
          placeholder="请在此选择商品标签">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'价格'">
        <b-input
          v-model="price"
          placeholder="请在此选择商品价格">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'折扣'">
        <b-input
          v-model="discount"
          placeholder="请在此选择商品折扣">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'总量'">
        <b-input
          v-model="stock"
          placeholder="请在此选择商品总量">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'商品主图'">
        <b-upload
          v-model="preview"
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
          v-model="images"
          :action="'post'"
          autoUpload>
          <b-button slot="trigger">选取图片</b-button>
          <!-- <b-button slot="submit" type="success">上传到服务器</b-button> -->
          <span slot="tip">只能上传jpg/png文件，且不超过500kb</span>
        </b-upload>
      </b-form-item>
      <b-form-item
        required
        :labelText="'商品详情'">
        <b-input
          v-model="detail"
          type="textarea"
          :row="10"
          placeholder="请在此填写商品详情">
        </b-input>
      </b-form-item>
      <b-form-item
        required
        :labelText="'商品规格'">
        <div class="spec-wrap">
          <b-button :styles="{ width: '100px' }">添加规格</b-button>
          <b-checkbox-group
            v-model="specList.value"
            v-for="(item, index) in specList"
            :label="item.name"
            :key="index">
            <b-checkbox
              v-for="(spec, idx) in item.children"
              :label="spec.name"
              :key="idx">
            </b-checkbox>
          </b-checkbox-group>
        </div>
      </b-form-item>
      <b-button-group style="margin-top: 40px">
        <b-button
          type="cancel"
          disabled
          :styles="{ width: '100px' }">取消</b-button>
        <b-button
          type="primary"
          :styles="{ width: '100px', marginLeft: '40px' }"
          @click="submit">提交</b-button>
      </b-button-group>
    </b-form>
  </div>
</template>

<script>
import { goodsSpecList } from '../../mock'
import { fetchCategory, addGoods } from '../../api'

export default {
  name: 'GoodsAddPage',

  data () {
    return {
      name: '',
      category: '',
      categories: [],
      title: '',
      tag: '',
      price: '',
      discount: '',
      stock: '',
      preview: [],
      images: [],
      detail: '',
      specList: [],
      spec: []
    }
  },

  watch: {
    category(val) {
      console.log('watch-category', val)
    },
    images(val) {
      console.log('watch-images', val)
    },
    specList(val) {
      console.log('watch-specList', val)
    }
  },

  created() {
    fetchCategory().then(res => {
      this.categories = res.data.data
    })
    this.specList = goodsSpecList
  },

  methods: {
    handlePreview() {
      console.log('handlePreview')
    },

    submit() {
      let params = {
        name: this.name,
        category: this.category,
        title: this.title,
        tag: this.tag,
        price: this.price,
        discount: this.discount,
        stock: this.stock,
        preview: this.preview[0],
        images: this.images,
        detail: this.detail,
        spec: this.spec
      }
      addGoods(params).then(res => {
        if(res.data.message === true) {
          alert('添加成功')
        } else {
          alert(res.data.message)
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style scoped>
.spec-wrap {
  display: flex;
  flex-direction: column;
}
</style>
