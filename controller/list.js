const { List } = require('../models')

const getTodoList = async (ctx) => {
    await List.find().then(res => {
        if (res) {
            ctx.body = {
                code: 200,
                msg: '添加成功',
                data: res
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '添加失败',
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '添加失败'
        }
        console.log(err)
    })
}

const addTodoList = async (ctx) => {
    const { detail } = ctx.request.body
    await List.create({status: false, detail}).then(res => {
        if (res) {
            ctx.body = {
                code: 200,
                msg: '添加成功',
                data: res
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '添加失败',
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '添加失败'
        }
        console.log(err)
    })

}

const deleteTodoList = async (ctx) => {
    let { _id } = ctx.request.body;
    await List.deleteOne({ _id })
        .then((res) => {
            ctx.body = {
                res
            }
        }).catch((err) => {
            ctx.body = {
                code: 400,
                msg: '删除失败'
            }
            console.log(err)
        })
}

const updateTodoList = async (ctx) => {
    let { _id, status } = ctx.request.body;
    await List.updateOne({ _id }, { status })
        .then((res) => {
            ctx.body = {
                res
            }
        }).catch((err) => {
            ctx.body = {
                code: 400,
                msg: '修改失败'
            }
            console.log(err)
    })
}

module.exports = {
    getTodoList,
    addTodoList,
    deleteTodoList,
    updateTodoList
}
