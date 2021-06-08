import React from 'react';
import '../../../App.css';
import CollapsibleTable from './ProductTable';
import NavbarAll from '../../nav_bars/NavbarAll';
import ProductModal from './ProductModal';

function Product () {
    return (
        <>
            <NavbarAll/>
            <h1 className='product'>PRODUCT</h1>
            <ProductModal />
            <CollapsibleTable/>
        </>
    )
}

export default Product;
