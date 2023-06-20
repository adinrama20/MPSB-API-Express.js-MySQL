require("dotenv").config();
var express = require("express");
const mysql = require("mysql");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const classesRouter = require("./routes/classes");
const studentClassesRouter = require("./routes/student_classes");
const theoryMaterialsRouter = require("./routes/theory_materials");
const tfQuestionsRouter = require("./routes/tf_questions");
const tfMaterialsRouter = require("./routes/tf_materials");
const tfUsersRouter = require("./routes/tf_users");
const practicesRouter = require("./routes/practices");
const theoryPracticesRouter = require("./routes/theory_practices");
const understandMaterialsRouter = require("./routes/understand_materials");
const quizzesRouter = require("./routes/quizzes");
const quizQuestionsRouter = require("./routes/quiz_questions");
const userAnswersRouter = require("./routes/user_answers");
const quizPointsRouter = require("./routes/quiz_points");
const practicesPointsRouter = require("./routes/practice_points");

const app = express();

const whitelist = [
  "https://mpsb-api-expressjs-mysql-production.up.railway.app/",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/classes", classesRouter);
app.use("/api/student-classes", studentClassesRouter);
app.use("/api/theory-materials", theoryMaterialsRouter);
app.use("/api/tf-questions", tfQuestionsRouter);
app.use("/api/tf-materials", tfMaterialsRouter);
app.use("/api/tf-users", tfUsersRouter);
app.use("/api/practices", practicesRouter);
app.use("/api/theory-practices", theoryPracticesRouter);
app.use("/api/understand-materials", understandMaterialsRouter);
app.use("/api/quizzes", quizzesRouter);
app.use("/api/quiz-questions", quizQuestionsRouter);
app.use("/api/user-answers", userAnswersRouter);
app.use("/api/quiz-points", quizPointsRouter);
app.use("/api/practices-points", practicesPointsRouter);

/** START PUNYA AGIS */

const db = mysql.createConnection({
  host: "bfxtk4zf2wiujozqjlvl-mysql.services.clever-cloud.com",
  user: "urf0mjta7ztsoxhl",
  password: "q9BGdNlxaV9doByDPBp1",
  database: "bfxtk4zf2wiujozqjlvl",
});

// LOGIN
app.post("/register", (req, res) => {
  const sql =
    "INSERT INTO login (`name`, `username`, `email`, `password`, `status`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.status,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

// REGISTER
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `username` = ? AND `password` = ?";
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

/** END PUNYA AGIS */

module.exports = app;
