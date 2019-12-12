import React, {Component} from 'react';

export default class FilterObject extends Component {

    constructor() {

        super();
    
        this.state = {
            pets: [
                {
                    name: 'Samara',
                    personality: 'Sweet',
                    age: 3
                },
                {
                    name: 'Bughuul',
                    color: 'Black',
                    weight: 10
                },
                {
                    name: 'Travis',
                    breed: 'Human'
                }
            ],
    
            userInput: '',
            filteredPets: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filteredPets(prop) {
        let pets = this.state.pets;
        let filteredPets = [];

        for(let i=0; i < pets.length; i++) {
            if(pets[i].hasOwnProperty(prop)) {
                filteredPets.push(pets[i]);
            }
        }

        this.setState({filteredPets: filteredPets});
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.pets, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filteredPets(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPets, null, 10) } </span>
            </div>
        )
    }
}