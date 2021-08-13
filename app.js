const express = require("express");
const routes = require("./src/routes/index")
const cors = require("cors")
const app = express();
const session = require("express-session")

app.use(cors())
/*app.use(cors({
  origin: "https://applicationdatecontrol.herokuapp.com",
})
);
*/

//Session
app.use(session({
  secret:"artexjuhy",cookie:{maxAge:30000}
}))
app.use(express.json());
app.use(routes);

module.exports = app;

