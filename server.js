const http = require("http");
const cors = require("cors");
const express = require("express");
const {
  createUser,
  createPost,
  PostsList,
  updatePost,
  deletePost,
  userAndPost,
} = require("./app");
const feeds = require("./feeds.json");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

app.post("/signup", createUser);
app.post("/login", (req, res) => {
  res.json("login success");
});
app.post("/post", createPost);
app.get("/postsList", PostsList);
app.patch("/updatePost", updatePost);
app.delete("/deletePost", deletePost);
app.get("/userAndpost", userAndPost);
app.get("/feeds", (req, res) => {
  res.json(feeds);
});

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
