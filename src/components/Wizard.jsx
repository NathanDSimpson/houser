import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// import axios from 'axios'
// import store, { GET_STUDENTS } from '../ducks/store'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
      }

      handleInput = event => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    
    render(){
        return(
            <div>
                Wizard - upload a new house
                <input  onChange={this.handleInput} type="text" name='name' placeholder='Property Name'/>
                <input  onChange={this.handleInput} type="text" name='address' placeholder='Address'/>
                <input  onChange={this.handleInput} type="text" name='city' placeholder='City'/>
                <input  onChange={this.handleInput} type="text" name='state' placeholder='State'/>
                <input  onChange={this.handleInput} type="text" name='zip' placeholder='Zip Code'/>

                <Link to='/'><button>Back to Dashboard</button></Link> 
            </div>
        )
    }
}