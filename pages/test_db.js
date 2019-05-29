import React, { Component } from 'react';
import "../statics/styles.scss"
import Header from '../components/Header.js'
import Table from '../components/Table.js'
import Login from './login'
import { connect } from "react-redux"
import fire from '../config/firebaseConfig.js'

class Task_reports extends Component {
    render() {
	    const data = [];
        if (!this.props.isLoggedIn) {
            return (<div><Login /></div>)
        } else {
		process.on("uncaughtException", function (err){console.log(err);});
		fire.firestore().collection("users").doc("hBlwG5ccrLgmWsLqOyAyztQYsun1").get().then((doc) => { this.data =  doc.data(); console.log(doc.data())});
	if(data.length){	
		return(<div>{this.state.categories}</div>)
        }else{return <div>Reached here before sync...</div>}
	}
    }
}
        
export default connect(state => state)(Task_reports)
