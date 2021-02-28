// Come back to fix

// const { db } = require("../models/workouts")
// const Workout = require("../models/workouts")

// module.exports = function(app){
//     app.get("/api/workouts", (req,res){
//         Workout.find()
//         .then(data => {
//             require.json(data)
//         })
//         .catch(err => {
//             require.json(err)
//         })
//     });
// }

const { Router } = require("express");
const Workout = require("../models/workouts");
const route = require("express").route();

Router.get("/api/workouts", (req,res) => {
    Workout.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json(err))
});

Router.get("/api/workouts", (req,res) => {
    Workout.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json(err))
});

Router.get("/api/workouts/:id", (req,res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body} }, {new: true })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(422).json(err))
});

Router.get("/api/workouts/range", (req,res) => {
    Workout.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(404).json(err))
});



