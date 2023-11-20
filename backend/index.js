import express from "express";
import DBConnection from "./database/db.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();
const port = process.env.PORT || 8000;
DBConnection();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", routes);

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});


// import express from "express";
// import DBConnection from "./database/db.js";
// import cookieParser from "cookie-parser";


// const app = express();
// const port = 8000;

// DBConnection();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });   

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });