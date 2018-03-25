import React, { Component } from 'react';

class ShowSaved extends Component {
    constructor(props){
        super(props);
    }

    handleLoadSaved(index){
        this.props.handleLoadSaved(index);
    }

    createListOFSaved(){
        let listOfSaved = this.props.listOfSaved.map((item, index)=>{
            return <li key={index}><button onClick={this.handleLoadSaved.bind(this, index)}>{index+1}</button></li>
        })
        return listOfSaved;
    }

    render(){
        let listOfSaved = this.createListOFSaved();
        return(
            <div>
                <h1>Saved:</h1>
                <ul>
                    {listOfSaved}
                </ul>
            </div>
        )
    }
}

export default ShowSaved;
