import React from 'react';
import {shallow} from 'enzyme';
import Header from './index'
import {findByTestAttr} from '../../../utils/index';

const setUp=(props={})=>{
  const component=shallow(<Header {...props}/>)
  return component;
}

describe('header Component',()=>{

  let component;
  beforeEach(()=>{
    component=setUp();
  })


  
  it("it should render without fail",()=>{
      // const component=shallow(<Header/>);
      // console.log(component.debug());
      const wrapper=findByTestAttr(component,'headerComponent')
      expect(wrapper.length).toBe(1);
       })
  it("it should render a logo",()=>{
      const wrapper=component.find(`[data-test='logoIMG']`);
      expect(wrapper.length).toBe(1);
       })
})