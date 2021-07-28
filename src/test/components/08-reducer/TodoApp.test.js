import { mount, shallow } from 'enzyme';
import { act } from '@testing-library/react';
import { TodoApp } from '../../../components/08-reducer/TodoApp';
import '@testing-library/jest-dom';
import { demoTodos } from '../../data/data';

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn( () => {} );

    test('Debe de mostrar correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe agregar un Todo ', () => {
        const wrapper = mount(<TodoApp />);

        act(() =>{
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    })
    
    
})
