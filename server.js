require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const { Schema } = mongoose;
let list = [];
let port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/client/build")));
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://user_me:'+process.env.PWD+'@cluster0.cwmom.mongodb.net/DishDB?retryWrites=true&w=majority/', {useNewUrlParser: true, useUnifiedTopology: true});
const dishSchema = new Schema({
  name:String,
  price:Number
});
const listSchema = new Schema({
  id:Number,
  name:String,
  price:Number
})
const Dish = mongoose.model("Dish",dishSchema);
const List = mongoose.model("List",listSchema);

app.post("/add",function(req,res){
  const arr = req.body.ids;
  console.log(arr);
  list.forEach(elem => {
    arr.forEach(item => {
      if(elem.id===item) {
        const dish = new Dish({
          name:elem.name,
          price:elem.price
        });
        dish.save();
      }
    })
  })

});
app.get("/bill", function(req,res){
  console.log("cf");
  Dish.find(function(err,result){
    if(err)
    console.log(err)
    else {
      const count = {};
      let obj = [];
      let obj1 = {}
      result.forEach(e =>{
        if(count[e.name]) {
          count[e.name]++;
        }
        else {
          count[e.name] = 1

        }
      } );
      let costAt = 0;
      let tip = 0;
      let costBt = 0;
      result.forEach((item) => {
        obj1 = {
          name: item.name,
          price: item.price,
          quantity: count[item.name]
        }
        obj.push(obj1);
        costBt += item.price;
      });
      var things = new Object();
      tip = 0.1*costBt;
      costAt = costBt+tip;
  things.thing = new Array();

  things.thing = obj;
  var myData = things.thing;

  things.thing = Array.from(new Set(myData.map(JSON.stringify))).map(JSON.parse);
  console.log(costBt+"   "+tip+"  "+costAt);
  console.log(things.thing);
  const objFinal = {
    costBt: costBt,
    tip: tip,
    costAt: costAt,
    items:things.thing
  }
  res.send(objFinal);
    }
  });
});
app.get("/getDishes", async function(req, res){
  await List.find(function(err,result) {
    if(err)
    console.log(err);
    else {
      list = result;
      console.log(list);
      res.send(list);
    }
  })
  console.log("3id");
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

if (port == null || port == "") {
  port = 9000;
}
app.listen(port,function() {
  console.log("Server has Started");
});
