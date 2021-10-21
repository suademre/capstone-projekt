import React, {useState} from 'react';
import {Route, Switch} from 'react-router';
import Categories from 'components/Categories/Categories';
import Nav from '../src/components/Nav';
import Favourite from 'components/Favourite/Favourite';
import ShoppingCard from 'components/ShoppingCard/ShoppingCard';

function App() {
    const [favourites, setFavourites] = useState([]);
    const [baskets, setBaskets] = useState([]);

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

    const handleBaskdetButtonClick = (product) => {
        const isBasket = baskets.includes(product);
        let newBaskets;
        if (isBasket) {
            // Remove from favorites
            newBaskets = baskets.filter((item) => {
                if (item.id === product.id) {
                    return false;
                } else {
                    return true;
                }
            });
        } else {
            // Add to favorites
            newBaskets = baskets.concat(product);
        }
        setBaskets(newBaskets);
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
                            handleBaskdetButtonClick={handleBaskdetButtonClick}
                            baskets={baskets}
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
                            baskets={baskets}
                            handleFavoriteButtonClick={
                                handleFavoriteButtonClick
                            }
                            handleBaskdetButtonClick={handleBaskdetButtonClick}
                        />
                    )}
                />
                <Route
                    path="/shoppingcard"
                    exact
                    render={(props) => (
                        <ShoppingCard
                            {...props}
                            baskets={baskets}
                            favourites={favourites}
                            handleBaskdetButtonClick={handleBaskdetButtonClick}
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
