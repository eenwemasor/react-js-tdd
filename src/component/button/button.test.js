import React from 'react'
import {findByTestAtttribute,
checkProps, } from './../../Utils';
import SharedButton from './index'
import {shallow} from 'enzyme'

describe('SharedButton Component', ()=>{
    describe('Checking Proptyes',()=>{
        it('Should Not throw a warning', ()=>{
            const expectedProps = {
                buttonText: "Example Button Text",
                emitEvent:()=>{

                }
            }
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
        
    });


    describe('Renders',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
              buttonText: "Example Button Text",
              emitEvent: () => {},
            };

            wrapper = shallow(<SharedButton {...props} />)
        })

        it('should render a button',()=>{
            const button = findByTestAtttribute(wrapper, "buttonComponent");
            expect(button.length).toBe(1); 
        })

    })
})