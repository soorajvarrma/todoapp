import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items=[];
const d = new Date();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const yearArray = ["January" , "February", "March","April", "May", "June", "July", "August" ,"September" ,"October" ,"November","December"]
const Title = date+" "+yearArray[month]+" "+year;
app.get("/",(req,res)=>{
    console.log('GET request received');
    res.render("index.ejs",{
        listTitle: Title,
        newitems: items
    });
})
app.post("/",(req,res)=>{
    console.log(`POST request recevied`);
    items.push(req.body.newItem);
    res.render("index.ejs",{
        listTitle: Title,
        newitems: items
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });