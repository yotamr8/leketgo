import React, { Component } from 'react';
import { connect } from "react-redux"
import {Form, Button, Col, Navbar} from 'react-bootstrap'
import Header from '../components/Header.js'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'
import editUser from '../dbActions/editUser'

class Personal_information extends Component {
    constructor(...args) {
        super(...args);
        this.state = { 	validated: true,
						isMailValid: true,
						isPasswordlengthValid: true,
						isDoublePasswordsMatch: true,
						isPhoneValid: true
					};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

	componentWillMount() {
        checkAuthAndRefresh(this.props.dispatch)
    }
	
    handleSubmit(event) {
        console.log(event)
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        
        let formEmail = document.getElementById('formEmail').value;
		this.state.isMailValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(formEmail)
        console.log("mail valid: " + this.state.isMailValid);

        let formPhone = document.getElementById('formPhone').value;
        console.log(formPhone)
        this.state.isPhoneValid = /^\d{10}$/.test(formPhone);
		console.log("phone length valid: " + this.state.isPhoneValid);
		
		let formPassword = document.getElementById('formPassword').value;
		this.state.isPasswordlengthValid = /^.{6,}$|^$/.test(formPassword);
        console.log("password length valid: " + this.state.isPasswordlengthValid);
		
		let formValidatePassword = document.getElementById('formValidatePassword').value;
		this.state.isDoublePasswordsMatch = formValidatePassword == formPassword;
        console.log("2nd Password match: " + this.state.isDoublePasswordsMatch)
		
		if(!this.state.isPasswordlengthValid || !this.state.isMailValid || !this.state.isDoublePasswordsMatch || !this.state.isPhoneValid) {
			this.state.validated = false;
		}
        
        console.log(this.state.validated);
        if (!this.state.validated) {
          event.preventDefault();
          event.stopPropagation();
        } else {         
            let user = this.props.userData
            let formCity = document.getElementById('formCity').value;
            let formAddress = document.getElementById('formAddress').value;
            
            let changes = {}
            if (formEmail != user.email) { changes.email = formEmail }
            if (formCity != user.city) { changes.city = formCity }
            if (formAddress != user.address) { changes.address = formAddress }
            if (formPhone != user.phone) { changes.phone = formPhone }
            if (formPassword.length != 0) { changes.password = formPassword }
            console.log(changes)
            editUser(this.props, this.props.userData.uid, changes).then((success) => {
                if (success) {
                    this.props.dispatch({ type: 'PUSH_TOAST', title: 'הצלחה', body: 'השינויים נשמרו בהצלחה.', delay: 5000 })
                } else {
                    this.props.dispatch({ type: 'PUSH_TOAST', title: 'בעיה', body: 'השינויים לא נשמרו בהצלחה.', delay: 5000 })
                }
            }).catch(() => {
                this.props.dispatch({ type: 'PUSH_TOAST', title: 'בעיה', body: 'השינויים לא נשמרו בהצלחה.', delay: 5000 })
            })
            
        }
        this.setState({ validated: true });        
      }

    render() {
        console.log(this.props)
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
                                    <Form.Control required type='email' defaultValue={user.email} isInvalid={!this.state.isMailValid}/>
                                    <Form.Control.Feedback type="invalid">
                                        זהו שדה חובה. אנא בדקו שהכנסתם כתובת תקינה.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label>מספר טלפון</Form.Label>
                                    <Form.Control required type='tel' defaultValue={user.phone} isInvalid={!this.state.isPhoneValid}/>
									<Form.Control.Feedback type="invalid">
                                        אנא הכניסו מספר טלפון חוקי
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formAddress">
                                    <Form.Label>רחוב ומספר</Form.Label>
                                    <Form.Control required defaultValue={user.address}/>
									<Form.Control.Feedback type="invalid">
                                        זהו שדה חובה.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formCity">
                                    <Form.Label>עיר מגורים</Form.Label>
                                    <Form.Control required defaultValue={user.city}/>
									<Form.Control.Feedback type="invalid">
                                        זהו שדה חובה.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <div className="mt-4 mb-4">
                            <h2>שינוי סיסמה</h2>
                            </div>
                            <Form.Row>
                                    <input style={{ display: "none" }} type="password" name="fakepasswordremembered" />
                                <Form.Group as={Col} controlId="formPassword">
                                    <Form.Label>סיסמה חדשה</Form.Label>
                                    <Form.Control type="password" defaultValue="" isInvalid={!this.state.isPasswordlengthValid}/>
									<Form.Control.Feedback type="invalid">
                                        אנא הכניסו סיסמא של 6 אותיות לפחות
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formValidatePassword">
                                    <Form.Label>וידוא סיסמה</Form.Label>
                                    <Form.Control type="password" isInvalid={!this.state.isDoublePasswordsMatch}/>
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