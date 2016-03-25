const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import Card from '../card.jsx';

describe('Card', function () {

  const testClass = '.cardtodo';

  var wrapper = mount(<Card />);

  it('should render content', function () {
    expect(wrapper.find(testClass).length).to.equal(1);
  });
});
