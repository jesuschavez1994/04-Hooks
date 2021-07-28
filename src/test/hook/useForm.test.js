import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const inicialState = {
        name: 'Jesus',
        email: 'rc620620@gmail.com'
    }

    test('debe de regresar el formulario por defecto ', () => {
        const { result }=renderHook( () => useForm(inicialState));
        const [formValue, handleInputChange, reset] = result.current;
        expect(formValue).toEqual(inicialState);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('debe de cambiar el valor del formulario ', () => {
        const { result }=renderHook( () => useForm(inicialState));
        const [ , handleInputChange] = result.current;
        act(() => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });
        const [formValue] = result.current;
        expect(formValue).toEqual({...formValue, name:'Melissa'});
    });

    test('S debe realizar el RESET ', () => {
        const { result }=renderHook( () => useForm(inicialState));
        const [ , handleInputChange, reset] = result.current;
        act(() => {

            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();
        });
        const [formValue] = result.current;
        expect(formValue).toEqual(inicialState);
    });
    
})
