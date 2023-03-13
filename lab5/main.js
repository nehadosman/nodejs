const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const login = require("./Middlewares/logging");
const StudentsRoutes = require("./Routes/StudentsRoutes");
const CoursesRoutes = require("./Routes/CoursesRoutes");
const UsersRoutes = require("./Routes/UsersRoutes");


const port = process.eventNames.PORT || 7005;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // convert request to json
app.use(login);
app.use("/api/students", StudentsRoutes);
app.use("/api/courses", CoursesRoutes);
//user region
app.use("/api/users", UsersRoutes);

//end_point
//using api to know that url used to get data from database
//courses

app.listen(port, () => {
  console.log("https://localhost:" + port);
});
``