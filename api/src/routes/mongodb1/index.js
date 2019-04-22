let Mongo = require('./mongodb1');
let dbName = require('yakun');
let colName = require('zhoukao2');

function insert(req, res, next) {
    Mongo.insert(dbName, colName, {}, function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "添加失败"
            })
        } else {
            res.send({
                code: 1,
                mes: "添加成功"
            })
        }
    })
}
module.exports = insert;