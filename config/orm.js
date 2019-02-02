const connection = require("../config/connection.js");

function printQuestionMarks(num){
    let arr = [];

    for (let i = 0; i<num; i++){
        arr.push("?");
    }
    return arr.toString();
    //returns string of "?" characters of number num
}

function objToSql(ob) {
    console.log("start obj to sql");
    console.log(ob);
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        console.log(`Key = ${key}`);
      var value = ob[key];
      console.log (`Value = ${value}`);
      // check to skip hidden properties
      console.log(Object.hasOwnProperty.call(ob, key));
      if (Object.hasOwnProperty.call(ob, key)){
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
        console.log(arr);
      }
    }
    return arr;
}

const orm = {
    all: (tableInput, cb) => {
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        }); 
    },
    create: (table, cols, vals, cb) => {
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
        console.log(queryString);
        vals[1] = parseInt(vals[1]);
        console.log(vals);
        connection.query(queryString, vals, (err, result) =>{
            if (err) throw err
            cb(result);
        });
    },
    update: (table, objColVals, condition, cb) => {
        let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
        console.log(objColVals);
        console.log(queryString);
        console.log(objToSql(objColVals));
        connection.query(queryString, (err, result) =>{
            if (err) throw err;
            cb(result);
        })
    },
    delete: (table,condition,cb) => {
        console.log("orm fire");
        let queryString = `DELETE FROM ${table} WHERE ${condition}`
        console.log(queryString);
        connection.query(queryString, (err, result) =>{
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;