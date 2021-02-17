const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  console.log("Posting: "+req.body);
  Workout.create({})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req ,res) => {
  console.log("Putting: "+ req.body.type);
  let query = {'_id': req.params.id}
  let newData = {
    $push: {

      exercises:{
        'type':req.body.type,
        'name':req.body.name,
        'duration':req.body.duration,
        'weight':req.body.weight,
        'reps':req.body.reps,
        'sets':req.body.sets
      }
    }
  }
  Workout.findOneAndUpdate(query, newData, {upsert: true, returnOriginal: false})
    .then(dbTransaction => {
      console.log(dbTransaction);
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts", (req,res)=>{
    Workout.find({}).then((data)=>{
      res.json(data);
    }).catch((err)=>{
      res.status(400).json(err);
    });
});

// router.get("/api/workout", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
