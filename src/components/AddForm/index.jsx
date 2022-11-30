import s from './style.module.sass';
import Input from '../UI/Input';
import Button from '../UI/Button';
import {Context} from '../../context';
import React, {useContext} from 'react';

function AddForm() {
    
    const {addProduct} = useContext(Context);
    
    const handleFormSummit = (evt) => {
        evt.preventDefault();
        const {name, price, discount} = evt.target;
        addProduct(name.value, price.value, discount.value);
        name.value = '';
        price.value = '';
        discount.value = '';
    };
    
    
    return (
        <div>
            <form onSubmit={handleFormSummit} className={s.container}>
                <Input name={'name'} type="text" placeholder="Название"/>
                <Input name={'price'} type="text" placeholder="Цена"/>
                <Input name={'discount'} type="text" placeholder="Процент скидки"/>
                <Button>Add</Button>
            </form>
        </div>
    );
}

export default AddForm;