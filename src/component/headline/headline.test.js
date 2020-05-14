import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'

import {findByTestAtttribute} from './../../Utils'


const setUp = (props={})=>{
    const component = shallow(<Headline  {...props}/>)
    return component;
}

describe('Headline Component',()=>{
    describe('Have Props',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header:"test Header",
                desc: "Test Desc"
            }
            wrapper = setUp(props);
        })

        it('should render without errors', () => {
            
            const component = findByTestAtttribute(wrapper, "HeadlineComponent");
            expect(component.length).toBe(1)
        });
        
        it("should render H1", () => {
          const component = findByTestAtttribute(wrapper, "Header");
          expect(component.length).toBe(1);
        });

        it("should render a desc", () => {
          const component = findByTestAtttribute(wrapper, "Desc");
          expect(component.length).toBe(1);
        });

        
    })

    describe('Have No Props',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        })
        it('should not render', ()=>{
            const component = findByTestAtttribute(
              wrapper,
              "HeadlineComponent"
            ); 
            expect(component.length).toBe(0);
        })
    })

})