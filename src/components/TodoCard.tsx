import * as React from 'react';
import styled from 'styled-components';
import * as Colors from '../constants/Colors';
import Todo from '../models/Todo';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface Props {
  todo: Todo;
  dispatch: Dispatch<number>;
}

const Card = styled.div`
  box-shadow: 0 2px 8px 0 ${Colors.shadowColor};
  border: 1px solid ${Colors.borderColor};
  border-radius: px;
  margin: 0 100px 10px 100px;
`;

const Label = styled.h2`
  text-align: center;
  justify-content: center;
`;

class TodoCard extends React.Component<Props> {
  completeTodo() {
    this.props.dispatch({
      type: 'TOGGLE_COMPLETE',
      id: this.props.todo.id,
    });
  }

  render() {
    const { text, completed } = this.props.todo;
    const lineThrough = completed ? 'line-through' : 'none';
    return (
      <Card>
        <div onClick={() => this.completeTodo()}>
          &nbsp;
          <Label style={{ textDecoration: lineThrough }}>
            <b>{text}</b>
          </Label>
          &nbsp;
        </div>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<number>) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(TodoCard);
