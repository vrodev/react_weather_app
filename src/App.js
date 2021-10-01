import React, {useEffect} from 'react';
import Routing from "./routes/Routing";


const App = () => {

  // const cityName = 'Yerevan';
  // const apiKey = '9d5e0d9d8d99f9a6c059545db46da56f';
  //
  // useEffect(() => {
  //     fetch(
  //         `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&cnt=5`
  //     )
  //         .then(res => res.json())
  //         .then(res => console.log(res))
  // }, [])



  return (
      <>
        <Routing />
      </>
  );
}

export default App;
