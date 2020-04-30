import React, {Component} from 'react';
import classes from './Auth.module.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {

    loginHandler = () => {

    };

    registerHandler = () => {

    };

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Auth</h1>
                    <form className={classes.AuthForm} onSubmit={this.submitHandler}>
                        <Input
                        label='E-mail'
                        />
                        <Input
                        label='Password'
                        errorMessage='No'
                        />
                        <Button
                            type='success'
                            onClick={this.loginHandler}
                        >Login</Button>
                        <Button
                            type='primary'
                            onClick={this.registerHandler}
                        >Registration</Button>

                    </form>
                </div>
            </div>
        )
    }
}