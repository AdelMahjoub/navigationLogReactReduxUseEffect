import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { pushRoute } from '../store/actions/navigationLogActions'

import Layout from '../components/Layout'

const Contact = (props) => {
  useEffect(() => {
    props.pushRoute(props.match);
    console.log(props.routesHistory)
  }, [])
  return (
    <Layout>
      <h1>Contact page</h1>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  routesHistory: state.navigationLog.routes
})

const mapDispatchToProps = ({ pushRoute })

export default connect(mapStateToProps, mapDispatchToProps)(Contact)