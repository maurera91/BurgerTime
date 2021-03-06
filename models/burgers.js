const orm = require("../config/orm");

var burgers = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) =>{
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, (res) =>{
            cb(res);
        })
    },
    delete: (condition, cb) => {
        orm.delete("burgers",condition, (res) =>{
            console.log("model fire");
            cb(res);
        })
    }
};
module.exports = burgers;