import React, {useState} from 'react';
import {Route, Switch} from 'react-router';
import Categories from 'components/Categories/Categories';
import Nav from '../src/components/Nav';
import Favourite from 'components/Favourite/Favourite';

function App() {
    const [favourites, setFavourites] = useState([]);

    // const addFavourite = (product) => {
    //     const items = favourites.find((item) => item.id === product.id);
    //     if (items === undefined) {
    //         setFavourites([...favourites, product]);
    //     }
    //     console.log(favourites);
    // };

    const handleFavoriteButtonClick = (product) => {
        const isFavourite = favourites.includes(product);
        let newFavorites;
        if (isFavourite) {
            // Remove from favorites
            newFavorites = favourites.filter((item) => {
                if (item.id === product.id) {
                    return false;
                } else {
                    return true;
                }
            });
        } else {
            // Add to favorites
            newFavorites = favourites.concat(product);
        }
        setFavourites(newFavorites);
    };

    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path="/category/:slug"
                    exact
                    render={(props) => (
                        <Categories
                            {...props}
                            handleFavoriteButtonClick={
                                handleFavoriteButtonClick
                            }
                            favourites={favourites}
                        />
                    )}
                />
                <Route
                    path="/favourite"
                    exact
                    render={(props) => (
                        <Favourite
                            {...props}
                            favourites={favourites}
                            handleFavoriteButtonClick={
                                handleFavoriteButtonClick
                            }
                        />
                    )}
                />
            </Switch>
        </>
    );
}

export default App;
