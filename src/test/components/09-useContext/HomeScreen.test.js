import { mount, shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { userContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <HomeScreen />', () => {

    const User = {
        name: 'Jesus',
        email: 'rc620620@gmail.com'
    }

    const wrapper = mount(
        <userContext.Provider value={{
            User
        }}>
            <HomeScreen />
        </userContext.Provider>
    );

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
