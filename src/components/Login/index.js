// Write your JS code here
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const redirectingResponse = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const onLoginButton = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      redirectingResponse(data.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1 className="heading">Please Login</h1>
      <div className="button-container">
        <button className="button" type="button" onClick={onLoginButton}>
          Login with Sample Creds
        </button>
      </div>
    </div>
  )
}
export default withRouter(Login)
