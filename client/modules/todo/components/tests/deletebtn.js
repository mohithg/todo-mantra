const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import Delall from '../delall.jsx';

describe('Delete All button', function () {

  const testClass = '.delbtn';

  var wrapper = mount(<Delall />);

  it('should render content', function () {
    expect(wrapper.find(testClass).length).to.equal(1);
  });
});
