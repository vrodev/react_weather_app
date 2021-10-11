import {makeAutoObservable} from "mobx";
import {API_KEY} from "../config/config";

class FavoriteCity {

    favoriteCities = [];
    weather = [];

    constructor() {
        makeAutoObservable(this);
    }

    addCity({city}) {
        this.favoriteCities.push(city);
    }

    removeCity(name) {
        this.favoriteCities = this.favoriteCities.filter(city => city.name !== name);
    }

    fetchWeather(cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(json => {
                this.weather.push(json);
            })
    }

}

export default new FavoriteCity();