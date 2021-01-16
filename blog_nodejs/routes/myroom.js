const express = require("express");
const router = express.Router();
const posts = [];
router.get("/",(req,res)=>{
    let room = req.query.room
    let name = req.query.name
    res.render("myroom",{name,room});
})
router.get("/posts",(req,res)=>{
    res.render("posts");
})
router.post("/posts",(req,res)=>{
    const post = req.body.post;
    const myPosts = posts.push(post);
    console.log(post)
    res.render("posts",{myPosts});
})
module.exports = router;