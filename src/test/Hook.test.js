import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Hook from '../Hook';


describe('Pruebas en <Hook />', () => {

    let wrapper = shallow(<Hook />);

    test('debe de mostrar correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
})
