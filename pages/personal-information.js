import React, { Component } from 'react';
import "../statics/styles.scss"
import { connect } from "react-redux"
import {Form, Button, Col, Navbar} from 'react-bootstrap'
import Header from '../components/Header.js'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'

class Personal_information extends Component {
    constructor(...args) {
        super(...args);
        this.state = { validated: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

	componentWillMount() {
        checkAuthAndRefresh(this.props.dispatch)
    }
	
    handleSubmit(event) {
        const form = event.currentTarget;
        
        let formEmail = document.getElementById('formEmail').value;
        console.log(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(formEmail));

        console.log(formEmail);
        if (!this.state.validated) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true });
      }

    render() {
        if (!this.props.authChecked || !this.props.isLoggedIn) {
            return (<Loading />);
        }
        var user = this.props.userData;
        return (
                <div>
                    <Header />
                    <main className="m-2" style={{paddingBottom: '3rem'}}>
                        <div className="mt-4 mb-4">
                            <h2>עדכון פרטים אישיים</h2>
                        </div>
                        <Form
                            noValidate
                            validated={this.state.validated}
                            onSubmit={e => this.handleSubmit(e)}
                        >
                            <Form.Row>
                                <Form.Group as={Col} controlId="formFirsName">
                                    <Form.Label>שם פרטי</Form.Label>
                                    <Form.Control readOnly defaultValue={user.firstName} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formLastName">
                                    <Form.Label>שם משפחה</Form.Label>
                                    <Form.Control readOnly defaultValue={user.lastName} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formTZ">
                                    <Form.Label>תעודת זהות</Form.Label>
                                    <Form.Control readOnly defaultValue={user.tz} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formRegion">
                                    <Form.Label>אזור איסוף</Form.Label>
                                    <Form.Control readOnly defaultValue={user.region} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>כתובת דואר אלקטרוני</Form.Label>
                                    <Form.Control required type='email' defaultValue={user.email}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please choose an email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label>מספר טלפון</Form.Label>
                                    <Form.Control required type='tel' defaultValue={user.phone}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formStreet">
                                    <Form.Label>רחוב ומספר</Form.Label>
                                    <Form.Control required defaultValue={user.address} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formCity">
                                    <Form.Label>עיר מגורים</Form.Label>
                                    <Form.Control required defaultValue={user.city} />
                                </Form.Group>
                            </Form.Row>
                            <div className="mt-4 mb-4">
                            <h2>שינוי סיסמה</h2>
                            </div>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formPassword">
                                    <Form.Label>סיסמה חדשה</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formValidatePassword">
                                    <Form.Label>וידוא סיסמה</Form.Label>
                                    <Form.Control type="password" />
                                    <Form.Text className="text-muted">
                                    יש להקליד את הסיסמה החדשה שנית
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Navbar bg='light' fixed='bottom'>
                                <Button variant="primary" type="submit">
                                    שמירת שינויים
                                </Button>
                            </Navbar>
                        </Form>
                    </main>
                </div>
        );
    }
}
export default connect(state => state)(Personal_information);