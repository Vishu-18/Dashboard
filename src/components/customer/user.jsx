import React, { Component } from 'react';
import CardArray from '../../assets/user/CardArray';
import {robots} from './robots';
import Searchbox from  '../../assets/user/Searchbox'
import Scroll from '../../assets/user/Scroll';
import './user.css';

class User extends Component {
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }

    onSearchChange = (event)=> {
        this.setState({ searchfield:event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());        
        })
        return(
        <div className='custom'>
            <h1 className='Logo'>Customers</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <div className='cardd'><CardArray robots={filteredRobots}/></div>
                
            
        </div>
        
       );
    }    
}

export default User;