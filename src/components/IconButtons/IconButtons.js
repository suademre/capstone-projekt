import React from 'react';
import {FaHeart} from 'react-icons/fa';
import styled from 'styled-components/macro';

function IconButtons({product, handleFavoriteButtonClick, active}) {
    return (
        <>
            <FavoriteButton
                active={active}
                onClick={() => {
                    handleFavoriteButtonClick(product);
                }}>
                <FaHeart
                    style={{fontSize: '20px', color: active ? 'red' : null}}
                />
            </FavoriteButton>
        </>
    );
}

const FavoriteButton = styled.button`
    border: none;
    margin-left: 10%;
    margin-top: 10px;
`;

export default IconButtons;
