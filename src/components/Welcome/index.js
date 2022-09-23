// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {button: 'Subscribe'}

  buttonClick = () => {
    const {button} = this.state

    if (button === 'Subscribe') {
      this.setState(() => ({button: 'Subscribed'}))
    } else {
      this.setState(() => ({button: 'Subscribe'}))
    }
  }

  render() {
    const {button} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="submit" onClick={this.buttonClick}>
          {button}
        </button>
      </div>
    )
  }
}

export default Welcome
