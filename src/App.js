import React, {useState} from 'react';
import {Route, Switch} from 'react-router';
import Categories from 'components/Categories/Categories';
import Nav from '../src/components/Nav';
import Favourite from 'components/Favourite/Favourite';
import ShoppingCard from 'components/ShoppingCard/ShoppingCard';
import initialProductData from './data/data.json';

function App() {
    const [favouriteItems, setFavouriteItems] = useState([]);
    const [basketItems, setBasketItems] = useState([]);

    const handleFavoriteButtonClick = (product) => {
        const isFavourite = favouriteItems.includes(product);
        let newFavorites;
        if (isFavourite) {
            // Remove from favorites
            newFavorites = favouriteItems.filter((item) => {
                if (item.id === product.id) {
                    return false;
                } else {
                    return true;
                }
            });
        } else {
            // Add to favorites
            newFavorites = favouriteItems.concat(product);
        }
        setFavouriteItems(newFavorites);
    };

    const handleBasketButtonClick = (product) => {
        const isBasket = basketItems.includes(product);
        let newBaskets;
        if (isBasket) {
            // Remove from favorites
            newBaskets = basketItems.filter((item) => {
                if (item.id === product.id) {
                    return false;
                } else {
                    return true;
                }
            });
        } else {
            // Add to favorites
            newBaskets = basketItems.concat(product);
        }
        setBasketItems(newBaskets);
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
                            allProducts={initialProductData}
                            handleFavoriteButtonClick={
                                handleFavoriteButtonClick
                            }
                            favouriteItems={favouriteItems}
                            handleBasketButtonClick={handleBasketButtonClick}
                            basketItems={basketItems}
                        />
                    )}
                />
                <Route
                    path="/favourite"
                    exact
                    render={(props) => (
                        <Favourite
                            {...props}
                            favouriteItems={favouriteItems}
                            basketItems={basketItems}
                            handleFavoriteButtonClick={
                                handleFavoriteButtonClick
                            }
                            handleBasketButtonClick={handleBasketButtonClick}
                        />
                    )}
                />
                <Route
                    path="/shoppingcard"
                    exact
                    render={(props) => (
                        <ShoppingCard
                            {...props}
                            basketItems={basketItems}
                            favouriteItems={favouriteItems}
                            handleBasketButtonClick={handleBasketButtonClick}
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
