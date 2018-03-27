import * as React from 'react';
import { connect } from 'react-redux';
import { State } from './App';
import Todo from '../models/Todo';
import TodoCard from './TodoCard';
import FilterBar from './FilterBar';

interface Props {
  todoList: Todo[];
  filterStatus: string;
}

class Main extends React.Component<Props> {
  render() {
    return (
      <div>
        <FilterBar />
        {this.props.todoList.map((todo, index) => (
          <TodoCard key={index} todo={todo} />
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
