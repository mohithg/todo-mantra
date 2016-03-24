import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import todo from '../components/todo.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  var tododata = LocalState.get('NAME') || [];
  var allcount = LocalState.get('ALLCOUNT') || 0;
  var finishcount = LocalState.get('FINISHCOUNT') || 0;
  onData(null, {tododata, allcount, finishcount});
};

export const depsMapper = function (context, actions) {
  return {
    create: actions.todo.create,
    closecard: actions.todo.closecard,
    delall: actions.todo.delall,
    context: () => context
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(todo);
