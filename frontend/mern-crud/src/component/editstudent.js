import React, { Component } from 'react';

export class EditStudent extends Component {
    render() {
        return (
            <div className=" container mt-4">
                <h1>Edit Student</h1>
                <div className="mt-3">
                <label>Fullname</label>
                        <input 
                        className="form-control"
                        name= "name"
                        // onChange={}
                        type="text" 
                     /> <br/>


                        <label>Class</label>
                        <input 
                        className="form-control"
                        name="class"
                        type="text" 
                        // onChange={}
                       /> <br/>


                        <label>Fees</label>
                        <input 
                        className="form-control" 
                        // onChange={}
                        name="phone"
                        type="text" 
                      /> <br/>

                      <button className="btn btn-success">Change</button>

                </div>
            </div>
        )
    }
}

export default EditStudent;
