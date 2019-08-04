import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import fire from '../config/firebaseConfig'
import {ButtonToolbar, Tooltip, OverlayTrigger, Badge, Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Link from 'next/link'
import '../static/bootstrap.min.scss'
import '../static/styles.scss'
import Logo from '../components/Logo.js'
import Help from '../components/Help.js'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserDropdown: false,
            userPages: [
                {
                    id: 'index',
                    name: 'איסופים פנויים',
                    href: '/'
                },
                {
                    id: 'assignedTasks',
                    name: 'האיסופים הקרובים שלי',
                    href: '/assigned-tasks'
                },
                {
                    id: 'taskReports',
                    name: 'משובים ממתינים',
                    href: '/task-reports'
                },
                {
                    id: 'history',
                    name: 'היסטוריה',
                    href: '/history'
                },
            ],
            adminPages: [
                {
                    id: 'index',
                    name: 'לוח בקרה',
                    href: '/'
                },
                {
                    id: 'adminUsers',
                    name: 'מתנדבים',
                    href: '/users'
                },
                {
                    id: 'adminTasks',
                    name: 'איסופים',
                    href: '/tasks'
                },
            ]
        }
        this.isActive = this.isActive.bind(this);
        this.toggleUserDropDown = this.toggleUserDropDown.bind(this);
    }

    isActive(page) {
        return page == this.props.active;
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
            {this.state.userPages.map((page, index) => {
                return (
                    <Link key={index} className='navlink' href={page.href}><a className={'nav-link' + (this.isActive(page.id) ? ' active' : '')}>{page.name}</a></Link>
                    );
                })}
            </Nav>;
        } else {
            pages = 
            <Nav className="mr-auto">
                {this.state.adminPages.map((page, index) => {
                return (
                    <Link key={index} className='navlink' href={page.href}><a className={'nav-link' + (this.isActive(page.id) ? ' active' : '')}>{page.name}</a></Link>
                    );
                })}
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
                    <Link href='#'><a className='dropdown-item' onClick={this.logout}><i className="fas fa-sign-out-alt fa-fw"></i>התנתקות</a></Link>
                </NavDropdown>
                {this.props.userData.admin ? <ButtonToolbar>
                <OverlayTrigger
                    key='help'
                    placement='bottom'
                    overlay={
                        <Tooltip id='tooltip'>
                        מנהל
                        </Tooltip>
                    }>
                    <Nav.Link><i className="fas fa-crown nm"></i></Nav.Link>
                </OverlayTrigger>
                </ButtonToolbar> : ''}
                <Help page={this.props.active} />
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
                    <div style={{zIndex: '2'}}>
                    {navbar}
                    </div>
                </div>
            );
    }
}

export default connect(state => state)(Header);