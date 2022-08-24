const express = require("express");
const app=express();
require ("./db/conn");
const router= require("./routes/router");
const port=8250;





app.use(router)

app.listen(port,()=>{
    console.log(`app is running at port ${port}`)
})