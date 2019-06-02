import React, { Component } from 'react';
import "../statics/styles.scss"
import { connect } from "react-redux"
import fire from '../config/firebaseConfig'
import Header from '../components/Header.js'

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
        
    }

    render() {
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