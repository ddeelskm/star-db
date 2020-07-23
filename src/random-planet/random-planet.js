import React, {Component} from "react";
import './random-planet.css'
import SwapiSerwice from "../services";
export default class RandomPlanet extends Component{

    serviceWorker = new SwapiSerwice()


    state = {
        planet: {}
    }
    constructor() {
        super();
        this.updatePlanet()
    }
    onLoadedPlanet = (planet) => {
        this.setState({planet})

    }
    updatePlanet(){
        const id = 12
        console.log(id)
        this.serviceWorker.getIdPlanets(id)
            .then(this.onLoadedPlanet)
    }
    render() {
        const {planet: {name, population, rotationPeriod, diameter, id}} = this.state
        return (
            <div className="random-planet">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="planet-image"/>
                <h2>{name}</h2>
                <div>
                    <ul>
                        <li>
                            <span>Population</span>
                            <span>{population}</span>
                        </li>
                        <li>
                            <span>Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li>
                            <span>Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
