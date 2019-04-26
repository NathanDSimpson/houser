import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

// import axios from 'axios'
// import store, { GET_STUDENTS } from '../ducks/store'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
        this.submitProperty = this.submitProperty.bind(this);
    }

    handleInput = event => {
    let {name, value} = event.target
    this.setState({
        [name]: value
        })
    }

    async submitProperty(event) {
        const newProperty = this.state
        console.log(newProperty)
        await axios.post('/api/properties', newProperty)
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
                <button onClick={this.submitProperty}>Complete</button>
                <Link to='/'><button>Cancel</button></Link> 
            </div>
        )
    }
}