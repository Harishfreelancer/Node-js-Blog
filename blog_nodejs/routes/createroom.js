const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("createroom");
})
router.post("/",(req,res)=>{
    let name = req.body.creatorname;
    let room = req.body.room
    res.redirect(`myroom?name=${name}&&room=${room}`);
})
module.exports = router;