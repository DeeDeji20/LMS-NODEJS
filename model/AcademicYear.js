const mongoose = require('mongoose');

const academicYearSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fromYear: {
        type: Date,
        required: true,
    },
    toYear: {
        type: Date,
        required: true,
    },
    isCurrent: {
        type: Boolean,
        required: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref:"Admin",
        required: true,
    },
    students: [
        {
        type: mongoose.Types.ObjectId,
        ref: "Student",
        }
    ],
    teachers: [
        {
        type: mongoose.Types.ObjectId,
        ref: "Teacher",
        }
    ],
},
{ timestamp: true}
)

const AcademicYear = mongoose.model("AcademicYear", academicYearSchema);

module.exports = AcademicYear;