import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    return (
      <div className='account-item'>
        <span>{this.props.data.name}</span>
      </div>
    )
  }
}