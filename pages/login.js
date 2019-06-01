import React, { Component } from 'react';
import "../statics/styles.scss"
import Header from '../components/Header.js'
import Table from '../components/Table.js'
import { connect } from "react-redux"
import fire from '../config/firebaseConfig'
import Index from './index';
import Head from 'next/head'
import { Redirec1t, Route, IndexRoute } from 'react-router';

/*fire.auth().onAuthStateChanged((user) => {
    const db = fire.firestore();
    if (user) {
        db.collection("users").doc(user.user.uid).get().then((doc) => {
            this.props.dispatch({ type: 'LOGIN', user: doc.data() });
        });
    } else {
        this.props.dispatch({ type: 'LOGOUT' });
    }
});*/

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
               /* db.collection("users").doc(user.user.uid).get().then((doc) => {
                    this.props.dispatch({ type: 'LOGIN', user: doc.data() });
                })
                console.log("login dispatched")*/
        }).catch(
            (err) => {this.props.dispatch({ type: 'LOGIN_ERR', msg: err.message });
        });
    }

    render() {
        console.log(this.props);
        if (fire.auth().currentUser != null) {
            var db = fire.firestore();
            db.collection("users").doc(fire.auth().currentUser.uid).get().then((doc) => {
                this.props.dispatch({ type: 'LOGIN', user: doc.data() });
            })
        }
        const { isLoggedIn } = this.props
        console.log(isLoggedIn)
    
        if (isLoggedIn){
			if(typeof window != "undefined"){
				window.location.href = "/"
			}
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

                    <title>LeketGo</title>
                </Head>
                <main class="m-2" style={{ paddingBottom: '3rem' }}>
                    <div class="card">
                        <h5 class="card-header">התחברות</h5>
                        <div class="card-body">
                            <h5 class="card-title">ברוכים הבאים ללקט־night!</h5>
                            <form>
                                <div class="form-group">
                                    <label for="email">כתובת דואר אלקטרוני</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label for="password">סיסמה</label>
                                    <input type="password" class="form-control" id="password" onChange={this.handleChange} />
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                    <label class="custom-control-label" for="customCheck3">זכרוני</label>
                                </div>
                                <a href="#">שכחתי סיסמה</a>
                            </form>
                            <a role="button" onClick={this.handleSubmit} class="mt-2 btn btn-primary">התחברות</a>
                        </div>
                    </div>
                    <div style={{ color: 'red' }}>
                        {this.props.loginErr ? <h3>{this.props.loginErr}</h3> : null}
                    </div>
                </main>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
                    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                    crossOrigin="anonymous"></script>
                <script src="https://cdn.rtlcss.com/bootstrap/v4.2.1/js/bootstrap.min.js"
                    integrity="sha384-a9xOd0rz8w0J8zqj1qJic7GPFfyMfoiuDjC9rqXlVOcGO/dmRqzMn34gZYDTel8k"
                    crossOrigin="anonymous"></script>
            </div>
        )
    }
}

    export default connect(state => state)(Login);