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
import { Modal, ModalDialog, Button, Form, FormControl, Col, InputGroup } from 'react-bootstrap'
import setUndoTask from '../dbActions/setUndoTask'
import refresh4User from '../dbActions/refresh4User'
import setTaskReport from '../dbActions/setTaskReport'
import getTaskReports from '../dbActions/getTaskReports'
import setTaskCollected from '../dbActions/setCollected'
import addTask from '../dbActions/addTask'
import editTask from '../dbActions/editTask'
import deleteTask from '../dbActions/deleteTask'
import addUser from '../dbActions/addUser'
import editUser from '../dbActions/editUser'
import editUserAuth from '../dbActions/editUserAuth'
import XLSX from 'xlsx'

const initialState = {
    mainCourseQ: 0,
    sideCourseQ: 0,
    pastriesQ: 0,
    pastriesS: "",
    breadQ: 0,
    breadS: "",
    startDate: new Date(),
    nonCollectedReason: "",
    date: null,
    time: null,
    city: "",
    address: "",
    name: "",
    contact: "",
    contactNumber: "",
    comment: "",
    phone: "",
    email: "",
    tz: "",
    firstName: "",
    lastName: "",
    region: "",
    password : "",
	validated: false
}

class ModalBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        /* The ModalBlock state properties are only
            relevant to the REPORT_FILL modal */                                
        this.dateHandleChange = this.dateHandleChange.bind(this);
		this.validateUserInfo = this.validateUserInfo.bind(this);
		this.validateTaskInfo = this.validateTaskInfo.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }
	
    resetState() {
        /* This method is only relevant
           to the REPORT_FILL modal */
        this.setState(initialState)
    }

    dateHandleChange(date) {
        /* This method is only relevant
           to the REPORT_FILL modal */
        this.setState({
          startDate: date
        });
      }

	exportTasksXcell(){
		// TODO decide if this line should stay also
		let rows = [Object.keys(this.props.regionalTasks[0])]
		this.props.regionalTasks.forEach((task) => {
			let taskRow = []
			Object.keys(this.props.regionalTasks[0]).forEach((key) => {
				taskRow.push(task[key])
			})
		     rows.push(Object.values(taskRow))
        })
		
		const wb = XLSX.utils.book_new()
        const wsAll = XLSX.utils.aoa_to_sheet(rows)
    
        XLSX.utils.book_append_sheet(wb, wsAll, "All Tasks")
		XLSX.writeFile(wb, "LeketTasks.xlsx")
		
	}
	
	exportUsersXcell(){
		// TODO decide if this line should stay.
		let rows = [Object.keys(this.props.users[0])]
		this.props.users.forEach((user) => {
			let userRow = []
			Object.keys(this.props.users[0]).forEach((key) => {
				userRow.push(user[key])
			})
		     rows.push(Object.values(userRow))
        })
		
		const wb = XLSX.utils.book_new()
        const wsAll = XLSX.utils.aoa_to_sheet(rows)
    
        XLSX.utils.book_append_sheet(wb, wsAll, "All Users")
		XLSX.writeFile(wb, "LeketUsers.xlsx")
		
	}
	
	handleChange = (e) => {
        const { name, value } = e.target;

        this.setState(prevState => ({
          post: { ...prevState.post, [name]: value }
        }));
    };
  
    validateTaskInfo(){
		
		let isPhoneValid = /^\d{10}$/.test(this.state.contactNumber);
		console.log("phone length valid: " + isPhoneValid);
		
        if (!isPhoneValid) {
          console.log("nonvalid")
		  return false;
        }
		return true;
	}
	
	validateUserInfo(){
		
		let isMailValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.state.email)
        console.log("mail valid: " + isMailValid);
		
		let isTZValid = /^\d{9}$/.test(this.state.tz);
		// TODO add real TZ check
		console.log("TZ length valid: " + isTZValid);
		
		let isPhoneValid = /^\d{10}$/.test(this.state.phone);
		console.log("phone length valid: " + isPhoneValid);
		
		if(!isMailValid || !isTZValid || !isPhoneValid) {
          console.log("nonvalid")
		  return false;
        }
        this.setState({ validated: true });
		return true;
		
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
        let isValid = true; // TODO add logic to validation
        if (isValid) {
			let re = /^\d+$/
			let isMainCourseQDigit = re.test(this.state.mainCourseQ);
			let isSideCourseQDigit = re.test(this.state.sideCourseQ);
			let isPastriesQDigit = re.test(this.state.pastriesQ);
			let isBreadQDigit = re.test(this.state.breadQ);
			if(!isMainCourseQDigit || !isSideCourseQDigit || !isPastriesQDigit || !isBreadQDigit){
				console.log("inhere!");
				return false
			}
			console.log("outhere!");
			
            let numOfFields = 0;
            let fields = [];
            if (this.state.mainCourseQ > 0) { numOfFields++; fields.push("mainCourseQ"); }
            if (this.state.sideCourseQ > 0) { numOfFields++; fields.push("sideCourseQ"); }
            if (this.state.pastriesQ > 0) { numOfFields++; fields.push("pastriesQ"); }
            if (this.state.breadQ > 0) { numOfFields++; fields.push("breadQ"); }
            let data = {
                reportFilled: true,
                reportFieldNum: numOfFields,
                reportComment: this.state.comment,
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

            setTaskReport(this.props, this.props.modal.entries.id, data)           
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
                        onClick: () => {
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                            console.log(modal.entries)
                        },
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'ASSIGN_TASKS_FAILED':
                /* Failure when assigning tasks.
                 * We still need to review this and adjust
                 * according to the feedback we received.
                 */
                console.log(modal.entries)
                let options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
                var succeeded = modal.entries.succeeded.map((task) =>
                    <li>{task.name} - {task.timestamp.toDate().toLocaleDateString('he-IL', options)}</li>
                );
                var failed = modal.entries.failed.map((task) =>
                    <li>{task.name} - { task.timestamp.toDate().toLocaleDateString('he-IL', options)}</li>
                );
                console.log(succeeded)
                title = 'כשלון בשיבוץ האיסופים';
                body = (
                    <span>
                        השיבוץ לאיסופים שבחרת נכשל!
                        לפניך רשימת המשימות שניתן להשתבץ אליהם:
                        <ul>{succeeded}</ul>
                        ורשימת המשימות שלא ניתן להשתבץ אליהם:
                        <ul>{failed}</ul>                        
                    </span>
                );  
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_SUCCESS', entries: modal.entries.succeeded }),
                        variant: 'secondary',
                        text: 'שבץ מה שאפשר'
                    },
                    {
                        onClick: () => {    /* cancel the assignments */
                            modal.entries.succeeded.forEach((task) => { setUndoTask(this.props, task.id) } )                             
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                        },
                        variant: 'primary',
                        text: 'בטל הכל'
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
                        refresh4User(this.props.dispatch, this.props.userData.region, this.props.userData.uid); //TODO put async in dbAction
                    },
                    variant: 'secondary',
                    text: 'מאוחר יותר'
                },
                {
                    onClick: () => {
                        this.props.dispatch({ type: 'CLOSE_MODAL' })
                    },
                    variant: 'secondary',
                    text: 'ביטול פעולה'
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
                                    id="comment" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                );
                buttons = [
                    {
                        onClick: () => {                            
                            let verified = this.verifyValuesForReport(modal);
							if(verified){
								this.resetState();                            
								this.props.dispatch({ type: 'CLOSE_MODAL' });
							}
                        },
                        variant: 'primary',
                        text: 'שליחה'
                    },
                    {
                        onClick: () => {
                            this.resetState();                            
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                        },
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
                                <Form.Control as="select" id="nonCollectedReason" onChange={this.handleChange}>
                                    <option>בחר סיבה</option>
                                    <option>לא נותר מזון</option>
                                    <option>לא נעניתי</option>
                                    <option>סיבה אחרת</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>הערות נוספות</Form.Label>
                                <Form.Control as="textarea" rows="3" id="comment" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                );
                buttons = [
                    {
                        onClick: () => {                            
                            let data = {
                                reportFilled: true,
                                reportFieldNum: 0,
                                reportComment: this.state.nonCollectedReason + ' - ' + this.state.comment,
                                collected: true
                            }
                            setTaskReport(this.props, this.props.modal.entries.id, data)
                            this.resetState();                            
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                        },
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
                            setUndoTask(this.props, modal.entries.id)
                            this.props.dispatch({ type: 'CLOSE_MODAL' })                            
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
            case 'REMOVE_TASK':
                title = 'מחיקת משימה';
                body = 'לחיצה על "מחיקה", תמחוק את המשימה לצמיתות.';
                buttons = [
                    {
                        onClick: () => {
                            deleteTask(this.props, modal.entries.id)
                            this.props.dispatch({ type: 'CLOSE_MODAL' })                            
                        },
                        variant: 'danger',
                        text: 'מחיקה'
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
                body =  <Form noValidate validated={this.state.validated}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>שם פרטי</Form.Label>
                                    <Form.Control id="firstName" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>שם משפחה</Form.Label>
                                    <Form.Control id="lastName" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formTZ">
                                    <Form.Label>תעודת זהות</Form.Label>
                                    <Form.Control id="tz" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>אזור איסוף</Form.Label>
                                    <Form.Control as="select" id="region" onChange={this.handleChange} >
                                        <option>בחר אזור</option>
                                        <option>שרון</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>כתובת דואר אלקטרוני</Form.Label>
                                    <Form.Control type="email" id="email" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label>מספר טלפון</Form.Label>
                                    <Form.Control id="phone" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>רחוב ומספר</Form.Label>
                                    <Form.Control id="address" onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>עיר מגורים</Form.Label>
                                    <Form.Control id="city" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>הערה</Form.Label>
                                    <Form.Control as="textarea" rows="3" id="comment" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                        </Form>;
                buttons = [
                    {
                        onClick: () => {
							let valid = this.validateUserInfo()
							if(valid){
                            let user = {
                                firstName: this.state.firstName,
                                lastName: this.state.lastName,
                                tz: this.state.tz,
                                region: this.state.region,
                                email: this.state.email,
                                phone: this.state.phone,
                                address: this.state.address,
                                city: this.state.city,
                                comment: this.state.comment,
                                disabled: false,
                                admin: false
                            }
                            addUser(this.props, user)
                            this.resetState()
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
							}
                        },
                        variant: 'primary',
                        text: 'שליחה'
                    },
                    {
                        onClick: () => {
                            this.resetState()
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                        },
                        variant: 'secondary',
                        text: 'ביטול'
                    }];
                break;
            case 'ADD_USER_CSV':
                /* For adding multiple volunteers via uploading a .CSV file (Admins only) */
                title = 'הוספת מתנדבים מקובץ';
                body =  <span></span>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'EDIT_USER':                
                /* For editing volunteer's details (Admins only) */
                let user = modal.entries;
                if (this.state.tz == "" && modal.isOpen) {  // if it is the first time rendering this form - otherwise goes into infinite loop
                    this.setState({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        tz: user.tz,
                        region: user.region,
                        email: user.email,
                        phone: user.phone,
                        address: user.address,
                        city: user.city,
                        comment: user.comment
                    })
                }
                title = 'עריכת פרטי מתנדב';
                body =
                        <Form noValidate
                            validated={this.state.validated}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>שם פרטי</Form.Label>
                                    <Form.Control value={this.state.firstName} id="firstName" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>שם משפחה</Form.Label>
                                    <Form.Control value={this.state.lastName} id="lastName" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formTZ">
                                    <Form.Label>תעודת זהות</Form.Label>
                                    <Form.Control value={this.state.tz} id="tz" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>אזור איסוף</Form.Label>
                                    <Form.Control as="select" value={this.state.region} id="region" onChange={this.handleChange} >
                                        <option>שרון</option>                                        
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>כתובת דואר אלקטרוני</Form.Label>
                                    <Form.Control type="email" value={this.state.email} id="email" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label>מספר טלפון</Form.Label>
                                    <Form.Control value={this.state.phone} id="phone" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>רחוב ומספר</Form.Label>
                                    <Form.Control value={this.state.address} id="address" onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>עיר מגורים</Form.Label>
                                    <Form.Control value={this.state.city} id="city" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>                                
                                <Form.Group as={Col}>
                                    <Form.Label>הערה</Form.Label>
                                    <Form.Control value={this.state.comment} id="comment" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                        </Form>;
                buttons = [
                    {
                        onClick: () => {
							let valid = this.validateUserInfo();
							if(valid){
                            let changes = {
                                firstName: this.state.firstName,
                                lastName: this.state.lastName,
                                tz: this.state.tz,
                                region: this.state.region,                                
                                phone: this.state.phone,
                                address: this.state.address,
                                city: this.state.city,
                                comment: this.state.comment                             
                            }
                            if (user.email != this.state.email) {   // so email in auth wouldn't be updated for nothing
                                changes.email = this.state.email
                            }
                            editUser(this.props, user.uid, changes)    
                            this.resetState()
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
							}
                        },
                        variant: 'primary',
                        text: 'שליחה'
                    },
                    {
                        onClick: () => {
                            this.resetState()
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                        },
                        variant: 'secondary',
                        text: 'ביטול'
                    }];
                break;                
            case 'REMOVE_USER':
                {
                /* For deleting a user (Admins only) */
                let user = modal.entries;
                title = 'סגירת חשבון מתנדב';
                body = `סגירת חשבון המתנדב ${user.firstName} ${user.lastName}: מתנדב שייסגר חשבונו לא יוכל להתחבר. תיעוד הפעילות שלו יישמר וניתן יהיה להפעיל מחדש את המשתמש.`;
                buttons = [
                    {
                        onClick: () => {
                            let changes = { disabled: true }
                            editUserAuth(this.props, user.uid, changes)
                            editUser(this.props, user.uid, changes)
                            this.props.dispatch({ type: 'CLOSE_MODAL' })                           
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
            case 'CHANGE_PASSWORD':
                {
                    /* For deleting a user (Admins only) */
                    let user = modal.entries;
                    title = 'שינוי סיסמה למתנדב';
                    body = (
                        <span>
                            <span>הינך עומד לשנות את הסיסמה למתנדב {user.firstName} {user.lastName}.  יש לוודא עם המתנדב שהוא מכיר את הסיסמה החדשה.</span>                            
                            < Form >
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <br/><Form.Label>סיסמה חדשה</Form.Label><br />
                                        <FormControl id="password" onChange={this.handleChange} />
                                    </Form.Group>                           
                                </Form.Row>
                            </Form >
                        </span>);
     
                    buttons = [
                        {
                            onClick: () => {
                                let changes = { password: this.state.password}
                                editUserAuth(this.props, user.uid, changes)
                                this.resetState()
                                this.props.dispatch({ type: 'CLOSE_MODAL' })                                
                            },
                            variant: 'danger',
                            text: 'איפוס סיסמה'
                        },
                        {
                            onClick: () => {
                                this.resetState()
                                this.props.dispatch({ type: 'CLOSE_MODAL' })
                            },
                            variant: 'secondary',
                            text: 'ביטול'
                        }];
                    break;
                }
            case 'ADD_TASK':
                /* For adding a task (Admins only) */
                title = 'הוספת איסוף';
                body = (
                    <Form noValidate
                        validated={this.state.validated}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>תאריך</Form.Label><br />
                                <FormControl type="date" id="date" onChange={this.handleChange}
                                />                                
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>שעה</Form.Label><br />
                                <FormControl pattern="[0-9]{2}:[0-9]{2}" type="time" id="time" onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>עיר</Form.Label>
                                <Form.Control id="city" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>רחוב ומספר</Form.Label>
                                <Form.Control id="address" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>ספק</Form.Label>
                                <Form.Control id="name" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>שם איש קשר</Form.Label>
                                <Form.Control id="contact" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label>טלפון איש קשר</Form.Label>
                                <Form.Control id="contactNumber" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>הערות</Form.Label>
                                <Form.Control as="textarea" rows="3" id="comment" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                );
                buttons = [
                    {
                        onClick: () => { 
							let valid = this.validateTaskInfo();
							if(valid){					
                            let data = {
                                date: this.state.date,
                                time: this.state.time,
                                city: this.state.city,
                                address: this.state.address,
                                name: this.state.name,
                                contact: this.state.contact,
                                contactNumber: this.state.contactNumber,
                                comment: this.state.comment                               
                            }
                            addTask(this.props.dispatch, this.props.userData.region, data)                            
                            this.resetState()
                            this.props.dispatch({ type: 'CLOSE_MODAL' })  
							}							
                        },
                        variant: 'primary',
                        text: 'הוספה'
                    },
                    {
                        onClick: () => {
                            this.resetState() 
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                        },
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
            case 'EDIT_TASK':
                /* For editnig a task (Admins only) */
                let task = modal.entries;            
                let date = task.timestamp.toDate();
                let year = date.getFullYear();
                let month = ('0' + (date.getMonth() + 1)).slice(-2);
                let day = ('0' + date.getDate()).slice(-2);
                let time = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);                

                if (this.state.date == null && modal.isOpen) {  // if it is the first time rendering this form - otherwise goes into infinite loop
                    this.setState({
                        date: year + '-' + month + '-' + day,//`${year}-${month}-${day}`,
                        time: time,
                        city: task.city,
                        address: task.address,
                        name: task.name,
                        contact: task['contact name'],
                        contactNumber: task['contact number'],
                        comment: (task.comment != null) ? task.comment : "" // TODO default comment
                    })
                }

                title = 'עריכת איסוף';
                body = (
                    <Form noValidate
                        validated={this.state.validated}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>תאריך</Form.Label><br />
                                <FormControl type="date" value={this.state.date} id="date" onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>שעה</Form.Label><br />
                                <FormControl pattern="[0-9]{2}:[0-9]{2}" type="time"
                                    value={this.state.time} id="time" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>עיר</Form.Label>
                                <Form.Control value={this.state.city} id="city" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>רחוב ומספר</Form.Label>
                                <Form.Control value={this.state.address} id="address" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>ספק</Form.Label>
                                <Form.Control value={this.state.name} id="name" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>שם איש קשר</Form.Label>
                                <Form.Control value={this.state.contact} id="contact" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formPhone">
                                <Form.Label>טלפון איש קשר</Form.Label>
                                <Form.Control value={this.state.contactNumber} id="contactNumber" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>הערות</Form.Label>
                                <Form.Control as="textarea" value={this.state.comment} rows="3" id="comment" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                    );
                    buttons = [
                        {
                            onClick: () => {
								let valid = this.validateTaskInfo();
								if(valid){
                                let data = {
                                    date: this.state.date,
                                    time: this.state.time,
                                    city: this.state.city,
                                    address: this.state.address,
                                    name: this.state.name,
                                    contact: this.state.contact,
                                    contactNumber: this.state.contactNumber,
                                    comment: this.state.comment
                                }
                                editTask(this.props.dispatch, modal.entries.region, modal.entries.id, data)
                                this.resetState()
                                this.props.dispatch({ type: 'CLOSE_MODAL' })
								}
                            },
                            variant: 'primary',
                            text: 'עריכה'
                        },
                        {
                            onClick: () => {
                                this.resetState()
                                this.props.dispatch({ type: 'CLOSE_MODAL' })
                            },
                            variant: 'secondary',
                            text: 'ביטול'
                        }];
                    break;
            case 'TASK_STATUS':
                title = 'סטטוס';
                body = (
                    <div>גוף הסטטוס</div>
                );
                buttons = [
                    {
                        onClick: () => {
                            this.resetState()
                            this.props.dispatch({ type: 'CLOSE_MODAL' })
                        },
                        variant: 'secondary',
                        text: 'ביטול'
                    }
                ]

                break;
          /*  case 'ADD_TASK_CSV':                            TODO remove?               
                title = 'הוספת איסופים מקובץ';
                body = <span></span>;
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;*/
			// Why is it called csv if it exports to xlsx?
            case 'EXPORT_TASK_CSV':
                /* For exporting reports (Admins only) */
                title = 'ייצוא דוח';
                body = (
                    <h2>
						לחץ כדי לייצא דוח.
					</h2>
                );
                buttons = [
                    {
					onClick: () => this.exportTasksXcell() ,
                        variant: 'primary',
                        text: 'ייצא דוח'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
                break;
			case 'EXPORT_USER_CSV':
				title = 'ייצוא דוח';
                body = (
                    <h2>
						לחץ כדי לייצא דוח.
					</h2>
                );
                buttons = [
                    {
					onClick: () => this.exportUsersXcell() ,
                        variant: 'primary',
                        text: 'ייצא דוח'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                        variant: 'secondary',
                        text: 'סגירה'
                    }];
				break;
        }

        return (
            <Modal show={modal.isOpen} onHide={() => {
                this.resetState()
                this.props.dispatch({ type: 'CLOSE_MODAL' })
            }
            }>
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