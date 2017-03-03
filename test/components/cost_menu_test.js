import { renderComponent, expect } from '../test_helper';
import CostMenu from '../../src/components/cost_menu';

describe('CostMenu', () => {
  let component; 
  
  const data = [
    { category: 'Transportation',
      id: '2MX',
      costs: [
        { name: 'Cab', price: 20.00, active: false, id: '5A' },
        { name: 'PediCab', price: 10.00, active: true, id: 'V2' },
      ],
    }];

  const props = {
    selected: data[0],
    catIdx: 0,
    totalCost: 30.00,
  };

  beforeEach(() => {
    component = renderComponent(CostMenu, props);
  });

  it('renders something', () => {
    expect(component).to.exist; 
  });

  it('has correct component class', () => {
    expect(component).to.have.class('CostMenu'); 
  });

  it('shows correct number of list items', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('correctly applies active costs', () => {
    expect(component.find('.active').length).to.equal(1);
  });

  describe('new cost controlled form', () => {
    beforeEach(() => {
      component.find('input#addCostTitle').simulate('change', 'new cost');
      component.find('input#addPrice').simulate('change', '5.23');
    });

    it('allows user to enter title text', () => {
      expect(component.find('input#addCostTitle')).to.have.value('new cost');
    });

    it('allows user to enter price text', () => {
      expect(component.find('input#addPrice')).to.have.value('5.23');
    });
  });
}); 