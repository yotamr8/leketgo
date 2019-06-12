import React from 'react'
import { connect } from "react-redux"
import {Card, Button, ButtonToolbar, Tooltip, OverlayTrigger, Dropdown, Form, ButtonGroup} from 'react-bootstrap'
import fire from '../config/firebaseConfig'

class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        }
        this.toggleSelection = this.toggleSelection.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
    };

    getDataValues(entry) {
        switch (this.props.type) {
            case 'tasks':
                let options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
                let date = entry.timestamp.toDate();
                let statusIcon;
                let statusMessage;
                if (entry.collected) {
                    if (entry.reportFilled) {
                        statusIcon = 'fas fa-calendar-check';
                        statusMessage = 'בוצע ומושב';
                    }
                    else {
                        statusIcon = 'far fa-calendar-check';
                        statusMessage = 'בוצע ולא מושב';
                    }
                } else {
                    if (entry.reportFilled) {
                        statusIcon = 'fas fa-calendar-times';
                        statusMessage = 'לא בוצע ומושב';
                    } else {
                        statusIcon = 'far fa-calendar-times';
                        statusMessage = 'לא בוצע ולא מושב';
                    }
                }
                return {
                    date: date.toLocaleDateString('he-IL', options),
                    time: date.getHours() + ':' + ('0'+date.getMinutes()).slice(-2),
                    city: entry.city,
                    name: entry.name,
                    street: entry.address,
                    fullAddress: entry.address + ', ' + entry.city,
                    actions: 'ACTIONS',
                    contactName: entry['contact name'],
                    contactNumber: <a style={{whiteSpace: 'nowrap'}} href={'tel: '+ entry['contact number']}>{entry['contact number']}</a>,
                    checkBox: this.props.isSelected ? <Form.Check custom checked label='' type='checkbox' /> : <Form.Check custom label='' type='checkbox' />,
                    statusIcon: statusIcon,
                    statusMessage: statusMessage
                }
            case 'users':
                return {
                    uid: entry.id,
                    firstName: entry.firstName,
                    lastName: entry.lastName,
                    fullName: entry.firstName + '' + entry.lastName,
                    region: entry.region,
                    email: entry.email,
                    phone: entry.phone,
                    tz: entry.tz
                }
            default:
                break;
        }
    }

    toggleSelection() {
        if (this.props.isSelectable) {
            this.props.selectCallback(this.props.entry, !this.props.isSelected);
        }
    }

    toggleEditable() {
        this.setState({isEditable: !this.state.isEditable});
    }

    render() {
        let buttons = [];
        let nm = this.props.tableTasksCardView ? 'nm' : '';
        switch (this.props.page) { 
            case 'assignedTasks':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_NOTES', entries: this.props.entry}),
                        variant: 'outline-primary',
                        text: <span><i className={"far fa-sticky-note fa-fw "+ nm}></i>{this.props.tableTasksCardView ? <br/> : ''}הערות</span>
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_DONE', entries: this.props.entry}),
                        variant: 'outline-primary',
                        text: <span><i className={"far fa-calendar-check fa-fw "+ nm}></i>{this.props.tableTasksCardView ? <br/> : ''}בוצע</span>
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_CANCEL', entries: this.props.entry }),
                        variant: 'outline-secondary',
                        text: <span><i className={"far fa-calendar-times fa-fw "+ nm}></i>{this.props.tableTasksCardView ? <br/> : ''}הסרה</span>
                    },
                ];
                break;
            case 'taskReports':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'REPORT_FILL', entries: this.props.entry }),
                        variant: 'outline-primary',
                        text: <span><i className={"far fa-calendar-check fa-fw "+ nm}></i>{this.props.tableTasksCardView ? <br/> : ''}דיווח</span>
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'REPORT_UNDONE' }),
                        variant: 'outline-secondary',
                        text: <span><i className={"far fa-calendar-times fa-fw "+ nm}></i>{this.props.tableTasksCardView ? <br/> : ''}לא בוצע</span>
                    },
                ];
                break;
            case 'adminUsers':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'EDIT_USER', entries: this.props.entry}),
                        variant: 'outline-primary',
                        text: <span><i className="far fa-edit fa-fw"></i>עריכה</span>
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'RESET_PASSWORD', entries: this.props.entry}),
                        variant: 'outline-secondary',
                        text: <span><i className="fas fa-unlock-alt fa-fw"></i>איפוס סיסמה</span>
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'REMOVE_USER', entries: this.props.entry}),
                        variant: 'outline-secondary',
                        text: <span><i className="far fa-trash-alt fa-fw"></i>סגירת חשבון</span>
                    }
                ];
                break;
            case 'adminTasks':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'EDIT_TASK', entries: this.props.entry}),
                        variant: 'outline-primary',
                        text: <span><i className="far fa-edit fa-fw"></i>עריכה</span>
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_STATUS', entries: this.props.entry}),
                        variant: 'outline-secondary',
                        text: <span><i className="fas fa-question fa-fw"></i>סטטוס</span>
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'REMOVE_TASK', entries: this.props.entry}),
                        variant: 'outline-secondary',
                        text: <span><i className="far fa-trash-alt fa-fw"></i>מחיקה</span>
                    }
                ];
                break;
        }
        if (this.props.tableTasksCardView) {
            let values = this.getDataValues(this.props.entry);
            let numButtons = 100/buttons.length;
            let viewButtons = (
                <ButtonGroup className="w-100 mt-4">
                    {buttons.map((button) => {
                    return (
                        <Button className={"w-"+numButtons} key={button.text} onClick={button.onClick} variant='outline-secondary'>{button.text}</Button>
                        );
                    })}
                </ButtonGroup>
            )
            return (
                <Card>
                    <Card.Header>
                    {values.date}, {values.time}
                    </Card.Header>
                    <Card.Body>
                    <Card.Title>{values.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{values['street']}, {values['city']}</Card.Subtitle>
                    <Card.Text>
                        <div className='mt-4'>{values.contactName}</div>
                        <div>{values.contactNumber}</div>
                        {viewButtons}
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
            );
        } else {
        return (
            <tr className={(this.props.isSelected ? 'table-primary' : '') + (this.props.isSelectable ? ' entry-selectable' : '')}>
                {this.props.tableColumns.map((column) => {
                    switch (column) {
                        case 'actions':
                        {
                            switch (this.props.page){
                                case 'assignedTasks':
                                        return (
                                            <td className="align-middle" key={column}>
                                            <span style={{whiteSpace: 'nowrap'}}><Dropdown width='200'>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    פעולות
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                {buttons.map((button) => {
                                                        return (
                                                            <Dropdown.Item key={button.text} onClick={button.onClick}>
                                                            {button.text}
                                                            </Dropdown.Item>
                                                            );
                                                        })}
                                                </Dropdown.Menu>
                                            </Dropdown></span>
                                            </td>
                                            );
                                    
                                case 'adminUsers':
                                    return (
                                    <td className="align-middle" key={column}>
                                    <span style={{whiteSpace: 'nowrap'}}>
                                        <Dropdown width='200'>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                פעולות
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            {buttons.map((button) => {
                                            return (
                                                <Dropdown.Item key={button.text} onClick={button.onClick}>
                                                {button.text}
                                                </Dropdown.Item>
                                                );
                                            })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </span>
                                    </td>
                                    );
                                case 'adminTasks':
                                        return <td className="align-middle" key={column}>
                                        <span style={{whiteSpace: 'nowrap'}}>
                                            <Dropdown width='200'>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    פעולות
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                {buttons.map((button) => {
                                                return (
                                                    <Dropdown.Item key={button.text} onClick={button.onClick}>
                                                    {button.text}
                                                    </Dropdown.Item>
                                                    );
                                                })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </span>
                                    </td>;
                                case 'taskReports':
                                    return (
                                    <td className="align-middle" key={column}>
                                        <span style={{whiteSpace: 'nowrap'}}>
                                            <Dropdown width='200'>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    פעולות
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {buttons.map((button) => {
                                                    return (
                                                        <Dropdown.Item key={button.text} onClick={button.onClick}>
                                                        {button.text}
                                                        </Dropdown.Item>
                                                        );
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </span>
                                    </td>
                                    );
                                default:
                                    return (
                                        <td className="align-middle" key={column}>
                                            <ButtonGroup>
                                                {buttons.map((button) => {
                                                return (
                                                    <Button key={button.text} onClick={button.onClick} variant={button.variant}>{button.text}</Button>
                                                    );
                                                })}
                                            </ButtonGroup>
                                        </td>
                                        );
                            }
                        }
                        case 'status':
                        {
                        let values = this.getDataValues(this.props.entry);
                        let message = values.statusMessage;
                        let icon = values.statusIcon;
                        return (
                            <td className="align-middle" key={column}>
                                <ButtonToolbar>
                                    <OverlayTrigger
                                    placement='left'
                                    overlay={
                                        <Tooltip>
                                        {message}
                                        </Tooltip>
                                    }>
                                    <i className={icon}></i>
                                    </OverlayTrigger>
                                </ButtonToolbar>
                            </td>
                        );
                        }
                        default:
                        {
                        return (
                            <td className="align-middle" onClick={this.toggleSelection} key={column}>
                                {this.getDataValues(this.props.entry)[column]}
                            </td>
                        );
                        }
                    }
                })}
            </tr>
        );}
    }
}
export default connect(state => state)(Entry);