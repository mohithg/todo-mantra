/**
 * actions for todo application
 */
export default {
/**
 * create will push the todo names to Localstate
 * Also adds up all count localstate
 * @param {object} LocalState - LocalState object to store values
 */
  create({LocalState}) {
    var name = document.getElementsByName('todotext')[0].value;
    document.getElementsByName('todotext')[0].value = [];
    var names = LocalState.get('NAME') || [];
    if (name !== '') {
      names.push(name);
    }
    LocalState.set('NAME', names);
    LocalState.set('ALLCOUNT', names.length);
  },
/**
 * closecard will set task to finish if checkbox is checked
 * @param {object} LocalState - LocalState object to store values
 * @param {string} item - value of todo item
 * @param {bool} isChecked - value of checkbox
 */
  closecard({LocalState}, item, isChecked) {
    var finisheditems = LocalState.get('FINISH') || [];
    if (isChecked) {
      finisheditems.push(item);
    }
    else {
      finisheditems.splice(finisheditems.indexOf(item),1);
    }
    LocalState.set('FINISH',finisheditems);
    // itemsintodo.splice(itemsintodo.indexOf(item),1);
    // LocalState.set('NAME', itemsintodo);
    LocalState.set('FINISHCOUNT', finisheditems.length);
  },
/**
 * will reset all the localstates
 * @param {object} LocalState - LocalState object to store values
 */
  delall({LocalState}) {
    LocalState.set('NAME', []);
    LocalState.set('ALLCOUNT', 0);
    LocalState.set('FINISHCOUNT', 0);
  }
};
