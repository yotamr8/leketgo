import React from 'react'
import "../statics/styles.scss"
import Header from '../components/Header.js'
import Table from '../components/Table.js'
import {Component} from "react"
import ReactDOM from "react-dom"
import {hashHistory, IndexRedirect} from 'react-router'
import { connect } from "react-redux"
//import Login from './login'
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import {pushPath} from 'react-router-redux';
import App from './login'

//ReactDOM.render(<App />, document.getElementById('root'));

class Index extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
    }
	
//	ReactDOM.render(<App />, document.getElementById('root'));
//}

    render() {
       console.log(this.props);
		//const hist = createMemoryHistory();
		if (!this.props.isLoggedIn){
			if(typeof window !== 'undefined'){
				window.location.href = "/login";
			}
		}
        return (
            <div>
                <Header />
                <main className="m-2" style={{ paddingBottom: '3rem' }}>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">הצלחה</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    האיסופים שובצו בהצלחה! ניתן לראות את כל השיבוצים שלך בעמוד <a href="volunteer-track.html">איסופים קרובים</a>.
                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">סגירה</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="alert alert-warning" role="alert">
                        היי {this.props.userData.firstname}, יש לך <a href="volunteer-track.html"><strong>2</strong> איסופים קרובים</a> ועוד <a
                            href="volunteer-report.html"><strong>2</strong> איסופים הממתינים למשוב</a>.
    </div>
                    <div className="alert alert-info" role="alert">
                        הוראות לחלון זה
    </div>
                    <div className="mb-4 mt-4">
                        <h2>שיבוץ לאיסופים </h2>
                    </div>
                    <Table page={'index'} />
                    <div className="p-2 position-fixed fixed-bottom bg-light">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">שיבוץ איסופים</button>
                            <button type="button" className="btn btn-secondary">ביטול</button>
                        </div>
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

export default connect(state => state)(Index);
