import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App, {Container} from "next/app"
import withRedux from 'next-redux-wrapper'
import fire from '../config/firebaseConfig'
import ModalBlock from '../components/ModalBlock.js'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHCHECKED':
            return { ...state, authChecked: true}
            break;
        case 'UNASSIGNEDTASKS':
            return { ...state, unassignedTasks: action.tasks };
            break;
        case 'ASSIGNEDTASKS':
            return { ...state, assignedTasks: action.tasks };
            break;
        case 'TASKREPORTS':
            return { ...state, taskReports: action.tasks };
            break;
        case 'LOGIN':
            return {
                ...state, isLoggedIn: true, loginErr: false, userData: { ...action.user, uid:action.uid }};
            console.log("logged in store")
            break;
        case 'LOGIN_ERR':
            return { ...state, isLoggedIn: false, loginErr: action.msg};
            break;
        case 'LOGOUT':
            return { ...state, isLoggedIn: false};
            break;
        case 'GETALLUSERS':
            return { ...state, users: action.users };
            break;
        case 'GETALLREGIONTASKS':
            return { ...state, regionalTasks: action.tasks };
            break;
        case 'OPEN_MODAL':
            return {
                ...state, modal: {
                    isOpen: true,
                    msg: action.msg,
                    entries: action.entries
                }
            };
            break;
        case 'CLOSE_MODAL':
            return { ...state, modal: { ...state.modal, isOpen: false } };
        default:
            return state
    }
};

var initialState = {
    authChecked: false,
    loginErr: false,
    isLoggedIn: false,
    userData: {
    },
    modal: {
        isOpen: false,
    },
    unassignedTasks: [],
    assignedTasks: [],
    taskReports: [],
    regionalTasks: [],
    users: []
}

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <ModalBlock />
                    <Component {...pageProps} />  
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);