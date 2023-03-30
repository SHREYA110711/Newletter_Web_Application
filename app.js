const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");
const { response } = require("express");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signUp.html");
})

app.post("/",function (req,res){
   const firstname=req.body.fname;
   const lastname=req.body.lname;
   const Email=req.body.email;
 
   const data={
    members:[{
        email_address:Email,
        status:"subscribed",
        merge_fields:{
            FNAME:firstname,
            LNAME:lastname
        }
    }
    ]
   };
   const jsonData=JSON.stringify(data);
   const url="https://us21.api.mailchimp.com/3.0/lists/280d202bb1";
const options={
    method:"POST",
    auth:"Shreya:770ad1419b08018519cc0d49e22754f2-us21"
}
  const requ= https.request(url,options,(response)=>{
    if(response.statusCode===200){
        res.sendFile(__dirname+"/success.html");
       }
       else{
        res.sendFile(__dirname+"/failure.html");
       }
     response.on("data",(data)=>{
        console.log(JSON.parse(data));
     })
   })
   
  requ.write(jsonData);
   requ.end();

})
app.post("/failure",(req,res)=>{
    res.redirect("/");
})
app.listen(3000,()=>{
console.log("server is running");
})



//770ad1419b08018519cc0d49e22754f2-us21
//280d202bb1