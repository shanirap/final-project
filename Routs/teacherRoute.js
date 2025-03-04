const express = require("express")
const router = express.Router()
const teacherController = require("../Controllers/teacherController")


//get
router.get("/get", teacherController.getAllTeachers)

//getById
router.get("/delete/:_id", teacherController.getTeacherById)

//post
router.post("/post", teacherController.createTeacher)

//put
router.put("/put", teacherController.updateTeacher)


//delete
router.delete("/delete/:_id", teacherController.deleteTeacher)


module.exports = router




