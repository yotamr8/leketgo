import React, { Component } from 'react';
import "../statics/styles.scss"
import TableBlock from '../components/TableBlock.js'
import { connect } from "react-redux"
import Header from '../components/Header.js'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'

class Task_reports extends Component {

    componentWillMount() {
        checkAuthAndRefresh(this.props.dispatch)
    }

    render() {
        console.log(this.props);
        if (!this.props.authChecked || !this.props.isLoggedIn) {
            return (<Loading />)
        }
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