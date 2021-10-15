import React from 'react';
import {Route, Switch} from 'react-router';
import Categories from 'components/Categories/Categories';
import Nav from '../src/components/Nav';
import Favourite from 'components/Favourite/Favourite';

function App() {
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path="/category/:slug"
                    exact
                    render={(props) => <Categories {...props} />}
                />
                <Route
                    path="/favourite"
                    exact
                    render={(props) => <Favourite {...props} />}
                />
            </Switch>
        </>
    );
}

export default App;
