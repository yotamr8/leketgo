import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import ReactDOM from 'react-dom'
import Task from '../components/Task'
//import Index from '../pages/assigned-tasks';

class Table extends React.Component {
    
    /*
    constructor(props) {
      super(props);
      this.state = {
        page: null,
      };
    }
    */
    
    render() {
        
        const items = choose_cols(this.props.page);

      return (
        <div className="table-responsive">
        <table className="table table-hover">
            <thead>
                <tr>
                    {items}
                </tr>
            </thead>
            <tbody>
                <Task page={this.props.page}/>
                <Task page={this.props.page}/>
            </tbody>
        </table>
        </div>
      );
    }
}
  
function choose_cols(page){
    const items = [];
    var cols_by_pages = {
        index: ['פעולות', 'מועד', 'עיר', 'מקום', 'קייטרינג'],
        assigned_tasks: ['מועד', 'כתובת', 'מקום', 'קייטרינג',
                    'איש קשר', 'טלפון', 'פעולות נוספות'],
        task_reports: ['מועד', 'עיר', 'מקום', 'קייטרינג', 'פעולות נוספות']
    }
    //var cols = ['פעולות', 'מועד', 'כתובת', 'עיר', 'מקום', 'קייטרינג',
    //             'איש קשר', 'טלפון', 'פעולות נוספות'];


    for (const [index, value] of cols_by_pages[page].entries()) {
        //console.log(value);
        items.push(<th scope="col" key={index}>{value}</th>);
    }

    return items;
}

export default Table