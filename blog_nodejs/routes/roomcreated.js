const express = require("express");
const router = express.Router();

router.get("/roomcreated",(req,res)=>{
    res.render("roomcreated");
})

module.exports = router;