import React from 'react';

import {Link } from 'react-router-dom';

const Start = (props) => {

    return(
        <>
            <h5>Welcome to the Driving Test!</h5>
            <p>You have 20 minutes to complete the test</p>
            <p>Click on start to being test.</p>
            <h6>Good luck!</h6>
            <Link to="/question/1">Start</Link>
        </>
    )
}

export default Start;