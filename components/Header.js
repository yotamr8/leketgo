import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import fire from '../config/firebaseConfig'
import {Badge, Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Link from 'next/link'

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
        if (!this.props.userData.admin) {
            let atNum = this.props.assignedTasks.length;
            let trNum = this.props.taskReports.length;
            pages = 
            <Nav className="mr-auto">
                <Link className='navlink' href="/"><a className='nav-link'>שיבוץ לאיסופים</a></Link>
                <Link href="/assigned-tasks"><a className='nav-link'>איסופים קרובים {atNum > 0 ? <Badge variant="secondary">{atNum}</Badge> : ''}</a></Link>
                <Link href="/task-reports"><a className='nav-link'>מילוי משוב {trNum > 0 ? <Badge variant="secondary">{trNum}</Badge> : ''}</a></Link>
            </Nav>;
        } else {
            pages = 
            <Nav className="mr-auto">
                <Link href="/"><a className='nav-link'>לוח בקרה</a></Link>
                <Link href="/users"><a className='nav-link'>משתמשים</a></Link>
                <Link href="/tasks"><a className='nav-link'>משימות</a></Link>
            </Nav>;
        }
        let navbar = '';
        if (!this.props.isLogin) {
            navbar = <Navbar sticky='top' bg='dark' variant='dark' expand='lg'>
            <Link href="/"><a className='navbar-brand'>LetsGo</a></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {pages}
                <Nav className='mr-sm-2'>
                <NavDropdown alignRight title={this.props.userData.firstName + ' ' + this.props.userData.lastName} id="basic-nav-dropdown">
                    <Link href="/personal-information"><a className='dropdown-item'>פרטים אישיים</a></Link>
                    <NavDropdown.Divider />
                    <Link href='/login'><a className='dropdown-item' onClick={this.logout}>התנתקות</a></Link>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>;
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
                    {navbar}
                </div>
            );
    }
}

export default connect(state => state)(Header);