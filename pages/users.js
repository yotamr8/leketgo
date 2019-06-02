import React from 'react'
import "../statics/styles.scss"
import TableBlock from '../components/TableBlock.js'
import { Component } from "react"
import { connect } from "react-redux"
import Header from '../components/Header.js'

class Users extends Component {
    render() {
        
        return (
            <div>
                <Header />
                <main className="m-2" style={{ paddingBottom: '3rem' }}>
                    <div className="mb-4 mt-4">
                        <h2>משתמשים</h2>
                    </div>
                    <TableBlock isSearchable={true} isSelectable={false} data={this.props.users} page='adminUsers' type='users' />
                </main>
            </div>
        )
    }
}

export default connect(state => state)(Users);