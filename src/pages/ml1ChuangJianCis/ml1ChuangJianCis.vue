<template>
  <view class="moBan" :style="'height:'+windowHeightPage+'px'">
    <view class="xiuGaiBuFen">
      <view class="xiuGaiBianMaBuFen">
        <view class="xiuGaiBianMaLabel">编码：</view>
        <view class="xiuGaiBianMaInput">
          <input placeholder="请输入编码" style="height:100%;width: 100%;" v-model="xiuGaiObj.Bm10CisBianMa" />
        </view>
      </view>
      <view class="xiuGaiMingChengBuFen">
        <view class="xiuGaiMingChengLabel">名称：</view>
        <view class="xiuGaiMingChengInput">
          <input placeholder="请输入名称" style="height:100%;width: 100%;" v-model="xiuGaiObj.Bm10CisMingCheng" />
        </view>
      </view>
      <view class="tiJiaoAnNiuBuFen">
        <button @click="tiJiao" class="tiJiaoAnNiu">提交</button>
      </view>
    </view>
    <view class="zhiDuBuFen">
      <view class="zhiDuBianMaBuFen">
        <view class="zhiDuBianMaLabel">编码：</view>
        <view class="zhiDuBianMaInput">
          <input style="height:100%;width: 100%;" :disabled="true" v-model="zhiDuObj.Bm10CisBianMa" />
        </view>
      </view>
      <view class="zhiDuMingChengBuFen">
        <view class="zhiDuMingChengLabel">名称：</view>
        <view class="zhiDuMingChengInput">
          <input style="height:100%;width: 100%;" :disabled="true" v-model="zhiDuObj.Bm10CisMingCheng" />
        </view>
      </view>
      <view class="xiuGaiAnNiuBuFen">
        <button @click="xiuGai" class="xiuGaiAnNiu">修改</button>
      </view>
    </view>
    <view class="lieBiaoBuFen">
      <view v-for="(item,index) in cis" :key="item.BianMa">
        {{item.BianMa}}---{{item.MingCheng}}
      </view>
    </view>
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
    methods: {
      xiuGai(){
        this.xiuGaiObj=JSON.parse(JSON.stringify(this.zhiDuObj))
      },
      tiJiao(){
        console.error("this.xiuGaiObj---",this.xiuGaiObj)
      },
    },
    data() {
      return {
        windowHeightPage: 100,
        cis: [{
          BianMa: "123",
          MingCheng: "456",
        }, {
          BianMa: "223",
          MingCheng: "445",
        }],
        zhiDuObj: {
          Bm10CisBianMa: "111",
          Bm10CisMingCheng: "111",
        },
        xiuGaiObj: {
          Bm10CisBianMa: "",
          Bm10CisMingCheng: "",
        },
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
        method: "POST",
        data: {
          text: "uni.request"
        },
      });
      console.log("res===", res);
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

    .xiuGaiBuFen {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 90%;
      margin-left: 5%;
      border-radius: 8px;
      background-color: #ffffff;
      padding-top: 10px;

      .xiuGaiBianMaBuFen {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        width: 90%;
        height: 40px;
        margin-left: 5%;

        .xiuGaiBianMaLabel {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 30%;
          height: 100%;
        }

        .xiuGaiBianMaInput {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 70%;
          height: 100%;
          background-color: #EEEEEE;
        }
      }

      .xiuGaiMingChengBuFen {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        width: 90%;
        height: 40px;
        margin-left: 5%;
        padding-top: 5px;

        .xiuGaiMingChengLabel {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 30%;
          height: 100%;
        }

        .xiuGaiMingChengInput {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 70%;
          height: 100%;
          background-color: #EEEEEE;
        }
      }

      .tiJiaoAnNiuBuFen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;

        .tiJiaoAnNiu {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 30%;
          margin-left: 35%;
          height: 30px;
          background-color: #0A98D5;
        }
      }
    }


    .zhiDuBuFen {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 90%;
      margin-left: 5%;
      border-radius: 8px;
      background-color: #dddddd;
      margin-top: 10px;
      padding-top: 10px;

      .zhiDuBianMaBuFen {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        width: 90%;
        height: 40px;
        margin-left: 5%;

        .zhiDuBianMaLabel {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 30%;
          height: 100%;
        }

        .zhiDuBianMaInput {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 70%;
          height: 100%;
          background-color: #EEEEEE;
        }
      }

      .zhiDuMingChengBuFen {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        width: 90%;
        height: 40px;
        margin-left: 5%;
        padding-top: 5px;

        .zhiDuMingChengLabel {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 30%;
          height: 100%;
        }

        .zhiDuMingChengInput {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 70%;
          height: 100%;
          background-color: #EEEEEE;
        }
      }

      .xiuGaiAnNiuBuFen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;

        .xiuGaiAnNiu {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 30%;
          margin-left: 35%;
          height: 30px;
          background-color: #0A98D5;
        }
      }
    }


  }
</style>
