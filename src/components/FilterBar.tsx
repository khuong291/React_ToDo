import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from './App';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
`;

const Button = styled.button`
  text-align: center;
  justify-content: center;
  margin: 0 10px 0 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid green;
  outline: none;
`;

interface Props {
  filterStatus: string;
  dispatch: Dispatch<string>;
}

class FilterBar extends React.Component<Props> {
  checkButtonIsSelected(statusName: string) {
    if (statusName === this.props.filterStatus) {
      return { color: 'white', backgroundColor: 'green' };
    }
    return { color: 'black', backgroundColor: 'white' };
  }

  setFilterStatus(actionType: string) {
    this.props.dispatch({ type: actionType });
  }

  render() {
    return (
      <Container>
        <Button
          style={this.checkButtonIsSelected('SHOW_ALL')}
          onClick={() => this.setFilterStatus('FILTER_SHOW_ALL')}
        >
          ALL
        </Button>
        <Button
          style={this.checkButtonIsSelected('SHOW_COMPLETED')}
          onClick={() => this.setFilterStatus('FILTER_SHOW_COMPLETED')}
        >
          COMPLETED
        </Button>
        <Button
          style={this.checkButtonIsSelected('SHOW_INCOMPLETED')}
          onClick={() => this.setFilterStatus('FILTER_SHOW_INCOMPLETED')}
        >
          INCOMPLETED
        </Button>
      </Container>
    );
  }
}

function mapStateToProps(state: State) {
  return { filterStatus: state.filterStatus };
}

function mapDispatchToProps(dispatch: Dispatch<string>) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
