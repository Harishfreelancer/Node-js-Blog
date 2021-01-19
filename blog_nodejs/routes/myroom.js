const express = require("express");
const router = express.Router();
const posts = [];
router.get("/",(req,res)=>{
    let room = req.query.room
    let name = req.query.name
    res.render("myroom",{name,room});
})
router.get("/posts",(req,res)=>{
    res.render("posts",{posts});
})
router.post("/posts",(req,res)=>{
    const post = req.body.post;
     posts.push(post);
    
    res.render("posts",{posts});
})
module.exports = router;