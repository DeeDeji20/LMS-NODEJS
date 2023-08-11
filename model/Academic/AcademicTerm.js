const mongoose = require('mongoose');

// const { Schema } = mongoose;

const academicTerm = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
        default: "3 months",
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "Admin",
        required: true,
    },
},
{ timestamps: true}
);

const AcatemicYear = mongoose.model('AcademicTerm', academicTerm);

module.exports = AcatemicYear