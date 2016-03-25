import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import todo from '../components/todo.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  // Local state for todo item
  var tododata = LocalState.get('NAME') || [];
  // Local state for count of items
  var allcount = LocalState.get('ALLCOUNT') || 0;
  // Local state for finished items
  var finishcount = LocalState.get('FINISHCOUNT') || 0;
  // triggered when data is received
  onData(null, {tododata, allcount, finishcount});
};

export const depsMapper = function (context, actions) {
  // all the actions
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
