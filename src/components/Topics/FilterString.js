import React, {Component} from 'react';

export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            pets: ['Samara', 'Bughuul', 'Indy', 'Karmynn', 'Natasha', 'Selena', 'Saia', 'Siren', 'Sky', 'Anya'],
            userInput: '',
            filteredPets: []
        };
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterPets(userInput) {
        let pets = this.state.pets;
        let filteredPets = [];

        for(let i=0; i < pets.length; i++) {
            if(pets[i].includes(userInput)) {
                filteredPets.push(pets[i]);
            }
        }

        this.setState({filteredPets: filteredPets});
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Pets: { JSON.stringify(this.state.pets, null, 10)} </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterPets(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB">Filtered Pets: { JSON.stringify(this.state.filteredPets, null,10) }</span>
            </div>
        )
    }
}