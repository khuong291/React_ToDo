import * as React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface Props {
  dispatch: Dispatch<string>;
}

interface States {
  todoText: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
`;

const Form = styled.input`
  color: black;
  width: 50%;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
`;

const AddButton = styled.button`
  text-align: center;
  justify-content: center;
  margin: 0 10px 0 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
`;

class AddTodoForm extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todoText: '',
    };
  }

  onAdd() {
    if (this.state.todoText) {
      this.props.dispatch({
        type: 'ADD_TODO',
        todoText: this.state.todoText,
      });

      this.setState({
        todoText: '',
      });
    }
  }

  render() {
    return (
      <Container>
        <Form
          placeholder="Enter your todo..."
          value={this.state.todoText}
          onChange={event =>
            this.setState({
              todoText: event.target.value,
            })
          }
        />
        <AddButton onClick={() => this.onAdd()}>
          <img
            src="http://pluspng.com/img-png/free-png-plus-sign-download-600.png"
            height="35"
          />
        </AddButton>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<string>) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddTodoForm);
