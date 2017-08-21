import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
class TodoItem extends Component {
    constructor(props,context) {
        super(props,context)
        this.state = {editable:false};
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }
    toggleEditMode(){
        this.setState({editable:!this.state.editable});
    }
    
    render() {
       
        return (
            this.state.editable ? this.renderEditMode() : this.renderViewMode()
        );
    }

    /**
     * 瀏覽模式
     */
    renderViewMode(){
        const {title,completed,onDelete,onToggle} = this.props;
        return(
            <div>
                <input
                    className="form"
                    type="checkbox"
                    checked={completed}
                    onChange={()=>onToggle && onToggle(!completed)}
                />
                <span
                    onDoubleClick={this.toggleEditMode}
                >{title}</span>
                <button onClick={()=>onDelete && onDelete()}>x</button>
            </div>
        )
    }
    /**
     * 編輯模式 
     */
    renderEditMode(){
        const {title,onUpdate} = this.props;
        return(
            <InputField
                autoFocus
                placeholder="編輯待辦事項"
                value = {this.props.title}
                onBlur = {this.toggleEditMode}
                onKeyDown = {
                    (e)=>{
                        if(e.keyCode === 27){
                            e.preventDefault();
                            this.toggleEditMode();
                        }
                    }
                }
                onSubmitEditing={(content)=>{
                    onUpdate && onUpdate(content);
                    this.toggleEditMode();
                }}
            />
        )
    }
    

}
TodoItem.propTypes = {
    onClick: React.PropTypes.func,
    onToggle:React.PropTypes.func
  };
export default TodoItem;