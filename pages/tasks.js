import React from 'react'
import "../statics/styles.scss"
import TableBlock from '../components/TableBlock.js'
import { Component } from "react"
import { connect } from "react-redux"

class Users extends Component {
    render() {
        return (
            <main className="m-2" style={{ paddingBottom: '3rem' }}>
                <div className="mb-4 mt-4">
                    <h2>משתמשים</h2>
                </div>
                <TableBlock data={this.props.regionalTasks} page='adminTasks' type='tasks' />
            </main>
        )
    }
}

export default connect(state => state)(Users);