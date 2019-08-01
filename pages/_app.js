import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App, {Container} from "next/app"
import withRedux from 'next-redux-wrapper'
import ModalBlock from '../components/ModalBlock.js'
import Toasts from '../components/Toasts.js'

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
            break;
        case 'LOGIN_ERR':
            return { ...state, isLoggedIn: false, loginErr: action.msg};
            break;
        case 'LOGOUT':
            return {
                ...state, isLoggedIn: false, userData: {}, authChecked: false, loginErr: false,               
                modal: { isOpen: false }, unassignedTasks: [], assignedTasks: [], taskReports: [],
                regionalTasks: [], users: [], updated: {}
            };
            break;
        case 'GETALLUSERS':
            return { ...state, users: action.users };
            break;
		case 'HISTORYTASKS':
			return { ...state, historyTasks: action.tasks };
			break
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
            break;
        case 'UPDATE_UPDATED_LIST':
            return { ...state, updated: { ...state.updated, [action.data]: true } }
            break;
        case 'RESET_UPDATED_LIST':
            return { ...state, updated: {} }
            break;
        case 'TASK_LIST_VIEW':
            return { ...state, tasksCardView: false };
            break;
        case 'TASK_CARDS_VIEW':
            return { ...state, tasksCardView: true };
            break;
        case 'PUSH_TOAST':
            {
            let newToasts = [...state.toasts];
            let date = new Date();
            let timestamp = date.getTime();
            newToasts.push({
                id: timestamp,
                title: action.title,
                body: action.body,
                icon: (action.icon ? action.icon : ''),
                delay: (action.delay ? action.delay : 3000),
            });
            return { ...state, toasts: newToasts };
            break;
        }
        case 'DISMISS_TOAST':
            {
                let newToasts = [...state.toasts];
                let toastToDis = newToasts.findIndex((toast) => action.timestamp == toast.timestamp);
                newToasts = newToasts.splice(toastToDis, 1);
                return { ...state, toasts: newToasts};
            }
        default:
            return state;
    }
};

var initialState = {
    authChecked: false,
    tasksCardView: true,
    loginErr: false,
    isLoggedIn: false,
    userData: {
    },
    modal: {
        isOpen: false,
    },
    toasts: [],
    unassignedTasks: [],
    assignedTasks: [],
    taskReports: [],
    regionalTasks: [],
	historyTasks: [],
    users: [],
    updated: {}
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
                    <Toasts />
                    <Component {...pageProps} />  
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);