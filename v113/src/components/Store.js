import {noteData} from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
   isEdit:false,
   editItem:{},
   isAdd: false
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
        noteData.push(action.item)
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state, isEdit:!state.isEdit}
        case "CHANGE_ADD_STATUS":
            return {...state, isAdd:!state.isAdd}
        case "GET_EDIT_DATA":
            return {...state, editItem:action.editObject}
        case "EDIT":
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            console.log("du lieu can sua store nhan dc" + JSON.stringify(action.getItem) + "thanh cong")
            return {...state, editItem:{}}
        case "DELETE":
            noteData.child(action.deleteId).remove();
            console.log("da xoa phan tu: " + action.deleteId)
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;