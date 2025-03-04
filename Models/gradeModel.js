const mongoose = require('mongoose')
const Course = require('./courseModel')
const Level = require('./levelModel')
const Student = require('./studentModel')

const gradeSchema = new mongoose.Schema({
    student: {
        type: ObjectId,
        ref: Student,
        required: true
    },
    courseId: {
        type: ObjectId,
        ref: Course,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    grade: {
        type: number,
        min: 0,
        max: 100,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Grade', gradeSchema)