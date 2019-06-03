import Link from 'next/link'
import React from 'react'
import { connect } from 'react-redux'
import {Modal, ModalDialog, Button, Form, FormControl, Col, InputGroup} from 'react-bootstrap'
import setUndoTask from '../dbActions/setUndoTask'
import refresh4User from '../dbActions/refresh4User'

class ModalBlock extends React.Component {
    render() {
        var modal = this.props.modal;
        var title = '';
        var body = '';
        var buttons = [];
        
        switch (modal.msg) {
            case 'ASSIGN_TASKS_MIX':
                title = 'הצלחה חלקית';
                body = <span>                   חלק מהאיסופים שבחרת שובצו בהצלחה, וחלק לא! ניתן לראות לאילו איסופים שובצת בעמוד <Link href="assigned-tasks"><a onClick={() => this.props.dispatch({ type: 'CLOSE_MODAL' })}>איסופים קרובים</a></Link>.</span>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'ASSIGN_TASKS_FAILED':
                title = 'כשלון בשיבוץ האיסופים';
                body = <span>{Object.keys(modal.entries).length}                     שיבוץ האיסופים נכשל! אנא נסה להשתבץ לאיסופים אחרים. </span>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'ASSIGN_TASKS_SUCCESS':
                title = 'הצלחה';
                body = <span>{Object.keys(modal.entries).length}                     האיסופים שובצו בהצלחה! ניתן לראות את כל השיבוצים שלך בעמוד <Link href="assigned-tasks"><a onClick={() => this.props.dispatch({ type: 'CLOSE_MODAL' })}>איסופים קרובים</a></Link>.</span>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'REPORT_FILL':
                title = 'משוב על איסוף שבוצע';
                body =
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label>עיקריות</Form.Label>
                                    <InputGroup>
                                        <FormControl
                                        placeholder="כמות"
                                        />
                                        <InputGroup.Append>
                                        <InputGroup.Text>מיכלים</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label>תוספות</Form.Label>
                                    <InputGroup>
                                        <FormControl
                                        placeholder="כמות"
                                        />
                                        <InputGroup.Append>
                                        <InputGroup.Text>מיכלים</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label>מאפים</Form.Label>
                                    <InputGroup>
                                        <FormControl
                                        placeholder="כמות"
                                        />
                                        <Form.Control as="select">
                                            <option>בחירת סוג</option>
                                            <option>ארגזים</option>
                                            <option>שקיות סופר</option>
                                            <option>שקים</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label>לחם</Form.Label>
                                    <InputGroup>
                                        <FormControl
                                        placeholder="כמות"
                                        />
                                        <Form.Control as="select">
                                            <option>בחירת סוג</option>
                                            <option>ארגזים</option>
                                            <option>שקיות סופר</option>
                                            <option>שקים</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label>הערות נוספות</Form.Label>
                                    <Form.Control as="textarea" rows="3"/>
                                </Form.Group>
                            </Form.Row>
                        </Form>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'primary',
                        text: 'שליחה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'REPORT_UNDONE':
                title = 'משוב על איסוף שלא בוצע';
                body =
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Label>מדוע לא בוצע האיסוף?</Form.Label>
                                <Form.Control as="select">
                                    <option>לא נותר מזון</option>
                                    <option>לא נעניתי</option>
                                    <option>סיבה אחרת</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Label>הערות נוספות</Form.Label>
                                <Form.Control as="textarea" rows="3"/>
                            </Form.Group>
                        </Form.Row>
                    </Form>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'primary',
                        text: 'שליחה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'secondary',
                        text: 'ביטול'
                    }];
                break;
            case 'TASK_NOTES':
                title = 'הערות';
                body = <div>{modal.entries.notes}</div>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'TASK_CANCEL':
                title = 'הסרת שיבוץ';
                body = 'הסרת השיבוץ תחזיר את משימת האיסוף לרשימת המשימות הפנויות.';
                buttons = [
                    {
                        onClick: () => {
                            console.log(modal.entries.id)
                            setUndoTask(modal.entries.id)
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                            refresh4User(this.props.dispatch, this.props.userData.region, this.props.userData.uid);
                        },
                        color: 'danger',
                        text: 'הסרה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'secondary',
                        text: 'ביטול'
                    }];
                break;
            case 'EDIT_USER':
                    var user = modal.entries;
                    title = 'עריכת פרטי משתמש';
                    body =
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicEmail">
                                        <Form.Label>שם פרטי</Form.Label>
                                        <Form.Control value={user.firstName} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicEmail">
                                        <Form.Label>שם משפחה</Form.Label>
                                        <Form.Control value={user.lastName} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicEmail">
                                        <Form.Label>תעודת זהות</Form.Label>
                                        <Form.Control value={user.tz} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicEmail">
                                        <Form.Label>אזור איסוף</Form.Label>
                                        <Form.Control as="select">
                                            <option>ראשון לציון</option>
                                            <option>רעננה</option>
                                            <option>תל אביב</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicEmail">
                                        <Form.Label>כתובת דואר אלקטרוני</Form.Label>
                                        <Form.Control type="email" value={user.email}/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
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
                            </Form>;
                    buttons = [
                        {
                            onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                            color: 'primary',
                            text: 'שליחה'
                        },
    
                        {
                            onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                            color: 'secondary',
                            text: 'ביטול'
                        }];
                break;
                case 'TASK_DONE':
                    title = 'האיסוף בוצע';
                    body = 'תודה! האיסוף סומן כבוצע. השלב הבא הוא למלא משוב.';
                    buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL',msg: 'REPORT_FILL' }),
                        color: 'primary',
                        text: 'דיווח'
                    },

                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        color: 'secondary',
                        text: 'סגירה'
                    }    
                    ];
        }

            return (
                <Modal show={modal.isOpen} onHide={() => this.props.dispatch({ type: 'CLOSE_MODAL' })}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {body}
                    </Modal.Body>
                    <Modal.Footer>
                        {buttons.map((button) => {
                            return (
                                <Button key={button.text} variant={button.color} onClick={button.onClick}>{button.text}</Button>
                            );
                        })}
                    </Modal.Footer>
                </Modal>);
    
        
    }
}

export default connect(state => state)(ModalBlock);