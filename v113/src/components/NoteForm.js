import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle : '',
            noteContent : '',
            id:''
        }
    }
    componentWillMount(){
        if(this.props.editItem){
            this.setState({
            noteTitle : this.props.editItem.noteTitle,
            noteContent : this.props.editItem.noteContent,
            id:this.props.editItem.id
            })
        }
    }

    isChange = (event) => {
        const name = event.target.name; 
        const value = event.target.value; 
        //name = [noteTitle, noteContent]
        //value = [td1, nd1]
        // this.state = {noteTitle:td1, noteContent:nd1}
        this.setState({
            [name] : value
        })
    }

    addData = (title, content) => {
        if(this.state.id){
            var editObject = {}
                editObject.id = this.state.id;
                editObject.noteTitle = this.state.noteTitle;
                editObject.noteContent = this.state.noteContent;
            this.props.editDataStore(editObject);
            this.props.changeEditStatus(); //tat form khi sua xong 
        }
        else{
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            this.props.addDataStore(item);
        }
    }
    printTitle = () => {
        if(this.props.addStatus){
            //them moi
            return <h4>Them note</h4>
        }else{
            return <h4>Sua note</h4>
        }
    }
    render() {
        return (
            <div className="col-4">
                {this.printTitle()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tieu de Note</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tieu de note" />
                        <small id="helpId" className="form-text text-muted">Dien tieu de vao day</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Noi dung Note</label>
                        <textarea defaultValue={this.props.editItem.noteContent} onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpId" placeholder="Noi dung note" />
                        <small id="helpId" className="form-text text-muted">Dien noi dung vao day</small>
                    </div>
                    <button onClick = {() => this.addData(this.state.noteTitle, this.state.noteContent)} type="reset" className="btn btn-primary btn-block">Luu</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (item) => {
            dispatch({type:"ADD_DATA", item})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT", getItem})
        },
        changeEditStatus: () => {
            dispatch({
              type:"CHANGE_EDIT_STATUS"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);