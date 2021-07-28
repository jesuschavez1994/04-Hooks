import { todoReducer } from "../../../components/08-reducer/todoReducer";
import { demoTodos } from "../../data/data";


describe('Pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto ', () => {
        const state = todoReducer(demoTodos, {});
        expect( state ).toEqual( demoTodos );
    });

    test('debe crear un nuevo Todo ', () => {   
        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };
        const action = {
            type: 'add',
            payload: newTodo
        };
        const state = todoReducer(demoTodos, action);
        expect( state.length ).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('Debe de borrar un Todo ', () => {
        //action.payload = id del todo
        const action = {
            type: 'delete',
            payload: 2
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);
    });

    test('Debe de hacer el Toggle del Todo ', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };
        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true); //Esperamos cambiar el primer elemento done a true
        expect(state[1]).toEqual(demoTodos[1]); //Para asegurarnos que el segundo elemento no cambio.
    });
    
    
    
    
})
