import { renderComponent, expect } from '../test_helper';
import Totals from '../../src/components/totals';

describe('Totals', () => {
  let component;

  const data = [
    {
      category: 'Accomodations',
      costs: [
        { name: 'Hotel', price: 30, active: false },
        { name: 'Tent', price: 20, active: true },
        { name: 'Option 3', price: 10, active: true },
      ],
    },
    {
      category: 'Food',
      costs: [
      { name: 'Nice dinner out', price: 20, active: false },
      { name: 'Food cart', price: 9.5, active: false },
      ],
    },
  ];

  const props = {
    data,
    totalCost: 30.00,
  };

  beforeEach(() => {
    component = renderComponent(Totals, props);
  });

  it('renders something', () => {
    expect(component).to.exist; 
  });

  it('has correct component class', () => {
    expect(component).to.have.class('Totals'); 
  });

  it('shows only active costs in table', () => {
    expect(component.find('tbody').find('tr').length).to.equal(3); 
  });
}); 

