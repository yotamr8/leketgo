import React from 'react'
import TableBlock from '../components/TableBlock.js'
import { Component } from "react"
import { connect } from "react-redux"
import Header from '../components/Header.js'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'

class Users extends Component {
    
	componentWillMount() {
        checkAuthAndRefresh(this.props.dispatch)
    }
	
    render() {
        if (!this.props.authChecked || !this.props.isLoggedIn) {
            return (<Loading />)
        }

        return (
            <div>
                <Header /><div className='app'><div className="wrapper d-flex justify-content-center">
                <main className="m-2" style={{ paddingBottom: '3rem' }}>
                    <div className="mb-4 mt-4">
                        <h2><img src='/static/tasks.png' width="60"/>איסופים</h2>
                    </div>
                    <TableBlock isSearchable={true} data={this.props.regionalTasks} page='adminTasks' type='tasks' />
                </main></div></div>
            </div>
        )
    }
}

export default connect(state => state)(Users);