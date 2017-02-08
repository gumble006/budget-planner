import { expect } from '../test_helper';
import { createCost, deleteCost, selectCost, editCost, 
  createCategory, deleteCategory, editCategory } from '../../src/actions';

import {  CREATE_COST, DELETE_COST, SELECT_COST, EDIT_COST, 
CREATE_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY  } from '../../src/actions/types';

describe('Actions', () => {
  describe('createCost', () => {
    it('has correct type', () => {
      const action = createCost();
      expect(action.type).to.equal(CREATE_COST);
    });

    it('has correct payload', () => {
      const action = createCost(1, 'new cost', 12.12);
      expect(action.payload).to.deep.equal(
        { 
          catIdx: 1, 
          newItem: { name: 'new cost', price: 12.12 }, 
        },
      );
    });
  });

  describe('deleteCost', () => {
    it('has correct type', () => {
      const action = deleteCost();
      expect(action.type).to.equal(DELETE_COST);
    });

    it('has correct payload', () => {
      const action = deleteCost(2, 0);
      expect(action.payload).to.deep.equal({ costIdx: 2, catIdx: 0 });
    });
  });

  describe('selectCost', () => {
    it('has correct type', () => {
      const action = selectCost();
      expect(action.type).to.equal(SELECT_COST);
    });

    it('has correct payload', () => {
      const action = selectCost(0, 1, true);
      expect(action.payload).to.deep.equal(
        {
          costIdx: 0,
          catIdx: 1,
          active: true,
        },
    );
    });
  });

  describe('editCost', () => {
    it('has correct type', () => {
      const action = editCost();
      expect(action.type).to.equal(EDIT_COST);
    });

    it('has correct payload', () => {
      const action = editCost(0, 0, { name: 'new name', price: 12 });

      expect(action.payload).to.deep.equal(
        {
          costIdx: 0,
          catIdx: 0,
          change: { name: 'new name', price: 12 },
        },
      );
    });
  });

  describe('createCategory', () => {
    it('has correct type', () => {
      const action = createCategory();
      expect(action.type).to.equal(CREATE_CATEGORY);
    });

    it('has correct payload', () => {
      const action = createCategory('new category');

      expect(action.payload).to.deep.equal({ name: 'new category' });
    });
  });

  describe('deleteCategory', () => {
    it('has correct type', () => {
      const action = deleteCategory();
      expect(action.type).to.equal(DELETE_CATEGORY);
    });

    it('has correct payload', () => {
      const action = deleteCategory(1);

      expect(action.payload).to.deep.equal({ catIdx: 1 });
    });
  });

  describe('editCategory', () => {
    it('has correct type', () => {
      const action = editCategory();
      expect(action.type).to.equal(EDIT_CATEGORY);
    });

    it('has correct payload', () => {
      const action = editCategory(1, 'edited category');

      expect(action.payload).to.deep.equal(
        {
          catIdx: 1,
          editedCategory: 'edited category',
        },
      );
    });
  });
});
