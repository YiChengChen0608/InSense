import React, { useState, useEffect } from 'react'
import '../styles/style.scss'
import { withRouter } from 'react-router-dom'

class MainContent extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(MainContent)