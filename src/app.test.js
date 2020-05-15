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
});
