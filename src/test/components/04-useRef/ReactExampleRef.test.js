import { shallow } from "enzyme";
import { ReactExampleRef } from "../../../components/04-useRef/ReactExampleRef";
import '@testing-library/jest-dom';

describe('Pruebas en <ReactExampleRef />', () => {
    
    const wrapper = shallow(<ReactExampleRef />);

    test('debe de mostrar correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCusttomHook').exists()).toBe(false);
    });

    test('debe de mostrat <ReactExampleRef /> ', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCusttomHook').exists()).toBe(true);
    });
    

})
