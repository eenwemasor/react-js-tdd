import App from "./App";
import {shallow} from 'enzyme'
import {findByTestAtttribute, testStore} from './Utils'
import React from 'react';

const setUp = (initialState = {})=>{
    const store = testStore(initialState)
    const wrapper = shallow(<App store = {store} />).childAt(0).dive(); 
    return wrapper;
}


describe('App Component', () => {
    let wrapper;

    beforeEach(()=>{
        const initialState = {
          posts: [
            {
              title: "some Title",
              body: "Some text",
            },
            {
              title: "some Title",
              body: "Some text",
            },
            {
              title: "some Title",
              body: "Some text",
            },
          ],
        };

        wrapper = setUp(initialState)
    })

    it('should render wiihout errors', () => {
        const component = findByTestAtttribute(wrapper, "appComponent");
        expect(component.length).toBe(1)
    });


    it('should hide fetchPosts Buttom', () => {
       const classInstance = wrapper.instance();
       classInstance.hideBtnMethod();
      const appState = classInstance.state.hideBtn;

      expect(appState).toBe(true);
      
    });


    it('should increment received parameter by 1', () => {
      const classInstance = wrapper.instance();
      const value = classInstance.returnValueMethod(6);

      expect(value).toBe(7)

    });
});
