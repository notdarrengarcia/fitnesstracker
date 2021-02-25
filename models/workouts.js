const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },

    exercise:[{
        name: {
            type: String,
            trim: true,
            required: "What is the name of the exercise will you be doing?"
        },
        type: {
            type: String,
            trim: true,
            required: "What type of exercise will it be today?"
        },
        duration: {
            type: Number,
            trim: true,
            required: "How long do you expect this workout to last?"
        },
        weight: {
            type: Number,
            trim: true,
            required: "What weight will you be using?"
        },
        reps: {
            trim: true,
            type: Number
        },
        sets: {
            trim: true,
            type: Number
        }
    }]
});

// possibly change the route towards the end when putting it all together
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;