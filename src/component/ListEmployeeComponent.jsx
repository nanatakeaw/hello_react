import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeService from '../services/EmployeeService';

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //employees :[]
        }
    }
    /*componentDidMount(){
       EmployeeService.getEmployees().then((res)=>{
           this.setState({employees:res.data})
   
       });
    }*/

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th >First Name</th >
                                <th >Last Name</th >
                                <th >Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>xxx@mdo</td>
                            </tr>
                            <tr>
                                <td>Narongsak</td>
                                <td>Takaew</td>
                                <td>nanatakeaw@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
