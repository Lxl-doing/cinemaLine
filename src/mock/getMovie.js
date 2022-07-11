import Mock from 'mockjs'
var Random = Mock.Random;

Mock.mock(/\/film\/getList.*/, "get", {
    code: 0,
    msg: "",
    data: [
        {
            "id": Random.natural(1, 60),
            "title": "熊出没",
            "score": 9.6,
            "filmImg": "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/218/h/300"
        },
        {
            "id": Random.natural(1, 60),
            "title": "熊出没熊熊嘿嘿牧马嘿嘿熊出没嘿嘿熊出没嘿嘿",
            "score": 9.8,
            "filmImg": "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/218/h/300"
        },
        {
            "id": Random.natural(1, 60),
            "title": "想见你",
            "score": 2.0,
            "filmImg": ''
        },
        {
            "id": Random.natural(1, 60),
            "title": "哈哈哈",
            "score": -1,
            "filmImg": "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/218/h/300"
        },
        {
            "id": Random.natural(1, 60),
            "title": "熊出没",
            "score": 9.6,
            "filmImg": "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/218/h/300"
        },
        {
            "id": Random.natural(1, 60),
            "title": "熊出没",
            "score": 9.6,
            "filmImg": "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/218/h/300"
        },
        {
            "id": Random.natural(1, 60),
            "title": "熊出没",
            "score": 9.6,
            "filmImg": "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/218/h/300"
        },
        {
            "id": Random.natural(1, 60),
            "title": "熊出没",
            "score": 9.6,
            "filmImg": "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/218/h/300"
        },
        {
            "id": Random.natural(1, 60),
            "title": "想见你",
            "score": 9.4,
            "filmImg": "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/218/h/300"
        },
    ]
})


const datas = [
    {
        "title": "开心超人",
        "filmImg": "https://p0.pipi.cn/mmdb/25bfd6718d351b338f39dde01b960f542ff81.jpg?imageView2/1/w/464/h/644",
        "tags": ["剧情", "科幻", "动画"],
        "area": "中国",
        "duration": "96",
        "years": "2022-05-28T08:00:00",
        "description": "一年一度的星星球科技展隆重开幕。展会上，一颗蕴含超强能力的能量石引起了各方的注意。大大怪小小怪得知消息后，命令怪兽大肆破坏，抢走了能量石。危难之际，开心超人联盟集结出击与怪兽展开激斗。但是，超人们因为开心超人的冲动行事纷纷失去了超能力，他们将如何夺回超能力，守护星星球？",
        "score": -1,
        "income": 239100,
        "people": [
            {
                "personName": "黄伟明",
                "personImg": "https://p0.meituan.net/movie/be1ae60b3ea6a85b150988eb3209d64170406.jpg@128w_170h_1e_1c",
                "isDirector": 1,
            },
            {
                "personName": "邓玉婷",
                "personImg": "https://p0.meituan.net/movie/ee2a36fb4bd24ab4ae24ce9b0e8d682113694.jpg@128w_170h_1e_1c",
                "isDirector": 0,
            },
            {
                "personName": "邓玉婷",
                "personImg": "https://p0.meituan.net/movie/ee2a36fb4bd24ab4ae24ce9b0e8d682113694.jpg@128w_170h_1e_1c",
                "isDirector": 0,
            },
            {
                "personName": "邓玉婷",
                "personImg": "https://p0.meituan.net/movie/ee2a36fb4bd24ab4ae24ce9b0e8d682113694.jpg@128w_170h_1e_1c",
                "isDirector": 0,
            },
            {
                "personName": "邓玉婷",
                "personImg": "https://p0.meituan.net/movie/ee2a36fb4bd24ab4ae24ce9b0e8d682113694.jpg@128w_170h_1e_1c",
                "isDirector": 0,
            },
            {
                "personName": "邓玉婷",
                "personImg": "https://p0.meituan.net/movie/ee2a36fb4bd24ab4ae24ce9b0e8d682113694.jpg@128w_170h_1e_1c",
                "isDirector": 0,
            },
        ],
        "comments": []
    },
    {
        "title": "复仇者联盟3：无限战争",
        "filmImg": "https://p0.pipi.cn/mmdb/d2dad592b12f2a8ea350151d1d257ef91be64.jpg?imageView2/1/w/464/h/644",
        "tags": ["动作", "科幻", "冒险"],
        "area": "美国",
        "duration": "149",
        "years": "2018-05-11T08:00:00",
        "description": "银河系中的至尊霸主灭霸 （乔什·布洛林饰）带着几个得力手下破坏星球，只为了将所有的无限宝石镶嵌于金属手套上，这个手套可以将整个银河系彻底摧毁。为了拯救宇宙，托尼·斯塔克 （小罗伯特·唐尼饰）和史蒂夫·罗杰斯 （克里斯·埃文斯饰）需要摒弃前嫌，重组复仇者联盟，并与蜘蛛侠 （汤姆·赫兰德饰）、奇异博士 （本尼迪克特·康伯巴奇饰）、银河护卫队、黑豹 （查德维克·博斯曼饰）以及瓦坎达人民的力量一同作战 。",
        "score": 9.0,
        "income": 2391000000,
        "people": [
            {
                "personName": "安东尼·罗素",
                "personImg": "https://p1.meituan.net/movie/e9caad7b525f59fcd974be52324aa80c65666.jpg@128w_170h_1e_1c",
                "isDirector": 1,
            },
            {
                "personName": "乔·罗素",
                "personImg": "https://p0.meituan.net/moviemachine/92f533b48482a20b1dc7131363b0d888183832.jpg@128w_170h_1e_1c",
                "isDirector": 1,
            },
            {
                "personName": "克里斯·海姆斯沃斯",
                "personImg": "https://p0.meituan.net/movie/8e1c78ea168f403280c2ea4023fd8d0292893.jpg@128w_170h_1e_1c",
                "isDirector": 0,
            },
            {
                "personName": "克里斯·海姆斯沃斯",
                "personImg": "https://p0.meituan.net/movie/8e1c78ea168f403280c2ea4023fd8d0292893.jpg@128w_170h_1e_1c",
                "isDirector": 0,
            },
            {
                "personName": "克里斯·海姆斯沃斯",
                "personImg": "https://p0.meituan.net/movie/8e1c78ea168f403280c2ea4023fd8d0292893.jpg@128w_170h_1e_1c",
                "isDirector": 0,
            },
        ],
        "comments": []
    },
]

Mock.mock(/\/film\/\d+/, "get", {
    "code": 0,
    "msg": "",
    "data|1": datas
}
)