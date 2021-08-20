const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    status: "boolean",
    detail: "string",
})

const List = mongoose.model('list', schema)

module.exports = {
    List
}
