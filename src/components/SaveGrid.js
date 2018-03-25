import React, { Component } from 'react';

class SaveGrid extends Component {
    constructor(props){
        super(props);
    }

    handleSave(){
        this.props.handleSave();
    }

    render(){

        return(
            <div>
                <button onClick={this.handleSave.bind(this)}>Save</button>
            </div>
        )
    }
}

export default SaveGrid;
