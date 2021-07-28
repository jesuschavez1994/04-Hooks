import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-reducer/TodoList';
import { demoTodos } from '../../data/data';
import '@testing-library/jest-dom';


describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoList 
                                todos = {demoTodos} 
                                handleDelete={handleDelete} 
                                handleToggle={handleToggle}
                            />
                    );

    test('Debe de mostrar correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener 2  <TodoList />', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    })
    
    
})
