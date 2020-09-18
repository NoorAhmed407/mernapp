import React, { Component } from 'react';
import actionUpdateName from '../Redux/actions/actionUpdateName';
import actionUpdateClass from '../Redux/actions/actionUpdateClass';
import actionUpdateFees from '../Redux/actions/actionUpdateFees';
import { connect } from 'react-redux';
import axios from 'axios';

export class AddStudent extends Component {

    handleNameChange =(e)=>{
        this.props.updateName(e.target.value);
    }

    handleClassChange =(e)=>{
        this.props.updateClass(e.target.value);      
    }

    handleFeesChange =(e)=>{
        this.props.updateFees(e.target.value);
    }

    addStudent =(e)=>{
        e.preventDefault();
        const {studentName, studentClass, studentFees} = this.props
        const studentObject = {
            name: studentName,
            class: studentClass,
            fees: studentFees
          };

          const token = JSON.parse(localStorage.getItem('user')).token;
          axios.post('http://localhost:4000/api/students', studentObject,{
              headers : {
                "Content-Type": "application/json;charset=UTF-8",
                "x-auth-token": token,
              }
          })
            .then(res => {
                console.log("create student response:", res);
            })
            .catch(err => {
                console.log("create student err:", err);
            });

        this.props.history.push('/');
    }
    render() {
        return (
            <div className=" container mt-4">
                <h1>Add Student</h1>
                <div className="mt-3">
                <label>Fullname</label>
                        <input 
                        className="form-control"
                        name= "name"
                        onChange={this.handleNameChange}
                        type="text" 
                     /> <br/>

                        <label>Class</label>
                        <input 
                        className="form-control"
                        name="class"
                        type="text" 
                        onChange={this.handleClassChange}
                       /> <br/>

                        <label>Fees</label>
                        <input 
                        className="form-control" 
                        onChange={this.handleFeesChange}
                        name="fees"
                        type="text" 
                      /> <br/>

                      <button 
                      onClick={this.addStudent}
                      className="btn btn-success">Add Student</button>

                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        studentName: state.student.name,
        studentClass: state.student.class,
        studentFees: state.student.fees
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        updateName : text => {dispatch(actionUpdateName(text))},
        updateClass : text => {dispatch(actionUpdateClass(text))},
        updateFees : text => {dispatch(actionUpdateFees(text))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddStudent);
