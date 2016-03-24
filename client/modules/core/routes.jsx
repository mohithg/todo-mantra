import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';
import {Router, Route, Link, browserHistory} from 'react-router';
import MainWrapper from './MainWrapper.jsx';

import todo from '../todo/containers/todo.js';

export default function (injectDeps, {Meteor}) {

	const MainWrapperCtx = injectDeps(MainWrapper);

	const Routes = React.createClass ({
		render:function () {
			return (<Router history={browserHistory}>
		  <Route path="/" component={MainWrapperCtx}>
		  <Route path="todo" component={todo}/>
		  </Route>
		</Router>);
		}
	});
	Meteor.startup(function(){
		if (Meteor.isClient) {
			ReactDOM.render(<Routes />, document.getElementById('container'));
		}
	});

}

