const {Router} = require('express');
const router = Router();


router.get('/main',(req, res)=>{
    return res.status(200).json({main:'main test'});
});

module.exports=router;