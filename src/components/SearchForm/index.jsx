import React, {useContext} from 'react';
import s from './style.module.sass';
import Button from '../UI/Button';
import Input from '../UI/Input';
import {Context} from '../../context';

function SearchForm() {
    const { searchProduct, setSearchValue } = useContext(Context);
    
    const handleFormSummit = (evt) => {
        evt.preventDefault();
        const {searchString} = evt.target;
        setSearchValue(searchString.value);
        searchProduct();
    }
    
    
    return (
        <form className={s.form} onSubmit={handleFormSummit}>
            <Input name={'searchString'} type="text" placeholder="Название"/>
            <Button style={{backgroundColor: 'blue'}}>Search</Button>
        </form>
    );
}

export default SearchForm;