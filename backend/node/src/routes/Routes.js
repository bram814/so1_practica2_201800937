const { Router } = require('express');
const router = Router();
const DB = require('../config/Config')


// req : request  ----- res : responseve
router.get('/', (req, res) => {

    res.status(200).json({
        msg:"Bienvenido - 201800937"
    });
});


router.get('/read', (req, res) => {
    sql = "SELECT * FROM ESTUDIANTE;";
    var result = DB.QUERY(sql, [], (result) => {
        res.status(200).json(result)
    });

});


router.get('/insert', (req, res) => {
    var sql = "INSERT INTO ESTUDIANTE (name, carnet) VALUES(?,?);";
    var data = ["Jose",201800940]

    var result = DB.QUERY(sql, data, (result) => {
        res.json("Insert")
    });

});


router.get('/update', (req, res) => {
    var sql = "UPDATE ESTUDIANTE SET name = ? WHERE carnet = ?";

    var data = ["Jose Abraham Solorzano",201800939]

    var result = DB.QUERY(sql, data, (result) => {
        res.json("Update")
    });

});



module.exports = router;