import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'

import { findByTestAtttribute, checkProps } from "./../../Utils";


const setUp = (props={})=>{
    const component = shallow(<Headline  {...props}/>)
    return component;
}

describe('Headline Component',()=>{
    describe('Checking Prop Types', ()=>{
        it('should not throw a warning', ()=>{
            const expectedProps = {
                header:'Test Header',
                desc:'Test Descr',
                tempArr:[{
                    fName:'Test fName',
                    lName:'Test lName',
                    email:'fName"gmail.com',
                    age:10,
                    onlineStatus:true
                }]
            };

            const propsError = checkProps(
              Headline,
              expectedProps,
            );
            expect(propsError).toBe(undefined)
        })
    })
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