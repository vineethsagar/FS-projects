
import React from 'react'
import './auth_styles.css'
import {TextField} from '@material-ui/core'
export default function Authentication(){
    const [tclassName , setClassName] = React.useState('container')

    const changeClass = ()=>{
        const addName = 'right-panel-active';
        if(!tclassName.includes(addName)){
            const tempname = tclassName+' '+addName;
            setClassName(tempname);
        }else{
            const tempname = tclassName.replace(addName,'');
            setClassName(tempname);
        }
    
    }
    return (
    <div className={tclassName} id="container">
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <TextField type="text" label='Name'  
                variant="outlined"
                margin="normal"
                size='small'
                required
                fullWidth />
                <TextField type="email" 
                label='Email'
                name='email'  
                variant="outlined"
                margin="normal"
                size='small'
                required
                fullWidth />
                <TextField type="password" 
                label='Password'
                name='Password'  
                variant="outlined"
                margin="normal"
                size='small'
                required
                fullWidth />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <TextField 
                label='Email'
                name='email'  
                variant="outlined"
                margin="normal"
                size='small'
                required
                fullWidth/>
                <TextField 
                label='Password'
                name='password'
                type='Password'  
                variant="outlined"
                margin="normal"
                size='small'
                required
                fullWidth />
                <a href="www.google.com">Forgot your password?</a>
            <button>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>have an account?</h1>
                    <h3>Welcome back !</h3>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn" onClick={changeClass} >Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Don't have an account?</h1>
                    <p>Enter your personal details to create an account</p>
                    <button className='ghost' id="signUp" onClick={changeClass} >Sign Up</button>
                </div>
            </div>
        </div>
    </div>
);
}
//! use react.usestate to update class name when function is call on click