const validate = require("../utils/studentsValidation");
let StudentModel = require("../Models/StudentsModels");

var GetAllStudents = (req, res) => {
  var AllStudents = StudentModel.GetAllStudents();
  res.json(AllStudents);
};

var GetStudentByID = (req, res) => {
  var id = req.params.id;
  var found = Students.find((s) => {
    return s.id == id;
  });
  res.json(found);
};

var addNew = (req, res) => {
  var newStud = req.body;
  //   var valid = ajv.validate(StudentSchema, newStud);
  var valid = validate(newStud);
  if (valid) {
    // newStud.id = ++id;
    // Students.push(newStud);
    
    var newStudentModel = new StudentModel(newStud.name, newStud.age);
    newStudentModel.saveStudent();
    res.status(201).json(newStudentModel);
  } else {
    res.status(305).send("not correct");
  }
};

var DeleteStudentByID = (req, res) => {
  var ID = req.params.id;
  var index;
  Students.find((s, i) => {
    if (s.id == ID) {
      index = i;
    }
  });
  console.log(index);
  Students.splice(index, 1);
  res.send("Deleted successfully");
};

var UpdateStudentByID = (req, res) => {
  var ID = req.params.id;
  var updatedStudent = req.body;
  console.log(req.body);
  var index;
  Students.find((s, i) => {
    if (s.id == ID) {
      index = i;
    }
  });
  Students[index] = updatedStudent;
  console.log(index);
  res.json(Students[index] || "Not Found");
};

module.exports = {
  GetAllStudents,
  GetStudentByID,
  addNew,
  DeleteStudentByID,
  UpdateStudentByID,
};
