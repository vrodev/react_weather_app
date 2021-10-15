import React from "react";
import {DivHourly, DivHourlyContent} from "./CardElements";
import {observer} from "mobx-react-lite";


const CardHourly = ({data}) => {

    const newDate = new Date().toDateString();

    const allHourly = data.hourly?.map((mh) => {
        return [
            new Date(mh.dt * 1000),
            mh.temp,
            mh.weather[0].icon
        ]
    })

    const hourly = allHourly?.filter((x) => {
        const myX = x.toString().split(' ', 4);
        let myXDate = myX[0] + ' ' + myX[1] + ' ' + myX[2] + ' ' + myX[3];
        if (myXDate === newDate) {
            return x;
        }
    });

    const filterHourly = hourly?.map((t) => {
        let h = t.toString().split(' ', 5);
        return [
            h[1] + ' ' + h[2] + ' ' + h[3] + ' ' + h[4],
            t[1],
            t[2]
        ]
    })

    return (
        <DivHourlyContent>
            {
                filterHourly?.map((hourly, index) => {
                    console.log(hourly)
                    return (
                        <DivHourly key={index}>
                            {hourly[0]}
                            <h3>{Math.round(hourly[1]) + '°C'}</h3>
                            <div>
                                <img src={`https://openweathermap.org/img/w/${hourly[2]}.png`}/>
                            </div>
                        </DivHourly>
                    )
                })
            }
        </DivHourlyContent>
    );
}
const CardHourlyObserver = observer(CardHourly)

export default CardHourlyObserver;