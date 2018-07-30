<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id">

        <div class="item-img-wrapper">
          <img class="item-img"
               :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫的大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫的大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫的大连首站，浪漫的海洋主题乐园'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.title
  line-height: .8rem
  background: #eeeeee
  text-indent: .2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 33.9%
  .item-img
    width: 100%
.item-title
  padding: .1rem
  line-height: .54rem
  font-size: .32rem
  ellipsis()
.item-desc
  line-height: .4rem
  color: #ccc
  ellipsis()
</style>
