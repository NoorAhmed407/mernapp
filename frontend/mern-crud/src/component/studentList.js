import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchStudents from './../Redux/actions/fetchStudents';
import {Link} from 'react-router-dom';
import axios from 'axios';

export class StudentList extends Component {
    componentDidMount=()=>{
        this.props.fetchStudents()
    }


    render() {
        console.log(this.props.studentList)
        return (
            <div className="container my-4">
                <h1>Students
                <span className="float-right">
                <Link 
                    className="btn btn-info"
                    to="/add">Add Students</Link>
                </span>
                </h1>
                
                <div className="mt-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Class</th>
                                <th scope="col">Fees</th>
                                <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.studentList.map((student,ind)=>{
                                   return(
                                    <tr key={ind}>
                                        <td>{student.name}</td>
                                        <td>{student.class}</td>
                                        <td>{student.fees}</td>
                                        <td>
                                            <Link 
                                            className="btn btn-sm btn-primary m-1"
                                            to={`/edit/${student._id}`}>Edit</Link>
                                            <Link
                                            to={`/delete/${student._id}`}
                                            className="btn btn-sm btn-danger m-1"
                                            >Delete</Link>
                                        </td>
                                    </tr>
                                   ) 
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
            
        
    }
}

const mapStateToProps= (state)=>{
    return{
        studentList: state.student.students
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchStudents: ()=>{dispatch(fetchStudents())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentList);
