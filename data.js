// ============================================================
// 物流数据文件（中国 → 西班牙 · CTT Express 渠道）
// 修改查询信息就改这里：编辑下面的订单数组，保存后重新部署即可生效
// 每条订单字段说明：
//   no            运单号（查询用，唯一）
//   refNo         参考号（系统内部订单号）
//   createdAt     订单创建日期（用于按天推进轨迹）
//   destination   目的地
//   localTime     当地时间（最新一条轨迹的时间）
//   status        最新状态
//   receiver      收件人
//   receiverInfo  收件人详细信息（name/country/city/address/cep/tel）
//   records       轨迹数组（time/location/desc，按时间倒序，最新在最上）
// ============================================================
window.ORDER_DATA = [
  {
    no: '0082800082909725384145',
    refNo: 'SZLD9901076859',
    createdAt: '2026-08-24',
    destination: 'Madrid, España',
    localTime: '2026-08-24 23:00',
    status: '订单已创建',
    receiver: 'Siderurgica Requena',
    receiverInfo: {
      name: 'Siderurgica Requena',
      country: 'España',
      city: 'Madrid',
      address: 'Eduardo Barreiros 116',
      cep: '28041',
      tel: '628 30 08 03'
    },
    records: []
  },
  {
    no: '0082800082909725367942',
    refNo: 'SZLD9901076884',
    createdAt: '2026-08-24',
    destination: 'Carmona (Sevilla), España',
    localTime: '2026-08-24 22:53',
    status: '订单已创建',
    receiver: 'FODE KANE',
    receiverInfo: {
      name: 'FODE KANE',
      country: 'España',
      city: 'Carmona',
      address: 'CALLE ANCHA PUERTA 8, PLANTA 1, A',
      cep: '41410',
      tel: '+34 642 416 343'
    },
    records: []
  }
];
