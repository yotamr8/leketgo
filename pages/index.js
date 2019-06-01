import React from 'react'
import "../statics/styles.scss"
import TableBlock from '../components/TableBlock.js'
import { Component } from "react"
import { connect } from "react-redux"
import {Alert} from 'react-bootstrap'
import Link from 'next/link'

class Index extends Component {
    
    render() {
        console.log(this.props);
        let atNum = this.props.assignedTasks.length;
        let trNum = this.props.taskReports.length;
        let alert = ''; 
        if (atNum > 0 || trNum > 0){
            alert = <Alert variant='warning'>
                היי {this.props.userData.firstName}, יש לך {atNum > 0 ? <Link href="/assigned-tasks"><a><strong>{atNum}</strong> איסופים קרובים</a></Link> : ''} {(atNum > 0 && trNum > 0 ? 'ועוד' : '')} {trNum > 0 ? <Link href='/task-reports'><a><strong>{trNum}</strong> איסופים הממתינים למשוב</a></Link> : ''}.
                </Alert>
        }

        if (!this.props.userData.isManager) {
            return (
                <main className="m-2" style={{ paddingBottom: '3rem' }}>
                    {alert}
                    <div className="mb-4 mt-4">
                        <h2>שיבוץ לאיסופים</h2>
                    </div>
                    <TableBlock isSelectable={true} data={this.props.unassignedTasks} page='index' type='tasks' />
                </main>
            );
        } else {
            return <div>לוח בקרה של מנהל</div>;
        }
    }
}

export default connect(state => state)(Index);