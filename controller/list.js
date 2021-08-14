module.exports = {
    getTodoList: (ctx) => {
        ctx.response.body = [
            {
                id: 0,
                status: false,
                detail:'今天要早起',
            },
            {
                id: 1,
                status: false,
                detail:'今天要吃饭',
            },
            {
                id: 2,
                status: true,
                detail:'今天要刷牙',
            },
            {
                id: 3,
                status: false,
                detail:'今天要学习',
            },
        ]
    }
}
