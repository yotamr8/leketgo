import React, { Component } from 'react';
import "../statics/styles.scss"
import { connect } from "react-redux"
import {Form, Button, Col, Navbar} from 'react-bootstrap'


class Personal_information extends Component {
    render() {
        var user = this.props.userData;
        return (
            <main className="m-2" style={{paddingBottom: '3rem'}}>
                <div className="mt-4 mb-4">
                    <h2>עדכון פרטים אישיים</h2>
                </div>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>שם פרטי</Form.Label>
                            <Form.Control readOnly value={user.firstName} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>שם משפחה</Form.Label>
                            <Form.Control readOnly value={user.lastName} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>תעודת זהות</Form.Label>
                            <Form.Control readOnly value={user.tz} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>אזור איסוף</Form.Label>
                            <Form.Control readOnly value={user.region} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>כתובת דואר אלקטרוני</Form.Label>
                            <Form.Control type="email" value={user.email}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>מספר טלפון</Form.Label>
                            <Form.Control type="email" value={user.phone}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicPassword">
                            <Form.Label>רחוב ומספר</Form.Label>
                            <Form.Control value={user.street} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicPassword">
                            <Form.Label>עיר מגורים</Form.Label>
                            <Form.Control value={user.city} />
                        </Form.Group>
                    </Form.Row>
                    <div className="mt-4 mb-4">
                    <h2>שינוי סיסמה</h2>
                    </div>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicPassword">
                            <Form.Label>סיסמה חדשה</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicPassword">
                            <Form.Label>וידוא סיסמה</Form.Label>
                            <Form.Control type="password" />
                            <Form.Text className="text-muted">
                            יש להקליד את הסיסמה החדשה שנית
                            </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Navbar fixed='bottom'>
                        <Button variant="primary" type="submit">
                            שמירת שינויים
                        </Button>
                    </Navbar>
                </Form>
            </main>
        );
    }
}
export default connect(state => state)(Personal_information);