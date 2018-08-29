<template>
  <div class="page">
    <b-panel
      :title="'品牌列表'">
      <b-table
        :data="tableData">
        <b-table-column
          prop="index"
          label="序号"
          width="100">
        </b-table-column>
        <b-table-column
          prop="name"
          label="名称"
          width="600">
        </b-table-column>
        <b-table-column
          prop="pic"
          label="LOGO">
        </b-table-column>
      </b-table>
    </b-panel>
  </div>
</template>

<script>
export default {
  name: 'BrandPage',
  data () {
    return {
      tableData: [
        { index: 1, name: 'NIKE', pic: require('../../assets/images/nike.jpg') },
        { index: 2, name: 'ADIDAS', pic: require('../../assets/images/adidas.jpg') },
        { index: 3, name: 'ADIDAS 三叶草', pic: require('../../assets/images/adidas-t.jpg') },
        { index: 4, name: 'ADIDAS NEO', pic: require('../../assets/images/adidas-neo.jpg') },
        { index: 5, name: 'ASICS', pic: require('../../assets/images/asics.jpg') },
        { index: 6, name: 'MEZUNO', pic: require('../../assets/images/mezuno.jpg') },
        { index: 7, name: 'NEW BALANCE', pic: require('../../assets/images/newbalance.jpg') },
        { index: 8, name: 'PUMA', pic: require('../../assets/images/puma.jpg') },
        { index: 9, name: 'UNDER ARMOUR', pic: require('../../assets/images/Under-Armour.png') },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
