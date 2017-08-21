import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoHeader extends Component {
    render() {
        const {todoCount,name} = this.props;
        return (
            <div>
                哈囉{name}，你有{todoCount}巷未完成代辦事項
            </div>
        );
    }
}
// 1. 使用 propTypes 定義參數的型別
TodoHeader.propTypes = {
    title: React.PropTypes.string,
    username: React.PropTypes.string,
    todoCount: React.PropTypes.number
  };

  // 2. 使用 defaultProps 定義參數的預設值
// TodoHeader.defaultProps = {
//     title: '我的待辦清單',
//     username: 'Guest',
//     todoCount: 0
//   };
export default TodoHeader;