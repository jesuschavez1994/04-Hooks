import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { userContext } from '../../../components/09-useContext/UserContext';
import '@testing-library/jest-dom';


describe('Pruebas en <LoginScreen />', () => {

    const  setUser =  jest.fn()

    const wrapper = mount(
        <userContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </userContext.Provider>
    );

    test('debe de mostrar correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id:123,
            name: 'jesus chavez'
        });
    });
    
})
