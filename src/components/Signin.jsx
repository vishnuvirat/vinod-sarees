import React from 'react'
import GoogleButton from 'react-google-button'


const Signin = () => {

  return (
    <div>
      <h1>Sign in: </h1>
      <GoogleButton onClick={() => {handleGoogleSignIn}}/>
    </div>
  )
}

export default Signin

