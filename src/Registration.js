import React, { Component } from 'react';
import './App.scss';
import AppNavbar from './AppNavbar';
import { Button, Container } from 'reactstrap';
import axios from "axios";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        const { username, password} = this.state;
        let user = {username:username,password:password};
       axios.post('http://localhost:8080/registration',user).then(res=> {
           console.log(res)
           if(res.data.username !=null){
               
               this.setState({username:res.data.username})
               this.setState({message:"Registration Successful! Welcome to Rewy "+this.state.username+"!"})
           }
           else{
               this.setState({message:"Registration failed, try again!"});
           }
       })} 

    render() {
        return (<div>
            <AppNavbar />
            <div className="App">
                <header className="App-header">
                    <div className="App-intro"></div>
                    <Container>
                        <h1>Register</h1>
                        <div>{this.state.message}</div>
                        <input
                            type="username"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        <Button onClick={this.handleSubmit}>Register</Button>
                    </Container>
                </header>
            </div></div>

        )



    }
} export default Registration;