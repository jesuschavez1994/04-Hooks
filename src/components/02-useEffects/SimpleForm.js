import React, { useEffect, useState }  from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('hey');
    }, []);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
           <h1>Simple Form</h1> 
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

           </div>

           { name ==="123" && <Message />}
        </>
    )
}
