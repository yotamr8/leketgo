import React from 'react'
import TableBlock from '../components/TableBlock.js'
import { Component } from "react"
import { connect } from "react-redux"
import {Alert, Card, CardColumns, OverlayTrigger, ButtonToolbar, Tooltip} from 'react-bootstrap'
import Link from 'next/link'
import Header from '../components/Header.js'
import Loading from './loading'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import { getWeekBeginning, getWeekEnding, getStartDate, getEndOfNextDay, getLastWeekBeginning } from '../dbActions/dates'

class Index extends Component {
    
    componentWillMount() {
        checkAuthAndRefresh(this.props.dispatch)
    }
    
    render() {
        let dataUpdated = false;
        if (this.props.userData.admin) {
            dataUpdated = this.props.updated.users && this.props.updated.tasks
        } else {
            dataUpdated = this.props.updated.unassigned && this.props.updated.assigned && this.props.updated.reports
        }

        if (!this.props.authChecked || !this.props.isLoggedIn || !dataUpdated) {
            return (<Loading />)
        }

        let atNum = this.props.assignedTasks.length;
        let trNum = this.props.taskReports.length;
        let alert = ''; 
        if (atNum > 0 || trNum > 0){
            alert = <Alert variant='warning'><i className="fas fa-bell"></i>
                היי {this.props.userData.firstName}, יש לך {atNum > 0 ? <Link href="/assigned-tasks"><a><strong>{atNum}</strong> איסופים קרובים</a></Link> : ''}{(atNum > 0 && trNum > 0 ? ' ועוד ' : '')}{trNum > 0 ? <Link href='/task-reports'><a><strong>{trNum}</strong> איסופים הממתינים למשוב</a></Link> : ''}.
                </Alert>
        }

        if (!this.props.userData.admin) {
            return (
                <div>
                    <Header active='index' />
                    <div className='app'>
                    <div className="wrapper d-flex justify-content-center">
                        <main className="m-2">
                            {alert}
                            <div className="mb-4 mt-4">
                                <h2><img src='/static/assign.png' width="60"/>איסופים פנויים</h2>
                            </div>
                            <TableBlock isSelectable={true} data={this.props.unassignedTasks} page='index' type='tasks' />
                        </main></div></div>
                </div>
            );
        } else {
            var tasks = this.props.regionalTasks
            var users = this.props.users
            console.log(users)

            var urgentTasks = 0;
            var weeklyTasks = 0;
            var reportsAwaiting = 0;
            var futureTasks = 0;

            var now = new Date();
            var weekBeginning = getWeekBeginning()
            var dayBeginning = getStartDate()
            var weekEnding = getWeekEnding()
            var endOfNextDay = getEndOfNextDay()
            var lastWeekBeginning = getLastWeekBeginning()

            var uids = {};
            var activeUsers = 0;
            var totalUsers = 0;

            for (let user of users) {
                if (!user.disabled) {
                    uids[user.uid] = false
                    totalUsers++;
                }
            }
            console.log(uids)

            for (let task of tasks) {
                if (task.volunteerUid != null && task.timestamp.toDate() > lastWeekBeginning) {
                    uids[task.volunteerUid] = true
                }
                if (task.volunteerUid == null && task.timestamp.toDate() > dayBeginning && task.timestamp.toDate() < endOfNextDay) {
                    urgentTasks++;
                }            
                if (task.timestamp.toDate() > weekBeginning && task.timestamp.toDate() < weekEnding) {
                    weeklyTasks++;
                }
                if (task.timestamp.toDate() > now && task.timestamp.toDate() < weekEnding) {
                    futureTasks++;
                }
                if ((task.collected && task.reportFilled == false) ||
                    (task.volunteerUid != null && task.timestamp.toDate() < now && task.reportFilled == false)) {
                    reportsAwaiting++;
                }
            }

            for (let uid in uids) {
                if (uids[uid]) {
                    activeUsers++;
                }
            }

            console.log(urgentTasks, weeklyTasks, futureTasks, reportsAwaiting )
            return <div>
            <Header active='index' />
            <div className='app'>
            <div className="wrapper d-flex justify-content-center">
                <main className="m-2" style={{ paddingBottom: '3rem' }}>
                    {alert}
                    <div className="mb-4 mt-4">
                        <h2><img src='/static/dashboard.png' width="60"/>לוח בקרה</h2>
                        <CardColumns className='mt-4'>
                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <Card.Header>השבוע</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <div style={{ textAlign: 'center', fontSize: '2rem' }}>{urgentTasks}</div>
                                <div>
                                    <ButtonToolbar>
                                    <OverlayTrigger
                                    key='help'
                                    
                                    overlay={
                                        <Tooltip id='tooltip'>
                                        איסופים הקבועים להיום ומחר שעדיין לא שובצו לאף מתנדב
                                        </Tooltip>
                                    }>
                                   <div style={{width: '100%', textAlign: 'center'}}> איסופים דחופים לשיבוץ <i className="fas fa-question-circle"></i></div>
                                    </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                                <div className='mt-4'><i className="fas fa-hourglass-start fa-fw"></i>{futureTasks} איסופים עתידיים</div>
                                <div><i className="far fa-calendar-times fa-fw"></i>{reportsAwaiting} משובים לא מולאו</div>
                                <div><i className="far fa-calendar-alt fa-fw"></i>{weeklyTasks} איסופים סה"כ</div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                            <Card>
                                <Card.Header>סטטוס מתנדבים</Card.Header>
                                <Card.Body>
                                <Card.Text>
                                    <div style={{ textAlign: 'center', fontSize: '2rem' }}>{activeUsers}</div>
                                    <div  style={{textAlign: 'center'}}>מתנדבים פעילים השבוע</div>
                                    <div className='mt-4'><i className="far fa-user fa-fw"></i>{totalUsers} מתנדבים באזור {this.props.userData.region}</div>                                    
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                    </div>
                </main></div></div>
            </div>;
        }
    }
}

export default connect(state => state)(Index);