import React from 'react';
import styled from 'styled-components';
import Products from '../../data/data.json';

function Categories(props) {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     let items = Products.filter(
    //         (product) => product.category.tittle === props.match.params.slug
    //     );
    //     setProducts(items);
    // }, [props.match.params.slug]);

    return (
        <div>
            {/* {Products.map((product) => {
                <li>{product.title}</li>;
            })} */}
            <ExampleH1>coming soon</ExampleH1>
        </div>
    );
}

const ExampleH1 = styled.h1`
    margin-left: 250px;
`;

export default Categories;
