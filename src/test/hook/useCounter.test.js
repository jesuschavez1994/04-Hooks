import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';


describe('Pruebas en useCounter', () => {

    test('Debe de retornar los valores por defecto ', () => {
        const { result } = renderHook( () => useCounter() );
        expect(result.current.state).toBe(100);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Debe de tener el state en 150 ', () => {
        const { result } = renderHook( () => useCounter(150) );
        expect(result.current.state).toBe(150);
    });

    test('debe de incrementar el counter en 1 ', () => {
        const { result }  = renderHook( () => useCounter(150) );
        const {increment} = result.current;
        act(() => {
            increment();
        });
        const { state:counter} = result.current;
        expect(counter).toBe(151);
    });

    test('debe de decrementar el counter en 1 ', () => {
        const { result }  = renderHook( () => useCounter(150) );
        const {decrement} = result.current;
        act(() => {
            decrement();
        });
        const { state:counter} = result.current;
        expect(counter).toBe(149);
    });

    test('debe de hacer un reset colocando el valor por defecto en 150', () => {
        const { result }  = renderHook( () => useCounter(150) );
        const {increment, reset} = result.current;
        act(() => {
            increment();
            reset();
        });
        const { state:counter} = result.current;
        expect(counter).toBe(150);
    });

})
