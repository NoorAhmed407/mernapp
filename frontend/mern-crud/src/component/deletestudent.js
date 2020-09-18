import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import fetchSingleStudent from './../Redux/actions/fetchSingleStudent';

export class DeleteStudent extends Component {
    id = this.props.match.params.id;

    componentDidMount=()=>{
        console.log(this.id);
        this.props.getSingleStudent(this.id);
    }

    deleteData = e =>{
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('user')).token;
        axios.delete(`http://localhost:4000/api/students/${this.id}`,{
            headers : {
                "Content-Type": "application/json;charset=UTF-8",
                "x-auth-token": token,
              }
        })
        .then((res) => {
            console.log('Student successfully deleted!')
            this.props.history.push('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    back= e =>{
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container text-center mt-3">
                <h3>Are you Sure Do You want to delete?</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Class</td>
                            <td>Fees</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.studentDetails.name}</td>
                            <td>{this.props.studentDetails.class}</td>
                            <td>{this.props.studentDetails.fees}</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <div>
                     <button 
                     onClick={this.deleteData}
                     className="btn btn-success m-2">Yess</button>
                    <button 
                    onClick={this.back}
                    className="btn btn-danger m-2">No</button>


                </div>
                
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        studentDetails: state.student.student,
    }   
}

const mapDispatchToProps=dispatch=>{
    return{
        getSingleStudent : (student_id)=>{dispatch(fetchSingleStudent(student_id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteStudent);
