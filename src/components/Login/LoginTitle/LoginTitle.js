import React from 'react';

import classes from './LoginTitle.css';

const LoginTitle = () => {
    return (
        <div className={classes.logoContainer}>
            <img src={require("../../../assets/images/whiteoutline.png")} alt="Company's Logo" />
        </div>
    );
};

export default LoginTitle;