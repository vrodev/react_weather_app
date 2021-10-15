import React from "react";
import {Div} from "./CardElements";
import {observer} from "mobx-react-lite";

const Card = ({data, name}) => {

    return (
        <>
            {
                <Div>
                    <h2>{name}</h2>
                    <h3>{Math.round(data.current?.temp) + '°C'}</h3>
                    <img src={`https://openweathermap.org/img/w/${data.current?.weather[0].icon}.png`}/>
                    <h4>{data.current?.weather[0].main}</h4>
                </Div>
            }
        </>
    );
}
const CardObserver = observer(Card)

export default CardObserver;