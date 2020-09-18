import React, { Component } from 'react';
import axios from 'axios';

export class SignUp extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    register=e=>{
        e.preventDefault()
        axios.post('http://localhost:4000/api/users/', this.state)
        .then(res=>{
            localStorage.setItem('user',JSON.stringify(res.data));
            this.props.history.push('/');
        }).catch(err=> console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-3">
                    Sign Up Here
                </h2>
                <form>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                    name="name"
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1"
                    onChange={this.handleChange}
                    aria-describedby="emailHelp" 
                    placeholder="Enter Your Name"
                     />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    name="email"
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1"
                    onChange={this.handleChange}
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"
                     />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="password"
                    onChange={this.handleChange}
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password" 
                    />
                </div>
                
                <button
                onClick={this.register}
                className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;
