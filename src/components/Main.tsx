import * as React from 'react';
import { connect } from 'react-redux';
import { State } from './App';
import Todo from '../models/Todo';
import TodoCard from './TodoCard';

interface Props {
  todoList: Todo[];
  filterStatus: string;
}

class Main extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.todoList.map((todo, key) => (
          <TodoCard todoText={todo.text} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    todoList: state.todoList,
    filterStatus: state.filterStatus,
  };
}

export default connect(mapStateToProps)(Main);
