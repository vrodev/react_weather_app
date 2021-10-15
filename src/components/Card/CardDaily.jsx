import React from "react";
import {DivDaily, DivItem} from "./CardElements";
import {observer} from "mobx-react-lite";

const CardDaily = ({data}) => {

    return (
        <DivDaily>
            {
                data.daily?.map((day, index) => {
                    return (
                        <DivItem key={index} onClick={() => {
                            for (const [key, value] of Object.entries(day.feels_like)) {
                                console.log(`${key}: ${value}`);
                            }
                        }}>
                            {new Date(day.dt * 1000).toDateString()}
                            <h3>{Math.round(day.temp.day) + '°C'}</h3>
                            <div>
                                <img src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`}/>
                            </div>
                            <h4>{day.weather[0].main}</h4>
                        </DivItem>
                    )
                })
            }
        </DivDaily>
    );
}
const CardDailyObserver = observer(CardDaily)

export default CardDailyObserver;