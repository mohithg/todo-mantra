export default {
	create ({Meteor, LocalState}) {
		var name = document.getElementsByName('todotext')[0].value;
		document.getElementsByName('todotext')[0].value = [];
		var names = LocalState.get('NAME') || [];
		if(name!='')names.push(name);
		LocalState.set('NAME', names);
		LocalState.set('ALLCOUNT', names.length);
	},
	closecard ({Meteor, LocalState}, item, isChecked) {
		var finisheditems = LocalState.get('FINISH') || [];
		if (isChecked)
			finisheditems.push(item);
		else
			finisheditems.splice(finisheditems.indexOf(item),1);
		LocalState.set('FINISH',finisheditems);
		//itemsintodo.splice(itemsintodo.indexOf(item),1);
		//LocalState.set('NAME', itemsintodo);
		LocalState.set('FINISHCOUNT', finisheditems.length)
	},
	delall ({Meteor, LocalState}) {
		LocalState.set('NAME', []);
		LocalState.set('ALLCOUNT', 0);
		LocalState.set('FINISHCOUNT', 0);
	}
};
