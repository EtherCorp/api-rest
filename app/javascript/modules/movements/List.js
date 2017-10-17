import React, { Component } from 'react'
import ListItem from './ListItem'
import CustomAxios from '../../utils/CustomAxios'

export default class List extends Component {
  state = {
    movements: null,
    account_id: null,
    loading: false,
  }

  componentWillMount() {
    if (this.props.account_id) {
      this.setState({ loading: true }) // Render!

      CustomAxios.get(`account/${this.props.account_id}/movements`)
        .then(response => {
          console.log(response)
          this.setState({
            loading: false,
            movements: this.response.data
          }) // Render!
        })
    }
  }

  renderTable() {
    return (
      <div className='movements-list-container'>
        {this.state.movements.map( movement => {
          return <ListItem data={movement} />
        })}
      </div>
    )
  }

  renderLoading() {
    return (
      <h1>Cargando...</h1>
    )
  }

  renderEmpty() {
    let text = 'Seleccione una cuenta para ver los movimientos'

    if (account_id && !movements) {
      text = 'Esta cuenta no tiene movimientos'
    }

    return (<h1>{text}</h1>)
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading()
    }

    if (!this.state.movements) {
      return this.renderEmpty()
    }

    return this.renderTable()
  }
}