const {describe, it} = global;

import {expect} from 'chai';
import sinon from 'sinon';
import {spy} from 'sinon';
import actions from '../todo';

/**
 * Test suite for all actions
 */

describe('Actions', () => {
  describe('Closecard', () => {
    it('should get FINISH COUNT and its value 1', () => {
      const LocalState = {set: spy(), get: sinon.stub()};
      actions.closecard({LocalState},'some',true);
      var args = LocalState.set.args[1][0];
      expect(args).to.be.equal('FINISHCOUNT');
      args = LocalState.set.args[1][1];
      expect(args).to.be.equal(1);
    });
  });
  describe('Closecard', () => {
    it('should get FINISH', () => {
      const LocalState = {set: spy(), get: sinon.stub()};
      actions.closecard({LocalState},'some',true);
      const args = LocalState.set.args[0][0];
      expect(args).to.be.equal('FINISH');
    });
  });
  describe('Delete all', () => {
    it('should get Name as empty', () => {
      const LocalState = {set: spy(), get: sinon.stub()};
      actions.delall({LocalState});
      var args = LocalState.set.args[0][0];
      expect(args).to.be.equal('NAME');
      args = LocalState.set.args[0][1];
      expect(args.length).to.be.equal(0);
    });
    it('should get ALL COUNT as empty', () => {
      const LocalState = {set: spy(), get: sinon.stub()};
      actions.delall({LocalState});
      var args = LocalState.set.args[1][0];
      expect(args).to.be.equal('ALLCOUNT');
      args = LocalState.set.args[1][1];
      expect(args).to.be.equal(0);
    });
    it('should get FINISH COUNT as empty', () => {
      const LocalState = {set: spy(), get: sinon.stub()};
      actions.delall({LocalState});
      var args = LocalState.set.args[2][0];
      expect(args).to.be.equal('FINISHCOUNT');
      args = LocalState.set.args[2][1];
      expect(args).to.be.equal(0);
    });
  });
});
