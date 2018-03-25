import React, { Component } from 'react';

class ResetGrid extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    handleReset(){
        console.log('handle inside child');
        this.props.handleReset();
    }

    render(){
        return(
            <div>
                <button onClick={this.handleReset.bind(this)}>Reset Grid</button>
            </div>
        );
    }
}

export default ResetGrid;
