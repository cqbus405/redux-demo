import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from '../action/actions'

class Main extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(get('http://39.98.198.86:3000/locations?place=华宇广场&region=重庆'))
  }

  render() {
    return (
      <div>TEST</div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(Main)