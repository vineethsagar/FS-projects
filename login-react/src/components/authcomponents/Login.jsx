import React from 'react'
import './authStyles.css'

function Login() {
    return (
        <div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
    )
}

export default Login

/**
 * <form>
                <h1>Sign in</h1>
			    <input type="email" placeholder="Email" />
			    <input type="password" placeholder="Password" />
			    <a href="www.google.com">Forgot your password?</a>
			    <button>Sign In</button>
            </form>
 */