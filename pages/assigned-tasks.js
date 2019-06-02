import React, { Component } from 'react';
import "../statics/styles.scss"
import TableBlock from '../components/TableBlock.js'
import { connect } from "react-redux"
import Header from '../components/Header.js'

class Assigned_tasks extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <main className="m-2" style={{ paddingBottom: '3rem' }}>
                    <div className="mb-4 mt-4">
                        <h2>איסופים קרובים</h2>
                    </div>
                    <TableBlock page='assignedTasks' type='tasks' data={this.props.assignedTasks} />
                </main>
            </div>
        )
    }
}

export default connect(state => state)(Assigned_tasks);