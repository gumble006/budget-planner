import { renderComponent, expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Details', () => {
  let component; 

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('renders something', () => {
    expect(component).to.exist; 
  });
}); 