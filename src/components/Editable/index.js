import Component from 'react'
import './index.css'

class Editable extends Component {
  state = {displayText: '', isSaved: false}

  changeState = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onChangeInput = event => {
    this.setState({displayText: event.target.value})
  }

  render() {
    const {displayText, isSaved} = this.state
    const text = isSaved ? 'Edit' : 'Save'
    return (
      <div className="app-container">
        <div className="editable-card">
          <h1 className="heading">Editable Text Input</h1>
          <div className="inputContainer">
            {isSaved ? (
              <p className="describe">{displayText}</p>
            ) : (
              <input
                type="text"
                value={displayText}
                className="input"
                onChange={this.onChangeInput}
              />
            )}
            <button type="button" className="save" onClick={this.changeState}>
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Editable
