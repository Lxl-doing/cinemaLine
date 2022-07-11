import Mock from 'mockjs'

Mock.mock(/\/user\/login*/, "get", {
    code: 0,
    msg: "",
    data: {
        userId: 123,
        nickName: "嘉然今天吃什么",
        avatar: 'https://img0.baidu.com/it/u=1258665096,3316258106&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=320'
    }
})

Mock.mock("/user/whoami", "get", {
    code: 0,
    msg: "",
    data: {
        userId: 123,
        nickName: "嘉然今天吃什么",
        avatar: 'https://img0.baidu.com/it/u=1258665096,3316258106&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=320'
    }
})


// Mock.mock("/user/whoami", "get", {
//     code: 0,
//     msg: "",
//     data: null
// })