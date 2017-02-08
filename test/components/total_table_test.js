import { renderComponent, expect } from '../test_helper';
import TotalTable from '../../src/components/total_table';

describe('Total_Table', () => {
  let component;

  const data = [{
    category: 'Accomodations',
    costs: [
      { name: 'Tent', price: 20, active: true },
      { name: 'Option 3', price: 10, active: true },
    ],
  }];

  const props = {
    totalList: data,
    totalCost: 30.00,
  };

  beforeEach(() => {
    component = renderComponent(TotalTable, props);
  });

  it('renders something', () => {
    expect(component).to.exist; 
  });

  it('has correct component class', () => {
    expect(component).to.have.class('Total-Table'); 
  });

  it('has correct number of rows', () => {
    expect(component.find('tbody').find('tr').length).to.equal(3); 
  });

  it('has correct number of costs', () => {
    expect(component.find('td.cost').length).to.equal(3); 
  });
}); 

