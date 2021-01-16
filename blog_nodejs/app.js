  const express = require("express");
  const bodyParser = require("body-parser");
  const ejs = require("ejs");
  const port = process.env.PORT || 8000
  // const postsRoutes = require("./routes/posts");
  const createroomRoutes = require('./routes/createroom')
  const roomcreatedRoutes = require('./routes/roomcreated');
  const myroomRoutes = require('./routes/myroom');
  const app = express();
  app.use(express.urlencoded({extended:true}))
  app.set("view engine","ejs");
  // app.use("/posts",postsRoutes);
  app.use("/createroom",createroomRoutes);
  app.use("/roomcreated",roomcreatedRoutes);
  app.use("/myroom",myroomRoutes);
  app.get("/",(req,res)=>{
      res.render("home")
  })    

  app.listen(port ,()=>console.log(`listenin in ${port}`));


