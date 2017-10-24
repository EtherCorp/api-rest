import React, { Component } from 'react'
import List from './modules/accounts/List'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='layout'>
          <div className='menu'>
            <div className='title'>
              <img width='180' src='https://www.santander.cl/hyf_html/css/bitmaps/logo-santander.png' />
            </div>
            <div className='menu-items'>
              <div className='menu-item'>
                Personas
              </div>
              <div className='menu-item'>
                Personas
              </div>
              <div className='menu-item'>
                Personas
              </div>
              <div className='menu-item'>
                Personas
              </div>
              <div className='menu-item'>
                Personas
              </div>
            </div>
          </div>
          <div className='content'>
            <List/>
          </div>
        </div>
      </div>
    )
  }
}