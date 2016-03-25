const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import Textcomponent from '../todotextcomponent.jsx';

describe('Todo text component', function () {

  const testClass = '.todoname';

  var wrapper = mount(<Textcomponent />);

  it('should render content', function () {
    expect(wrapper.find(testClass).length).to.equal(1);
  });
});
