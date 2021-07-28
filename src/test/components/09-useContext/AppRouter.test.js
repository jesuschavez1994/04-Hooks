
import { mount, shallow } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import '@testing-library/jest-dom';
import { userContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter />', () => {

    const User = {
        id: 1,
        name: 'Jesus'
    }

    const wrapper = mount( 
        <userContext.Provider value ={{
            User
        }}>
            <AppRouter />
        </userContext.Provider>
    )

    test('debe de mostrar correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
