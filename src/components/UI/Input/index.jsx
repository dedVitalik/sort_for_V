import React from 'react';
import s from './style.module.sass';

function Input(props) {
    return (
        <input {...props} className={s.input}></input>
    );
}

export default Input;