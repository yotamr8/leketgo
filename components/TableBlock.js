import React from 'react'
import Entry from '../components/Entry'
import { connect } from "react-redux"
import { Table,CardColumns, Card, Button, ButtonGroup, InputGroup, Form, Col, Row, DropdownButton, Dropdown, FormControl, Navbar } from 'react-bootstrap'
import setAssignedTasks from '../dbActions/setAssignedTasks'
import handleFileUpload from '../dbActions/addTasksFromFile'

class TableBlock extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            filterValue: "הכל",
			tableColumns: this.getTableColumns(),
			entrySelectedCounter: 0,
			selectedEntries: {},
			columnNames: {
				'actions': 'פעולות',
				'date': 'תאריך',
				'time': 'שעה',
				'city': 'עיר',
				'fullAddress': 'כתובת',
				'fullAddressWithButtons': 'כתובת',
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
				'status': '',
				'phone': 'טלפון'
			},
			searchValue: '',
			searchField: this.props.page == 'adminUsers' ? 'firstName' : 'name',
		};

		this.divElement = React.createRef();
		this.selectCallback = this.selectCallback.bind(this);
		this.cancelSelection = this.cancelSelection.bind(this);
		this.assignTasks = this.assignTasks.bind(this);
	}

	componentDidMount() {
        if (!this.props.isLogin) {			
			if(this.divElement.current) {
				const actionBarHeight = this.divElement.current.clientHeight;
				let root = document.documentElement;
				root.style.setProperty('--bottom-navbar-height', actionBarHeight + "px");
			}
        }
	}


    componentDidUpdate(prevProps) {
        if (prevProps.unassignedTasks != this.props.unassignedTasks) {
            this.cancelSelection()
        }
        if (!this.props.isLogin) {
			const actionBarHeight = this.divElement.current.clientHeight;
			let root = document.documentElement;
            root.style.setProperty('--bottom-navbar-height', actionBarHeight + "px");
        }
    }

	getTableColumns() {
		switch (this.props.page) {
			case 'index':
				return ['checkBox', 'date', 'time', 'city', 'name'];
			case 'assignedTasks':
				return ['date', 'time', 'fullAddressWithButtons', 'name', 'contactName', 'contactNumber', 'actions'];
			case 'taskReports':
				return ['date', 'time', 'fullAddressWithButtons', 'name', 'contactName', 'contactNumber', 'actions'];
			case 'history':
				return ['date', 'time', 'fullAddressWithButtons', 'name', 'contactName', 'contactNumber'];
			case 'adminUsers':
			return ['tz', 'firstName', 'lastName', 'email', 'phone', 'region', 'actions'];
			case 'adminUsersDeactivated':
			return ['tz', 'firstName', 'lastName', 'email', 'phone', 'region', 'actions'];
			case 'adminTasks':
					return ['status', 'date', 'time', 'street', 'city', 'name', 'actions'];
			case 'adminTasksPast':
					return ['status', 'date', 'time', 'street', 'city', 'name'];
			case 'adminTasksFuture':
			return ['status', 'date', 'time', 'street', 'city', 'name', 'actions'];
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
        setAssignedTasks(this.props, this.state.selectedEntries, this.state.entrySelectedCounter)        
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

    handleFilterChange(filter) {        
        console.log(filter)
        this.setState({
            filterValue: filter
        })
    }

    render() {
        console.log(this.props)
		// Setting actionsBar
		let actionsBar = '';
		if (this.props.isSelectable && this.state.entrySelectedCounter > 0) {
			actionsBar = 
				<Navbar bg='light'>
					<ButtonGroup>
						<Button onClick={this.assignTasks} variant='primary'>שיבוץ {this.state.entrySelectedCounter} איסופים</Button>
						<Button onClick={this.cancelSelection} variant='secondary'>ביטול</Button>
					</ButtonGroup>
				</Navbar>;
		}
		if (this.props.isSearchable && (this.props.page=='adminUsers' || this.props.page=='adminUsersDeactivated')) {
			actionsBar = 
				<Navbar bg='light'>
					<Form>
						<Row>
							<Col>
						<ButtonGroup>
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-primary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'ADD_USER', entries: this.props.entry})}>הוספת מתנדב</button>
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-secondary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'ADD_USER_CSV', entries: this.props.entry})}>הוספה מקובץ</button>
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-secondary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'EXPORT_USER_CSV', entries: this.props.entry})}>ייצוא דוח מתנדבים</button>
							</ButtonGroup>
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
								<FormControl onChange={this.handleChangeForm.bind(this)} placeholder='חיפוש' />
								</InputGroup>
							</Col>
						</Row>
					</Form>
				</Navbar>;
		}
		if (this.props.isSearchable && (this.props.page=='adminTasks' || this.props.page=='adminTasksPast' || this.props.page=='adminTasksFuture')) {
			actionsBar = 
				<Navbar bg='light'>
					<Form>
					<input type='file' id='fileUploader' accept='xlsx' style={{ display: "none" }} onChange={(e) => handleFileUpload(this.props, e.target.files[0])} />
						<Row>
							<Col>
						<ButtonGroup>
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-primary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'ADD_TASK', entries: this.props.entry})}>הוספת איסוף</button>
							
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-secondary" onClick=
							{() =>
								// document.getElementById('fileUploader').click()
								this.props.dispatch({ type: 'OPEN_MODAL', msg: 'ADD_TASK_CSV', entries: this.props.entry})
							}
							>הוספה מקובץ</button>
							
							<button style={{whiteSpace: 'nowrap'}} type="button" className="btn btn-secondary" onClick={() => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'EXPORT_TASK_CSV', entries: this.props.entry})}>ייצוא דוח איסופים</button>
							</ButtonGroup>
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
								<FormControl onChange={this.handleChangeForm.bind(this)} placeholder='חיפוש' />
								</InputGroup>
							</Col>
							<Col>
                            <ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary" onClick={ () => this.handleFilterChange("הכל")}>הכל</Button>
                                    <Button variant="secondary" onClick={ () => this.handleFilterChange("לא שובץ")}>לא שובץ</Button>
                                    <Button variant="secondary" onClick={ () => this.handleFilterChange("שובץ ולא בוצע")}>שובץ ולא בוצע</Button>
                                    <Button variant="secondary" onClick={ () => this.handleFilterChange("בוצע ללא משוב")}>בוצע ללא משוב</Button>
                                    <Button variant="secondary" onClick={ () => this.handleFilterChange("מולא משוב")}>מולא משוב</Button>
								</ButtonGroup>
							</Col>
						</Row>
					</Form>
				</Navbar>;
		}

		if (this.props.data.length == 0) {
			return (<div>
				<div style={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<div className="nothing" style= {{
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
				<div id='bottom-nav' ref={this.divElement}>
			{actionsBar}
			</div></div>
			);
		} else {
		if (this.props.tableTasksCardView){
			return (
				<div>
				<CardColumns>
					{this.props.data.map((entry) => {
						let options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
						let date = entry.timestamp.toDate();
							return (
								<Entry tableTasksCardView={this.props.tableTasksCardView} page={this.props.page} type={this.props.type} key={entry.id} selectCallback={this.selectCallback} entry={entry} tableColumns={this.state.tableColumns}/>
						);})}
				</CardColumns>
				<div id='bottom-nav'  ref={this.divElement}>
				</div>
				</div>
			);
		}
		else {
		return (<div>
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
							if (this.state.selectedEntries[entry.id]){
								isSelected = true;
							}
                            let ret = <Entry page={this.props.page} isSelected={isSelected} isSelectable={this.props.isSelectable} type={this.props.type} key={entry.id} selectCallback={this.selectCallback} entry={entry} tableColumns={this.state.tableColumns} />                            

                            if (this.props.isSearchable) {
                                
                                if (this.props.page == 'adminTasksPast' || this.props.page == 'adminTasksFuture' || this.props.page == 'adminTasks') {
                                    var statusMessage = "";
                                    if (entry.volunteerUid) {
                                        if (entry.collected) {
                                            if (entry.reportFilled) { statusMessage = 'מולא משוב'; }
                                            else { statusMessage = 'בוצע ללא משוב'; }
                                        } else { statusMessage = 'שובץ ולא בוצע'; }
                                    } else { statusMessage = 'לא שובץ'; }
                                    if (this.state.filterValue != "הכל" && statusMessage != this.state.filterValue) {
                                        return
                                    }
                                }                            
                                console.log(this.props.page, this.state.filterValue, entry)
                                for (let key in entry) {
									if (key == this.state.searchField)
										if(entry[key].includes(this.state.searchValue))
											return ret;
								}
							} else {
							    return ret;
							}
						})}
					</tbody>
				</Table>
				
			</div>
			<div id='bottom-nav' ref={this.divElement}>
			{actionsBar}
			</div>
			</div>
		);}
	}
	}
}

export default connect(state => state)(TableBlock);