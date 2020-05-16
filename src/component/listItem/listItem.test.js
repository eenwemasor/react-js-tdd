import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtttribute, checkProps} from './../../Utils'
import ListItem from './index'


describe('List Item Component', ()=>{
    
    describe('Checking Props',()=>{
        it('should not throw a warning', ()=>{
            const expectProps = {
                title:"Example Title",
                desc:"Some Text"
            }

            const propsError = checkProps(ListItem, expectProps);
            expect(propsError).toBeUndefined();
        })
        
    })

    describe('Component Renders',()=>{
        let wrapper;

        beforeEach(()=>{
            const props= {
                title:"Example Title",
                desc:"Some Text"
            }


            wrapper = shallow(<ListItem {...props}/>)
        })


        it('should renders withour error', ()=>{
            const component = findByTestAtttribute(wrapper, "listItemComponent")
            expect(component.length).toBe(1);
        })


        it('Shoulf render a title', ()=>{
            const title = findByTestAtttribute(wrapper, "componentTile")
            expect(title.length).toBe(1);
        })


        it('should render a desc', ()=>{
            const desc = findByTestAtttribute(wrapper, "componentDesc")
            expect(desc.length).toBe(1);
        })
        
    })


    describe('List Item Should NOT render', () => {
        let wrapper;

        beforeEach(() => {
          const props = {
            desc: "Some Text",
          };

          wrapper = shallow(<ListItem {...props} />);
        });

        it('should not render component', () => {
                const component = findByTestAtttribute(
                  wrapper,
                  "listItemComponent"
                );

                expect(component.length).toBe(0)
        });
    });
})