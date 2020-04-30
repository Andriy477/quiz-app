import React, {Component} from 'react';
import classes from './Auth.module.css';
import Button from "../../components/UI/Button/Button";

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
                        <input type="text"/>
                        <input type="text"/>
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