import React, { Component } from 'react';
import { connect } from "react-redux"
import fire from '../config/firebaseConfig'
import Header from '../components/Header.js'
import Router from 'next/router'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'
import Logo from '../components/Logo.js'
import { Alert, Form, Button, Col, Navbar, Card } from 'react-bootstrap'
import Link from 'next/link'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    componentWillMount() {
        if (!this.props.authChecked) checkAuthAndRefresh(this.props.dispatch)
    }

    handleSubmit = (e) => {
        event.preventDefault();
        const db = fire.firestore();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password
        ).then(
            (user) => {
                db.collection("users").doc(user.user.uid).get().then((doc) => {
                    Router.push('/');
                })
            }).catch(
                (err) => {
                    event.stopPropagation();
                    this.props.dispatch({ type: 'LOGIN_ERR', msg: err.message });
                });
    }

    resetPassword = (e) => {
        var auth = fire.auth();
        var emailAddress = this.state.email;

        auth.sendPasswordResetEmail(emailAddress).then(() => {
            console.log("mail sent");
            var title = 'קישור לאיפוס סיסמא נשלח למייל בהצלחה'; 
            var body = 'במידה ולא נמצא בדואר נכנס, יתכן כי נמצא בתיבת דואר זבל.';
            this.props.dispatch({ type: 'PUSH_TOAST', title: title, body: body, delay: 50000 })
            // TODO open modal - a mail has been sent to the email: this.state.email with a link. if you do not want to reset your password - dont do anything.
        }).catch((err) => {
            console.log("not sent", err);
            this.props.dispatch({ type: 'LOGIN_ERR', msg: err.message }); // this is done so the error message appears in the alert below            
        });

    }

    render() {
        if (!this.props.authChecked) {
            return (<Loading />)
        }
        return (
            <div style={{zIndex: '1'}}>
                <div id="background-wrap" >
                    <div className="x1">
                        <div className="cloud"></div>
                    </div>
                    <div className="x2">
                        <div className="cloud"></div>
                    </div>
                    <div className="x3">
                        <div className="cloud"></div>
                    </div>
                    <div className="x4">
                        <div className="cloud"></div>
                    </div>
                    <div className="x5">
                        <div className="cloud"></div>
                    </div>
                </div>
                <div style={{zIndex: '2'}}>
                    <Header isLogin={true} />
                    <div style={{ height: '100vh', width: '100%', backgroundImage: 'linear-gradient(#99E1ED, white)' }} className="d-flex flex-column align-items-center justify-content-center">
                        <Logo use='login' />
                        <main style={{ maxWidth: '400px' }} className="m-2">
                            <Card className='m-2'>
                                <Card.Body>
                                    <Card.Text>

                                        {this.props.loginErr ?
                                            <Alert className='mb-4' style={{ textAlign: 'left', direction: 'ltr' }} variant='danger'><i class="ltr fas fa-exclamation-circle"></i>{this.props.loginErr}</Alert> : ''}
                                        <Form onSubmit={e => this.handleSubmit(e)}>
                                            <Form.Group>
                                                <Form.Label>כתובת דואר אלקטרוני</Form.Label>
                                                <Form.Control type="email" id="email" onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>סיסמה</Form.Label>
                                                <Form.Control type="password" id="password" onChange={this.handleChange} />
                                            </Form.Group>                                            
                                            <p>
                                                <Link href="/forgotPassword"><a>שכחתי סיסמה</a></Link>
                                            </p>
                                            <Button type="submit" onClick={this.handleSubmit} variant="primary">
                                                התחברות
                                                </Button>
                                        </Form>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </main></div>
                    </div>
                </div>
           
        );
    }
}

export default connect(state => state)(Login);