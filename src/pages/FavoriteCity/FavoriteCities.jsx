import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import cities from '../../../node_modules/cities.json/cities';
import favoriteCities from "../../mobX/favoriteCities";
import weatherLocation from "../../mobX/favoriteCities";
import {Div, TextField, Buttons} from "./FavoriteCitiesElements";


const FavoriteCities = observer((props) => {

    const cord = weatherLocation.weatherLocation.coord;
    const [inputText, setInputText] = useState('');

    const handleClick = () => {
        const city = cities.find(element => element.name === inputText);

        if (city) {
            favoriteCities.addCity({city});
            setInputText('');
            favoriteCities.fetchWeatherLocation(city.name);
        }
    }
    return (
        <>
            <TextField
                type='text'
                placeholder='City Name'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />

            <Buttons onClick={handleClick}> Search </Buttons>

            {favoriteCities.favoriteCities.map((city, index) =>
                <Div key={index}>
                    {city.name}
                    <button onClick={() => favoriteCities.removeCity(city.name)}>X</button>
                    <button
                        onClick={() => {
                            favoriteCities.fetchWeatherByLocationParams(cord)
                            props.history.push('/home');
                        }}
                    >
                        More
                    </button>
                </Div>
            )}
        </>
    );
});

export default FavoriteCities;