import React, { Component } from 'react';
import "../statics/styles.scss"
import TableBlock from '../components/TableBlock.js'
import { connect } from "react-redux"

class Task_reports extends Component {
    render() {
        return (
            <main className="m-2" style={{ paddingBottom: '3rem' }}>
                <div className="mb-4 mt-4">
                    <h2>מילוי משוב</h2>
                </div>
                <TableBlock data={this.props.taskReports} page='taskReports' type='tasks' />
            </main>
        )
    }
}

export default connect(state => state)(Task_reports)