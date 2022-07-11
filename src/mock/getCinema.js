import Mock from 'mockjs'
var Random = Mock.Random;

Mock.mock(/\/cinema\/getList.*/, "get", {
    code: 0,
    msg: "",
    data: [
        {
            "cinemaId": 12,  // 电影院id
            "cinemaName": "CGV影城（新都心IMAX店）",
            "cinemaAddr": "市北区河西街道黑龙江南路18号凯德MALL新都心5层27号",
            "cinemaImg": "https://p0.meituan.net/mmdb/fd146c7848a0ebca36eb869dfef7c9331034607.png@292w_292h_1e_1c",
            "cost": "36"
        },
        {
            "cinemaId": 13,  // 电影院id
            "cinemaName": "1+X红树林影城（影城B区）",
            "cinemaAddr": "黄岛区隐珠街道滨海大道3588号",
            "cinemaImg": "https://p0.meituan.net/mmdb/fd146c7848a0ebca36eb869dfef7c9331034607.png@292w_292h_1e_1c",
            "cost": "28"
        },
        {
            "cinemaId": 14,  // 电影院id
            "cinemaName": "CGV影城（新都心IMAX店）",
            "cinemaAddr": "市北区河西街道黑龙江南路18号凯德MALL新都心5层27号",
            "cinemaImg": "https://p0.meituan.net/mmdb/fd146c7848a0ebca36eb869dfef7c9331034607.png@292w_292h_1e_1c",
            "cost": "36"
        },
        {
            "cinemaId": 15,  // 电影院id
            "cinemaName": "1+X红树林影城（影城B区）",
            "cinemaAddr": "黄岛区隐珠街道滨海大道3588号",
            "cinemaImg": "https://p0.meituan.net/mmdb/fd146c7848a0ebca36eb869dfef7c9331034607.png@292w_292h_1e_1c",
            "cost": "28"
        },
    ]
})


const datas = [
    {
        "cinemaName": "CGV影城（新都心IMAX店）",
        "cinemaAddr": "市北区河西街道黑龙江南路18号凯德MALL新都心5层27号",
        "cinemaTel": "0532-88170277",
        "service": "未取票用户放映前12小时可退票。未取票用户放映前12小时可改签。3D眼镜免押金。1.3米以下儿童观看普通厅无需购票，不占座；VIP影厅儿童需购票。影院有免费WIFI",
        "cinemaImg": "https://p0.meituan.net/mmdb/fd146c7848a0ebca36eb869dfef7c9331034607.png@292w_292h_1e_1c",
    }
]

Mock.mock(/\/cinema\/\d+/, "get", {
    "code": 0,
    "msg": "",
    "data|1": datas
}
)