import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchSingleStudent from './../Redux/actions/fetchSingleStudent';

export class EditStudent extends Component {

    id = this.props.match.params.id;
        state= {
            name: "",
            class: "",
            fees: 0
        }

    componentDidMount=()=>{
        console.log(this.id);
        this.props.getSingleStudent(this.id);
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
    }

    update=(e)=>{
        e.preventDefault();
        const studentObject = {
            name: this.state.name,
            class: this.state.class,
            fees: this.state.fees
        };

        axios.put(`http://localhost:4000/api/students/${this.id}`, studentObject)
        .then(res=>{
            console.log(res.data);
            this.props.history.push('/');
        });

    }
    render() {
        return (
            <div className=" container mt-4">
                <h1>Edit Student</h1>
                <h6 className="text-center text-danger">Previous Details</h6>
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
                <div className="mt-5">
                <h6 className="text-center text-danger">Update Details</h6>
                <label>Fullname</label>
                        <input 
                        className="form-control"
                        name= "name"
                        onChange={this.handleChange}
                        type="text" 
                     /> <br/>


                        <label>Class</label>
                        <input 
                        className="form-control"
                        name="class"
                        type="text" 
                        onChange={this.handleChange}
                       /> <br/>

                        <label>Fees</label>
                        <input 
                        className="form-control" 
                        onChange={this.handleChange}
                        name="fees"
                        type="number" 
                      /> <br/>

                      <button
                      onClick={this.update}
                      className="btn btn-success">Change</button>

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

export default connect(mapStateToProps,mapDispatchToProps)(EditStudent);
