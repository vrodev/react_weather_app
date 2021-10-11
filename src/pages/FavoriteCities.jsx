import React, {useEffect, useState} from "react";
import cities from 'cities.json';
import {observer} from "mobx-react-lite";
import favoriteCities from "../mobX/favoriteCities";



const FavoriteCities = observer( () => {

    const [inputText, setInputText] = useState('');
    // console.log(favoriteCities.favoriteCities);
    // const [favoriteCities, setFavoriteCities] = useState([]);
    // console.log(inputText);

    const handleClick = () => {
        console.log(inputText);
        //if-@ chmoranal !
        const found = cities.find(element => element.name === inputText);
        console.log(found);
        favoriteCities.addCity(inputText);
    }



    /**
     * Get All Cities
     */
    // useEffect(() => {
    //     console.log(cities)
    // },[])

    return(
        <>
            {favoriteCities.favoriteCities.map(favoriteCities =>
                <div key={favoriteCities.index}>
                    {favoriteCities.name}
                    <button onClick={() => favoriteCities.removeCity(favoriteCities.name)}>X</button>
                </div>
            )}

            <input
                type='text'
                placeholder='City Name'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />

            <button onClick={handleClick} >
                Search
            </button>
        </>
    );
});

export default FavoriteCities;