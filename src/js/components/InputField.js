import React, { Component } from 'react';

class InputField extends Component {
    constructor(props,context) {
        super(props,context);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(e){
        const {
            onKeyDown,
            onSubmitEditing
        }= this.props;
        const {value} = e.target;
        switch(e.keyCode){
         case 13:
            if(value.trim())   {
                console.log('aa',value);
                onSubmitEditing && onSubmitEditing(value);
            }

            e.target.value = "";
            break;
        }

        onKeyDown && onKeyDown(e);
    } 
    render() {
        return (
            <div>
                <input

                    type="text"
                    onKeyDown = {this.handleKeyDown}
                />
            </div>
        );
    }
}

export default InputField;
