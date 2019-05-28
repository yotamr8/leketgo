import React, { Component } from 'react';
import "../statics/styles.scss"
import Header from '../components/Header.js'
import Login from './login'
import { connect } from "react-redux"


class Personal_information extends Component {
    render() {
        if (!this.props.isLoggedIn) {
            return (<div><Login /></div>)
        } else {
            return (
                <div>
                    <Header />
                    <main></main>
                </div>
            )
        }
    }
}
export default connect(state => state)(Personal_information);