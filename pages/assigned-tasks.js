import React, { Component } from 'react';
import TableBlock from '../components/TableBlock.js'
import { connect } from "react-redux"
import Header from '../components/Header.js'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'

class Assigned_tasks extends Component {
    constructor(props){
        super(props);
    }

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
                <div className="wrapper d-flex justify-content-center">
                <main className="m-2">
                    <div className="mb-4 mt-4">
                        <h2><img src='/static/assigned.png' width="60"/>איסופים קרובים</h2>
                    </div>
                    <TableBlock page='assignedTasks' type='tasks' data={this.props.assignedTasks} />
                </main></div>
            </div>
        )
    }
}

export default connect(state => state)(Assigned_tasks);