const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Name is Required"
        },
    
        type: {
            type: String,
            trim: true,
            required: "Type is Required"
        },
    
        duration: {
            type: Number,
            trim: true,
            required: "Duration is Required"
        },
    
        distance: Number,
    
        weight: Number,
    
        sets: Number,
    
        reps: Number
    }]

});

// WorkoutSchema.methods.cardio = function() {
//     this.distance = 
// }

// WorkoutSchema.methods.resistance = function() {

// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
