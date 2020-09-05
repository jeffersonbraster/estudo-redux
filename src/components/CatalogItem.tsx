import React, { useCallback } from 'react'
import { IProduct } from '../store/modules/cart/types';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';

interface CatalogItemProps {
    product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {

        const dispatch = useDispatch();

        const handleAddProcutToCart = useCallback(() => {
            dispatch(addProductToCart(product));
        }, [dispatch, product]);


        return (
            <article>
                <strong>{product.title}</strong> {" - "}
                <span>{product.price}</span> {"  "}


                <button type="button" onClick={handleAddProcutToCart}>Comprar</button>
            </article>
        );
}

export default CatalogItem;