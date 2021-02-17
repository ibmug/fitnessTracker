const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


const uri = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS + "@cluster0.om7ei.mongodb.net/fitnessTrack?retryWrites=true&w=majority";

try{
  mongoose.connect(process.env.MONGODB_URI || uri);

}catch(error){
  throw(error);
}


// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
