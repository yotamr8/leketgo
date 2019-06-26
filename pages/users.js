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
    constructor(props) {
        super(props);

        var users = this.props.users;
        var activeUsers = [];
        var disabledUsers = [];

        for (let user of users) {
            if (user.disabled) {
                disabledUsers.push(user)
            } else {
                activeUsers.push(user)
            }
        }
        console.log(users, activeUsers, disabledUsers)

        this.state = {
            tables: [
                {
                    page: 'adminUsers',
                    name: 'משתמשים פעילים',
                    data: activeUsers,
                    isSearchable: true,
                    isSelectable: false,
                    type: 'users'
                },
                {
                    page: 'adminUsersDeactivated',
                    name: 'משתמשים סגורים',
                    data: disabledUsers,
                    isSearchable: true,
                    isSelectable: false,
                    type: 'users'
                },
            ],
            activeTable: 0,
        }
        this.switchTable = this.switchTable.bind(this);
    }
	componentWillMount() {
        checkAuthAndRefresh(this.props.dispatch)
    }

    switchTable(index) {
        this.setState({activeTable: index});
    }
	
	render() {
        if (!this.props.authChecked || !this.props.isLoggedIn) {
            return (<Loading />)
        }
        let activeTable = this.state.tables[this.state.activeTable];
        return (
            <div>
                <Header active='adminUsers' />
                <div className='app'>
                    <div className="wrapper d-flex justify-content-center">
                        <main className="m-2">
                            <div className="mb-4 mt-4">
                                <h2><img src='/static/profile.png' width="60"/>מתנדבים</h2>
                                <Nav className="mt-4" variant="tabs" defaultActiveKey="/home">
                                    {this.state.tables.map((table, index) => {
                                    return (
                                        <Nav.Item>
                                            <Link key={index} className='navlink' href="/users" ><a onClick={() => this.switchTable(index)} className={'nav-link' + (activeTable.page == table.page ? ' active' : '')}>{table.name}</a></Link>
                                        </Nav.Item>
                                        );
                                    })}
                                </Nav>
                            </div>
                            <TableBlock isSearchable={activeTable.isSearchable} data={activeTable.data} page={activeTable.page} type={activeTable.type} />
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Users);