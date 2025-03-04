const express = require("express")
const router = express.Router()
const studentController = require("../Controllers/studentController")


//get
router.get("/get", studentController.getAllStudent)

//getById
router.get("/delete/:_id", studentController.getStudentById)

//post
router.post("/post", studentController.createStudent)

//put
router.put("/put", studentController.updateStudent)

1
module.exports = router