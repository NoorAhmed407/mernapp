const express = require('express');
const router = express.Router();
const Student = require('./../models/studentList');
const auth = require('./../middleware/auth');


//get single student
router.get('/:id', (req,res,next)=>{
    Student.findOne({_id: req.params.id}).then(student=>{
        res.send(student);
    });
});

//get all students from database
router.get('/', (req,res,next)=>{
    console.log("route /");
    Student.find({}).then(student=>{
        res.send(student);
    });
});


//Add a new student to the database
router.post('/', auth, (req,res, next)=>{
    console.log("Create student:",req.body );
    Student.create(req.body).then(student=>{
        console.log("returning student:", student );
        res.send(student);
    }).catch(next);
});


//Update Student from the database
router.put('/:id', auth, (req,res,next)=>{
    Student.findByIdAndUpdate({_id: req.params.id},req.body)
    .then(student=>{
        Student.findOne({_id: req.params.id}).then(student=>{
            res.send(student);
        });
    });
});

//Delete Student from database
router.delete('/:id', auth, (req,res,next)=>{
    Student.findByIdAndDelete({_id: req.params.id})
    .then(student=>{
        res.send(student);
    });
});

module.exports = router;