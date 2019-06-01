import React from "react"
import {createStore} from "redux"
import {Provider} from "react-redux"
import App, {Container} from "next/app"
import withRedux from 'next-redux-wrapper'
import axios from 'axios'
import fire from '../config/firebaseConfig'
import { Route } from 'react-router-dom';


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETTASKSLIST':
            return {...state, tasks: [action.taskList]};
            break;
        case 'LOGIN':
            return { ...state, isLoggedIn: true, loginErr: false, userData: action.user, isManager: (action.user.admin == 'TRUE')? true : false };
            console.log("logged in store")
            break;
        case 'LOGIN_ERR':
            return { ...state, isLoggedIn: false, loginErr: action.msg};
            break;
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, firebaseData: false};
            break;
        default:
            return state
            break;
    }
};

var initialState = {
    loginErr: false,
    isLoggedIn: false,
    isManager: false,
    userData: [],
    tasks: []
}

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class MyApp extends App {
    constructor(props) {
        super(props);        
    }

    static async getInitialProps({Component, ctx}) {
        /*axios.get('http://localhost:5000/api/get_tasks').then((response) => 
        {         
            ctx.store.dispatch({type: 'GETTASKSLIST', taskList: response});
        });
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};*/
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>               
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);