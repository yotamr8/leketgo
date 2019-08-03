import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import fire from '../config/firebaseConfig'
import {Popover, ButtonToolbar, Tooltip, OverlayTrigger, Badge, Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Link from 'next/link'
import '../static/bootstrap.min.scss'
import '../static/styles.scss'

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instruction: {
                index: this.props.userData.admin ? 'dashboard' : 'index',
                profile: 'profile',
                assignedTasks: 'assignedTasks',
                taskReports: 'taskReports',
                history: 'history',
                adminTasks: 'adminTasks',
                adminUsers: 'adminUsers'
            }
        }
    }

    render() {
        return (<ButtonToolbar>
        
            <OverlayTrigger
            trigger="click"
            key='bottom'
            placement='bottom'
            rootClose='true'
            overlay={
        <Popover
          title={`עזרה`}
        >
        {this.state.instruction[this.props.page]}
        </Popover>}>
        {/* <OverlayTrigger
            key='help'
            placement='bottom'
            overlay={
                <Tooltip id='tooltip'>
                עזרה
                </Tooltip>
            }> */}
            <Nav.Link><i className="fas fa-question-circle"></i></Nav.Link>
        </OverlayTrigger>
        {/* </OverlayTrigger> */}
        </ButtonToolbar>);
    }
}

export default connect(state => state)(Help);