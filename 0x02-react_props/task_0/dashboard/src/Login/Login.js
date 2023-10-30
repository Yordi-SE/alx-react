import React from 'react';
import './Login.css';

export function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email'>Email</label>
            <input id='email' type='text' />
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' />
            <button>Ok</button>
        </>
    )
}
