import React, { Component } from 'react';
import GridOperations from '../helpers/GridOperations';
import CharacterSelector from './CharacterSelector';
import ResetGrid from './ResetGrid';
import SaveGrid from './SaveGrid';
import ShowSaved from './ShowSaved';
import './Grid.css';

class Grid extends Component {

    constructor() {
        super();
        this.state = window.state = {
            content: [],
            size: [20,20],
            allowedChars: [],
            selectedCharacter: undefined,
            listOfSaved: []
        }

        this.GridOperations = new GridOperations();

        this.handleClick  = this.handleClick.bind(this)
        this.changeCharacter  = this.changeCharacter.bind(this)
        this.handleReset  = this.handleReset.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleLoadSaved = this.handleLoadSaved.bind(this)
    }

    componentWillMount(){
        const baseText = 'Contrarytopopularbelief,LoremIpsumisnotsimplyrandomtext.IthasrootsinapieceofclassicalLatinliteraturefrom45BC,makingitover2000yearsold.RichardMcClintock,aLatinprofessoratHampden-SydneyCollegeinVirginia,lookeduponeofthemoreobscureLatinwords,consectetur,fromaLoremIpsumpassage,andgoingthroughthecitesofthewordinclassicalliterature,discoveredtheundoubtablesource.LoremIpsumcomesfromsections1.10.32and1.10.33of"deFinibusBonorumetMalorum"(TheExtremesofGoodandEvil)byCicero,writtenin45BC.Thisbookisatreatiseonthetheoryofethics,verypopularduringtheRenaissance.ThefirstlineofLoremIpsum,"Loremipsumdolorsitamet..",comesfromalineinsection1.10.32.ThestandardchunkofLoremIpsumusedsincethe1500sisreproducedbelowforthoseinterested.Sections1.10.32and1.10.33from"deFinibusBonorumetMalorum"byCiceroarealsoreproducedintheirexactoriginalform,accompaniedbyEnglishversionsfromthe1914translationbyH.Rackham.'
        let baseContent;
        baseContent = baseText.split("");
        baseContent = this.GridOperations.trimContent(baseContent,this.state.size[0]);
        const allowedChars = this.GridOperations.getAllCharacters;

        this.setState({
            content: baseContent,
            allowedChars: allowedChars
        });
    }

    changeCharacter(character){
        this.setState({
            selectedCharacter: character
        })
        console.log('character changed to: '+this.state.selectedCharacter);
    }

    handleClick(i){
        console.log('handling click');
        let newCharacter;
        if(this.state.selectedCharacter){
            newCharacter = this.state.selectedCharacter;
        } else {
            newCharacter = this.GridOperations.getRandomCharacter(this.state.allowedChars);
        }
        let newContent = this.state.content;
        newContent[i] = newCharacter;
        this.setState({
            content: newContent
        })
    }

    handleReset(){
        let newContent = this.GridOperations.newGridFilling(this.state.selectedCharacter, this.state.size[0]);

        this.setState({
            content: newContent
        })
    }

    handleSave(){
        let newContent = Object.assign([],this.state.content);
        this.state.listOfSaved.push(newContent);
    }

    handleLoadSaved(index){
        console.log('loading:'+index);
        this.setState({
            content: this.state.listOfSaved[index]
        })
    }

    createContent(){
        let content = [];
        console.log('rendering content, content is::::');
        console.log(this.state.content);
        console.log(content);
        for (let i = 0; i < this.state.content.length; i++) {
            console.log('rendering');
            let row, col, top, left;
            col = i - (parseInt(i/this.state.size[0])*this.state.size[0]);
            row = parseInt(i/this.state.size[0]);
            top = row * 10;
            left = col * 10;
            let elem = <span key={i} style={{top: top, left: left}} onClick={(e)=>this.handleClick(i)}>{this.state.content[i]}</span>;
            content.push(elem);
        }
        return content;
    }

    render(){
        let content = this.createContent();

        return(
            <div className="grid-component">
            <CharacterSelector
                allowedChars={this.state.allowedChars}
                selectedCharacter={this.state.selectedCharacter}
                changeCharacter={this.changeCharacter}
            />
            <ResetGrid
                selectedCharacter={this.state.selectedCharacter}
                handleReset={this.handleReset}
            />
            <SaveGrid
                handleSave={this.handleSave}
            />
            <ShowSaved
                handleLoadSaved={this.handleLoadSaved}
                listOfSaved={this.state.listOfSaved}
            />
            <br/>
                <div className="grid-content">
                    {content}
                </div>
            </div>
        );
    }

}

export default Grid;
