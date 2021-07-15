import React, { useState }  from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustommHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={ handleSubmit }>
           <h1>FormWithCustommHook</h1> 
           <hr />

           <div className="form-group">

            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre"
                autoComplete="0ff"
                value={name}
                onChange={handleInputChange}
            />

            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
                autoComplete="0ff"
                value={email}
                onChange={handleInputChange}
            />

            <input 
                type="password"
                name="password"
                className="form-control"
                autoComplete="0ff"
                value={password}
                onChange={handleInputChange}
            />

           </div>

           <button type="submit" className="btn btn-danger">Submit</button>

        </form>
    )
}
