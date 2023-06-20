require("dotenv").config();
var express = require("express");
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

app.use(cors());
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

module.exports = app;
