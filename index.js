const express=require("express")
const app=express()
const cors=require("cors")
const port=4000;
const students=require("./data.js")
const emp={
	name:"abhilash",
	roll_no:203111,
	class:"bsc"
}
app.use(cors())
app.get("/",(req,res)=>{
	res.send("hi i am server")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/barnabas",(req,res)=>{
	res.send("enjoy pandagoww")
})
app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server started"))