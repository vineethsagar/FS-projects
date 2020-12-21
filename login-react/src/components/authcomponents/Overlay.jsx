import React from 'react'
import './authStyles.css'

function Overlay() {
    return (
        <div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
                <h1>have an account?</h1>
                <h3>Welcome back !</h3>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Don't have an account?</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
    )
}

export default Overlay
