import { renderComponent , expect } from '../test_helper';
import Costs_Container from '../../src/containers/costs_container';

describe('Costs_Container' , () => {
  let component;
  const state={};
  state.mapData={};

  state.data = [
    {
      "category": "Transportation",
      "costs": [
        {"name": "Cab fare", "price": 20.00, "active":false},
        {"name": "Cab fare", "price": 20.00, "active":true},
        {"name": "Cab fare", "price": 20.00, "active":false},
      ],
    },

    {
      "category": "Accomodations",
      "costs": [
        {"name": "Hotel", "price": 70.99, "active":true},
        {"name": "Tent", "price": 0, "active":false},
      ]
    },
  ]; 

  beforeEach(() => {
    component = renderComponent(Costs_Container,null,state);
  });

  it('renders something', () => {
    expect(component).to.exist; 
  });

  it('has correct component class', () => {
    expect(component).to.have.class('Costs-Container'); 
  });

  it('correctly calculates total cost',()=>{
    expect(component.find('span#totalCost')).to.contain('90.99');
  });

  // describe('new cost controlled form',()=>{

  //   beforeEach(()=>{
  //     component.find('input#addCostTitle').simulate('change', 'new cost');
  //     component.find('input#addPrice').simulate('change', '5.23');
  //   });

  //   it('allows user to enter title text',()=>{
  //     expect(component.find('input#addCostTitle')).to.have.value('new cost');
  //   });

  //   it('allows user to enter price text',()=>{
  //     expect(component.find('input#addPrice')).to.have.value('5.23');
  //   });

  // });


}); 