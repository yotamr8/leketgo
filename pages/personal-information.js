import React, { Component } from 'react';
import { connect } from "react-redux"
import {Form, Button, Col, Navbar} from 'react-bootstrap'
import Header from '../components/Header.js'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'
import editUser from '../dbActions/editUser'

const initialState = {
    validated: true,
    isMailValid: true,
    isPasswordlengthValid: true,
    isDoublePasswordsMatch: true,
    isPhoneValid: true,
    isAddressValid: true,
    isCityValid: true
}

class Personal_information extends Component {
    constructor(...args) {
        super(...args);
        this.state = initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetState() {
        this.setState(initialState);
    }

	componentWillMount() {      // runs everytime the page is entered, checks that user has permission to see page, and refreshes the data.
        checkAuthAndRefresh(this.props.dispatch)
        this.setState({
            email: this.props.userData.email,
            phone: this.props.userData.phone,
            address: this.props.userData.address,
            city: this.props.userData.city,
            password: "",
            validatePassword: ""
        })
        this.validateValues()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    validateValues() {
        this.state.isMailValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.state.email)
        this.state.isPhoneValid = /^\d{10}$/.test(this.state.phone);
        this.state.isPasswordlengthValid = /^.{6,}$|^$/.test(this.state.password);
        this.state.isDoublePasswordsMatch = this.state.validatePassword == this.state.password;
        this.state.isAddressValid = /^(?!\s*$).+/.test(this.state.address);
        this.state.isCityValid = /^(?!\s*$).+/.test(this.state.city);

        this.state.validated =  this.state.isPasswordlengthValid && this.state.isMailValid &&
                                this.state.isDoublePasswordsMatch && this.state.isPhoneValid &&
                                this.state.isCityValid && this.state.isAddressValid
    }

    handleSubmit(event) {       // callback when user clicks "שמירת שינויים"        
        event.preventDefault();     //prevents page from refreshing
        event.stopPropagation();    //prevents page from refreshing

        this.validateValues();

        if (this.state.validated){         
            let user = this.props.userData                     
            let changes = {}

            if (this.state.email != user.email) { changes.email = this.state.email }
            if (this.state.city != user.city) { changes.city = this.state.city }
            if (this.state.address != user.address) { changes.address = this.state.address }
            if (this.state.phone != user.phone) { changes.phone = this.state.phone }
            if (this.state.password.length != 0) { changes.password = this.state.password }

            editUser(this.props, this.props.userData.uid, changes).then((success) => {
                if (success) {
                    this.props.dispatch({ type: 'PUSH_TOAST', title: 'הצלחה', body: 'השינויים בפרטים האישיים נשמרו בהצלחה', delay: 5000 })
                } else {
                    this.props.dispatch({ type: 'PUSH_TOAST', title: 'שגיאה', body: 'השינויים בפרטים האישיים לא נשמרו', delay: 5000 })
                }
            }).catch(() => {
                this.props.dispatch({ type: 'PUSH_TOAST', title: 'שגיאה', body: 'השינויים בפרטים האישיים לא נשמרו', delay: 5000 })
            })
            
        }
      }

    render() {         
        this.validateValues()
        if (!this.props.authChecked || !this.props.isLoggedIn) {
            return (<Loading />);
        }
        var user = this.props.userData;
        return (
                <div>
                    <Header active='profile'/><div className='app'>
                    <div className="wrapper d-flex justify-content-center">
                    <main className="m-2">
                        <div className="mt-4 mb-4">
                            <h2><img src='/static/profile.png' width="60"/>עדכון פרטים אישיים</h2>
                        </div>
                        <Form onSubmit={e => this.handleSubmit(e)}>
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
                                    <Form.Group as={Col} controlId="email">
                                    <Form.Label>כתובת דואר אלקטרוני</Form.Label>
                                    <Form.Control required type='email' defaultValue={user.email} noValidate isInvalid={!this.state.isMailValid} onChange={this.handleChange}/>
                                    <Form.Control.Feedback type="invalid">
                                        זהו שדה חובה. אנא בדקו שהכנסתם כתובת תקינה.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                    <Form.Group as={Col} controlId="phone">
                                    <Form.Label>מספר טלפון</Form.Label>
                                    <Form.Control required type='tel' defaultValue={user.phone} isInvalid={!this.state.isPhoneValid} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">
                                        אנא הכניסו מספר טלפון חוקי בן 10 ספרות, ללא מקף
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                    <Form.Group as={Col} controlId="address">
                                    <Form.Label>רחוב ומספר</Form.Label>
                                    <Form.Control required defaultValue={user.address} isInvalid={!this.state.isAddressValid} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">
                                        זהו שדה חובה.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="city">
                                    <Form.Label>עיר מגורים</Form.Label>
                                    <Form.Control required defaultValue={user.city} isInvalid={!this.state.isCityValid} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">
                                        זהו שדה חובה.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <div className="mt-4 mb-4">
                            <h2>שינוי סיסמה</h2>
                            </div>
                            <Form.Row>                                
                                    <Form.Group as={Col} controlId="password">
                                    <input style={{ display: "none" }} type="password" name="fakepasswordremembered" />
                                    <Form.Label>סיסמה חדשה</Form.Label>
                                    <Form.Control type="password" defaultValue="" isInvalid={!this.state.isPasswordlengthValid} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">
                                        אנא הכניסו סיסמא של 6 אותיות לפחות
                                    </Form.Control.Feedback>
                                </Form.Group>
                                    <Form.Group as={Col} controlId="validatePassword">
                                    <Form.Label>וידוא סיסמה</Form.Label>
                                    <Form.Control type="password" isInvalid={!this.state.isDoublePasswordsMatch} onChange={this.handleChange}/>
                                    <Form.Text className="text-muted">
                                    יש להקליד את הסיסמה החדשה שנית
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit">
                                    שמירת שינויים
                            </Button>
                        </Form>
                    </main></div></div>
                </div>
        );
    }
}
export default connect(state => state)(Personal_information);