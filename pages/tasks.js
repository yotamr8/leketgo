import React from 'react'
import TableBlock from '../components/TableBlock.js'
import { Component } from "react"
import { connect } from "react-redux"
import Header from '../components/Header.js'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'
import {Nav} from 'react-bootstrap'
import Link from 'next/link'

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
                <Header />
                <div className='app'>
                    <div className="wrapper d-flex justify-content-center">
                        <main className="m-2" style={{ paddingBottom: '3rem' }}>
                            <div className="mb-4 mt-4">
                                <h2><img src='/static/tasks.png' width="60"/>איסופים</h2>
                                <Nav className="mt-4" variant="tabs" defaultActiveKey="/home">
                                    <Nav.Item>
                                        <Link className='navlink' href="/tasks"><a className='nav-link active'>משימות עתידיות</a></Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link className='navlink' href="/tasks"><a className='nav-link'>משימות עבר</a></Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <TableBlock isSearchable={true} data={this.props.regionalTasks} page='adminTasks' type='tasks' />
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Users);