import React, { Component } from 'react';
import CardArray from '../../assets/user/CardArray';
import {robots} from './robots';
import Searchbox from  '../../assets/user/Searchbox'


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
        <div className='robos'>
            <h1 className='Logo'>RoboFriendssss</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <div className='robocard'><CardArray robots={filteredRobots}/></div>
                
           
        </div>
        
       );
    }    

    }    


export default User;