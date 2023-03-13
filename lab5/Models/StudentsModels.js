var StudentsArr = []; //json | mongoDB
var id = 0;
class Students {
  constructor(name, age) {
    this.id = ++id; //
    this.name = name;
    this.age = age;
  }
  //Get All Students
  static GetAllStudents() {
    return StudentsArr;
  }
  //Add New Student
  saveStudent() {
    StudentsArr.push(this);
    return this;
  }
}

module.exports = Students;

// var s = new Students("Ahmed", 20, "SD");
// s.saveStudent();
// s.GetAllStudents();
// Students.GetAllStudents();
/**
 ==> var StudentModel = require("") 
 var nS = req.body;//{name, age, dept}
 ==> var newStudent = new StudentModel(nS.name, nS.age, nS.dept)
 * */
