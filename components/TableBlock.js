import React from 'react'
import Entry from '../components/Entry'
import { connect } from "react-redux"
import { Table, Button, ButtonGroup, InputGroup, Form, Col, Row, DropdownButton, Dropdown, FormControl, Navbar } from 'react-bootstrap'
import setAssignedTasks from '../dbActions/setAssignedTasks'

class TableBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tableColumns: this.getTableColumns(),
			entrySelectedCounter: 0,
			selectedEntries: {},
			columnNames: {
				'actions': 'פעולות',
				'date': 'תאריך',
				'time': 'שעה',
				'city': 'עיר',
				'name': 'ספק',
				'uid': 'uid',
				'firstName': 'שם פרטי',
				'lastName': 'שם משפחה',
				'region': 'אזור',
				'email': 'דוא"ל',
				'tz': 'תעודת זהות',
				'street': 'רחוב',
				'contactName': 'איש קשר',
				'contactNumber': 'טלפון'
			}
		};
		this.selectCallback = this.selectCallback.bind(this);
		this.cancelSelection = this.cancelSelection.bind(this);
		this.assignTasks = this.assignTasks.bind(this);
	}

	getTableColumns() {
		switch (this.props.page) {
			case 'index':
				return ['date', 'time', 'city', 'name'];
			case 'assignedTasks':
				return ['date', 'time', 'street', 'city', 'name', 'contactName', 'contactNumber', 'actions'];
			case 'taskReports':
				return ['date', 'street', 'city', 'name', 'actions'];
			case 'adminUsers':
				return ['tz', 'firstName', 'lastName', 'email', 'phone', 'region', 'actions'];
			case 'adminTasks':
					return ['date', 'time', 'street', 'city', 'name', 'actions'];
			default:
				break;
		}
	}

	selectCallback(entry, isSelected) {
		let newSelectedEntries = {...this.state.selectedEntries};
		if(isSelected){
			newSelectedEntries[entry.id] = {...entry};
			this.setState({
				entrySelectedCounter: this.state.entrySelectedCounter + 1,
				selectedEntries: newSelectedEntries
			});
		} else {
			delete newSelectedEntries[entry.id];
			this.setState({
				entrySelectedCounter: this.state.entrySelectedCounter - 1,
				selectedEntries: newSelectedEntries
			});
		}
	}

	cancelSelection() {
		this.setState({
			entrySelectedCounter: 0,
			selectedEntries: {}
		});
	}

	assignTasks() {
        var taskIDs = [];
        for (var taskID in this.state.selectedEntries) {
            taskIDs.push(taskID)         
        }
        setAssignedTasks(this.props.dispatch, taskIDs, this.props.userData.uid, this.state.entrySelectedCounter, this.state.selectedEntries)
	}

	render() {
		let actionsBar = '';
		if (this.props.isSelectable && this.state.entrySelectedCounter > 0) {
			actionsBar = 
				<Navbar bg='light' fixed='bottom'>
					<ButtonGroup>
						<Button onClick={this.assignTasks} variant='primary'>שיבוץ {this.state.entrySelectedCounter} איסופים</Button>
						<Button onClick={this.cancelSelection} variant='secondary'>ביטול</Button>
					</ButtonGroup>
				</Navbar>;
		}
		if (this.props.isSearchable) {
			actionsBar = 
				<Navbar bg='light' fixed='bottom'>
					<Form>
						<Row>
							<Col>
						<div className="btn-group" role="group" aria-label="Basic example">
							<button type="button" className="btn btn-primary">הוספת משתמש</button>
							<button type="button" className="btn btn-secondary">הוספה מקובץ</button></div>
							</Col>
							<Col>
								<InputGroup className="mb-3">
								<Form.Control
								as="select"
								variant='outline-secondary'
								title='Dropdown'
								drop='up'>
									<option>שם מלא</option>
									<option>תעודת זהות</option>
									<option>כתובת מגורים</option>
									<option>מספר טלפון</option>
									<option>דואר אלקטרוני</option>
								</Form.Control>
								<FormControl aria-describedby="basic-addon1" />
								</InputGroup>
							</Col>
						</Row>
					</Form>
				</Navbar>;
		}

		return (
			<div className="table-responsive">
				<Table hover responsive>
					<thead>
						<tr>
						{this.state.tableColumns.map((column) => {
							return (
								<th scope="col" key={column}>{this.state.columnNames[column]}</th>
							);
						})}
						</tr>
					</thead>
					<tbody>
						{this.props.data.map((entry) => {
							let isSelected = false;
							if (this.state.selectedEntries[entry.id])
								isSelected = true;
							return (
								<Entry page={this.props.page} isSelected={isSelected} isSelectable={this.props.isSelectable} type={this.props.type} key={entry.id} selectCallback={this.selectCallback} entry={entry} tableColumns={this.state.tableColumns}/>
							);
						})}
					</tbody>
				</Table>
				{actionsBar}
			</div>
		);
	}
}

export default connect(state => state)(TableBlock);