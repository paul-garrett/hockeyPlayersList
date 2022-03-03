const mongoose = require("mongoose");

const HockeyPlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "{PATH} must be present"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    team: {
        type: String,
        required: [true, "{PATH} must be present"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    nationality: {
        type: String,
        required: [true, "{PATH} must be present"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    dateOfBirth: {
        type: Date,
        required: [true]
    },
    shoots: {
        type: String,
        default: [true]
        // true will be right, false will be left
    }
}, { timestamps: true });

const HockeyPlayer = mongoose.model("HockeyPlayer", HockeyPlayerSchema);
module.exports = HockeyPlayer