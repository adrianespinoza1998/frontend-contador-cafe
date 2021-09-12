import React from 'react';
import { Login } from './Login';
import {config} from 'dotenv'

config();

const ContadorCafe =()=> {
    return (
        <div>
            <Login />
            <di>process.env.prueba</di>
        </div>
    )
}

export default ContadorCafe
