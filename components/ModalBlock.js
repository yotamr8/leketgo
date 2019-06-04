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
        this.setState({
          startDate: date
        });
      }

    handleChange = (e) => {
        console.log(e.target.id, e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    verifyValuesForReport() {
        var isValid = true;
        console.log(this.props.modal.entries.id)
        // some logic here

        // organize data for db
        if (isValid) {
            var numOfFields = 0;
            var fields = [];
            if (this.state.mainCourseQ > 0) { numOfFields++; fields.push("mainCourseQ"); }
            if (this.state.sideCourseQ > 0) { numOfFields++; fields.push("sideCourseQ"); }
            if (this.state.pastriesQ > 0) { numOfFields++; fields.push("pastriesQ"); }
            if (this.state.breadQ > 0) { numOfFields++; fields.push("breadQ"); }
            var data = {
                reportFilled: true,
                reportFieldNum: numOfFields,
                reportComment: this.state.formComment,
                collected: true
            }
            var dic = {
                "mainCourseQ": 'עיקריות',
                "sideCourseQ": 'תוספות',
                "pastriesQ": 'מאפים',
                "breadQ": 'לחם'
            }
            for (var i = 0; i < numOfFields; i++) {
                data["foodDesc" + (i + 1)] = dic[fields[i]];
                data["foodContainerType" + (i + 1)] = (fields[i] == "mainCourseQ" || fields[i] == "sideCourseQ") ? 'מיכלים' : (fields[i] == "pastriesQ") ? this.state.pastriesS : this.state.breadS;
                data["foodContainerQuantity" + (i + 1)] = this.state[fields[i]]
            }
            setTaskReport(this.props.modal.entries.id, data)
        }
    }

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
                                <Form.Group as={Col} controlId="formBasicEmail">
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
                                <Form.Group as={Col} controlId="formBasicEmail">
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
                                <Form.Group as={Col} controlId="formBasicEmail">
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
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label>הערות נוספות</Form.Label>
                            <Form.Control as="textarea" rows="3"
                                id="formComment" onChange={this.handleChange}/>
                                </Form.Group>
                            </Form.Row>
                        </Form>;
                buttons = [
                    {
                        onClick: () => {
                            this.props.dispatch({ type: 'CLOSE_MODAL' });
                            this.verifyValuesForReport(modal);
                            this.resetState();
                            getTaskReports(this.props.dispatch, this.props.userData.uid)                        },
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
                    title = 'עריכת פרטי מתנדב';
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
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL',msg: 'REPORT_FILL', entries: modal.entries }),
                        color: 'primary',
                        text: 'דיווח'
                    },

                        {
                            onClick: () => {
                                this.props.dispatch({ type: 'CLOSE_MODAL' })
                                setTaskCollected(modal.entries.id);
                                refresh4User(this.props.dispatch, this.props.userData.region, this.props.userData.uid);
                            },
                        color: 'secondary',
                        text: 'סגירה'
                    }    
                    ];
                    break;
                    case 'ADD_USER':
                            title = 'הוספת מתנדב';
                            body = <span></span>;
                            buttons = [
                                {
                                    onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                                    color: 'secondary',
                                    text: 'סגירה'
                                }];
                            break;
                    case 'ADD_TASK':
                            title = 'הוספת איסוף';
                            body = 
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formBasicEmail">
                                            <Form.Label>תאריך</Form.Label><br />
                                            <FormControl type="date"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formBasicEmail">
                                            <Form.Label>שעה</Form.Label><br />
                                            <FormControl pattern="[0-9]{2}:[0-9]{2}" type="time"
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formBasicEmail">
                                            <Form.Label>עיר</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formBasicEmail">
                                            <Form.Label>רחוב ומספר</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formBasicEmail">
                                            <Form.Label>ספק</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formBasicEmail">
                                            <Form.Label>שם איש קשר</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formBasicEmail">
                                            <Form.Label>טלפון איש קשר</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Form.Row>
                                </Form>;
                            buttons = [
                                {
                                    onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                                    color: 'primary',
                                    text: 'הוספה'
                                },
                                {
                                    onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                                    color: 'secondary',
                                    text: 'סגירה'
                                }];
                            break;
                    case 'ADD_USER_CSV':
                            title = 'הוספת מתנדבים מקובץ';
                            body = <span></span>;
                            buttons = [
                                {
                                    onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                                    color: 'secondary',
                                    text: 'סגירה'
                                }];
                            break;
                    case 'ADD_TASK_CSV':
                            title = 'הוספת איסופים מקובץ';
                            body = <span></span>;
                            buttons = [
                                {
                                    onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                                    color: 'secondary',
                                    text: 'סגירה'
                                }];
                            break;
                    case 'EXPORT_TASK_CSV':
                            title = 'הוספת איסופים מקובץ';
                            body = <span></span>;
                            buttons = [
                                {
                                    onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                                    color: 'secondary',
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
                                <Button key={button.text} variant={button.color} onClick={button.onClick}>{button.text}</Button>
                            );
                        })}
                    </Modal.Footer>
                </Modal>);
    
        
    }
}

export default connect(state => state)(ModalBlock);