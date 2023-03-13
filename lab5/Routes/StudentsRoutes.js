const express = require("express");
let router = express.Router();

const StudentsController = require("../Controllers/StudentsController");
console.log(StudentsController);

router.get("/", StudentsController.GetAllStudents);

router.get("/:id", StudentsController.GetStudentByID);

//add student
router.post("/create", StudentsController.addNew);

router.delete("/:id", StudentsController.DeleteStudentByID);

//update
router.put("/:id", StudentsController.UpdateStudentByID);

module.exports = router;
