import store from '@/store/index.js'

export const exp_chuangJian = {
  chuang_jian: chuang_jian,
}

async function chuang_jian(pageParam) {
  return await new Promise(async function(resolve,reject){
    console.log('store---',store)
    resolve()
  })
}
