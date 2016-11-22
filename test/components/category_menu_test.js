import { renderComponent , expect } from '../test_helper';
import CategoryMenu from '../../src/components/category_menu';
import data from '../../src/data';

describe('Category-Menu' , () => {
  let component; 
  let props={};

  beforeEach(() => {
  	props.data = data;
    props.data.splice(1);
    component = renderComponent(CategoryMenu, props);
  });

  it('renders something', () => {
    expect(component).to.exist; 
  });

  it('has correct component class', () => {
    expect(component).to.have.class('Category-Menu'); 
  });

  it('shows correct number of list items',() =>{
  	expect(component.find('li').length).to.equal(1);
  });

  describe('new category controlled form',()=>{

    beforeEach(()=>{
      component.find('input#newCategory').simulate('change', 'new category');
    });

    it('allows user to enter text',()=>{
      expect(component.find('input#newCategory')).to.have.value('new category');
    });

    it('clears input on submit',()=>{
      component.find('form.addForm').simulate('submit');
      expect(component.find('input#newCategory')).to.have.value('');
    });

  });


}); 

// expect(component.find('.Comment-Box')).to.exist;
// expect(component).to.have.class('Comment-Box');

// component.find('textarea').simulate('change', 'new comment');
// component.simulate('submit');

// const props = {comments:['comment1', 'comment2']};
// component = renderComponent(CommentList, null, props);

// 	expect(component.find('li').length).to.equal(2);

// 	expect(component).to.contain('comment1');
// 	expect(component).to.contain('comment2');
