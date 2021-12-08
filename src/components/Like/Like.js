import React from 'react';
import './Like.css';

export default class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likeCount: 0 };
  }

  render() {
    return (
      <div className='Like'>
        <button className='like-btn' onClick={
          () => this.setState({ likeCount: this.state.likeCount - 1 })
        }><h1 className='btn-emoji'>👎</h1></button>

        <h1 className='like-count'>{ this.state.likeCount }</h1>

        <button className='like-btn' onClick={
          () => this.setState({ likeCount: this.state.likeCount + 1 })
        }><h1 className='btn-emoji'>👍</h1></button>
      </div>
    );
  }
}
