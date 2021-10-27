import React, {useState} from 'react';
import {Route, Switch} from 'react-router';
import Categories from 'components/Categories/Categories';
import Nav from '../src/components/Nav';
import Favourite from 'components/Favourite/Favourite';
import ShoppingCard from 'components/ShoppingCard/ShoppingCard';
import ProductDetail from 'components/ProductDetail/ProductDetail';
import HomePage from 'components/HomePage/HomePage';

import initialProductData from './data/data.json';
import categories from './data/category.json';

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
            <Nav categories={categories} />
            <Switch>
                <Route
                    path="/"
                    exact
                    render={(props) => <HomePage {...props} />}
                />
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
                    path="/:category/:item"
                    exact
                    render={(props) => (
                        <ProductDetail
                            {...props}
                            allProducts={initialProductData}
                        />
                    )}
                />
                <Route
                    path="/favourite"
                    exact
                    render={(props) => (
                        <Favourite
                            {...props}
                            allProducts={initialProductData}
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
                            allProducts={initialProductData}
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
