const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    class: {
        type: String,
        required: [true, 'Name field is required']

    },
    
    fees: {
        type: Number,
        required: [true, 'Name field is required']
    }
});


const Student = mongoose.model('student', StudentSchema);


module.exports = Student;