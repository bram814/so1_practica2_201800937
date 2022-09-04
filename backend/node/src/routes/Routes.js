const {Router} = require('express');
const router = Router();


// req : request  ----- res : responseve
router.get('/', (req, res) => {

    res.send({
        msg:"Bienvenido - 201800937"
    });
});

module.exports = router;