import React from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {
    todo: PropTypes.array,
    ontodoClick: PropTypes.func,
};
//neu o todo:PropTypes.array.required thi ta khong can khai bao bien mac dinh

//khoi tao gia tri mac dinh cho Todolist
Todolist.defaultProps = {
    todo: [],
    ontodoClick: null,
}

function Todolist(props) {
    const { todo, ontodoClick } = props
    /**
     * todo.map(): ham nay the hien => lay gia tri du lieu cua props truyen vao (da khoi tao [todo,ontodoClick]=props) va in ra gia tri tren props truyen vao
     * todo =>() : ham nay the hien => the hien return ve cai ma minh mong muon thuc hien
     */
    function handleClick(todo) {
        if (ontodoClick) {
            ontodoClick(todo)
        }
    }
    return (
        <div>
            <ul className="todo-list">
                {todo.map(todos => (
                    <li key={todos.id}

                        onClick={() => { handleClick(todos) }}

                    >{todos.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;