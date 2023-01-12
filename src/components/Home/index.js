// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <h1 className="home">Home Route</h1>
        </div>
        <LogoutButton />
      </>
    )
  }
}

export default Home
