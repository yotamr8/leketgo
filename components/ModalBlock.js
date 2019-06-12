/* ModalBlock
 * This component is responsible for any modal window in the app,
 * whether if it's a simple confirmation for an action or an entire
 * form for creating or editing an entry.
 * Each modal differs from the other by it's "message", therefor each
 * message has its own code name, as seen below.
 */

import Link from 'next/link'
import React from 'react'
import { connect } from 'react-redux'
import {Modal, ModalDialog, Button, Form, FormControl, Col, InputGroup} from 'react-bootstrap'
import setUndoTask from '../dbActions/setUndoTask'
import refresh4User from '../dbActions/refresh4User'
import setTaskReport from '../dbActions/setTaskReport'
import getTaskReports from '../dbActions/getTaskReports'
import setTaskCollected from '../dbActions/setCollected'

class ModalBlock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            /* The ModalBlock state properties are only
               relevant to the REPORT_FILL modal */
            mainCourseQ: 0,
            sideCourseQ: 0,
            pastriesQ: 0,
            pastriesS: "",
            breadQ: 0,
            breadS: "",
            formComment: "",
            startDate: new Date()
        }
        this.dateHandleChange = this.dateHandleChange.bind(this);
    }

    resetState() {
        /* This method is only relevant
           to the REPORT_FILL modal */
        this.setState({
            mainCourseQ: 0,
            sideCourseQ: 0,
            pastriesQ: 0,
            pastriesS: "",
            breadQ: 0,
            breadS: "",
            formComment: ""
        })
    }

    dateHandleChange(date) {
        /* This method is only relevant
           to the REPORT_FILL modal */
        this.setState({
          startDate: date
        });
      }

    handleChange = (e) => {
        /* This method is only relevant
           to the REPORT_FILL modal */
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    verifyValuesForReport() {
        /* This method is only relevant
           to the REPORT_FILL modal */
        let isValid = true;
        if (isValid) {
            let numOfFields = 0;
            let fields = [];
            if (this.state.mainCourseQ > 0) { numOfFields++; fields.push("mainCourseQ"); }
            if (this.state.sideCourseQ > 0) { numOfFields++; fields.push("sideCourseQ"); }
            if (this.state.pastriesQ > 0) { numOfFields++; fields.push("pastriesQ"); }
            if (this.state.breadQ > 0) { numOfFields++; fields.push("breadQ"); }
            let data = {
                reportFilled: true,
                reportFieldNum: numOfFields,
                reportComment: this.state.formComment,
                collected: true
            }
            let dic = {
                "mainCourseQ": 'עיקריות',
                "sideCourseQ": 'תוספות',
                "pastriesQ": 'מאפים',
                "breadQ": 'לחם'
            }
            for (let i = 0; i < numOfFields; i++) {
                data["foodDesc" + (i + 1)] = dic[fields[i]];
                data["foodContainerType" + (i + 1)] = (fields[i] == "mainCourseQ" || fields[i] == "sideCourseQ") ? 'מיכלים' : (fields[i] == "pastriesQ") ? this.state.pastriesS : this.state.breadS;
                data["foodContainerQuantity" + (i + 1)] = this.state[fields[i]]
            }
            setTaskReport(this.props.modal.entries.id, data)
        }
    }

    render() {
        /* Each modal window has the same structure:
         * title - The name of the modal, should be descriptive
         * body - The actual message or form of the modal
         * buttons - An array of objects representing the action buttons
         *           at the bottom of the modal. Each object in the array
         *           should have three properties:
         * onClick - The function that would be called upon clicking that button.
         *           Remember! The type of this property is a FUNCTION and not a
         *           function's returned value. i.e. onClick: func() is wrong,
         *           should be () => func() or func without parenthesis.
         * variant - This will determine the visual style of the button.
         *           Should be the name of a Bootstrap's class for a button.
         *           i.e. primary, secondary...
         * text - The text inside the button.
         * 
         * ATTENTION: In switch-case, curly braces are usually not needed.
         *            However, when declaring variables inside a case, you should
         *            Use a 'let' declaration and wrap the case inside a block,
         *            as seen in a few of the cases below. DO NOT REMOVE THEM. 
         */
        var modal = this.props.modal; // Just for keeping things shorter
        var title = '';
        var body = '';
        var buttons = [];
        
        switch (modal.msg) {
            case 'ASSIGN_TASKS_MIX':
                /* Partial success when assigning tasks.
                 * We still need to review this and adjust
                 * according to the feedback we received.
                 */
                title = 'הצלחה חלקית';
                body = (
                    <span>
                    חלק מהאיסופים שבחרת שובצו בהצלחה, וחלק לא! ניתן לראות לאילו איסופים שובצת בעמוד <Link href="assigned-tasks"><a onClick={() => this.props.dispatch({ type: 'CLOSE_MODAL' })}>איסופים קרובים</a></Link>.
                    </span>
                );
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'ASSIGN_TASKS_FAILED':
                /* Failure when assigning tasks.
                 * We still need to review this and adjust
                 * according to the feedback we received.
                 */
                title = 'כשלון בשיבוץ האיסופים';
                body = (
                    <span>
                    {Object.keys(modal.entries).length} שיבוץ האיסופים נכשל! אנא נסה להשתבץ לאיסופים אחרים.
                    </span>
                );
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'ASSIGN_TASKS_SUCCESS':
                /* Success when assigning tasks.
                 * We still need to review this and adjust
                 * according to the feedback we received.
                 */
                title = 'הצלחה';
                body = (
                    <span>
                    {Object.keys(modal.entries).length}                     האיסופים שובצו בהצלחה! ניתן לראות את כל השיבוצים שלך בעמוד <Link href="assigned-tasks"><a onClick={() => this.props.dispatch({ type: 'CLOSE_MODAL' })}>איסופים קרובים</a></Link>.
                    </span>
                );
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'TASK_DONE':
                /* For when a volunteer marks an assignment `done` */
                title = 'האיסוף בוצע';
                body = 'תודה! האיסוף סומן כבוצע. השלב הבא הוא למלא משוב.';
                buttons = [
                {
                    onClick: () => this.props.dispatch({ type: 'OPEN_MODAL',msg: 'REPORT_FILL', entries: modal.entries }),
                    variant: 'primary',
                    text: 'דיווח'
                },
                {
                    onClick: () => {
                        this.props.dispatch({ type: 'CLOSE_MODAL' })
                        setTaskCollected(modal.entries.id);
                        refresh4User(this.props.dispatch, this.props.userData.region, this.props.userData.uid);
                    },
                    variant: 'secondary',
                    text: 'מאוחר יותר'
                }    
                ];
                break;
            case 'REPORT_FILL':
                /* Form for filling a task report. */
                title = 'משוב על איסוף שבוצע';
                body = (
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>עיקריות</Form.Label>
                                <InputGroup>
                            <FormControl id="mainCourseQ"
                                onChange={this.handleChange}
                                    placeholder="כמות"
                                    />
                                    <InputGroup.Append>
                                    <InputGroup.Text>מיכלים</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>תוספות</Form.Label>
                                <InputGroup>
                            <FormControl id="sideCourseQ"
                                onChange={this.handleChange}
                                    placeholder="כמות"
                                    />
                                    <InputGroup.Append>
                                    <InputGroup.Text>מיכלים</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>מאפים</Form.Label>
                                <InputGroup>
                            <FormControl id="pastriesQ"
                                onChange={this.handleChange}
                                    placeholder="כמות"
                                    />
                            <Form.Control as="select" id="pastriesS"
                                onChange={this.handleChange}>
                                        <option>בחירת סוג</option>
                                        <option>ארגזים</option>
                                        <option>שקיות סופר</option>
                                        <option>שקים</option>
                                    </Form.Control>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>לחם</Form.Label>
                                <InputGroup>
                            <FormControl id="breadQ"
                                onChange={this.handleChange}
                                    placeholder="כמות"
                                    />
                            <Form.Control as="select" id="breadS"
                                onChange={this.handleChange}>
                                        <option>בחירת סוג</option>
                                        <option>ארגזים</option>
                                        <option>שקיות סופר</option>
                                        <option>שקים</option>
                                    </Form.Control>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>הערות נוספות</Form.Label>
                        <Form.Control as="textarea" rows="3"
                            id="formComment" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                );
                buttons = [
                    {
                        onClick: () => {
                            this.props.dispatch({ type: 'CLOSE_MODAL' });
                            this.verifyValuesForReport(modal);
                            this.resetState();
                            getTaskReports(this.props.dispatch, this.props.userData.uid)                        },
                            variant: 'primary',
                        text: 'שליחה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'REPORT_UNDONE':
                /* Form for when a volunteer reports a missed task */
                title = 'משוב על איסוף שלא בוצע';
                body = (
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>מדוע לא בוצע האיסוף?</Form.Label>
                                <Form.Control as="select">
                                    <option>לא נותר מזון</option>
                                    <option>לא נעניתי</option>
                                    <option>סיבה אחרת</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>הערות נוספות</Form.Label>
                                <Form.Control as="textarea" rows="3"/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                );
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'primary',
                        text: 'שליחה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'ביטול'
                    }];
                break;
            case 'TASK_NOTES':
                /* A modal showing extra notes for a certain task */
                title = 'הערות';
                body = (
                    <span>{modal.entries.notes}</span>
                );
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'TASK_CANCEL':
                /* For when a volunteer wants to unassign a task */
                title = 'הסרת שיבוץ';
                body = 'הסרת השיבוץ תחזיר את משימת האיסוף לרשימת המשימות הפנויות.';
                buttons = [
                    {
                        onClick: () => {
                            setUndoTask(modal.entries.id)
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                            refresh4User(this.props.dispatch, this.props.userData.region, this.props.userData.uid);
                        },
                        variant: 'danger',
                        text: 'הסרה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'ביטול'
                    }];
                break;
            case 'ADD_USER':
                /* For adding a volunteer (Admins only) */
                title = 'הוספת מתנדב';
                body = <span></span>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'ADD_USER_CSV':
                /* For adding multiple volunteers via uploading a .CSV file (Admins only) */
                title = 'הוספת מתנדבים מקובץ';
                body = <span></span>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'EDIT_USER':
                {
                /* For editing volunteer's details (Admins only) */
                let user = modal.entries;
                title = 'עריכת פרטי מתנדב';
                body =
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>שם פרטי</Form.Label>
                                    <Form.Control value={user.firstName} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>שם משפחה</Form.Label>
                                    <Form.Control value={user.lastName} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>תעודת זהות</Form.Label>
                                    <Form.Control value={user.tz} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>אזור איסוף</Form.Label>
                                    <Form.Control as="select">
                                        <option>ראשון לציון</option>
                                        <option>רעננה</option>
                                        <option>תל אביב</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>כתובת דואר אלקטרוני</Form.Label>
                                    <Form.Control type="email" value={user.email}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>מספר טלפון</Form.Label>
                                    <Form.Control type="email" value={user.phone}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>רחוב ומספר</Form.Label>
                                    <Form.Control value={user.street} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>עיר מגורים</Form.Label>
                                    <Form.Control value={user.city} />
                                </Form.Group>
                            </Form.Row>
                        </Form>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'primary',
                        text: 'שליחה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'ביטול'
                    }];
                break;
                }
            case 'REMOVE_USER':
                {
                /* For deleting a user (Admins only) */
                let user = modal.entries;
                title = 'סגירת חשבון מתנדב';
                body = `סגירת חשבון המתנדב ${user.firstName} ${user.lastName}: מתנדב שנמחק מהמערכת לא יוכל להתחבר. תיעוד הפעילות שלו יישמר וניתן יהיה להפעיל מחדש את המשתמש.`;
                buttons = [
                    {
                        onClick: () => {
                            setUndoTask(modal.entries.id)
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                            refresh4User(this.props.dispatch, this.props.userData.region, this.props.userData.uid);
                        },
                        variant: 'danger',
                        text: 'סגירת חשבון'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'ביטול'
                    }];
                break;
                }
            case 'RESET_PASSWORD':
                {
                    /* For deleting a user (Admins only) */
                    let user = modal.entries;
                    title = 'איפוס סיסמה למתנדב';
                    body = `איפוס הסיסמה למתנדב ${user.firstName} ${user.lastName}: יישלח מייל לכתובתו ${user.email} ודרכו יתבקש להזין סיסמה חדשה. יש לוודא עם המתנדב שכתובת המייל המוזנת במערכת היא אכן כתובתו הפעילה.`;
                    buttons = [
                        {
                            onClick: () => {
                                setUndoTask(modal.entries.id)
                                this.props.dispatch({ type: 'CLOSE_MODAL' })
                                refresh4User(this.props.dispatch, this.props.userData.region, this.props.userData.uid);
                            },
                            variant: 'danger',
                            text: 'איפוס סיסמה'
                        },
                        {
                            onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                            variant: 'secondary',
                            text: 'ביטול'
                        }];
                    break;
                }
            case 'ADD_TASK':
                /* For adding a task (Admins only) */
                title = 'הוספת איסוף';
                body = (
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>תאריך</Form.Label><br />
                                <FormControl type="date"
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>שעה</Form.Label><br />
                                <FormControl pattern="[0-9]{2}:[0-9]{2}" type="time"
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>עיר</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>רחוב ומספר</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>ספק</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>שם איש קשר</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>טלפון איש קשר</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                );
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'primary',
                        text: 'הוספה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'EDIT_TASK':
                /* For adding a task (Admins only) */
                let task = modal.entries;
                let date = task.timestamp.toDate();
                let year = date.getFullYear();
                let month = ('0' + date.getMonth()).slice(-2);
                let day = ('0' + date.getDate()).slice(-2);
                let time = date.getHours() + ':' + ('0'+date.getMinutes()).slice(-2);
                title = 'עריכת איסוף';
                body = (
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>תאריך</Form.Label><br />
                                <FormControl type="date" value={`${year}-${month}-${day}`}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>שעה</Form.Label><br />
                                <FormControl pattern="[0-9]{2}:[0-9]{2}" type="time"
                                    value={time}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>עיר</Form.Label>
                                <Form.Control value={task.city}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>רחוב ומספר</Form.Label>
                                <Form.Control value={task.address}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>ספק</Form.Label>
                                <Form.Control value={task.name}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>שם איש קשר</Form.Label>
                                <Form.Control value={task['contact name']}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>טלפון איש קשר</Form.Label>
                                <Form.Control value={task['contact number']}/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                    );
                    buttons = [
                        {
                            onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                            variant: 'primary',
                            text: 'עריכה'
                        },
                        {
                            onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                            variant: 'secondary',
                            text: 'ביטול'
                        }];
                    break;
            case 'ADD_TASK_CSV':
                /* For adding multiple tasks via uploading a .CSV file (Admins only) */
                title = 'הוספת איסופים מקובץ';
                body = <span></span>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'EXPORT_TASK_CSV':
                /* For exporting reports (Admins only) */
                title = 'ייצוא דוח';
                body = <span></span>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
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
                            <Button key={button.text} variant={button.variant} onClick={button.onClick}>
                            {button.text}
                            </Button>
                        );
                    })}
                </Modal.Footer>
            </Modal>
        );
    }
}

export default connect(state => state)(ModalBlock);