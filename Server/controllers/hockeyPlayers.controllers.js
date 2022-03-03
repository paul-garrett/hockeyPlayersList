const HockeyPlayer = require("../models/hockeyPlayers.model");

module.exports = {
    // Find All
    findAll: (req, res) => {
        HockeyPlayer.find()
            .then(allHockeyPlayers => res.json(allHockeyPlayers))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // Find One
    findOne: (req, res) => {
        HockeyPlayer.findById(req.params.id)
            .then(hockeyPlayer => res.json(hockeyPlayer))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // Create
    create: (req, res) => {
        console.log(req.body)
        HockeyPlayer.create(req.body)
            .then(newHockeyPlayer => res.json(newHockeyPlayer))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // Update
    update: (req, res) => {
        console.log(req.body.dateOfBirth)
        HockeyPlayer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedHockeyPlayer => res.json(updatedHockeyPlayer))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // Delete
    delete: (req, res) => {
        HockeyPlayer.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ err: err }))
    }
}