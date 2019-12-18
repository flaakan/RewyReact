import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        const { username, password } = this.state;

    /*    axios
            .post(
                "http://localhost:8080/login",
                {
                    user: {
                        username: username,
                        password: password
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();*/
    }
    render() {
        return (
            <div>
                <AppNavbar />
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="App-intro">
                            <h1>Log in </h1>
                            <form onSubmit={this.handleSubmit}>
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

                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </header>
                </div>
            </div>
        );
    }

}
export default Login;

