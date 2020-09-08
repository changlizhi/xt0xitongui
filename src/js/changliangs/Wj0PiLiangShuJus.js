//为了能够一次性从前端把业务数据送到后端做这么一个结构，这份数据在后端测试数据肯定也要保存一份用作单元测试或者集成测试。
//最重要的几个表数据
//词表，编码表，业务表，表名表，字段表，业务方法流表
//每个数据入库之前需要带上表名作为前缀，因为只会调用一个系统

const Bm1Biaos = {
  {
    BianMa: "",
    MingCheng: "",
    ZhuJianBiao: "",
  },
}

const Bm2ZiDuans = {
  {
    BianMa: "",
    MingCheng: "",
    BiaoBianMa: "",
    ZhiBiao: "",
    ZhengZe: "",
    ChangDu: "",
    XuZhiDing: "",
  },
}

const Bm4YeWus = {
  {
    BianMa: "",
    MingCheng: "",
    MiaoShu: "",
  },
}

const Bm5YeWuFangFaLius = {
  {
    FangFaMing: "",
    MiaoShu: "",
    YeWuBianMa: "",
    ZongShu: "",
    ShunXu: "",
    LiuBianMa: "",
  },
}
//这是一个ci在数据库中的结构，所以不能省
//同时在前端校验时必须保证cis的key和内部指定的BianMa一致
const Bm10Cis = {
  Ywb1YongHus: {
    BianMa: "Ywb1YongHus",
    MingCheng: "业务表1用户",
  },
  Ywb2JueSes: {
    BianMa: "Ywb2JueSes",
    MingCheng: "业务表2角色",
  },
  Ywb3ZiYuans: {
    BianMa: "Ywb3ZiYuans",
    MingCheng: "业务表3资源",
  },
  Ywb4YongHuJueSes: {
    BianMa: "Ywb4YongHuJueSes",
    MingCheng: "业务表4用户角色",
  },
  Ywb5JueSeZiYuans: {
    BianMa: "Ywb5JueSeZiYuans",
    MingCheng: "业务表5角色资源",
  },
  Ywb6YongHuBiaoJis: {
    BianMa: "Ywb6YongHuBiaoJis",
    MingCheng: "业务表6用户标记",
  },
  BianMa: {
    BianMa: "BianMa",
    MingCheng: "编码",
  },
  MingCheng: {
    BianMa: "MingCheng",
    MingCheng: "名称",
  },
  TouXiang: {
    BianMa: "TouXiang",
    MingCheng: "头像",
  },
  YouXiang: {
    BianMa: "YouXiang",
    MingCheng: "邮箱",
  },
  DiZhi: {
    BianMa: "DiZhi",
    MingCheng: "地址",
  },
  ZhuangTai: {
    BianMa: "ZhuangTai",
    MingCheng: "状态",
  },
  ShuoMing: {
    BianMa: "ShuoMing",
    MingCheng: "说明",
  },
  MiaoShu: {
    BianMa: "MiaoShu",
    MingCheng: "描述",
  },
  LeiXing: {
    BianMa: "LeiXing",
    MingCheng: "类型",
  },
  LianJie: {
    BianMa: "LianJie",
    MingCheng: "链接",
  },
  ZhuJian: {
    BianMa: "ZhuJian",
    MingCheng: "主键",
  },
  ShouJiHao: {
    BianMa: "ShouJiHao",
    MingCheng: "手机号",
  },
}

const Bm11BianMas = {
  Ywb1YongHus_BianMa:{
    BianMa: Bm10Cis.Ywb1YongHus+"_"+Bm10Cis.BianMa,
    MingCheng: "用户编码",
    MiaoShu: "用户的编码，可以当作登录或唯一查询值，由系统生成，用户设置的名称转为拼音后下划线加ZhuJian的方式组成",
  },
  Ywb1YongHus_MingCheng:{
    BianMa: Bm10Cis.Ywb1YongHus+"_"+Bm10Cis.MingCheng,
    MingCheng: "用户名称",
    MiaoShu: "用户名称，可以当作登录或唯一查询值，用户设置的名称",
  },
  Ywb1YongHus_ShouJiHao:{
    BianMa: Bm10Cis.Ywb1YongHus+"_"+Bm10Cis.ShouJiHao,
    MingCheng: "用户手机号",
    MiaoShu: "用户的手机号，用于密码找回，登录或者唯一值查询，从用户录入或者从其他小程序得来，当识别到两个系统相同手机号时进行提示已经被人用了，如果确实是自己的只能打客服电话进行修改",
  },
  Ywb1YongHus_NiCheng:{
    BianMa: Bm10Cis.Ywb1YongHus+"_"+Bm10Cis.NiCheng,
    MingCheng: "用户昵称",
    MiaoShu: "用户昵称，用户希望显示给别人看的名称,这个用来展示个性化的名称，然后也用来在朋友列表排序",
  },
  Ywb1YongHus_TouXiang:{
    BianMa: Bm10Cis.Ywb1YongHus+"_"+Bm10Cis.TouXiang,
    MingCheng: "用户头像",
    MiaoShu: "用户上传头像之后会有一个文件系统的路由",
  },
  Ywb1YongHus_YouXiang:{
    BianMa: Bm10Cis.Ywb1YongHus+"_"+Bm10Cis.YouXiang,
    MingCheng: "用户邮箱",
    MiaoShu: "用户邮箱，用于密码找回的，或者登录用，如果需要修改则要么用手机号接收验证码，要么用邮箱接收验证码",
  },
  Ywb1YongHus_DiZhi:{
    BianMa: Bm10Cis.Ywb1YongHus+"_"+Bm10Cis.DiZhi,
    MingCheng: "用户地址",
    MiaoShu: "用户地址，由省市县和小区门牌号组成，最后的地址由用户输入",
  },
  Ywb1YongHus_TiZhong:{
    BianMa: Bm10Cis.Ywb1YongHus+"_"+Bm10Cis.TiZhong,
    MingCheng: "用户体重",
    MiaoShu: "",
  },
}

export const PiLiang = {
  Bm1Biaos: Bm1Biaos,
  Bm2ZiDuans: Bm2ZiDuans,
  Bm4YeWus: Bm4YeWus,
  Bm5YeWuFangFaLius: Bm5YeWuFangFaLius,
  Bm10Cis: Bm10Cis,
  Bm11BianMas: Bm11BianMas,
}
