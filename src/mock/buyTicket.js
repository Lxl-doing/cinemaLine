import Mock from 'mockjs'

Mock.mock(/\/show\/getTimeList.*/, "get", {
    code: 0,
    msg: "",
    data: [
        {
            "showId": 1,
            "showTime": "2022-06-22T08:00:00",
            "cost": 38.0,
            "room": "激光2号厅",
            "cinemaName": "CGV影城（万象城IMAX店）",
        },
        {
            "showId": 2,
            "showTime": "2022-06-10T07:30:00",
            "cost": 38.0,
            "room": "激光2号厅",
            "cinemaName": "CGV影城（万象城IMAX店）",
        },
        {
            "showId": 3,
            "showTime": "2022-06-10T08:00:00",
            "cost": 38.0,
            "room": "激光2号厅",
            "cinemaName": "CGV影城（万象城IMAX店）",
        },
        {
            "showId": 4,
            "showTime": "2022-06-09T08:30:00",
            "cost": 38.0,
            "room": "激光2号厅",
            "cinemaName": "CGV影城（万象城IMAX店）",
        },
        {
            "showId": 5,
            "showTime": "2022-06-09T09:00:00",
            "cost": 38.0,
            "room": "激光2号厅",
            "cinemaName": "CGV影城（万象城IMAX店）",
        },
        {
            "showId": 6,
            "showTime": "2022-06-12T09:30:00",
            "cost": 38.0,
            "room": "激光2号厅",
            "cinemaName": "CGV影城（万象城IMAX店）",
        },
        {
            "showId": 7,
            "showTime": "2022-06-12T10:00:00",
            "cost": 38.0,
            "room": "激光2号厅",
            "cinemaName": "CGV影城（万象城IMAX店）",
        },
    ]
})

Mock.mock(/\/buy\/getSeat.*/, "get", {
    code: 0,
    msg: "",
    data: {
        "seatMsg": [
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [2, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 1],
            [2, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 1],
            [2, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 1],
            [2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 1],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [2, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 1],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 1],
        ]
    }
})


const datas = [
    {
        code: 0,
        msg: "",
        data: {
            "orderId": 11111
        }
    },
    {
        code: 1,
        msg: "",
        data: null
    },
]

Mock.mock("/buy/canIBuy", "get", {
    code: 0,
    msg: "",
    // "data|1": datas
    data: datas[0]
})


Mock.mock(/\/buy\/getOrder.*/, "get", {
    code: 0,
    msg: "",
    data: {
        "code": 0,
        "msg": "",
        "data": {
            "orderId": 11111,
            "title": "开心超人",
            "filmImg": "https://p0.pipi.cn/mmdb/25bfd67171f2ff338f31397eddc97451194d8.jpg?imageView2/1/w/464/h/644",
            "duration": "102",
            "room": "2号激光厅",
            "showTime": "2022-06-10T08:00:00",
            "col": [1, 2],
            "row": [2, 3],
            "cost": 38.0,
            "cinemaName": 'CGV影城（万象城IMAX店）',
            "qrcode": `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAJBElEQVR4nO3dS24bURAEQdLQ/a8sH4BaNQZtdTpiL2h+TLxdvb+/v18AtPz51xcAwPPEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgr5mf/Z+v5+9DgZmK1rjd7f8704YD5ktPxbv7q7xN+bkDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHDmb2x8WRU2InFtSuW7867+9GV69y0v1no5A4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhC0vcQ0sz9iMmOA5tOVZ2JT6Z/zM3+WkztAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAME3ZjZ40FXxsyWzbbTPEx+LSd3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIEtM/53Z5NBYe6to/DBnj2X53XGakztAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAME3ZjZsy72G5wYzLsyIuiT/uSZPMvJHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIGh7ienEmk/b8nhQ+98tu3J3fua/gZM7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBA1n9k5skvGj5XfnU7nLuzvNyR0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBouMS07P1+z/5wNiUz/nfLlu+u/TBnrmwVzd6Cu3vQ8u/u5eQOkCTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQcOZvf3JqJnljbcTs2TLF9l+42PLy3DLj2X57k7sTe5zcgcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwh6GzF50IkZoCuvYHnN54T2slj77vY5uQMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0DQcGZv2ZVVv+VlOEN0n04sHb6mb6F9d8vyq35O7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHDJab2NNIV3t2DjAd9shF2mpM7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBA1n9pYtL8NdGTNbduKxnLjI15EByCt3d+UXtMzJHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIOhr9mfL00hjs+tcHqCxM/Wj5XfX5lN50JVvzMkdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgoYze+1BrPaI4LITF7mvvXvHb+DkDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOEPRubxUtaw/luLtPVybJ+NRu0cvJHSBJ3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYKGM3vcdWUtb3n3bmZ5b7I9b3nl7q78gpzcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgr5mf7a8RcKPZhMtV2ZrTowHnbjIsSvv7sRo1/6n4uQOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQcOZvbH2LNnM8mbhle20meW7a+9NnnjjY+0fwsvJHSBJ3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIGh7iWnmyt7NlYmWTeNncmKgavmNj5/JlV/Qpvyv1ckdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgm7M7PGgK8twfFreLLzyqZy4zv1VPyd3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIEtM/53lvRvjQT+aXefyrNWVT2XmyrsbPxYnd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwi6MbO3vL/VdmX37sQQ3Vh7RLDtxLt7ObkDJIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEvdt7N212eR504mFemSRb/lROvLux8d05uQMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0DQcGYPgN/MyR0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGC/gKxParRK6oxlwAAAABJRU5ErkJggg==`
        }
    }
})