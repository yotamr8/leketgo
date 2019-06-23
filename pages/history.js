import React, { Component } from 'react';
import TableBlock from '../components/TableBlock.js'
import { connect } from "react-redux"
import Header from '../components/Header.js'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'
import {Button, ButtonGroup} from 'react-bootstrap'

class History extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.toList = this.toList.bind(this);
        this.toCards = this.toCards.bind(this);
    }

    componentWillMount() {
        checkAuthAndRefresh(this.props.dispatch)
    }

    toList() {
        this.props.dispatch({ type: 'TASK_LIST_VIEW' })
    }

    toCards() {
        this.props.dispatch({ type: 'TASK_CARDS_VIEW' })
    }

    render() {
        console.log(this.props);
        if (!this.props.authChecked || !this.props.isLoggedIn) {
            return (<Loading />)
        }
        return (
            <div>
                <Header />
                <div className='app'>
                    <div className="wrapper d-flex justify-content-center">
                        <main className="m-2" style={{ paddingBottom: '3rem' }}>
                            <div className="mb-4 mt-4 d-flex flex-row justify-content-between align-items-center">
                                <h2><img src='/static/report.png' width="60"/>מילוי משוב</h2>
                                <ButtonGroup>
                                    <Button onClick={() => this.toList()} variant={!this.props.tasksCardView ? 'primary' : 'outline-secondary'}><i class="fas fa-list nm"></i></Button>
                                    <Button onClick={() => this.toCards()} variant={this.props.tasksCardView ? 'primary' : 'outline-secondary'}><i class="far fa-clone nm"></i></Button>
                                </ButtonGroup>
                            </div>
                            <TableBlock tableTasksCardView={this.props.tasksCardView} data={this.props.historyTasks} page='history' type='tasks' />
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(History)