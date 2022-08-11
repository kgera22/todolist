import React, { Component } from "react";
import './search-panel.css'
import ItemStatusFilter from "../item-status-filter";

        const searchText = 'this placeholder'
        const searchStyle = {
        fontSize: '15px'
        }

export default class SearchPanel extends Component{
    state = {
        term:''
    }
    onSearchChange = (e) =>{
        const term = e.target.value
        this.setState({term})
        this.props.onSearchChange(term)
    }
        render(){
            return (
                <div className="search-panel">
                    <input className="search-input" placeholder={searchText} style={searchStyle}
                    value={this.state.term}  onChange={this.onSearchChange}/>
                    
                </div>
                )
        }
    }

