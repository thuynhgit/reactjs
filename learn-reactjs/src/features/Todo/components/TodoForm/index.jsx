import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../form-controls/InputField';
import { useForm } from 'react-hook-form';
TodoForm.propTypes = {
    onSubmit:PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title:'',
        },
    })
    return (
        <form>
            <InputField name="title" label="Todo" form={form}/>
        </form>
    );
}

export default TodoForm;