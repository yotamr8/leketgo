import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import fire from '../config/firebaseConfig'
import {Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserDropdown: false
        }

        this.toggleUserDropDown = this.toggleUserDropDown.bind(this);
    }

    toggleUserDropDown() {
        this.setState({isUserDropdown: !this.state.isUserDropdown});
    }

    logout = () => {
        fire.auth().signOut(
        ).then(
            () => {
                this.props.dispatch({ type: 'LOGOUT' });
            }).catch(
            (err) => {
                console.log("error on logout.", err)
            });
    }
    
    render() {
        let pages;
        if (!this.props.userData.isManager) {
            let atNum = this.props.assignedTasks.length;
            let trNum = this.props.taskReports.length;
            pages = 
            <Nav className="mr-auto">
                <Nav.Link href="/">שיבוץ לאיסופים</Nav.Link>
                <Nav.Link href="/assigned-tasks">איסופים קרובים</Nav.Link>
                <Nav.Link href="/task-reports">מילוי משוב</Nav.Link>
            </Nav>;
        } else {
            pages = 
            <Nav className="mr-auto">
                <Nav.Link href="/">לוח בקרה</Nav.Link>
                <Nav.Link href="/users">משתמשים</Nav.Link>
                <Nav.Link href="/tasks">משימות</Nav.Link>
            </Nav>;
        }
            return (
                <div>
                    <Head>
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css"
                            integrity="sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If" crossorigin="anonymous" />
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
                        <title>LetsGo</title>
                    </Head>
                    <Navbar sticky='top' bg='dark' variant='dark'>
                        <Navbar.Brand href="/">LetsGo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            {pages}
                            <Nav className='mr-sm-2'>
                            <NavDropdown alignRight title={this.props.userData.firstName + ' ' + this.props.userData.lastName} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/personal-information">פרטים אישיים</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={this.logout}>התנתקות</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            );
    }
}

export default connect(state => state)(Header);