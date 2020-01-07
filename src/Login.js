import React, { Component } from 'react';
import './App.scss';
import AppNavbar from './AppNavbar';
import { Link} from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            message: [],
            loggedinuser: []
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
        const { username, password, loggedinuser } = this.state;
        let user = { username: username, password: password };
        axios.post('http://localhost:8080/login', user).then(res => {
            if (res.data.username != null) {
                console.log(res.data)
                this.setState({ loggedinuser: res.data })
                this.sendData();
                this.props.history.push("/");
            }
            else {
                this.setState({ message: "Login unsuccessful, try again!" });
            }
        })
    }

    sendData = () => {
        this.props.parentCallback(this.state.loggedinuser);
   }

    render() {
        return (
            <div>
                <AppNavbar />
                <div className="App">
                    <header className="App-header">
                        <div className="App-intro">
                            <h1>Log in </h1>
                            <div>{this.state.message}</div>
                            <Container>
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
                                <div>
                                    <Button onClick={this.handleSubmit}>Login</Button>
                                    <Link to="/register">
                                        <Button>Register</Button>
                                    </Link>
                                </div>
                            </Container>
                        </div>
                    </header>
                </div>
            </div>
        );
    }

}
export default Login;

