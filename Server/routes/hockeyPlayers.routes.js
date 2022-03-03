const HockeyPlayer = require("../controllers/hockeyPlayers.controllers");

module.exports = (app) => {
    app.get("/api/hockeyPlayers", HockeyPlayer.findAll);
    app.get("/api/hockeyPlayers/:id", HockeyPlayer.findOne);
    app.post("/api/hockeyPlayers", HockeyPlayer.create);
    app.put("/api/hockeyPlayers/:id", HockeyPlayer.update);
    app.delete("/api/hockeyPlayers/:id", HockeyPlayer.delete);
}