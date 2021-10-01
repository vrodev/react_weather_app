import {makeAutoObservable} from "mobx";
import cities from 'cities.json';


class FavoriteCity {

    favoriteCities = [];

    constructor() {
        makeAutoObservable(this);
    }

    addCity(city) {
        this.favoriteCities.push(city);
        console.log(this.favoriteCities);
    }

    removeCity(name) {
        this.favoriteCities = this.favoriteCities.filter(city => city.name !== name);
    }

}

export default new FavoriteCity();