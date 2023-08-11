const mongoose = require('mongoose');

const yearGroupSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "Admin",
        require: true,
    },
    academicYear: {
        type: mongoose.Types.ObjectId,
        ref: "AcademicYear",
        require: true,
    },
},
{ timestamps: true }
)