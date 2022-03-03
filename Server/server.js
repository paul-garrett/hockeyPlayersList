const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "hockey_player_project_DB";

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// database connection link to file
require('./config/mongoose.config')(DB);

// connect to routes
require('./routes/hockeyPlayers.routes')(app);


// start the server
app.listen(PORT, () => console.log(`server is up on port:${PORT}`));