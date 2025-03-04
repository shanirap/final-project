const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const Learning = require('./learningModel')
const Practice = require('./practiceModel')
const levelSchema = new mongoose.Schema({
    learning: {
        type: ObjectId,
        ref: Learning,
        required: true
    },
    practice: {
        type: ObjectId,
        ref: Practice,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Level', levelSchema)