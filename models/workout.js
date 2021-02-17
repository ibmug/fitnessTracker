const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {type: Date,
    required: true,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String
    },
    name: {
      type: String
    },
    duration: {
      type: Number
    },
    distance: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    }
  }]
});

// workoutSchema.methods.getLastWorkout = function getLastWorkout(cb){
//   return this.model('Workout').find({'exercise'},cb);
// }
const Workout = mongoose.model("Workout", workoutSchema);



module.exports = Workout;
