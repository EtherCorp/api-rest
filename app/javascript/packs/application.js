/* eslint no-console:0 */
import ReactDOM from 'react-dom'
import React from 'react'
import App from '../App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
