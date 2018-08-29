<template>
  <div class="page">
    <b-card v-for="(item, index) in 10" :key="index">
      <div name="header" class="card__header">
        <div>订单编号: <span>101201028932</span></div>
        <div>下单时间: <span>2018-08-04 14:45:31</span></div>
        <div>总价: <span>¥1024.00</span></div>
      </div>
      <div class="card__body">
        <div class="goods">
          <div class="brief">
            <img src="https://img.alicdn.com/imgextra/i1/711882582/TB1fUTkfv1TBuNjy0FjXXajyXXa_!!0-item_pic.jpg_430x430q90.jpg" alt="">
            <div class="brief__right">
              <span>【任意两件289元】Dickies尼龙阔腿短裤 男休闲五分裤182M40EC05</span>
              <div class="num">编号： <span>12001290</span></div>
            </div>
          </div>
          <div class="price">
            <span>¥504.00</span>
          </div>
          <div class="attr">
            <span>尺码 XXL</span>
            <span>颜色 BK黑色</span>
          </div>
          <div class="address">
            <span>上海上海市浦东新区新雅东路225弄幸福里10号1001</span>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'OrderListPage'
}
</script>

<style lang="stylus" scoped>
.card__header
  text-align left
  display flex
  flex-direction row
  justify-content space-between
  font-size 13px
.card__body
  padding 10px
.goods
  display flex
  flex-direction row
  margin 10px 0
.brief
  width 40%
  display flex
  flex-direction row
  img
    width 100px
    height 100px
.brief__right, .price, .attr
  font-size 14px
.brief__right
  display flex
  flex-direction column
  justify-content space-between
  text-align left
  padding 0 20px
  width 80%
  .num
    font-size 13px
    color #828282
.price
  width 10%
.price, .attr, .address
  display flex
  align-items center
  justify-content center
.attr
  width 20%
  span
    margin-right 10px
.address
  font-size 13px
</style>

