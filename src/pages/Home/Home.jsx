import React from 'react';
import Card from "../../components/Card/Card";
import CardDaily from "../../components/Card/CardDaily";
import weather from "../../mobX/favoriteCities";
import weatherLocation from "../../mobX/favoriteCities";
import {observer} from "mobx-react-lite";
import CardHourly from "../../components/Card/CardHourly";
import {DivContent} from "../../components/Card/CardElements";

const Home = () => {
    return (
        <>
            <DivContent>
                <Card data={weather.weather} name={weatherLocation.weatherLocation.name}/>
                <CardHourly data={weather.weather}/>
            </DivContent>
            <CardDaily data={weather.weather}/>
        </>
    );
}

const HomeObserver = observer(Home)

export default HomeObserver;