import React from 'react'
import "../statics/styles.scss"
import TableBlock from '../components/TableBlock.js'
import { Component } from "react"
import { connect } from "react-redux"
import {Alert} from 'react-bootstrap'
import Link from 'next/link'
import fire from '../config/firebaseConfig'
import Header from '../components/Header.js'

class Index extends Component {

    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit = (e) => {
        const db = fire.firestore();
        fire.auth().signInWithEmailAndPassword("matanwilchek@gmail.com", "111111"
        ).then(
            (user) => {
                db.collection("users").doc(user.user.uid).get().then((doc) => {
                    this.props.dispatch({ type: 'LOGIN', user: doc.data() });
                    db.collection("tasks").where("region", "==", doc.data().region).where("volunteerUid", "==", null).get()
                        .then((querySnapshot) => {
                            var tasks = [];
                            querySnapshot.forEach(function (doc) {
                                var task = doc.data();
                                task.id = doc.id;
                                tasks.push(task);
                            });
                            this.props.dispatch({ type: 'UNASSIGNEDTASKS', tasks: tasks });
                        });
                    db.collection("tasks").where("volunteerUid", "==", user.user.uid).where("timestamp", ">", new Date()).get()
                        .then((querySnapshot) => {
                            var tasks = [];
                            querySnapshot.forEach(function (doc) {
                                var task = doc.data();
                                task.id = doc.id;
                                tasks.push(task);
                            });
                            this.props.dispatch({ type: 'ASSIGNEDTASKS', tasks: tasks });
                        }); //reportFilled
                    db.collection("tasks").where("volunteerUid", "==", user.user.uid)
                        .where("timestamp", "<", new Date())
                        .where("reportFilled", "==", false).get()
                        .then((querySnapshot) => {
                            var tasks = [];
                            querySnapshot.forEach(function (doc) {
                                var task = doc.data();
                                task.id = doc.id;
                                tasks.push(task);
                            });
                            this.props.dispatch({ type: 'TASKREPORTS', tasks: tasks });
                        });
                })

            }).catch(
            (err) => {
                this.props.dispatch({ type: 'LOGIN_ERR', msg: err.message });
            });
    }
    
    render() {
        console.log(this.props);
        let atNum = this.props.assignedTasks.length;
        let trNum = this.props.taskReports.length;
        let alert = ''; 
        if (atNum > 0 || trNum > 0){
            alert = <Alert variant='warning'>
                היי {this.props.userData.firstName}, יש לך {atNum > 0 ? <Link href="/assigned-tasks"><a><strong>{atNum}</strong> איסופים קרובים</a></Link> : ''} {(atNum > 0 && trNum > 0 ? 'ועוד' : '')} {trNum > 0 ? <Link href='/task-reports'><a><strong>{trNum}</strong> איסופים הממתינים למשוב</a></Link> : ''}.
                </Alert>
        }

        if (!this.props.userData.isManager) {
            return (
                <div>
                <Header />
                    <main className="m-2" style={{ paddingBottom: '3rem' }}>
                        {alert}
                        <div className="mb-4 mt-4">
                            <h2>שיבוץ לאיסופים</h2>
                        </div>
                        <TableBlock isSelectable={true} data={this.props.unassignedTasks} page='index' type='tasks' />
                    </main>
                </div>
            );
        } else {
            return <div>לוח בקרה של מנהל</div>;
        }
    }
}

export default connect(state => state)(Index);