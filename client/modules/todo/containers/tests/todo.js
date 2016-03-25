const {describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {composer} from '../todo';
import {mount} from 'enzyme';
import Sometext from '../../components/todotextcomponent.jsx';
import AddBtn from '../../components/button.jsx';
/**
 * test suite for todo Container
 */
describe('Containers', function () {
  const Tracker = {nonreactive: cb => cb()};
  const onData = spy();
  const LocalState = { set: spy(), get: spy() };
  const context = () => ({Tracker, LocalState});
  composer({context}, onData);
  it('todo container', function () {
    const args = onData.args;
    expect(args[0][0]).to.be.equal(null);
    expect(args[0][1].tododata.length).to.be.equal(0);
    expect(args[0][1].allcount).to.be.equal(0);
    expect(args[0][1].finishcount).to.be.equal(0);
  });

  it('Create card according to input text', function () {
    var wrapper = mount(<Sometext />);
    it('should enter text', function () {
      wrapper.find('.textfield').props().value = 'test';
      expect(wrapper.find('.textfield').props().value).to.be.equal('test');
    });
    it('should click add button', function () {
      wrapper = mount(<AddBtn />);
      wrapper.find('button').simulate('click');
    });
    it('Check card is created', function () {
      expect(wrapper.find('.cardtodo').value).to.be.equal(1);
    });
    it('check local state value of todo', function () {
      const args = onData.args;
      expect(args[0][1].tododata.length).to.be.equal(1);
    });
    it('check count of all todos', function () {
      const args = onData.args;
      expect(args[0][1].allcount).to.be.equal(1);
    });
  });
});
