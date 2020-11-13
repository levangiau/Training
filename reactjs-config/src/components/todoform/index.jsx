import React, { useState } from 'react';
import PropTypes from 'prop-types';

Todoform.propTypes = {
    onSubmit: PropTypes.func,
};
Todoform.defaultProps = {
    onSubmit: null
}

function Todoform(props) {
    const { onSubmit } = props
    const [value, setvalue] = useState('')

    function handleValueChange(e) {
        //xem du lieu nhap vao truong input la gi
        //console.log(e.target.value)
        //cap nhap du lieu lai value
        setvalue(e.target.value)
    }
    function handleOnSubmit(e) {
        //prevent loading browser
        e.preventDefault()
        //kiem tra neu nhu onSubmit khong co thi khong lam
        if (!onSubmit) return
        //tao ra noi luu tru cai du lieu duoc nhap tu form do
        const formValue = {
            title: value,
        };
        //gui du lieu tu form qua lop component khac
        onSubmit(formValue)
        // reset lai input nhap lai tu dau
        setvalue('')

    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input type='text' value={value} onChange={handleValueChange} />
        </form>
    );
}

export default Todoform;