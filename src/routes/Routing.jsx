import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import FavoriteCities from "../pages/FavoriteCity/FavoriteCities";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Routing = () => {
    return(
        <>
            <Router>
                <Navbar />
                <Switch>
                    {/*<Route path='/' exact component={Home} />*/}
                    <Route path='/home' exact component={Home} />
                    <Route path='/favorite_city' component={FavoriteCities} />
                </Switch>
            </Router>
        </>
    );
}

export default Routing;