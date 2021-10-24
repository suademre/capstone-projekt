import React from 'react';
import {FaBackspace} from 'react-icons/fa';
import styled, {css} from 'styled-components/macro';

function Filter({filterShow, onToggleFilterShow, filterPrice}) {
    return (
        <FilterSection filterShow={filterShow}>
            <CloseButton
                aria-label="Close navigation"
                onClick={onToggleFilterShow}>
                <FaBackspace />
            </CloseButton>
            <FilterDiv>
                <h2>Price</h2>
                <FilterItem>
                    <Label>
                        <input
                            type="radio"
                            name="price"
                            value="increase"
                            onChange={() => filterPrice('increase')}
                        />
                        Increase
                    </Label>
                </FilterItem>
                <FilterItem>
                    <Label>
                        <input
                            type="radio"
                            name="price"
                            value="decrease"
                            onChange={() => filterPrice('decrease')}
                        />
                        Decrease
                    </Label>
                </FilterItem>
            </FilterDiv>
        </FilterSection>
    );
}

const FilterSection = styled.section`
    position: fixed;
    bottom: 50px;
    width: 60vw;
    height: 40vh;
    background-color: #f9f9f9;
    z-index: 101;
    transition: left 0.4s ease;
    padding-right: 120px;
    ${({filterShow}) =>
        filterShow
            ? css`
                  left: 0;
              `
            : css`
                  left: -100vw;
              `}
`;

const CloseButton = styled.button`
    position: absolute;
    font-size: 15px;
    top: 10px;
    left: 20px;
    color: #000;
    background-color: #f2f3ee;
`;

const FilterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;
`;

const FilterItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;

const Label = styled.label`
    display: flex;
    margin-left: 0.8rem;
    font-size: 1rem;
    letter-spacing: 2px;
`;

export default Filter;
