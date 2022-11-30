import React from 'react';
import s from './style.module.sass';

function ProductItem({name, price, discount}) {
    return (
        <div className={s.item}>
            <h3>{name}</h3>
            <div>
                {
                    discount > 0
                        ? <><p className={s.through}>{price}</p>
                            <p className={s.discount}>{price * (1 - discount / 100)}</p>
                        </>
                        : <p>{price}</p>
                }
            </div>
        </div>
    );
}

export default ProductItem;