
import { shallow } from 'enzyme';
import { MultipleCusttomHook } from '../../../components/03-examples/MultipleCusttomHook';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
import '@testing-library/jest-dom';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCusttomHook />', () => {

    beforeEach( () =>  {
 
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
 
    });

    test('Debe de mostrar el componente correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loadin: true,
            error: null
        });

        const wrapper = shallow(<MultipleCusttomHook />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la información ', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Jesus',
                quote: 'Pasiencia libre'
            }],
            loadin: false,
            error: null
        });

        const wrapper = shallow(<MultipleCusttomHook />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Pasiencia libre');
        expect(wrapper.find('footer').text().trim()).toBe('Jesus');
    })
    
    
})
