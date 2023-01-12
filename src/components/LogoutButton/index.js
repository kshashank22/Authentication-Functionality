// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="logout-button">
      <button type="button" onClick={onLogoutButton}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
