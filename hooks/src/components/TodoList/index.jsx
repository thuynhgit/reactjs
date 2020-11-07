import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}
function TodoList(props) {
    const { todos, onTodoClick } = props;
    function handleClick(a) {
        if (onTodoClick) {
            onTodoClick(a);
        }
    }
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;