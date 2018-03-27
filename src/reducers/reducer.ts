import { combineReducers } from 'redux';

const defaultTodoList = [
  { id: 1, text: 'Learn ReactJS', completed: false },
  { id: 2, text: 'Learn Redux', completed: false },
];

const filterStatusReducer = (state = 'SHOW_ALL', action: { type: string }) => {
  switch (action.type) {
    case 'FILTER_SHOW_ALL':
      return 'SHOW_ALL';
    case 'FILTER_SHOW_COMPLETED':
      return 'SHOW_COMPLETED';
    case 'FILTER_SHOW_INCOMPLETED':
      return 'SHOW_INCOMPLETED';
    default:
      return state;
  }
};

const todoListReducer = (
  state = defaultTodoList,
  action: { type: string; id: number; todoText: string }
) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
    case 'ADD_TODO':
      return [
        {
          id: state.length + 1,
          text: action.todoText,
          completed: false,
        },
      ].concat(state);
    default:
      return state;
  }
};

const reducer = combineReducers({
  todoList: todoListReducer,
  filterStatus: filterStatusReducer,
});

export default reducer;
