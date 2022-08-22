<template>
  <div v-on:click="handle">
    {{ 'jack' }} - {{ num }}

    <a href="http://www.baidu.com" target="_blank"> baidu </a>

    <span v-for="i in 7"> {{ 'jack' }} - {{ i }} </span>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  props: {},
  data: {
    num: 1,
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handle() {
      this.num++
    },
  },
}
</script>

<style scoped lang="scss">
.lowerCamelCase {
  color: #ffffff;
  font-size: 12px;
  background: url(https://www.matrixtheone.ga/images/Wives/BingBing-1.webp);
}
a {
  display: inline;
  width: 100px;
}
@for $i from 1 through 4 {
  .item-#{$i} {
    width: 2em * $i;
  }
}
</style>
