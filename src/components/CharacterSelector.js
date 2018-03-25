import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'


class CharacterSelector extends Component {
    constructor(props){
        super(props);
        console.log(props);
        console.log('super');
        // this.props = props;

        this.state = {
            allowedChars: props.allowedChars,
            selectedCharacter: props.selectedCharacter
        }
    }

    componentWillMount(){
        console.log('mounting');
    }

    componentDidMount(){
        // $(ReactDOM.findDOMNode(this.refs.characterSelector)).on('change',this.changeSelectedCharacter.bind(this))
         $(ReactDOM.findDOMNode(this.refs.characterSelector)).on('change',this.changeSelectedCharacter.bind(this));
        console.log(this.refs);
    }

    changeSelectedCharacter(e){
        console.log('change character child');
        this.setState({
            selectedCharacter: e.target.value
        });
        this.props.changeCharacter(e.target.value);
        e.preventDefault();
    }

    generateOptions(){
        let options = [];
        this.state.allowedChars.map((item, index) =>{
            options.push(<option value={item} key={item}>{item}</option>);
        })
        return options;
    }

    render(){
        let options = this.generateOptions();

        return (
            <div className="row">
                <select  id="testID" ref="characterSelector" value={this.state.selectedCharacter}>
                    {options}
                </select>
            </div>
        )
    }
}

export default CharacterSelector;
