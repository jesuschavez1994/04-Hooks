import { useFetch } from '../../hooks/useFetch';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Pruebas en useFetch', () => {

    test('Debe de retornar la informacion por defecto ', () => {
        const { result } =  renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );
        const {data, loadin, error } = result.current;
        expect(data).toBe(null);
        expect(loadin).toBe(true);
        expect(error).toBe(null);
    });

    test('Debe de tener la información deseada, loadin: false, error: null ', async() => {
        const { result, waitForNextUpdate } =  renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );
        await waitForNextUpdate({timeout:5000});
        const {data, loadin, error } = result.current;
        expect(data.length).toBe(1);
        expect(loadin).toBe(false);
        expect(error).toBe(null);
    });

    test('Debe de manejar el error', async() => {
        const { result, waitForNextUpdate } =  renderHook( () => useFetch(`https://reqres.in/api132/users?page=2`) );
        await waitForNextUpdate({timeout:5000});
        const {data, loadin, error } = result.current;
        expect(data).toBe(null);
        expect(loadin).toBe(false);
        expect(error).toBe('No se puedo realizar la petición fetch correctamente');
    });
    
    
})
