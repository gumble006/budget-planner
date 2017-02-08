import { renderComponent, expect } from '../test_helper';
import CostsContainer from '../../src/containers/costs_container';

describe('CostsContainer', () => {
  let component;

  const state = {};
  
  state.data = [
    {
      category: 'Transportation',
      costs: [
        { name: 'Cab fare', price: 20.00, active: false },
        { name: 'Bus ticket', price: 20.00, active: true },
        { name: 'Rickshaw ride', price: 20.00, active: false },
      ],
    },

    {
      category: 'Accomodations',
      costs: [
        { name: 'Hotel', price: 70.99, active: true },
        { name: 'Tent', price: 0, active: false },
      ],
    },
  ];
  state.selected = state.data[0]; 

  beforeEach(() => {
    component = renderComponent(CostsContainer, state, state);
  });

  it('renders something', () => {
    expect(component).to.exist; 
  });

  it('has correct component class', () => {
    expect(component).to.have.class('Costs-Container'); 
  });

  it('correctly calculates total cost', () => {
    expect(component.find('span#totalCost')).to.contain('90.99');
  });
}); 