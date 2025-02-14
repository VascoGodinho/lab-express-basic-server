// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (_, response) => {
  response.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (_, response) => {
  response.sendFile(__dirname + "/views/blog.html");
});
app.get("/api/projects", (_, response) => {
  const projects = require("./data/projects.json");
  response.json(projects);
});
app.get("/api/articles", (_, response) => {
  const articles = require("./data/articles.json");
  response.json(articles);
});
app.use((_, response) => {
  response.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});
