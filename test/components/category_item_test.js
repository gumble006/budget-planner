import { renderComponent, expect } from '../test_helper';
import CategoryItem from '../../src/components/category_item';
import data from '../../src/data';

describe('Category-Item', () => {
  let component; 
  
  const props = {
    item: data[0],
    catIdx: 0,
    selected: data[0],
  };

  beforeEach(() => {
    component = renderComponent(CategoryItem, props);
  });

  it('renders something', () => {
    expect(component).to.exist; 
  });

  it('has correct component class', () => {
    expect(component).to.have.class('Category-Item'); 
  });

  it('correctly applies selection class', () => {
    expect(component.find('div.selected')).to.exist; 
  });

  describe('edit category controlled form', () => {
    beforeEach(() => {
      component.find('input#editCategory').simulate('change', 'edited category');
    });

    it('edit category is controlled [allows user to enter text]', () => {
      expect(component.find('input#editCategory')).to.have.value('edited category');
    });
  });
});