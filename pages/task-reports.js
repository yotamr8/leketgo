import React, { Component } from 'react';
import "../statics/styles.scss"
import TableBlock from '../components/TableBlock.js'
import { connect } from "react-redux"
import Header from '../components/Header.js'
import getTaskReports from '../dbActions/getTaskReports'

class Task_reports extends Component {

    componentDidMount() {
        var { dispatch } = this.props
        var { uid } = this.props.userData
        if (uid && dispatch) {
            getTaskReports(dispatch, uid);
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
                <main className="m-2" style={{ paddingBottom: '3rem' }}>
                    <div className="mb-4 mt-4">
                        <h2>מילוי משוב</h2>
                    </div>
                    <TableBlock data={this.props.taskReports} page='taskReports' type='tasks' />
                </main>
            </div>
        )
    }
}

export default connect(state => state)(Task_reports)