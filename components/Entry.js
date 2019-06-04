import React from 'react'
import { connect } from "react-redux"
import {Button, Dropdown, Form, ButtonGroup} from 'react-bootstrap'
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
                return {
                    date: date.toLocaleDateString('he-IL', options),
                    time: date.getHours()+':'+('0'+date.getMinutes()).slice(-2),
                    city: entry.city,
                    name: entry.name,
                    street: entry.address,
                    fullAddress: entry.address + ', ' + entry.city,
                    actions: 'ACTIONS',
                    contactName: entry['contact name'],
                    contactNumber: <a style={{whiteSpace: 'nowrap'}} href={'tel: '+ entry['contact number']}>{entry['contact number']}</a>,
                    checkBox: this.props.isSelected ? <Form.Check custom checked label='' type='checkbox' /> : <Form.Check custom label='' type='checkbox' />
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
        var buttons = [];
        switch (this.props.page) {
            case 'assignedTasks':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_NOTES', entries: this.props.entry}),
                        color: 'outline-primary',
                        text: <span><i class="far fa-sticky-note"></i>הערות</span>
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_DONE', entries: this.props.entry}),
                        color: 'outline-primary',
                        text: <span><i class="far fa-calendar-check"></i>בוצע</span>
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_CANCEL', entries: this.props.entry }),
                        color: 'outline-secondary',
                        text: <span><i class="far fa-calendar-times"></i>הסרה</span>
                    },
                ];
                break;
            case 'taskReports':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'REPORT_FILL', entries: this.props.entry }),
                        color: 'outline-primary',
                        text: 'דיווח'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'REPORT_UNDONE' }),
                        color: 'outline-secondary',
                        text: 'לא בוצע'
                    },
                ];
                break;
            case 'adminUsers':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'EDIT_USER', entries: this.props.entry}),
                        color: 'outline-primary',
                        text: 'עריכה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'RESET_PASSWORD', entries: this.props.entry}),
                        color: 'outline-secondary',
                        text: 'איפוס סיסמה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'RESET_PASSWORD', entries: this.props.entry}),
                        color: 'outline-secondary',
                        text: 'מחיקה'
                    }
                ];
                break;
                case 'adminTasks':
                        buttons = [
                            {
                                onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'EDIT_USER', entries: this.props.entry}),
                                color: 'outline-primary',
                                text: 'עריכה'
                            },
                            {
                                onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'RESET_PASSWORD', entries: this.props.entry}),
                                color: 'outline-secondary',
                                text: 'סטטוס'
                            },
                            {
                                onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'RESET_PASSWORD', entries: this.props.entry}),
                                color: 'outline-secondary',
                                text: 'מחיקה'
                            }
                        ];
                        break;
        }

        return (
            <tr className={(this.props.isSelected ? 'table-primary' : '') + (this.props.isSelectable ? ' entry-selectable' : '')}>
                {this.props.tableColumns.map((column) => {
                    if(column != 'actions'){
                        return (
                            <td onClick={this.toggleSelection} key={column}>
                                {this.getDataValues(this.props.entry)[column]}
                            </td>
                        );
                    } else {
                        switch (this.props.page){
                            case 'assignedTasks':
                                return <td key={column}>
                                <span style={{whiteSpace: 'nowrap'}}><Dropdown width='200'>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        פעולות
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    {buttons.map((button) => {
                                            return (
                                                <Dropdown.Item key={button.text} onClick={button.onClick}>{button.text}</Dropdown.Item>
                                                );
                                            })}
                                    </Dropdown.Menu>
                                </Dropdown></span>
                            </td>;
                            case 'adminUsers':
                                return <td key={column}>
                                <span style={{whiteSpace: 'nowrap'}}><Dropdown width='200'>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        פעולות
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    {buttons.map((button) => {
                                            return (
                                                <Dropdown.Item key={button.text} onClick={button.onClick}>{button.text}</Dropdown.Item>
                                                );
                                            })}
                                    </Dropdown.Menu>
                                </Dropdown></span>
                            </td>;
                            case 'adminTasks':
                                    return <td key={column}>
                                    <span style={{whiteSpace: 'nowrap'}}><Dropdown width='200'>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            פעולות
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        {buttons.map((button) => {
                                                return (
                                                    <Dropdown.Item key={button.text} onClick={button.onClick}>{button.text}</Dropdown.Item>
                                                    );
                                                })}
                                        </Dropdown.Menu>
                                    </Dropdown></span>
                                </td>;
                            default:
                                return (
                                    <td key={column}>
                                        <ButtonGroup>
                                            {buttons.map((button) => {
                                            return (
                                                <Button key={button.text} onClick={button.onClick} variant={button.color}>{button.text}</Button>
                                                );
                                            })}
                                        </ButtonGroup>
                                    </td>);
                        }
                    }
                })}
            </tr>
        );
    }
}

export default connect(state => state)(Entry);