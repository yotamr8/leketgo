import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import ReactDOM from 'react-dom'

class Task extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            cols:{    
                'מועד': "יום ה' 2/5/19 12:30",
                'כתובת': "בר כוכבא 33",
                'עיר': "רעננה",
                'מקום': "ארומה",
                'קייטרינג': "מאמא",
                'איש קשר': "מנחם",
                'טלפון': "052-1234567",
            },
        };
    };
    

    render() {
        const items = choose_cols(this.props.page, this.state.cols);
      return (     
        <tr>
            {items}
        </tr>
      );
    }
  }
  
function choose_cols(page, cols){
    const items = [];
    var cols_by_pages = {
        index: ['פעולות', 'מועד', 'עיר', 'מקום', 'קייטרינג'],
        assigned_tasks: ['מועד', 'כתובת', 'מקום', 'קייטרינג',
                    'איש קשר', 'טלפון', 'פעולות נוספות'],
        task_reports: ['מועד', 'עיר', 'מקום', 'קייטרינג', 'פעולות נוספות']
    }

    for (const [index, value] of cols_by_pages[page].entries()) {
        //console.log(value);
        if('פעולות' === value){
            items.push(  <th scope="row">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1"></label>
                </div>
            </th> );
        }
        else if('פעולות נוספות' === value){
            items.push( <td className="text-nowrap">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-outline-primary">דיווח</button>
                    <button type="button" data-toggle="modal" data-target="#exampleModal2" className="btn btn-outline-secondary">לא בוצע</button>
                </div>
            </td> );
        }
        else {
            items.push(<td key={index}>{cols[value]}</td>);
        }
    }
    return items;
}

export default Task