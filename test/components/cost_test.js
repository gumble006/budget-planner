import { renderComponent, expect } from '../test_helper';
import Cost from '../../src/components/cost';

describe('Cost', () => {
  let component; 
  
  const props = {
    name: 'Housing', costIdx: 0, catIdx: 0, price: 5, active: true,
  };

  beforeEach(() => {
    component = renderComponent(Cost, props);
  });

  it('renders something', () => {
    expect(component).to.exist; 
  });

  it('has correct component class', () => {
    expect(component).to.have.class('Cost'); 
  });

  it('correctly applies active class', () => {
    expect(component.find('div.active')).to.exist; 
  });

  describe('edit cost controlled form', () => {
    beforeEach(() => {
      component.find('input#editName').simulate('change', 'edited cost');
      component.find('input#editPrice').simulate('change', 5.23);
    });

    it('name is controlled [allows user to enter text]', () => {
      expect(component.find('input#editName')).to.have.value('edited cost');
    });

    it('price is controlled [allows user to enter text]', () => {
      expect(component.find('input#editPrice')).to.have.value('5.23');
    });
  });
});