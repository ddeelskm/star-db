

export default class SwapiSerwice {
    _apiBase = 'https://swapi.dev/api/'

    getResurce = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if(!res.ok) {
            throw new Error(`Cloud not ${res.status}`)
        }
        return await res.json()
    }

    async getAllPeople() {
        const res = await this.getResurce('people/')
        return res.results.map(this._transformPeople)
    }

    async getIdPeople(id) {
        const people = await this.getResurce(`people/${id}/`)
        return this._transformPeople(people)
    }

    async getAllStarships() {
        const res = await this.getResurce('starships/')
        return res.results.map(this._transformStarships)
    }

   async getIdStarships(id) {
        const starships = await this.getResurce(`starships/${id}/`)
        return this._transformStarships(starships)
    }

    async getAllPlanets() {
        const res = await this.getResurce('planets/')
        return res.results.map(this._transformPlanet)
    }
    async getIdPlanets(id) {
        const planet = await this.getResurce(`planets/${id}/`)
        return this._transformPlanet(planet)
    }

    _urlRegExp(item){
        const urlId = /\/([0-9]*)\/$/;
        return item.url.match(urlId)[1];
    }

    _transformPeople(people){
        return {
            id: this._urlRegExp(people),
            name: people.name,
            birthYear: people.birth_year,
            gender: people.gender,
            height: people.height,
            mass: people.mass
        }
    }

    _transformStarships(starships){
        return {
            id: this._urlRegExp(starships),
            name: starships.name,
            model: starships.model,
            yearStar: starships.consumables,
            MGLT: starships.MGLT,
            starshipClass: starships.starship_class

        }
    }

    _transformPlanet(planet){
        return {
            id: this._urlRegExp(planet),
            name: planet.name,
            population: planet.population ,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

}

const swapi = new SwapiSerwice()

/*swapi.getAllPeople().then((people) => {
    console.log(people)
})
swapi.getAllPlanets().then((planet) => {
    console.log(planet)
})*/



/*
fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
       return res.json()
    })
    .then((body) => {
        console.log(body)
    })*/
