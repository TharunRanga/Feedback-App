// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isSatisfied: false,
  }

  onClickEmoji = () => {
    this.setState({isSatisfied: true})
  }

  renderEmojis = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="emojis-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button className="emoji-button" type="button">
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                  onClick={this.onClickEmoji}
                />
                <br />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isSatisfied} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isSatisfied ? this.renderThankYou() : this.renderEmojis()}
        </div>
      </div>
    )
  }
}

export default Feedback
