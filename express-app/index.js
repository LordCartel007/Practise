// // index.js
// const express = require("express");
// const app = express();
// const PORT = 3000;

// // Middleware (optional)
// app.use(express.json());

// // Home Route
// app.get("/", (req, res) => {
//   res.send("Welcome to my Express App!");
// });

// // Users Route
// app.get("/users", (req, res) => {
//   res.json([
//     { id: 1, name: "Chioma" },
//     { id: 2, name: "David" },
//   ]);
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// const express = require("express");
// const Port = 3000;
// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("welcome");
// });

// app.listen(Port, () => {
//   console.log("app is running on port 3000");
// });

const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to my new home page");
});

app.get("/user", (req, res) => {
  res.send([
    { id: 1, name: "book" },
    { id: 2, name: "food" },
  ]);
});
app.listen(PORT, () => {
  console.log("CONNETED TO HOST 3000");
});
