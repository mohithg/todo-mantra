const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import Button from '../button.jsx';
/**
 test suite for submit button component
*/

describe('Submit Button component', function () {

  const testClass = '.submitbtn';

  var wrapper = mount(<Button />);

  it('should render content', function () {
    expect(wrapper.find(testClass).length).to.equal(1);
  });
});
