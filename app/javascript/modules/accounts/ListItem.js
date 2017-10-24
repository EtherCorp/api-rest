import React, { Component } from 'react'

export default class ListItem extends Component {
  amountClass(amount) {
    if (amount < 0) {
      return 'negative'
    }

    return 'positive'
  }

  render() {
    const { name, amount, number, account_type } = this.props.data

    return (
      <div className='account-item'>
        <div className='account-main-data'>
          <div className='account-name'>
            {name}
          </div>
          <div className={`${this.amountClass(amount)} account-amount`}>
            {amount}
          </div>
        </div>
        <div className='account-secondary-data'>
          <div className='account-number'>
            {number}
          </div>
          <div className='account-type'>
            {account_type}
          </div>
        </div>
      </div>
    )
  }
}