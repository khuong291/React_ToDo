import * as React from 'react';
import styled from 'styled-components';
// import * as Colors from '../constants/Colors';

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

const SelectedButton = Button.extend`
  color: white;
  background-color: green;
`;

export default class FilterBar extends React.Component {
  render() {
    return (
      <Container>
        <SelectedButton>ALL</SelectedButton>
        <Button>COMPLETED</Button>
        <Button>INCOMPLETED</Button>
      </Container>
    );
  }
}
