class GridOperations {

    get getAllCharacters(){
        let AllChars = [];
        for (var i=32; i<127; i++)
            AllChars.push(String.fromCharCode(i));
        return AllChars;
    }

    trimContent(content, ml){
        const maxLength = ml*ml;
        if(content.length > ml*ml){
            content = content.slice(0,maxLength)
        }
        return content;
    }

    getRandomCharacter(allowedChars){
        const randomNumber = Math.floor(Math.random() * allowedChars.length);
        return allowedChars[randomNumber];
    }

    newGridFilling(character, size){
        console.log('test');
        let content = [];
        for(let i = 0; i < size*size; i++){
            content.push(character);
        }
        return content;
    }
}

export default GridOperations;
