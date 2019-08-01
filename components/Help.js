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
          בדף עדכון פרטים אישיים ניתן לשנות סיסמא
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