import React from 'react'
import TableBlock from '../components/TableBlock.js'
import { Component } from "react"
import { connect } from "react-redux"
import {Alert, Card, CardColumns, OverlayTrigger, ButtonToolbar, Tooltip} from 'react-bootstrap'
import Link from 'next/link'
import Header from '../components/Header.js'
import Loading from './loading'
import checkAuthAndRefresh from '../dbActions/checkAuth'

class Index extends Component {
    
    componentWillMount() {
        checkAuthAndRefresh(this.props.dispatch)
    }
    
    render() {
        if (!this.props.authChecked || !this.props.isLoggedIn) {
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
                <Header page='index' />
                <div className='app'>
                <div className="wrapper d-flex justify-content-center">
                    <main className="m-2" style={{ paddingBottom: '3rem' }}>
                        {alert}
                        <div className="mb-4 mt-4">
                            <h2><img src='/static/assign.png' width="60"/>שיבוץ לאיסופים</h2>
                        </div>
                        <TableBlock isSelectable={true} data={this.props.unassignedTasks} page='index' type='tasks' />
                    </main></div></div>
                </div>
            );
        } else {
            return <div>
            <Header page='index' />
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
                                <div style={{textAlign: 'center', fontSize: '2rem'}}>5</div>
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
                                <div className='mt-4'><i className="fas fa-hourglass-start fa-fw"></i>21 איסופים עתידיים</div>
                                <div><i className="far fa-calendar-times fa-fw"></i>11 משובים לא מולאו</div>
                                <div><i className="far fa-calendar-alt fa-fw"></i>51 איסופים סה"כ</div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                            <Card>
                                <Card.Header>סטטוס מתנדבים</Card.Header>
                                <Card.Body>
                                <Card.Text>
                                    <div style={{textAlign: 'center', fontSize: '2rem'}}>143</div>
                                    <div  style={{textAlign: 'center'}}>מתנדבים פעילים השבוע</div>
                                    <div className='mt-4'><i className="far fa-user fa-fw"></i>324 מתנדבים באזור {this.props.userData.region}</div>
                                    <div><i className="far fa-envelope fa-fw"></i>2 אימותי דוא"ל ממתינים</div>
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