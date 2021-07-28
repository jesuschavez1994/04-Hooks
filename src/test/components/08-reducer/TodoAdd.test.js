import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-reducer/TodoAdd';
import '@testing-library/jest-dom';

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />);

    test('Debe de mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No se debe llamar handleAddTodo ', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar  handleAddTodo con un argumento', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });
        expect(wrapper.find('input').prop('value')).toBe(''); //Ac'a simulamos el reset()

    });
    
    
    
})
