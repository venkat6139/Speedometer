import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para">Speed is {count}mph</h1>
        <p className="para1">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button onClick={this.onIncrement} className="button1" type="button">
            Accelerate
          </button>
          <button onClick={this.onDecrement} className="button2" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
