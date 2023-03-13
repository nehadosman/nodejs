const express = require("express");
let router = express.Router();
const CoursesController = require("../Controllers/CoursesController");
console.log(CoursesController);
router.get("/", CoursesController.GetAllCourses);

router.post("/create", CoursesController.AddNewCourse);

router.delete("/:id", CoursesController.DeleteCourseByID);

module.exports = router;
