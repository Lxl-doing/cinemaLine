import Mock from 'mockjs'

Mock.mock("/getAddrs", "get", {
    code: 0,
    msg: "",
    data: {
        "A": [
            "安阳", "杭州", "北京"
        ],
        "B": [
            "安阳", "杭州", "北京"
        ],
        "C": [
            "安阳", "杭州", "北京"
        ],
    }
})