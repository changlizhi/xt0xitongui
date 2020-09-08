<template>
  <view class='moBan' :style='"height:"+windowHeightPage+"px"'>
    <button @click='toPage(pageCis)'>新增业务</button>
    <button @click='toPage(pageCis)'>新增业务流程</button>
    <button @click='toPage(pageCis)'>新增词</button>
    <button @click='toPage(pageCis)'>新增编码</button>
    <button @click='toPage(pageCis)'>新增表</button>
    <button @click='toPage(pageCis)'>新增字段</button>
    <button @click='toPage(pageCis)'>生成业务结构</button>
    <button @click='toPage(pageCis)'>新增用户</button>
    <button @click='toPage(pageCis)'>新增角色</button>
    <button @click='toPage(pageCis)'>新增资源</button>
    <button @click='toPage(pageCis)'>新增用户角色</button>
    <button @click='toPage(pageCis)'>新增角色资源</button>
  </view>
</template>

<script>
  import {
    mapState,
  } from 'vuex'
  import {
    exp_chuangJian
  } from '@/js/qingqius/chuang_jian.js'
  import {
    mutationNames
  } from '@/store/mutationNames.js'
  export default {
    methods: {
      toPage(uri){
        uni.navigateTo({url:uri})
      },
    },
    data() {
      return {
        windowHeightPage: 100,
        pageCis:'/pages/ml1ChuangJianCis/ml1ChuangJianCis',
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
        url: 'http://localhost:8888/hfxyonghu',
        method:'POST',
        data: {
          text: 'uni.request'
        },
      });
      console.log('res===',res);
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
