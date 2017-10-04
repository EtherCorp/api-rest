import React, { Component } from 'react'
import ListItem from './ListItem'
import CustomAxios from '../../utils/CustomAxios'

export default class List extends Component {
  state = {
    accounts: null,
    loading: false,
  }

  componentWillMount() {
    this.setState({ loading: true })

    CustomAxios.get('accounts')
      .then(response => {
        this.setState({
          loading: false,
          accounts: this.response.data
        })
      })
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.onAccountSelection(this.props.data.id)
  }

  renderTable() {
    return (
      <div className='accounts-list-container'>
        {this.renderElements()}
      </div>
    )
  }

  renderElements() {
    return this.state.accounts.map(account => {
      return (
        <ListItem
          data={account}
          onClick={this.onClick}
        />
      )
    })
  }

  renderLoading() {
    return (
      <h1>Cargando...</h1>
    )
  }

  renderEmpty() {
    return (<h1>{'No hay cuentas :('}</h1>)
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading()
    }

    if (!this.props.accounts) {
      return this.renderEmpty()
    }

    return this.renderTable()
  }
}