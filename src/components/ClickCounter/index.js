import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => ({
      count: prevState.count+ 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="headi">
            The Button has been clicked <span className="sp">{count}</span>{' '}
            times
          </h1>
          <p className="para">Click the button to increase the count!</p>
          <button className="btn" onClick={this.onIncreament}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
