<template>
  <view class="moBan" :style="'height:'+windowHeightPage+'px'">
    <button @click="toPage(pageCis)">新增词</button>
  </view>
</template>

<script>
  import {
    mapState,
  } from "vuex"
  import {
    exp_chuangJian
  } from "../../qingqius/chuang_jian.js"
  import {
    mutationNames
  } from "../../store/mutationNames.js"
  export default {
    methods: {},
    data() {
      return {
        windowHeightPage: 100,
      }
    },
    async mounted() {
      let sysInfoRes = await uni.getSystemInfoSync()
      this.windowHeightPage = sysInfoRes.windowHeight
    },
    computed: {
      ...mapState({
        phoneState: state => state.phoneState,
      })
    },
    async onLoad(e) {
      exp_chuangJian.chuang_jian()
      var [error, res] = await uni.request({
        url: "http://localhost:8888/hfxyonghu",
        method:"POST",
        data: {
          text: "uni.request"
        },
      });
      console.log("res===",res);
    },
  }
</script>

<style lang="less" scoped="scoped">
  .moBan {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background-color: #fff6e7;
  }
</style>
