const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts/:id", ({ body }, res) => {
  console.log("Posting");
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  console.log("Posting");
  Workout.create(body)
    .then(dbTransaction => {
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

router.get("/api/workout", (req, res) => {
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
