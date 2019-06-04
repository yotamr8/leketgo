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
				'fullAddress': 'כתובת',
				'name': 'ספק',
				'uid': 'uid',
				'firstName': 'שם פרטי',
				'lastName': 'שם משפחה',
				'fullName': 'שם מלא',
				'region': 'אזור',
				'email': 'דוא"ל',
				'tz': 'תעודת זהות',
				'street': 'רחוב ומספר',
				'contactName': 'שם',
				'contactNumber': 'טלפון',
				'checkBox': '',
				'phone': 'טלפון'
			},
			searchValue: '',
			searchField: this.props.page == 'adminUsers' ? 'firstName' : 'name',
		};
		this.selectCallback = this.selectCallback.bind(this);
		this.cancelSelection = this.cancelSelection.bind(this);
		this.assignTasks = this.assignTasks.bind(this);
	}

	getTableColumns() {
		switch (this.props.page) {
			case 'index':
				return ['checkBox', 'date', 'time', 'city', 'name'];
			case 'assignedTasks':
				return ['date', 'time', 'fullAddress', 'name', 'contactName', 'contactNumber', 'actions'];
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
        setAssignedTasks(this.props, taskIDs, this.state.entrySelectedCounter, this.state.selectedEntries)
	}

	handleChangeForm(event) {
		
		let fleldVal = event.target.value;
		this.setState({searchValue: fleldVal});
	}

	handleChangeDropDown(event) {
		let fleldVal = event.target.value;
		switch (fleldVal) {
			case 'שם פרטי':
				this.setState({searchField: 'firstName'});
				break;
			case 'שם משפחה':
					this.setState({searchField: 'lastName'});
					break;
			case 'תעודת זהות':
				this.setState({searchField: 'tz'});
				break;
			case 'רחוב ומספר':
				this.setState({searchField: 'address'});
				break;
			case 'עיר מגורים':
					this.setState({searchField: 'city'});
					break;
			case 'מספר טלפון':
				this.setState({searchField: 'phone'});
				break;
			case 'דואר אלקטרוני':
				this.setState({searchField: 'email'});
				break;
			case 'ספק':
					this.setState({searchField: 'name'});
					break;
			case 'עיר':
					this.setState({searchField: 'city'});
					break;
			case 'רחוב ומספר':
					this.setState({searchField: 'address'});
					break;
			case 'איש קשר':
					this.setState({searchField: 'contact name'});
					break;
			case 'טלפון':
					this.setState({searchField: 'contact number'});
					break;
			default:
				break;
		}
	}

	render() {
		if (this.props.data.length == 0){
			return (
				<div style={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<div style= {{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
		
					}}>
						<img src="/static/nothing.png" width="100"/>
						<div style={{
							fontSize: '20px',
							marginTop: '10px'
						}}>המממ... אין כאן כלום</div>
					</div>
				</div>
			);
		} else {
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
		if (this.props.isSearchable && this.props.page=='adminUsers') {
			actionsBar = 
				<Navbar bg='light' fixed='bottom'>
					<Form>
						<Row>
							<Col>
						<div className="btn-group" role="group" aria-label="Basic example">
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-primary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'ADD_USER', entries: this.props.entry})}>הוספת מתנדב</button>
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-secondary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'ADD_USER_CSV', entries: this.props.entry})}>הוספה מקובץ</button></div>
							</Col>
							<Col>
								<InputGroup className="mb-3">
								<Form.Control
								as="select"
								variant='outline-secondary'
								title='Dropdown'
								drop='up' onChange={this.handleChangeDropDown.bind(this)}>
									<option>שם פרטי</option>
									<option>שם משפחה</option>
									<option>תעודת זהות</option>
									<option>רחוב ומספר</option>
									<option>עיר מגורים</option>
									<option>מספר טלפון</option>
									<option>דואר אלקטרוני</option>
								</Form.Control>
								<FormControl onChange={this.handleChangeForm.bind(this)} aria-describedby="basic-addon1" />
								</InputGroup>
							</Col>
						</Row>
					</Form>
				</Navbar>;
		}
		if (this.props.isSearchable && this.props.page=='adminTasks') {
			actionsBar = 
				<Navbar bg='light' fixed='bottom'>
					<Form>
						<Row>
							<Col>
						<div className="btn-group" role="group" aria-label="Basic example">
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-primary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'ADD_TASK', entries: this.props.entry})}>הוספת איסוף</button>
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-secondary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'ADD_TASK_CSV', entries: this.props.entry})}>הוספה מקובץ</button>
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-secondary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'EXPORT_TASK_CSV', entries: this.props.entry})}>ייצוא דוח</button>
							</div>
							</Col>
							<Col>
								<InputGroup className="mb-3">
								<Form.Control
								as="select"
								variant='outline-secondary'
								title='Dropdown'
								drop='up'
								onChange={this.handleChangeDropDown.bind(this)}>
									<option>ספק</option>
									<option>עיר</option>
									<option>רחוב ומספר</option>
									<option>איש קשר</option>
									<option>טלפון</option>
								</Form.Control>
								<FormControl onChange={this.handleChangeForm.bind(this)} aria-describedby="basic-addon1" />
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
							switch (column){
								default:
									return (
										<th scope="col" key={column}>{this.state.columnNames[column]}</th>
								);
							}
						})}
						</tr>
					</thead>
					<tbody>
						{this.props.data.map((entry) => {
							let isSelected = false;
							let ret = <Entry page={this.props.page} isSelected={isSelected} isSelectable={this.props.isSelectable} type={this.props.type} key={entry.id} selectCallback={this.selectCallback} entry={entry} tableColumns={this.state.tableColumns}/>

							if (this.state.selectedEntries[entry.id])
								isSelected = true;
							if (this.props.isSearchable){
								for (let key in entry){
									if (key == this.state.searchField)
										if(entry[key].includes(this.state.searchValue))
											return ret;
								}
							}
							else {
							return ret;
							}
						})}
					</tbody>
				</Table>
				{actionsBar}
			</div>
		);
					}
	}
}

export default connect(state => state)(TableBlock);