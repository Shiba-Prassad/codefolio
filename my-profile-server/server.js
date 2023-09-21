const express = require("express");
const path = require("path");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectionDb = require("./config/config");
connectionDb();
const app = express();
const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

const userRouter = require("./routes/userRouter");
const homeRouter = require("./routes/homeRouter");
const serviceRouter = require("./routes/serviceRouter");
const skillRouter = require("./routes/skillRouter");
const employerRouter = require("./routes/employerRouter");
const academyRouter = require("./routes/academyRouter");
const projectRouter = require("./routes/projectRouter");
const blogRouter = require("./routes/blogRouter");
const componentRouter = require("./routes/componentRouter");
const uploadFile = require("./controllers/uploadController");
const createPdf = require("./controllers/uploadPdfController");
const deleteFile = require("./controllers/deleteFile");

const PORT = process.env.PORT ? process.env.PORT : 8081;
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Node Server</h1>");
// });
const products = [
  {
    name: "sp",
  },
  {
    name: "ks",
  },
];

app.get("/api", (req, res) => {
  res.json(products);
});
app.use("/api/user/", userRouter);
app.use("/api/home/", homeRouter);
app.post("/api/upload", uploadFile);
app.post("/api/uploadDoc/", createPdf);
app.delete("/api/deleteFiles/:folder/:fname", deleteFile);
app.use("/api/services/", serviceRouter);
app.use("/api/skills/", skillRouter);
app.use("/api/employer/", employerRouter);
app.use("/api/academy/", academyRouter);
app.use("/api/project/", projectRouter);
app.use("/api/blog/", blogRouter);
app.use("/api/component/", componentRouter);

//static files
app.use(express.static(path.join(__dirname, "../my-portfolio/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../my-portfolio/build/index.html"));
});

app.listen(PORT, () => {
  // console.log(`${process.env}`);
  // console.log(`${process.env.PORT}`);
  console.log(
    `Node server is running successfully in ${PORT} on ${process.env.NODE_ENV}`
  );
});
