import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    return (
      <div className='movement-item'>
        <div className='movement-title'>
          {this.props.data.title}
        </div>
      </div>
    )
  }
}