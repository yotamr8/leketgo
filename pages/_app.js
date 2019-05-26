import React from "react"
import {createStore} from "redux"
import {Provider} from "react-redux"
import App, {Container} from "next/app"
import withRedux from 'next-redux-wrapper'
import axios from 'axios'


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETTASKSLIST':
            return {...state, tasks: [action.taskList]};
            break;
        default:
            return state
            break;
    }
};

var initialState = {
    isLoggedIn: true,
    isManager: true,
    userData: {
        userId: 123456789,
        firstName: 'בר',
        lastName: 'עמיר',
        region: 'ראשון לציון',
        email: 'baramir@mail.tau.ac.il',
        phone: '0523668566'
    },
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
        axios.get('http://localhost:5000/api/get_tasks').then((response) => 
        {
            ctx.store.dispatch({type: 'GETTASKSLIST', taskList: response});
        });
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
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