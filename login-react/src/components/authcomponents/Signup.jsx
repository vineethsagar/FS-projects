import React from 'react'
import './authStyles.css'

function Signup() {

	function handleSignin(e){
		console.log(e);
	}
    return (
        <div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="www.google.com">Forgot your password?</a>
			<button onClick={handleSignin}>Sign In</button>
		</form>
	</div>
    )
}

export default Signup
