import React, { Component } from 'react';
import "../statics/styles.scss"
import { connect } from "react-redux"
import fire from '../config/firebaseConfig'
import Header from '../components/Header.js'
import Router from 'next/router'
import getUnassigned from '../dbActions/getUnassignedTasks'
import getAssigned from '../dbActions/getAssignedTasks'
import getTaskReports from '../dbActions/getTaskReports'

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

    handleSubmit = (e) => {
        const db = fire.firestore();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password
        ).then(
            (user) => {
                db.collection("users").doc(user.user.uid).get().then((doc) => {

                    this.props.dispatch({ type: 'LOGIN', user: doc.data(), uid: user.user.uid });

                    getUnassigned(this.props.dispatch, doc.data().region);

                    getAssigned(this.props.dispatch, user.user.uid);
                    
                    getTaskReports(this.props.dispatch, user.user.uid);

                    Router.push('/');

                })
            }).catch(
                (err) => {
                    this.props.dispatch({ type: 'LOGIN_ERR', msg: err.message });
                });
    }

    
    static async getInitialProps({ res }) {
        // TODO - not working
        var user = fire.auth().currentUser;
        //console.log(this.props)//(function (user) {
            if (user) {
                console.log(user)
                // TODO add dispatch login for user data????
                if (res) {
                    res.writeHead(302, {
                        Location: '/'
                    })
                    res.end()                    
                } else {
                    Router.push('/')
                }
                return {}
            }
        //});
        
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header isLogin={true} />
                <main className="m-2" style={{ paddingBottom: '3rem' }}>
                    <div className="card">
                        <h5 className="card-header">התחברות</h5>
                        <div className="card-body">
                            <h5 className="card-title">ברוכים הבאים ללקט־night!</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">כתובת דואר אלקטרוני</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">סיסמה</label>
                                    <input type="password" className="form-control" id="password" onChange={this.handleChange} />
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                    <label className="custom-control-label" htmlFor="customCheck3">זכרוני</label>
                                </div>
                                <a href="#">שכחתי סיסמה</a>
                            </form>
                            <a role="button" onClick={this.handleSubmit} className="mt-2 btn btn-primary">התחברות</a>
                        </div>
                    </div>
                    <div style={{ color: 'red' }}>
                        {this.props.loginErr ? <h3>{this.props.loginErr}</h3> : null}
                    </div>
                </main>
            </div>
        )
    }
}

export default connect(state => state)(Login);