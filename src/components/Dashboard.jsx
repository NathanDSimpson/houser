
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import House from './House'
import axios from 'axios'
// import store, { GET_STUDENTS } from '../ducks/store'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            properties: []
        }

        this.getProperties = this.getProperties.bind(this)
      }


    componentDidMount(){
        this.getProperties()
      }


    async getProperties(){
        await axios.get('/api/properties').then(res => {
            const result = (res.data)
            this.setState({
                properties: result
            })
        })
    }
        


    
    render(){
        return(
            <div>
                <header>
                    Dashboard
                    <Link to='/wizard'><button>Add New Property</button></Link> 
                </header>
                {this.state.properties.map(property => {
                    return <House
                            key={property.id}
                            info={property}
                            />
                })}
            </div>
        )
    }
}
