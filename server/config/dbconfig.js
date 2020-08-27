const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://as_service:uVPv8nrlELQBX6Jm@asservice.2me8m.mongodb.net/asservice?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true 
})

mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})