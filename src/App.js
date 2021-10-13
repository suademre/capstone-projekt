import React from 'react';
import {Route, Switch} from 'react-router';
import Categories from 'components/Categories/Categories';
import Nav from '../src/components/Nav';

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
            </Switch>
        </>
    );
}

export default App;
