const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const db = require('../db');

router.use(bodyParser.json({ urlencoded: true }));

router.post("/", function(req, res, next) {
    const { email, password, phonenumber, name } = req.body;
    var sql = "INSERT INTO user(email,password,phonenumber,name) VALUES (?,?,?,?)";
    db.query(sql, [email, password, phonenumber, name], function(err, result) {
        if (err) {
            throw err;
        } else {
            res.json({ "Status": "Success" });
        }
    })
})

router.get('/:email', function(req, res, next) {
    const email = req.params.email;
    var sql = `SELECT * FROM user WHERE email=?`;
    db.query(sql, [email], function(err, row, fields) {
        if (err) {
            console.log(err)
        } else
            res.json(row);
    })
});

router.post("/profile", function(req, res, next) {
    const { email, fname, age, height, weight, gender, BMI } = req.body;
    var sql = "INSERT INTO profile(email,name,age,height,weight,gender,BMI) VALUES (?,?,?,?,?,?,?)";
    db.query(sql, [email, fname, age, height, weight, gender, BMI], function(err, result) {
        if (err) {
            throw err;
        } else {
            res.json({ "Status": "Success" });
        }
    })
})

module.exports = router;