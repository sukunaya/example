const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    empId: {
        type: String,
        unique: true,
        dropDups: true,
        required: true,
        immutable:true
    },
    empName: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    salary: Number
});
module.exports = mongoose.model('EmployeeDetails', postSchema);