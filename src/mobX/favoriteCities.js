import {makeAutoObservable} from "mobx";
import {API_KEY} from "../config/config";

class FavoriteCity {

    favoriteCities = [];
    weatherLocation = {};
    weather = {};

    constructor() {
        makeAutoObservable(this);
    }

    addCity({city}) {
        this.favoriteCities.push(city);
    }

    removeCity(name) {
        this.favoriteCities = this.favoriteCities.filter(city => city.name !== name);
    }

    fetchWeatherLocation(cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(json => {
                this.weatherLocation = json;
            })

    }

    fetchWeatherByLocationParams(cord) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cord.lat}&lon=${cord.lon}&exclude&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(json => {
                this.weather = json;
            })
    }

}

export default new FavoriteCity();