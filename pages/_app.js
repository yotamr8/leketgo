import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App, {Container} from "next/app"
import withRedux from 'next-redux-wrapper'
import fire from '../config/firebaseConfig'
import Header from '../components/Header.js'
import ModalBlock from '../components/ModalBlock.js'

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
            return { ...state, isLoggedIn: true, loginErr: false, userData: action.user, isManager: (action.user.admin == 'TRUE')? true : false };
            console.log("logged in store")
            break;
        case 'LOGIN_ERR':
            return { ...state, isLoggedIn: false, loginErr: action.msg};
            break;
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, firebaseData: false};
            break;
        case 'OPEN_MODAL':
            return { ...state, modal: {
                isOpen: true,
                msg: action.msg,
                entries: action.entries
            }};  
        case 'CLOSE_MODAL':
            return { ...state, modal: {...state.modal, isOpen: false}};
        default:
            return state
    }
};

var initialState = {
    loginErr: false,
    isLoggedIn: fire.auth().isLoggedIn ? true : false,
    userData: {
        isManager: false,
        id: '0eIEtquyi0a2bnrZScfk3lq3sqE3',
        firstName: 'בר',
        lastName: 'עמיר',
        street: 'ראובן ובת שבע 7',
        city: 'ראשון לציון',
        region: 'ראשון לציון',
        email: 'baramir@mail.tau.ac.il',
        phone: '0523668566',
        tz: '204712863'
    },
    modal: {
        isOpen: false,
    },
    unassignedTasks: [
        {
            id: '7-26.05.19',
            city: "רעננה",
            contactName: "אושרית",
            contactNumber: "0545-213168",
            date: "26.05.19",
            day: "ג'",
            geolocation: "32.196537, 34.880737",
            name: "זקס בייקרי רעננה",
            notes: "נא לא לאחר",
            region: "שרון",
            reportFilled: "FALSE",
            taskId: "7",
            time: "21:20",
            volunteerUid: null
        },
        {
            id: '7-26.05.195436',
            city: "רננות",
            contactName: "אושרית",
            contactNumber: "0545-213168",
            date: "26.05.19",
            day: "ג'",
            geolocation: "32.196537, 34.880737",
            name: "זקס בייקרי רעננה",
            notes: "נא לא לאחר",
            region: "שרון",
            reportFilled: "FALSE",
            taskId: "7",
            time: "21:20",
            volunteerUid: null
        },
        {
            id: '7-26.05.199990',
            city: "בננה",
            contactName: "אושרית",
            contactNumber: "0545-213168",
            date: "26.05.19",
            day: "ג'",
            geolocation: "32.196537, 34.880737",
            name: "זקס בייקרי רעננה",
            notes: "נא לא לאחר",
            region: "שרון",
            reportFilled: "FALSE",
            taskId: "7",
            time: "21:20",
            volunteerUid: null
        }
    ],
    assignedTasks: [
        {
            id: '7-26.05.19',
            city: "ראשון לציון",
            contactName: "אושרית",
            contactNumber: "0545-213168",
            date: "26.05.19",
            day: "ג'",
            geolocation: "32.196537, 34.880737",
            name: "זקס בייקרי רעננה",
            notes: "נא לא לאחר",
            region: "שרון",
            reportFilled: "FALSE",
            taskId: "7",
            time: "21:20",
            volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
        }
    ],
    taskReports: [
        {
            id: '7-26.05.19',
            city: "מודיעין",
            contactName: "אושרית",
            contactNumber: "0545-213168",
            date: "26.05.19",
            day: "ג'",
            geolocation: "32.196537, 34.880737",
            name: "זקס בייקרי רעננה",
            notes: "נא לא לאחר",
            region: "שרון",
            reportFilled: "FALSE",
            taskId: "7",
            time: "21:20",
            volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
        }
    ],
    users: [
        {
            id: '0eIEtquyi0a2bnrZScfk3lq3sqE3',
            isManager: true,
            firstName: 'בר',
            lastName: 'עמיר',
            region: 'ראשון לציון',
            email: 'baramir@mail.tau.ac.il',
            tz: '204712863',
            street: 'ראובן ובת שבע 7',
            city: 'ראשון לציון',
            phone: '0523668566'
        },
        {
            id: 'hBlwG5ccrLgmWsLqOyAyztQYsun1',
            isManager: true,
            firstName: 'מתן',
            lastName: `וילצ'יק`,
            region: 'שרון',
            email: 'matanwilchek@gmail.com',
            tz: '204712863',
            street: 'ראובן ובת שבע 7',
            city: 'ראשון לציון',
            phone: '0523668566'
        }
    ],
    regionalTasks: [
        {
            id: '7-26.05.19',
            city: "רעננה",
            contactName: "אושרית",
            contactNumber: "0545-213168",
            date: "26.05.19",
            day: "ג'",
            geolocation: "32.196537, 34.880737",
            name: "זקס בייקרי רעננה",
            notes: "נא לא לאחר",
            region: "שרון",
            reportFilled: "FALSE",
            taskId: "7",
            time: "21:20",
            volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
        },
        {
            id: '7-26.05.195436',
            city: "רעננה",
            contactName: "אושרית",
            contactNumber: "0545-213168",
            date: "26.05.19",
            day: "ג'",
            geolocation: "32.196537, 34.880737",
            name: "זקס בייקרי רעננה",
            notes: "נא לא לאחר",
            region: "שרון",
            reportFilled: "FALSE",
            taskId: "7",
            time: "21:20",
            volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
        },
        {
            id: '7-26.05.199990',
            city: "רעננה",
            contactName: "אושרית",
            contactNumber: "0545-213168",
            date: "26.05.19",
            day: "ג'",
            geolocation: "32.196537, 34.880737",
            name: "זקס בייקרי רעננה",
            notes: "נא לא לאחר",
            region: "שרון",
            reportFilled: "FALSE",
            taskId: "7",
            time: "21:20",
            volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
        }
    ]
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
                    <Header />
                    <ModalBlock />
                    <Component {...pageProps} />  
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);