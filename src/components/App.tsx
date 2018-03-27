import * as React from 'react';
import Todo from '../models/Todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './Main';

export interface State {
  todoList: Todo[];
  filterStatus: string;
  isAdding: boolean;
}

const defaultState: State = {
  todoList: [
    { id: 0, text: 'Learn ReactJS', completed: false },
    { id: 1, text: 'Learn Redux', completed: false },
  ],
  filterStatus: 'SHOW_ALL',
  isAdding: false,
};

const reducer = (state: State = defaultState, action: { type: string }) => {
  switch (action.type) {
    case 'FILTER_SHOW_ALL':
      return { ...state, filterStatus: 'SHOW_ALL' };
    case 'FILTER_SHOW_COMPLETED':
      return { ...state, filterStatus: 'SHOW_COMPLETED' };
    case 'FILTER_SHOW_INCOMPLETED':
      return { ...state, filterStatus: 'SHOW_INCOMPLETED' };
    default:
      break;
  }
  return state;
};

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
