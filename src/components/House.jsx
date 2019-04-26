import React, { Component } from 'react'
// import axios from 'axios'
// import store, { GET_STUDENTS } from '../ducks/store'

export default class House extends Component {
    
    
    render(){
        const {address, city, id, img, mortgage, name, rent, state, zip} = this.props.info
        return(
            <div>
                <br/>
                Property Name: {name} <br/>
                Address: {address}<br/>
                City: {city}<br/>
                State: {state}<br/>
                Zip: {zip}<br/>
                <button>Delete</button>
                <br/>
                
            </div>
        )
    }
}