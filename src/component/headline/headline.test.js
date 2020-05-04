import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index'

import {findByTestAttr,checkProps} from '../../../utils/index'

const setUp=(props={})=>{
const Component=shallow(<Headline {...props}/>)
return Component;
}

describe("Headline Component",()=>{

  describe('Checking PropTypes',()=>{
    it('Should not throw a warning',()=>{
      const expectedProps={
        header:'test Header',
        desc:"test desc",
        tempArr:[{
          fName:'test fName',
          lName:'test lName',
          email:"test@email.com",
          age:33,
          onlineStatus:false
        }]
      }
     const propsErr=checkProps(Headline,expectedProps);
      expect(propsErr).toBeUndefined();
    })
  })

  describe('Have props',()=>{
    let wrapper;
    beforeEach(()=>{
      const props={ 
      header:'Test Header',
      desc:'Test Decs'
    };
    wrapper=setUp(props); 
    })
    it('SHould render without error',()=>{
      const Component=findByTestAttr(wrapper,'HeadlineComponent');
      expect(Component.length).toBe(1);
    })
    it("Should render a H!",()=>{
      const h1 =findByTestAttr(wrapper,'header');
      expect(h1.length).toBe(1);
    })
    it("Should render a desc",()=>{
      const h1 =findByTestAttr(wrapper,'desc');
      expect(h1.length).toBe(1);
    })
  })
  describe('Have No props',()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper=setUp();
    });
    it('should not render',()=>{
      const component=findByTestAttr(wrapper,'HeadlineComponent');
      expect(component.length).toBe(0);
    })
    
  })
})