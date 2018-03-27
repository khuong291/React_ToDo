import * as React from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import store from '../store/store';
import Todo from '../models/Todo';

export interface State {
  todoList: Todo[];
  filterStatus: string;
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
