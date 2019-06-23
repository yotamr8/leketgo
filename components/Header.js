import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import fire from '../config/firebaseConfig'
import {ButtonToolbar, Tooltip, OverlayTrigger, Badge, Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Link from 'next/link'
import '../static/bootstrap.min.scss'
import '../static/styles.scss'
import Logo from '../components/Logo.js'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserDropdown: false,
        }

        this.toggleUserDropDown = this.toggleUserDropDown.bind(this);
    }

    componentDidMount() {
        if (!this.props.isLogin){
            let root = document.documentElement;
            let topBarHeight = document.getElementById('top-nav').getBoundingClientRect().height;
            root.style.setProperty('--top-navbar-height', topBarHeight + "px");
        }
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
				<Link href="/history"><a className='nav-link'>היסטוריה</a></Link>
            </Nav>;
        } else {
            pages = 
            <Nav className="mr-auto">
                <Link href="/"><a className='nav-link'>לוח בקרה</a></Link>
                <Link href="/tasks"><a className='nav-link'>איסופים</a></Link>
                <Link href="/users"><a className='nav-link'>מתנדבים</a></Link>
            </Nav>;
        }
        let navbar = '';
        if (!this.props.isLogin) {
            navbar = <Navbar id='top-nav' sticky='top' bg='light' variant='light' expand='lg'>
            <Link href="/"><a className='navbar-brand'>{<Logo />}</a></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {pages}
                <Nav className='mr-sm-2'>
                <NavDropdown alignRight title={this.props.userData.firstName + ' ' + this.props.userData.lastName} id="basic-nav-dropdown">
                    <Link href="/personal-information"><a className='dropdown-item'><i className="far fa-user-circle fa-fw"></i>פרטים אישיים</a></Link>
                    <NavDropdown.Divider />
                    <Link href='/login'><a className='dropdown-item' onClick={this.logout}><i className="fas fa-sign-out-alt fa-fw"></i>התנתקות</a></Link>
                </NavDropdown>
                <ButtonToolbar>
                <OverlayTrigger
                    key='help'
                    placement='bottom'
                    overlay={
                        <Tooltip id='tooltip'>
                        עזרה
                        </Tooltip>
                    }>
                    <Nav.Link><i className="fas fa-question-circle"></i></Nav.Link>
                </OverlayTrigger>
                </ButtonToolbar>
                </Nav>
            </Navbar.Collapse>
        </Navbar>;
        }
            return (
                <div>
                    <Head>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <title>לקט־GO</title>
                    </Head>
                    {navbar}
                </div>
            );
    }
}

export default connect(state => state)(Header);