import React, {useContext} from 'react';
import {Context} from '../../context';
import ProductItem from '../ProductsItem';

function ProductsContainer() {
    const { searchedProducts } = useContext(Context);
    console.log(searchedProducts);
    return (
        <div>
            {searchedProducts.map((product) => <ProductItem key={product.id} {...product} />)}
        </div>
    );
}

export default ProductsContainer;