

export default class Parser {
    constructor(stateObject){
        Object.assign(this,stateObject);
    }

    h1TurnOn(event){
        this.state = 'h1';
    }

    onChangeParser(event) {
        let last = this.textObject[this.textObject.length-1];
        if(this.state === 'h1') {
            if(last.state = 'h1'){
                
            }
        }
    }
}