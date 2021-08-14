module.exports = {
    getTodoList: (ctx) => {
        ctx.response.body = [
            {
                status: false,
                detail:'今天要早起',
            },
            {
                status: false,
                detail:'今天要吃饭',
            },
            {
                status: true,
                detail:'今天要刷牙',
            },
            {
                status: false,
                detail:'今天要学习',
            },
        ]
    }
}
