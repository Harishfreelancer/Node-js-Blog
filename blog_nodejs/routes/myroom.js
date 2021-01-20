const express = require("express");
const router = express.Router();
// const posts = [];
let rooms = {
    room:"",
    creatorname:"",
    posts:[]
}
router.get("/",(req,res)=>{
    rooms.room = req.query.room;
    rooms.creatorname = req.query.name;
    res.render("myroom",{room:rooms.room,name:rooms.creatorname});
})
router.get("/posts",(req,res)=>{
    res.render("posts",{myposts:rooms.posts});
})
router.post("/posts",(req,res)=>{
    const post = req.body.post;
    rooms.posts.push(post);
    res.render("posts",{ myposts:rooms.posts})
})
module.exports = router;