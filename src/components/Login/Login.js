import React, { Component } from 'react';

import classes from './Login.css';

class Login extends Component {
    render() {
        return (
            <div className={classes.loginWrapper}>

                {/* Logo display */}
                <div className={classes.logoContainer}>
                    <img src={require("../../assets/images/whiteoutline.png")} alt="Company's Logo" />
                </div>

                {/* Actual login form */}
                <div className="container-fluid">
                    <form action="" method="" className={classes.loginForm}>
                        <p>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input className="form-control" type="text" id="username" required
                                    placeholder="What's your username?" name="username"></input>
                        </p>
                        <p>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input className="form-control" type="password" id="password" required
                                    placeholder="What's your password?" name="password"></input>
                        </p>
                        <p className={classes.submit}>
                            <button id="submit-button" type="submit" name="submit" value="submit"><i className="fa fa-arrow-right fa-2x"></i></button>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login