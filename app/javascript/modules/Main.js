import React, { Component } from 'react'
import Accounts from './accounts/List'
import Movements from './movements/List'

export default class Main extends Component {
  state = {
    account_id: null
  }

  onAccountSelection = (account_id) => {
    console.log("Selected ${account_id}")
  }

  render() {
    <div className='main-container'>
      <Accounts
        onAccountSelection={this.onAccountSelection}
      />
    </div>
  }
}