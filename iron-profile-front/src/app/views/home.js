
import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";
import {Link} from 'react-router-dom';


function Home () {

    return (
        <div>
            <h1>IronProfile</h1>
            <p>Today we will create an app with authorization, adding some cool styles</p>
            <a><Link to = {{pathname:'/signup'}}>Sign Up</Link></a>
            <br/>
            <a><Link to = {{pathname:'/login'}}>Log in</Link></a>
        </div>
    )
}

export default Home