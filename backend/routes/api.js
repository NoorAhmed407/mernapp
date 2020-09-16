const express = require('express');
const router = express.Router();
const Student = require('./../models/studentList');


//get single student
router.get('/:id', (req,res,next)=>{
    Student.findOne({_id: req.params.id}).then(student=>{
        res.send(student);
    });
});

//get all students from database
router.get('/', (req,res,next)=>{
    Student.find({}).then(student=>{
        res.send(student);
    });
});


//Add a new student to the database
router.post('/', (req,res, next)=>{
    Student.create(req.body).then(student=>{
        res.send(student);
    }).catch(next)
});


//Update Student from the database
router.put('/:id', (req,res,next)=>{
    Student.findByIdAndUpdate({_id: req.params.id},req.body)
    .then(student=>{
        Student.findOne({_id: req.params.id}).then(student=>{
            res.send(student);
        });
    });
});

//Delete Student from database
router.delete('/:id', (req,res,next)=>{
    Student.findByIdAndDelete({_id: req.params.id})
    .then(student=>{
        res.send(student);
    });
});

module.exports = router;