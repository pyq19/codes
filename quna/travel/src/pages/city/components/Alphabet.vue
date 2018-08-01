<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      // ['A', 'B', 'C']
      return letters
    }
  },
  data() {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick(e) {
      // 向外触发时间，在 City.vue 中监听这个事件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79 // 79 绿色区域的高度
        const index = Math.floor((touchY - startY) / 20) // 20 每个字符高度  再向下取整
        if ((index >= 0) & (index < this.letters.length))
          this.$emit('change', this.letters[index])
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>
